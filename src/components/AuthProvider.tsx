import React, {
  createContext,
  ReactNode,
  useReducer,
  useEffect,
  useState,
  useRef,
} from 'react';
// Helper imports
import EventosudgApiClient, {
  UserCredentials,
  ClientResponse,
} from '../helpers/apiClient';
import SplashView from '../views/SplashView';

export const AuthContext = createContext({});
const apiClient = new EventosudgApiClient('http://afterbyte.wtf:3000/');

type AuthProviderProps = {
  children?: ReactNode;
};

type AuthProviderState = {
  isLoading: boolean;
  isSignout: boolean;
  tokenAvailable: boolean;
};

type DispatchValue = {
  type: 'signIn' | 'signOut' | 'restoreToken';
  token?: boolean;
};

export type AuthProviderPayload = {
  apiClient: EventosudgApiClient;
  signin(user: UserCredentials): Promise<ClientResponse>;
  signout(): Promise<void>;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  function reducer(prevState: AuthProviderState | any, action: DispatchValue) {
    switch (action.type) {
      case 'restoreToken':
        return {
          ...prevState,
          tokenAvailable: action.token,
          isLoading: false,
        };
      case 'signIn':
        return {
          ...prevState,
          isSignout: false,
          tokenAvailable: action.token,
        };
      case 'signOut':
        return {
          ...prevState,
          isSignout: true,
          tokenAvailable: false,
        };
    }
  }

  const [splashTimedOut, setSplashTimedOut] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    tokenAvailable: false,
  }) as [AuthProviderState, React.Dispatch<DispatchValue>];

  const update = useRef(true);
  useEffect(() => {
    const refresh = async () => {
      try {
        await apiClient.refreshToken();
        dispatch({ type: 'restoreToken' });
      } catch (error) {
        console.log(error);
      }
    };

    if (update.current) {
      setTimeout(() => setSplashTimedOut(true), 3 * 1000);
      update.current = false;
    }

    if (state.isLoading) refresh();
  });

  const providerPayload: AuthProviderPayload = {
    apiClient: apiClient,
    signin: async (user: UserCredentials) => {
      const response = await apiClient.signIn(user);
      dispatch({ type: 'signIn', token: apiClient.tokenLoaded });
      return response;
    },
    signout: async () => {
      await apiClient.signOut();
      dispatch({ type: 'signOut' });
    },
  };

  if (state.isLoading || !splashTimedOut) return <SplashView loading={true} />;
  return (
    <AuthContext.Provider value={providerPayload}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

import AsyncStorage from '@react-native-async-storage/async-storage';

type Headers = {
  Accept?: string;
  'Content-type'?: string;
  Authorization?: string;
};

const appendToken = (headers: Headers, token: string) =>
  ({
    ...headers,
    Authorization: `Bearer ${token}`,
  } as Headers);

const detachToken = (response: Response) => {
  const bearer = response.headers.get('Authorization');
  if (bearer) {
    return bearer.split(' ')[1];
  } else {
    return '';
  }
};

const detachBody = async (response: Response) => {
  let body = {};
  if (response.status !== 204) {
    try {
      body = response.json();
    } catch (error) {
      console.warn('The body is propably empty or maybe it is not JSON');
    }
  }

  return body;
};

// Payload types
export type UserCredentials = { code: number; password: string };
export type ClientResponse<T = any> = { body: T; status: number };

export default class EventosudgApiClient {
  private token: string;
  private endpointUrl: string;
  private headers: Headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  constructor(endpointUrl: string) {
    this.token = '';
    this.endpointUrl = endpointUrl;
  }

  get url() {
    const myUrl = this.endpointUrl.split('');
    myUrl.pop();
    return myUrl.join('');
  }

  get tokenLoaded() {
    return this.token ? true : false;
  }

  async testConnection() {
    try {
      const response = await fetch(`${this.endpointUrl}`, {
        method: 'GET',
        headers: this.headers as any,
      });
      const json = await detachBody(response);
      return { body: json, status: response.status } as ClientResponse;
    } catch (error) {
      throw new Error(
        'There was a problem while fetching the remote resource!',
      );
    }
  }

  async refreshToken() {
    // Check if a token is in memory, otherwise search in storage
    if (!this.token) {
      try {
        this.token = (await AsyncStorage.getItem('JWT')) || '';
      } catch (error) {
        throw new Error('There was a problem while reading the local storage!');
      }
    }
    if (this.token) {
      // If a token was found refresh it
      try {
        const response = await fetch(`${this.endpointUrl}api/auth`, {
          method: 'GET',
          headers: appendToken(this.headers, this.token) as any,
        });
        // If the token is refreshed successfully save it in storage
        // Otherwise the server would respond 401 if the token is no longer valid
        if (response.status < 300) {
          this.token = detachToken(response);
          await AsyncStorage.setItem('JWT', this.token);
        }
        const json = await detachBody(response);
      } catch (error) {
        throw new Error(
          'There was a problem while fetching the remote source!',
        );
      }
    }

    return { status: 401, body: {} } as ClientResponse;
  }

  // user params: email, password
  async signIn(user: UserCredentials) {
    let response: Response;
    try {
      response = await fetch(`${this.endpointUrl}api/auth`, {
        method: 'POST',
        headers: this.headers as any,
        body: JSON.stringify(user),
      });
    } catch (error) {
      throw new Error('There was a problem while fetching the remote source!');
    }
    // If the users signs in successfully save token in storage
    // Otherwise the server would respond 401 if the token is no longer valid
    if (response.status < 300) {
      this.token = detachToken(response);
      try {
        await AsyncStorage.setItem('JWT', this.token);
      } catch (error) {
        throw new Error(
          'There was a problem while writing on the local storage!',
        );
      }
    }
    const json = await detachBody(response);
    return { body: json, status: response.status } as ClientResponse;
  }

  async signOut() {
    let response: Response;
    try {
      response = await fetch(`${this.endpointUrl}api/auth`, {
        method: 'DELETE',
        headers: appendToken(this.headers, this.token) as any,
      });
    } catch (error) {
      throw new Error('Therre was a problem while fetching the remote source!');
    }
    // Remove token from storage and memory on successful sign out
    const json = await detachBody(response);
    if (response.status < 300) {
      this.token = '';
      try {
        await AsyncStorage.removeItem('JWT');
      } catch (error) {
        throw new Error('There was a problem while reading the local storage!');
      }
    }

    return { body: json, status: response.status } as ClientResponse;
  }
}

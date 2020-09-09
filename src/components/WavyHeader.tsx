import React, { ReactNode, Children } from 'react';
import { View } from 'react-native';
// import external components
import Svg, { Path } from 'react-native-svg';

//props for making the Wavy components reusable
interface WavyHeader {
  customStyles: any;
  customHeight: number;
  customTop: number;
  customBgColor: string;
  customWavePattern: string;
  children?: ReactNode;
}

export default function WavyHeader(props: WavyHeader) {
  return (
    <View style={props.customStyles}>
      <View
        style={{
          backgroundColor: props.customBgColor,
          height: props.customHeight,
        }}>
        <Svg
          height="160%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: props.customTop }}>
          <Path fill={props.customBgColor} d={props.customWavePattern} />
        </Svg>
        {props.children}
      </View>
    </View>
  );
}

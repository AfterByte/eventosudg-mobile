import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Image,
} from 'react-native';
// Icons import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Helper imports
import calculateShadow from '../helpers/shadowGenerator';

type CardProps = {
  children: ReactNode;
  shadowDepth?: number;
  color?: string;
  image?: ImageSourcePropType;
  roundedCorner?: boolean;
  style?: StyleSheet.NamedStyles<{}>;
  imageOpacity?: string;
};

export const Card = ({
  children,
  shadowDepth = 4,
  color = '#fff',
  image,
  roundedCorner = true,
  imageOpacity = 'rgba(255, 255, 255, 0.0)',
  style,
}: CardProps) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: color,
      overflow: 'hidden',
    },
    imageOpacity: {
      backgroundColor: imageOpacity,
      ...style,
      margin: 0,
      padding: 0,
    },
  });
  const includedStyles: any[] = [styles.card];

  includedStyles.push(calculateShadow(shadowDepth));

  if (roundedCorner) includedStyles.push(sharedStyles.roundedCorner);

  if (style) includedStyles.push(style);

  if (image)
    return (
      <ImageBackground
        source={image}
        style={[sharedStyles.image, ...includedStyles]}>
        <View style={styles.imageOpacity}>{children}</View>
      </ImageBackground>
    );
  return <View style={includedStyles}>{children}</View>;
};

type PictureFrameProps = {
  image?: ImageSourcePropType;
  size: number;
  shape: 'circle' | 'square';
  style?: StyleSheet.NamedStyles<{}>;
};

export const PictureFrame = ({
  image,
  size,
  shape,
  style,
}: PictureFrameProps) => {
  const styles = StyleSheet.create({
    frame: {
      height: size,
      width: size,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d6e1f8',
    },
    circular: {
      borderRadius: size / 2,
    },
    image: {
      resizeMode: 'cover',
      width: size * 1.1,
      height: size * 1.1,
    },
  });

  const includedStyles: any[] = [styles.frame];
  if (shape === 'circle') includedStyles.push(styles.circular);
  else if (shape === 'square') includedStyles.push(sharedStyles.roundedCorner);

  if (style) includedStyles.push(style);

  return (
    <View style={includedStyles}>
      {image ? (
        <Image style={styles.image} source={image} />
      ) : (
        <Icon name={'image-outline'} color={'#445068'} size={size * 0.8} />
      )}
    </View>
  );
};

const sharedStyles = StyleSheet.create({
  roundedCorner: { borderRadius: 4 },
  image: { resizeMode: 'cover' },
});

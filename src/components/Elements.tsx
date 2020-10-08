import React, { ReactNode, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// Icons import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
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

type SearchBoxProps = {
  search(phrase: string): void | Promise<void>;
};

export const SearchBox = ({ search }: SearchBoxProps) => {
  const [phrase, setPhrase] = useState('');

  return (
    <Card
      style={{
        flexDirection: 'row',
        borderRadius: 16,
        margin: 15,
        paddingHorizontal: 8,
      }}>
      <TextInput
        style={{ flex: 1 }}
        onChangeText={(text) => {
          setPhrase(text);
        }}
      />
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => search(phrase)}>
        <FeatherIcon name="search" size={20} color={'#445068'} />
      </TouchableOpacity>
    </Card>
  );
};

const sharedStyles = StyleSheet.create({
  roundedCorner: { borderRadius: 4 },
  image: { resizeMode: 'cover' },
});

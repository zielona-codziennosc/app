import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet, TouchableNativeFeedback
} from 'react-native';

import Colors from '../../constants/Colors';
import Color from 'color';

export default function Action(props) {
  const {
    id,
    image,
    imageAuthor,
    title,
    description,
    style
  } = props;

  const onActionClick = (id) => {
    //doSth
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => onActionClick(id)}
      >
        <View style={styles.inner}>
          <View style={styles.top}>
            <Image source={image} style={styles.image} />
            <View style={styles.overlay} />
            <Text style={styles.imageAuthor}>
              Zdjęcie &copy; {imageAuthor}
            </Text>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomText} numberOfLines={2}>{description}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden'
  },
  inner: {
    height: 160
  },
  top: {
    height: 100,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 100
  },
  imageAuthor: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: Color(Colors.whiteGreenish).alpha(0.5).toString()
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600'
  },
  overlay: {
    position: 'absolute',
    backgroundColor: Color(Colors.green).alpha(0.75).toString(),
    height: '100%',
    width: '100%'
  },
  bottom: {
    height: 80,
    padding: 10,
    backgroundColor: Colors.green
  },
  bottomText: {
    fontSize: 15,
    color: Colors.whiteGreenish
  }
});

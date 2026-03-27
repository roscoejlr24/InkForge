import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImagePreview({ uri, width = '100%', height = 300, style = {} }) {
  return (
    <View style={[styles.container, { width, height }]}> 
      <Image source={{ uri }} style={[styles.image, style]} resizeMode="cover" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 8, overflow: 'hidden', marginVertical: 10 },
  image: { width: '100%', height: '100%' }
});

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MapView from 'react-native-maps';


const Index = () => {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <View>

      <Text>inasadesx</Text>
      {/* <MapView style={styles.map} /> */}

      <StatusBar
        backgroundColor="red"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Index;
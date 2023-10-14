import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { Children, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ButtomSheet from '../ButtomSheet/ButtomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const openModal = () => {
    bottomSheetRef.current?.present()
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ButtomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bike-fast" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text>Deliver to</Text>
            <TouchableOpacity >
              <View style={{
                flexDirection: "row",
                width: "70%"
              }}>
                <Text style={{ fontSize: 18, color: Colors.green }} onPress={openModal}>Select Location</Text>
                <Entypo name="chevron-small-down" size={24} color="black" style={{ color: Colors.green }} />
              </View>
            </TouchableOpacity>
          </View>
          <Link href={'/(modal)/signup'} asChild>
                 <TouchableOpacity>
            <AntDesign name="user" size={24} color={Colors.primary} />
          </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.content1}>
          <EvilIcons name="search" size={22} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder='Restaurants, Wings, Coffee, ...'
            onBlur={() => console.log("HELLO")}
          />
          <Link href={'/(modal)/filter'} asChild>
            <TouchableOpacity onPress={() => {

            }}>
              <Ionicons name="filter" size={24} style={styles.filterIcon} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  container: {
    height: Platform.OS === "android" ? 100 : 80,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: "center",
    gap: 20,
    position: "relative"
  },
  content1: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: "center",
    position: "relative",
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.grey,
    flex: 1,
    paddingHorizontal: 30,
    padding: 5
  },
  searchIcon: {
    position: "absolute",
    left: 25
  },
  filterIcon: {
    paddingLeft: 20
  }
})
export default CustomHeader
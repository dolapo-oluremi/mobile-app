import { View, Text, Button, StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const ButtomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const [curTime, setCurTime] = useState(new Date())
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />, [])
  const { dismiss } = useBottomSheetModal();
  const currentTime = curTime.toLocaleTimeString('en-US',{
    hour: '2-digit',
    minute:'2-digit'
  });
  useEffect(()=>{
    setCurTime(new Date())
  },[])
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      overDragResistanceFactor={1}
      ref={ref}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ borderRadius: 0 }}
      handleIndicatorStyle={{display:'none'}}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <View style={styles.tabs}>
              <Text style={styles.text}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.tabs}>
              <Text style={styles.text}>Pickup</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <Button title='Dismiss'
        onPress={()=>dismiss()}
        /> */}
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <View>
            <Text style={styles.ctaTextDesc}>Your Location</Text>
            <TouchableOpacity style={styles.ctaText}>
              <EvilIcons name="location" size={24} color="black" />
              <Text style={styles.cta__text}>Lagos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.ctaTextDesc}>Arrival Time</Text>
            <TouchableOpacity style={styles.ctaText}>
            <Ionicons name="timer-outline" size={22} color="black"  style={{marginRight:5}}/>
              <Text  style={styles.cta__text}>{currentTime}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.handleConfirm} onPress={()=>dismiss()}>
            <Text  >Confirm</Text>
          </TouchableOpacity>
        </View>

      </View>
    </BottomSheetModal>
  )
});
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom:20
  },
  header: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center"
  },
  tabs: {
    paddingHorizontal: 20,
    padding: 6,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    color: "white",

  },
  cta__text:{
    fontSize:20
  },
  text: {
    color: "white",
  },
  ctaTextDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    padding: 10
  },
  ctaText: {
    padding: 14,
    paddingHorizontal: 20,
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  handleConfirm: {
    backgroundColor: Colors.primary,
    padding: 20,
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 10
  }
})
export default ButtomSheet
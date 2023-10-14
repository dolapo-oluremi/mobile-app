import { SplashScreen, Stack, useNavigation } from 'expo-router';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { useRef, useState } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index"
          options={{
            header: () => <CustomHeader />
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="close-outline" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="(modal)/signup"
          options={{
            presentation: 'modal',
            headerTitle: "Sign Up",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="close-outline" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
      </Stack>
    </BottomSheetModalProvider>


  );
};
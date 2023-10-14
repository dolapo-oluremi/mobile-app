import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'

const Filter = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>filter</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.done} onPress={()=>{
                    navigation.goBack()
                }}>
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.lightGrey
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:20,
        elevation:10,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:10,
        shadowOffset:{
            width:0,
            height:-2
        }
    },
    done: {
        backgroundColor: Colors.primary,
        borderRadius:10,
        width: 350,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Filter
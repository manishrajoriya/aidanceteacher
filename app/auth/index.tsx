import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const router = useRouter();
const Index = () => {

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Image source={require('../../assets/images/signup-car.png')} style={styles.image} />
            <Text style={styles.title}>Let's get started</Text>
            <Text style={styles.description}>Find best car for ride</Text>
        </View>
        
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width,
        height,
        
    },
    image: {
        width: '100%',
        height: height * 0.4,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
})

export default Index;

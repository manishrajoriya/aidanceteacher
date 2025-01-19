import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Auth = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/signup-car.png')} style={styles.image}  />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Let's get started</Text>
          <Text style={styles.description}>Find the best car for your ride</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.push('/auth/login')} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/auth/signup')} style={[styles.button, styles.signupButton]}>
            <Text style={[styles.buttonText, styles.signupButtonText]}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    width,
    height: height * 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: height * 0.05,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: height * 0.20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#3498db',
    width: '48%',
  },
  buttonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#3498db',
  },
  signupButtonText: {
    color: '#fff',
  },
});

export default Auth;

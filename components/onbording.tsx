// import React, { useState, useRef } from 'react';
// import { FlatList, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router';



// const { width, height } = Dimensions.get('window');

// const OnboardingData = [
//     {
//         id: '1',
//         title: 'The best car in your hand with Ryde',
//         description: 'Discover the convenience of finding your perfect ride with our Ryde App',
//         image: require('../assets/images/onboarding1.png'),
//     },
//     {
//         id: '2',
//         title: 'A perfect ride is just a tap away',
//         description: 'Your journey begins with Ryde App. Enjoy a seamless experience with our app',
//         image: require('../assets/images/onboarding2.png'),
//     },
//     {
//         id: '3',
//         title: 'Your ride your way just get started',
//         description: 'Enter your destination, sit back, and let us take care of the rest.',
//         image: require('../assets/images/onboarding3.png'),
//     }
// ];

// const Onboarding = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const flatListRef = useRef<FlatList | null>(null);
//     const router = useRouter();
//     const renderSlide = ({ item }: { item: typeof OnboardingData[0] }) => {
//         return (
//             <View style={styles.slide}>
//                 <Image source={item.image} style={styles.image} resizeMode="contain" />
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </View>
//             </View>
//         );
//     };

//     const renderDotIndicator = () => {
//         return (
//             <View style={styles.dotContainer}>
//                 {OnboardingData.map((_, index) => (
//                     <View
//                         key={index}
//                         style={[
//                             styles.dot,
//                             { backgroundColor: index === currentIndex ? '#007AFF' : '#D1D1D6' }
//                         ]}
//                     />
//                 ))}
//             </View>
//         );
//     };

//     const handleNext = () => {
//         if (currentIndex < OnboardingData.length - 1) {
//             flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
//         }
//     };

//     const handleSkip = () => {
//         flatListRef.current?.scrollToIndex({ index: OnboardingData.length - 1, animated: true });
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
//                 <Text style={styles.skipButtonText}>Skip</Text>
//             </TouchableOpacity>
//             <FlatList
//                 ref={flatListRef}
//                 data={OnboardingData}
//                 renderItem={renderSlide}
//                 keyExtractor={item => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 bounces={false}
//                 onMomentumScrollEnd={(event) => {
//                     const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
//                     setCurrentIndex(newIndex);
//                 }}
//             />
//             {renderDotIndicator()}
//             <View style={styles.buttonContainer}>
//                 {currentIndex < OnboardingData.length - 1 ? (
//                     <>
//                         <TouchableOpacity onPress={handleNext} style={styles.Button}>
//                             <Text style={styles.ButtonText}>Next</Text>
//                         </TouchableOpacity>
//                     </>
//                 ) : (
//                     <TouchableOpacity onPress={() => {router.push('/auth')}} style={styles.Button}>
//                         <Text style={styles.ButtonText}>Get Started</Text>
//                     </TouchableOpacity>
//                 )}
//             </View>
            
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
//     slide: {
//         width,
//         height,
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     image: {
//         width: width * 0.8,
//         height: height * 0.4,
//         marginBottom: 40,
//     },
//     textContainer: {
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#333333',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     description: {
//         fontSize: 18,
//         color: '#666666',
//         textAlign: 'center',
//         paddingHorizontal: 20,
//     },
//     dotContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     dot: {
//         width: 20,
//         height: 5,
//         borderRadius: 2,
//         marginHorizontal: 5,
//     },
//     buttonContainer: {
        
//         paddingHorizontal: 20,
//         marginBottom: 40,
        
//     },
//     skipButton: {
//         padding: 20,
//         alignContent: 'center',
//         alignSelf: 'flex-end',
//     },
//     skipButtonText: {
//         color: '#666666',
//         fontSize: 16,
//         alignContent: 'center',
//     },
//     Button: {
//         backgroundColor: '#007AFF',
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         borderRadius: 20,
        
//     },
//     ButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
    
// });

// export default Onboarding;


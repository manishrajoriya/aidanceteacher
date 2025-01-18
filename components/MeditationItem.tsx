import { StyleSheet, Text, View, FlatList } from 'react-native';
import { meditations } from '@/constants/data';
import { Meditation } from '@/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import Onbording from './onbording';


export function MeditationItem({meditation}: {meditation:Meditation}) {
    
    return (
        <View className='border-2 rounded-lg bg-gray-100'>
            <Text className='  p-5 border-gray-700 '>{meditation.title}</Text>
            <View className=' flex-row items-center gap-2'>
                <AntDesign name="clockcircleo" size={24} color="black" />
                <Text className=''>{meditation.duration}min</Text>
            </View>
            
        </View>
    );
}

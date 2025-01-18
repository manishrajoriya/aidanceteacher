

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { meditations } from '@/constants/data';

import { MeditationItem } from '@/components/MeditationItem';



const Index = () => {
    return (
       <>
        
        <FlatList
            data={meditations}
            contentContainerStyle={ {gap: 20, padding: 20 } }
            renderItem={({item}) => <MeditationItem meditation={item} />}
        />
       
       </>
    );
}

const styles = StyleSheet.create({})

export default Index;

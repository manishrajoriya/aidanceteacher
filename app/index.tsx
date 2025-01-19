

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';



const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkLoginStatus() {
            const token = await SecureStore.getItemAsync('token');
            if (token) {
                setLoggedIn(true);
            }
            setLoading(false);
        }
        checkLoginStatus();
    }, []);
    return (
       <>
     {
        loading ? (
            <View>
                <Text>Loading...</Text>
            </View>
        ) : (
            <Redirect href={loggedIn ? '/' : '/(routes)/onbording'} />
        )
     }
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Index;

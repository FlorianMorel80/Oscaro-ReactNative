import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';


const Brand = () => {
    return (
        
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar style={{backgroundColor: 'white'}}/>
            <Image
                style={styles.logo}
                source={require('../assets/img/logo-opengraph.webp')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        
        width: 100, 
        height: 50,
    },
})

export default Brand; 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button } from 'react-native';

import Brand from './Brand';

const Stack = createStackNavigator();


const Profil = () => {
    return (
        <View style={{flex:1}}>
            <Brand />
                <Stack.Navigator>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            color="lightgrey"
                            title="Voir mes informations"
                            onPress={() => navigation.navigate('Profil')} 
                        />
                
                    </View>
                <Stack.Screen name="Profil" component={Profil} />
                </Stack.Navigator>
        </View>
    );
  }

  export default Profil;
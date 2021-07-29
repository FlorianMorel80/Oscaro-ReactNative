import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Catalogue from './Catalogue';
import Brand from './Brand';
import Profil from './Profil';
import Help from './Help';
import Search from './Search';
import Basket from './Basket';

const Tab = createBottomTabNavigator();

const Menu = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name) {
                        case "Catalogue" : 
                            iconName = 'apps-outline';
                        break;
                        case "Aide" : 
                            iconName = 'information-circle-outline'; 
                        break;
                        case "Profil" : 
                            iconName = 'body-outline';
                        break;
                        case "Rechercher" : 
                            iconName = 'search-outline';
                        break;
                        case "Panier" : 
                            iconName = 'basket-outline';
                        break;
                    }
                    
                    iconName = `${Platform.OS === "ios" ? "ios-" : "md-"}${iconName}`

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeBackgroundColor: '#144880',
                inactiveBackgroundColor: '#144880',
                activeTintColor: '#339af0',
                inactiveTintColor: 'white',
                }}
            >
                <Tab.Screen name="Catalogue" component={Catalogue} />
                <Tab.Screen name="Aide" component={Help}    />
                <Tab.Screen name="Profil" component={Profil} />
                <Tab.Screen name="Rechercher" component={Search} />
                <Tab.Screen name="Panier" component={Basket} /> 
            </Tab.Navigator>
        </NavigationContainer>
    );
}



export default Menu;
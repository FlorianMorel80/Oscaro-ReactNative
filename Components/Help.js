import React from 'react';

import { View, Text } from 'react-native';

import Brand from './Brand';

function Help() {
    return (
        <View style={{flex:1}}>
            <Brand />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Help</Text>
            </View>
        </View>
    );
  }


  export default Help;
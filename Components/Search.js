import React from 'react';
import { View, Text } from 'react-native';

import Brand from './Brand';

function Search() {
    return (
    <View style={{flex:1}}>
        <Brand />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Votre recherche</Text>
        </View>
    </View>
    );
  }

  export default Search;
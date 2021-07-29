import React from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';


const Item = ({ title, img }) => (
    <View style={styles.container}>
        <Image 
            style={styles.mainImg}
            source={require('../../assets/img/productCategory/wheel.png')}
            // source={{img}}
            // source={{uri : {img}}}
        />
    
        <View style={{flex:1 }}>
            <Text style={styles.titleBlock}>{title}</Text>
        </View>
    
    </View>
);




const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        fontWeight: "bold",
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: '#144880', 
    },
    mainImg: {
        height: 80,
        width: 100 ,
        margin: 5,
        alignItems: 'center',
        justifyContent: "center"
    }, 
    
    titleBlock: {
        height:40,
        paddingBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15, 
        color: "#144890", 
        alignContent: "center", 
    }, 
})

export default Item;
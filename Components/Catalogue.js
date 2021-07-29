import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, FlatList } from 'react-native';

import Brand from './Brand';

import Item from './Item/Category';

const data = require('../Data/ProductCategory/productCategory.json');

const Catalogue = () => {
    const renderItem = ({ item }) => (
        <Item 
            title={item.title} 
            img={item.img} 
        />
    );


    return (   
        <View style={styles.contain}>    
            <View style={{ alignItems: 'center', height:'100%' }}>
                <Brand />
{/* ********** Bannière de promotion ********************** */}
                <View style={styles.bannier}>
                    <Text style={styles.textBannier}>
                        Promo distribution 
                        Jusqu'à -10% sur les kit de distribution </Text>
                    <Text style={{fontSize: 13, margin:0, textAlign: 'center', backgroundColor: '#144880', color: 'white'}}>
                    Sélectionnez votre véhicule</Text>
                    <View style={{alignItems:'center', justifyContent: 'center', paddingTop: 10, backgroundColor: '#144880',flexDirection:'row'}}>
                        <TextInput
                            multiline
                            placeholder="AA-347-BB"
                            style={{ height: 50, width: '60%', textAlign:'center', borderRadius: 20 , justifyContent:'center', alignContent: 'center', padding: 10, backgroundColor: 'white' }}
                        />
                        <TouchableOpacity style={{ height: 50, width:'30%', margin:10,backgroundColor:'#', justifyContent: 'center', alignItems:'center', marginTop: 10, borderRadius: 20, borderColor: 'white', borderWidth: 3, backgroundColor: 'white'}}>
                            <Text style={{color: '#144880'}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
{/* ********** End Of Bannière de promotion ********************** */}
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor =  { item => item.title}
                    />
                </SafeAreaView>
            </View>
            
        </View>
    );
}

  {/* ************** *****Catégorie de produit ********************* */}

 
{/* ************** ***** END OF Catégorie de produit ************* */}
    const styles = StyleSheet.create({
        contain:{
            height: '100%',
            width: '100%'  
        },
        container: {
            flex: 1 ,
            textAlign:'center',
            fontWeight: "bold",
            flexDirection: 'row',
          },

        textBannier: {
            fontSize: 20, 
            padding: 10, 
            margin:0, 
            textAlign: 'center', 
            backgroundColor: '#144880', 
            color: 'white',
            // fontFamily: 'Pattaya-Regular', 
        },

        mainImg:{
            flex:1,
        },

        blockCategoryProduct: {
            height: 'auto',
        }
    })

export default Catalogue; 
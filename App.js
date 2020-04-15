import React from 'react';
import {StyleSheet,
        FlatList,
        ActivityIndicator,
        View} from 'react-native';
import Card from './components/cards/Card';  
import data from './components/data/data';

export default class App extends React.Component { 


 render() {
  
   return (
     <FlatList 
      
      keyExtractor={(item, index) => index.toString()}
       data={data.imoveis}
       renderItem={({item}) => <Card imovel={item} /> }
     /> 
   );
 }
 }
 
 
         
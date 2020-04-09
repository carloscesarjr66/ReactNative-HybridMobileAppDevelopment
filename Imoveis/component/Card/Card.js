import React from 'react';
import {StyleSheet,
        //ScrollView,
        TouchableOpacity,
        Text,
        Image} from 'react-native';

export default class Card extends React.PureComponent { 
 render() {
   return (
       <TouchableOpacity style={styles.card}>
    
   <Image style={styles.cardImage} source={{uri: this.props.item.images[0]}} /> 
   <Text style={styles.cardTitleText}> Imóvel a Venda</Text>
   <Text style={styles.cardText}>{this.props.item.address.formattedAddress}</Text>
   <Text style={styles.cardText}>Quarto(s): {this.props.item.bedrooms} / Banheiro(s): {this.props.item.bathrooms}</Text>
   <Text style={styles.cardText}>Valor: R${this.props.item.price}.00</Text>
       </TouchableOpacity>
           
   );
 }
}
         
const styles = StyleSheet.create({
 
  card: {
   backgroundColor: '#fff',
   marginBottom: 10,
   marginLeft:'2%',
   width:'96%',
   shadowColor:'#000',
   shadowOpacity: 0.2,
   shadowRadius: 1,
   shadowOffset: {
     width:3,
     height:3
   }
  },
  cardImage: {
  width: '100%',
  height:200,
  resizeMode:'cover'
  },
  cardTitleText: {
    fontSize:20,
    fontWeight: "bold",
    color: '#ff0000',
  },
  cardText: {
  padding:1,
  fontSize:16
  },
});


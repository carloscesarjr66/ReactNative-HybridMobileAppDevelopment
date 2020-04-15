import React from 'react';
import{View,Text} from 'react-native';

import styles from './estilo'
export default class Desc extends React.Component{
render(){
  return(
    <>
 
 <View>
     
      <Text>{this.props.descricao1}{this.props.pricee} </Text>
      <Text>{this.props.address}</Text>
      <Text>{this.props.descricao} {this.props.bathrooms} </Text>
      <Text>{this.props.descricao2} {this.props.bedrooms} </Text>
      <Text>{this.props.descricao3}{this.props.parkingSpaces} </Text>
      <Text>{this.props.usable} {this.props.metros}</Text>

    
  </View>
</>
  );
}

}
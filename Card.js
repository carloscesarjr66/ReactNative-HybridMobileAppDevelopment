import React from 'react';
import {StyleSheet,
        //ScrollView,
        TouchableOpacity,
        Text,
        Image, View} from 'react-native';

import Desc from '../descricoes/Desc';
import { styles } from '../styles';

export default class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {imovel: this.props.imovel};
   // this.state={detailsHidden: false}
  }
   handleHideDetails= () =>
    {
        const { detailsHidden } = this.state; 
        this.setState({ detailsHidden: !this.state.detailsHidden }); 
    }


    
 
 render() {
   const {imovel}=this.state;
   return (
     <>
      <TouchableOpacity style={styles.card} onPress={this.handleHideDetails}>
          <Image style={styles.cardImage} source={imovel.images[0]} /> 
             <Text style={styles.cardTitleText}> Imóvel a Venda</Text>
     
            <Desc  descricao1={"Valor: R$"} 
                  pricee={imovel.price}/>
     
      <Text style={styles.cardText2}>
            <Desc usable={imovel.usableArea} 
                  metros={"mts²"} /> 
     </Text>

  {this.state.detailsHidden ? 
  <View style={styles.card}>
    <Desc style={styles.cardText} 
          address={imovel.address.formattedAddress} />
        
  <Desc bathrooms={imovel.bathrooms}
        style={styles.cardText} 
        descricao={"Banheiro(s):"} />

   <Desc style={styles.cardText}
         bedrooms={imovel.bedrooms} 
         descricao2={"Quarto(s):"} />
    
    <Desc style={styles.cardText} 
    parkingSpaces={imovel.parkingSpaces} 
    descricao3={"Estacionamento Vaga(s):"} />

  </View> : null} 
       </TouchableOpacity>

      
       </>
   );
 }
}
import React, { useEffect } from "react";
import {View, Text, ImageBackground, Dimensions, TouchableWithoutFeedback, Image} from 'react-native';

const {width, height} = Dimensions.get('window');


const Intro = ({navigation}) => {

  useEffect(() => {
    
  }, [])

  return (
        <>
         <ImageBackground source={require('../../../assets/background/fondo1.jpeg')} style={{height, width}} resizeMode={'cover'}>
            <View style={{height, width, alignItems:'center', paddingTop: 40}}>
                <Image source={require('../../../assets/background/reservamos-logo.png')} resizeMode={'cover'} style={{height: 50, width: 300}}/>
                <View style={{height: '90%', width, alignItems:'center', paddingHorizontal: 20}}>
                    <View style={{backgroundColor:'rgba(51,155,255,0.3)', top: '10%', padding: 10, borderRadius: 5}}>
                        <Text style={{fontWeight:'500', color:'black', textAlign:'justify'}}>
                            En Reservamos buscamos que nuestros viajeros tengan la mejor experiencia al seleccionar su viaje, por lo tratamos que tengan toda la información necesaria para elegir su destino y fecha de viaje.
                        </Text>
                    </View>
                    <Text style={{fontWeight:'bold', color:'white', textAlign:'justify', top: '45%'}}>
                        Busca tu destino y su clima para tu proximo viaje.
                    </Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                        <View style={{width:300, height: 50, backgroundColor:'rgba(51,155,255,0.5)', borderRadius: 10 ,top: '50%', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', color:'white', textAlign:'justify'}}>
                                Buscar
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
         </ImageBackground>
        </>
  );
};
 

export default Intro;
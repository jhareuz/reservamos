import React, { useState, useEffect } from "react";
import {View, Text, Dimensions, StyleSheet, TouchableWithoutFeedback, Image, ScrollView, Platform} from 'react-native';
import { openWeather } from "../../services";
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const {width, height} = Dimensions.get('window');


const DetailScreen = ({route, navigation}) => {

  const [array, setArray] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    openWeather(route.params.params.lat, route.params.params.long)
          .then((response) => {
            //console.log('responseOpenw', response.daily)
            const arrayClima = []
            response.daily.map((item, index) => {
                arrayClima.push(item.feels_like)
            })
            setArray(arrayClima)
            setLoader(false)
          })
          .catch((err) => {
            setLoader(false)
            console.log('eroor', err)
          })
  }, [])


  const renderItem = (item) => {
    return (
      <TouchableWithoutFeedback onPress={() => null}>
          <View style={styles.containerTabs}>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Mañana: '}</Text>
                <Text style={styles.text2}>{`${item.morn}°C`}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Dia: '}</Text>
                <Text style={styles.text2}>{`${item.day}°C`}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Tarde: '}</Text>
                <Text style={styles.text2}>{`${item.eve}°C`}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Noche: '}</Text>
                <Text style={styles.text2}>{`${item.night}°C`}</Text>
            </View>
          </View>
      </TouchableWithoutFeedback>
      
    )
  }

  const loaderMethod = () => {
    return (
      <OrientationLoadingOverlay
          visible={loader}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Loading..."
        />
    )
  }

  return (
    <View style={styles.container}>
        {loaderMethod()}
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/background/back.png')} resizeMode={'contain'} style={{height: 30, width: 30, right: 40, top: Platform.OS === 'ios' ? 18 : 0 }}/>
            </TouchableWithoutFeedback>
            <Image source={require('../../../assets/background/reservamos-logo.png')} resizeMode={'cover'} style={{height: 50, width: 200, top: Platform.OS === 'ios' ? 18 : 0 }}/>
        </View>
        <View style={styles.textSeccion}>
            <Text style={styles.text}>Pronostico del clima de los proximos 8 dias</Text>
        </View>
        <ScrollView>
            <View style={styles.list}>
                {array.map((item, index) => {
                    return(
                        renderItem(item)
                    )
                    
                })}
            </View>
        </ScrollView>  
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F2F2F2', 
    height, 
    width
 },
 header: {
    backgroundColor:'white', 
    height: '10%', 
    width, 
    justifyContent:'center', 
    alignItems:'center',
    flexDirection:'row'
 },
 textSeccion: {
    height: '7%', 
    width, 
    justifyContent:'center', 
    alignItems:'center'
 },
 containerTabs: {
    height: 150, 
    width: 150, 
    borderRadius: 5, 
    backgroundColor:'white', 
    marginBottom: 10, 
    marginRight: 10,
    paddingHorizontal: 10
 },
 list: {
    height: '83%', 
    width, 
    paddingHorizontal: 5,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
 },
 text: {
    fontWeight:'bold',
    color:'#000',
    fontSize: 12
  },
  tabs: {
    flexDirection:'row', 
    width:'100%', 
    height:'25%',
    alignItems:'center'
 },
 text2: {
    fontWeight:'500',
    fontSize: 12
  },

});
 

export default DetailScreen;
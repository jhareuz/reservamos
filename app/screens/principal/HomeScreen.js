import React, { useState, useEffect } from "react";
import {View, Text, Dimensions, FlatList, StyleSheet, TextInput, Image, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import { searchCity } from "../../services";
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const {width, height} = Dimensions.get('window');


const HomeScreen = ({navigation}) => {

  const [array, setArray] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loader, setLoader] = useState(false);

  const search = () => {
    setLoader(true)
    searchCity(searchText)
      .then((response) => {
        setArray(response)
        setLoader(false)
        setSearchText('')
        Keyboard.dismiss()
      })
      .catch((err) => {
        setLoader(false)
        console.log('eroor', err)
      })
  }

  const renderItem = (item) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {params: item})}>
          <View style={styles.containerTabs}>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'City Name: '}</Text>
                <Text style={styles.text2}>{item.city_name}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Display: '}</Text>
                <Text style={styles.text2}>{item.display}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Country: '}</Text>
                <Text style={styles.text2}>{item.country}</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.text}>{'Type: '}</Text>
                <Text style={styles.text2}>{item.result_type}</Text>
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


  useEffect(() => {

  }, [])

  return (
     <View style={styles.container}>
        {loaderMethod()}
         <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/background/back.png')} resizeMode={'contain'} style={{height: 30, width: 30, right: 45, top: Platform.OS === 'ios' ? 18 : 0 }}/>
            </TouchableWithoutFeedback>
            <Image source={require('../../../assets/background/reservamos-logo.png')} resizeMode={'cover'} style={{height: 50, width: 200, top: Platform.OS === 'ios' ? 18 : 0 }}/>
         </View>
         <View style={styles.input}>
            <TextInput
              placeholder={'Ingresa una ciudad'}
              style={styles.textInput}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableWithoutFeedback onPress={() => search()}>
                <View>
                  <Text style={styles.searchButton}>Buscar</Text>
                </View>
            </TouchableWithoutFeedback>
         </View>
         <View style={styles.list}>
            <FlatList 
                data={array}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => renderItem(item)}
              /> 
         </View>
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
 input: { 
    height: '15%', 
    width, 
    justifyContent:'center', 
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
 },
 list: {
    height: '75%', 
    width, 
    justifyContent:'center', 
    alignItems:'center', 
    paddingHorizontal: 10
 },
 containerTabs: {
    height: 100, 
    width: width/1.1, 
    borderRadius: 5, 
    backgroundColor:'white', 
    marginBottom: 10, 
    paddingHorizontal: 10
 },
 tabs: {
    flexDirection:'row', 
    width:'100%', 
    height:'25%'
 },
 text: {
   fontWeight:'bold',
   color:'#000',
   fontSize: 12
 },
 text2: {
  fontWeight:'500',
  fontSize: 12
},
textInput: {
  width:'60%',
  height: 50,
  borderWidth: 1,
  borderColor:'grey'
},
searchButton: {
  padding: 10, 
  backgroundColor:'blue',
  color:'white',
  fontWeight:'bold'
},
lottie: {
  width: 100,
  height: 100
}

});
 

export default HomeScreen;
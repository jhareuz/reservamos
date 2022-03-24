
import React from "react";
import { Text, View, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');


const CustomDrawer = ({ props, navigation }) => {

  return (
     <View style={{height: height, backgroundColor:'white'}}>
         <View style={{height:'20%', backgroundColor: 'white', width:'100%'}}>
             <View style={{backgroundColor:'#FFF', width:'100%', height:'100%', borderBottomLeftRadius: 50, flexDirection:'row'}}>
                <View style={{width: '40%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <View style={{width: 70, height:70, borderRadius: 200, justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../../../assets/background/user.png')} resizeMode={'contain'} style={{height: 50, width: 50}}/>
                    </View>
                </View>
                <View style={{width: '60%', height:'100%', justifyContent:'center'}}>
                        <Text >Buenas tardes</Text>
                        <Text >Erick</Text>
                </View>
             </View>
         </View>
         <View style={{height:'80%', backgroundColor: '#FFF', width:'100%'}}>
            <View style={{height:'100%', width:'100%', borderTopRightRadius: 70, backgroundColor:'grey'}}>
                <TouchableWithoutFeedback onPress={() => null} >
                        <View style={{width:'100%', height: '10%', flexDirection:'row', alignItems:'center', paddingLeft:'8%'}}>
                            <Text style={{color:'white', fontWeight:'bold', paddingLeft: '8%'}}>Search City</Text>
                        </View>
                </TouchableWithoutFeedback>
            </View>
         </View>
     </View>
  );
};

export default CustomDrawer;
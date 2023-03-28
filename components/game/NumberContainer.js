import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import Colors from '../../util/colors'

function NumberContainer({children}) {
  return (
<View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
</View>  )
}


const deviceWidth= Dimensions.get("window").width;


const styles= StyleSheet.create({
    container:{
borderWidth:4,
borderColor: Colors.yellow,
padding:deviceWidth < 380 ?12 :24 ,
borderRadius:8,
margin:24,
alignItems:"center",
justifyContent:"center"
    },
    numberText:{
color:Colors.yellow,
fontSize:36,
fontWeight:"bold"
    }
})

export default NumberContainer
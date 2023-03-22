import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title'
import Colors from '../util/colors';

function GameOverScreen({roundNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title> GAME OVER </Title>
      <View style={styles.imageContainer} > 
        <Image style={styles.image} source={require("../assets/images/endGame.jpeg")} />
      </View>
      <View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight} >{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:24,
    justifyContent:"center",
    alignItems:'center'
  },
imageContainer:{
  height:300,
  width:300,
  borderRadius:150,
  borderWidth:3,
  borderColor:Colors.primary1,
  overflow:"hidden",
  margin:60
},
image:{
  width:"100%",
  height:"100%"
},
summaryText:{
  fontFamily:"open-sans",
  fontSize:24,
  textAlign:'center',
  marginVertical:24,
  marginBottom:24
},
highlight:{
  fontFamily: "open-sans-bold",
  color: Colors.primary1
}
})
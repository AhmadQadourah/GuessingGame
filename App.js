import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { StartGameScreen } from './screens/StartGameScreen';
import {LinearGradient} from "expo-linear-gradient"
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
export default function App() {

const [userNumber, setUserNumber] = useState(null)
const [gameIsOver, setGameIsOver] = useState(true)
const [guessRounds, setGuessRounds] = useState(0)

function pickedNumberHandler(pickedNumber) {
  setUserNumber(pickedNumber)
  setGameIsOver(false)
}


function gameOverHandler(params) {
  setGameIsOver(true)
}

function startNewGameHandler(){
setUserNumber(null);
setGuessRounds(0);
}
let screen= <StartGameScreen onPickNumber={pickedNumberHandler}/>

if (userNumber){
  screen= <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
}
if(gameIsOver&&userNumber){
  screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={startNewGameHandler} />
}

  return (
    <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground imageStyle={styles.backgroundImage} style={styles.rootScreen} resizeMode='cover' source={require("./assets/images/dice.webp")}>
        <SafeAreaView style={styles.rootScreen} >
      {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
rootScreen:{
  flex:1,
},
backgroundImage:{
  opacity:0.15
}
});

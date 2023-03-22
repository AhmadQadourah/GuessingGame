import React from 'react'
import { View ,TextInput,Button,StyleSheet,Alert,Text} from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton'
import { useState } from 'react'
import Title from '../components/UI/Title'
import Colors from '../util/colors'
import Card from '../components/UI/Card'
import InstructionText from '../components/UI/InstructionText'


export const StartGameScreen = ({onPickNumber}) => {
const [enteredNumber, setenteredNumber] = useState('')

function inputNumberHandler(enteredText){
setenteredNumber(enteredText)
}

function resetInputHandler () {
  setenteredNumber('')
}

function confirmInputHandler(){
const chosenNumber= parseInt(enteredNumber);
if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
  Alert.alert('Invalid Number !' , 'Number must be between 1 and 99',
  [{text:'Okay', style:"destructive",onPress:resetInputHandler}]
  )
  return;
}

onPickNumber(chosenNumber)}


  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
       <InstructionText> Enter Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={inputNumberHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles=StyleSheet.create({
rootContainer:{
  flex:1,
  marginTop:100,
alignItems:'center',
},


  
   
    numberInput:{
        width:50,
        height:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:"bold",
        textAlign:"center",
    },
    buttonsContainer:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex:1
    }
})
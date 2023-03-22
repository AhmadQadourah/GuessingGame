import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../util/colors';

function GuessLogItem({roundNumber,guess}) {


  return (
    <View style={styles.listItem} > 
      <Text style={styles.itemText} >#{roundNumber}</Text>
      <Text style={styles.itemText}> Opponent Guess {guess}</Text>
    </View>
  );
}

export default GuessLogItem


// --------------------------------- Styles ---------------------------------
const styles=StyleSheet.create({
    listItem:{
        borderColor:Colors.primary1,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.yellow,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    itemText:{
        fontFamily:'open-sans'
    }
})
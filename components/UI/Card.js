import React from 'react'
import { StyleSheet, View } from 'react-native'




function Card({children}) {


return (
 <View style={styles.card}> 
 {children}
 </View>
 )
}

export default Card;

const styles = StyleSheet.create({
card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 35,
    backgroundColor: "#72073c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});
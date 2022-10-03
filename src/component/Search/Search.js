import React from 'react'
import{View,TextInput,StyleSheet} from 'react-native'

const Search = (props) => {



  return (
    <View>
        <TextInput style={styles.input} 
         placeholder={'Ara...'}
         onChangeText={props.onSearch}/>
    </View>
  )
}

const styles = StyleSheet.create({
     input:{
        
        borderRadius:20,
        margin:15,
        height:35,
        backgroundColor:'lightgray',
        color:'black',
        
     },


})
export default Search
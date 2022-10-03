import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
const Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card_image}>
        <View>
          <Image style={styles.image} source={{uri: props.propdata.imageURL}} />
        </View>
      </View>
      <View style={styles.card_content}>
        <View
          style={{
            flex: 1,
            alignItems: 'baseline',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            {props.propdata.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16}}>
            {props.propdata.artist}
          </Text>
          <Text style={{color: 'black', fontSize: 16}}>
            {props.propdata.year}
          </Text>
          <Text style={{color: 'red', fontSize: 16}}>
            {props.propdata.isSoldOut ? '' : 'Tükendi'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 1,
    // backgroundColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  card_image: {
    height: Dimensions.get('window').height / 6,

    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_content: {
    height: Dimensions.get('window').height / 6,

    flex: 5,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  text_icerik: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default Card;

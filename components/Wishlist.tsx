import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import Constants from 'expo-constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
 
  {
    id: '1',
    title: 'Item 1',
    image: require('../assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 500 (20% off)',
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../assets/images/p2.jpeg'),
    description: 'Dress                                                                    Rs. 699 (20% off)',
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('../assets/images/p3.jpeg'),
    description: 'Dress                                                                    Rs. 600 (30% off)',
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('../assets/images/p4.jpeg'),
    description: 'Dress                                                                    Rs. 500 (40% off)',
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('../assets/images/p5.jpeg'),
    description: 'Dress                                                                    Rs. 500 (20% off)',
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('../assets/images/p6.jpeg'),
    description: 'Dress                                                                    Rs. 400 (20% off)',
  },
  
  

];

function Item({ id, title,image, description, selected, onSelect }) {
  return (
    <View
      style={[
        styles.item,
        { backgroundColor:'#f9c2ff' },
      ]}
    >
     
      <Image source={image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button  style={styles.button} title='Add to Bag'  onPress={() => onSelect(id)}
    />
    </View>
  );
}

export default function Wishlist() {
  

 
  return (
    <View style={styles.container}>
      <View style={styles.row}>
       <Text style={styles.search}> <MaterialIcons name="search" size={20} color={'#696969'}/> <Text > Search</Text></Text> 
      <Text style={styles.r1}>  <MaterialIcons  name="sort" size={20} color={'#696969'}/><Text style={styles.filt}> Filter </Text> <MaterialIcons  name="sort" size={20} color={'#696969'}/><Text style={styles.sort}> Sort </Text></Text>
      </View>
    

    <ScrollView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            
          />
        )}
        keyExtractor={item => item.id}
      
      />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  statusbar:{
  
    height:50,
    backgroundColor:'#ffffff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 16,
  },
  button : {
    backgroundColor:'#fff',
  },
  filt: {
    fontSize: 18,
    marginStart:30,
  },sort: {
    fontSize: 18,
    marginStart:30,
  },
  row: {
    flexDirection: 'row',
    height: 30,
    backgroundColor
    :'#fff',
  },
  r1: {
    marginLeft:20,
  }, search: {
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:2,
    fontSize: 15,
    width:160,
    borderRadius:10,
    height:25,
    backgroundColor: '#dcdcdc'
  }
});
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../counterSlice';

import { store } from "../store";
import { Provider } from "react-redux";

import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const SectionList = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  // MAPPING THE ARRAY 
  const Item = ({title})=>(
    <View >
      <Text >{title}</Text>
    </View>
  );
  return (
    <Provider store={store}>
      <View>
        <Text >Count: {count}</Text>
          <Button title="Increment" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />

        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          
          keyExtractor={item => item.id}
        />   
      </View>
    </Provider>
  )
}

export default SectionList

const styles = StyleSheet.create({})
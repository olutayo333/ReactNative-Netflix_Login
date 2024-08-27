import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../counterSlice';

const Flat_List = () => {
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
    <View>
          {/* REDUX */}
          <Text >Count: {count}</Text>
          <Button title="Increment" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
          <Text >Count: {count}</Text>
       <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Flat_List

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React from 'react'
import Flat_List from '../Components/Flat_List'

import { store } from "../store";
import { Provider } from "react-redux";

const flat_list = () => {
  return (
    <View>
      {/* <Text>flat_list</Text> */}
      <Provider store={store}>
        <Flat_List/>
      </Provider>
      
    </View>
  )
}

export default flat_list
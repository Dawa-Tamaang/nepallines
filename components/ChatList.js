import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ChatItems from './ChatItems'
import { FlatList } from 'react-native-gesture-handler'
const ChatList = () => {
    const [users, setUser] = useState([1,2,]);
  return (
    <View style={{flex:1}}>
      <FlatList 
      data={users}
      contentContainerStyle={{flex:1, paddingVertical:25}}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index})=><ChatItems item={item} index={index} />}
      />
    </View>
  )
}

export default ChatList;

import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TodoItem({item, pressHandler}){
    return(
       <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <View style={styles.item}>
           <Text >{item.text}</Text>
           <FontAwesome5 style={styles.itemImage} name="trash" size={18} color='#333'></FontAwesome5>
           </View>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
item:{
    paddingTop:16,
    paddingLeft:10,
    marginTop:16,
    borderColor: '#bbb',
    borderWidth: 2,
    borderStyle:'solid',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent:'space-between'
},
itemImage:{
     marginRight:10,
}
})
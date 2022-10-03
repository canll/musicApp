import React,{useState} from 'react';
import {View, Text, FlatList, TextInput, Dimensions} from 'react-native';
import myData from './data.json';
import Card from './component/Card/Card';
import Search from './component/Search/Search';
const App = () => {
  const [list, setList] = useState(myData)


  const RenderItem = ({item}) => <Card propdata={item} />;
  const handleSearch = text => {
    const filteredList = myData.filter(propdata =>{
       const searchText =text.toLowerCase();
       const currentTitle=propdata.title.toLowerCase();
      return currentTitle.indexOf(searchText) >-1;
  });
  setList(filteredList);
  }
  return (
    <View>
      
      <FlatList
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={<Search  onSearch={handleSearch}/>}
        data={list}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default App;

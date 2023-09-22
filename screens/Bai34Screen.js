import { StyleSheet, ScrollView, TouchableOpacity, Image, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
const Bai34Screen = ({navigation}) => {
    const items = [
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
        'https://pbs.twimg.com/media/FpvrgMHXgAEZrMj.jpg',
    ];
    

    const ListItem = ({item}) => (
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', margin: 20, elevation: 8}}>
            <Image source={{uri:item}} width={200} height={200} style={{borderRadius: 20,}}/>
        </TouchableOpacity>
    )
  return (
    <SafeAreaView>
        <ScrollView>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
            <Button title='Go Back' onPress={()=> navigation.goBack()}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Bai34Screen

const styles = StyleSheet.create({})
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import Swiper from 'react-native-swipe-image';

export default function ShowImageScreen({route}) {
    const [index,setIndex] = useState(route.params)
    const {data} = route.params
    return  (
      <View>
          <Swiper
              images={this.state.images}
              swipeBottom={(e) => this.bottom(e)}
              swipeTop={(e) => this.top(e)}
              imageHeight={number}
              textSize={number}
              textBold={boolean}
              textColor={String}
              textUnderline={boolean}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'darkslategrey'
    }
});

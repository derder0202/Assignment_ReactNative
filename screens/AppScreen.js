import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import MasonryList from '@react-native-seoul/masonry-list';




export default function AppScreen({navigation}) {
    const [data,setData] = useState([])
    const getAPI = ()=>{
        fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=ee4ca9a9ed0783db368a33b67af52b72&user_id=196607806%40N05&extras=views%2C+url_m%2C+url_z%2Curl_l&format=json&nojsoncallback=1')
            .then((response) => response.json())
            .then((json) => setData(json.photos.photo))
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(()=>{
        getAPI()
    },[])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MasonryList
                data={data}
                keyExtractor={(item,index) => index.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                {

                    const random = Math.random()<0.5;
                    return <TouchableOpacity onPress={()=>{
                        navigation.navigate("ShowImage",{index:data.indexOf(item),data:data})
                    }}>
                        <View style={styles.itemContainer}>
                            <Image source={{uri:item.url_m}}
                                   style={{height:random?150:250,
                                       alignSelf:'stretch',
                                       borderRadius:8,
                                   }}
                                   resizeMode={"cover"}
                            />
                        </View>
                    </TouchableOpacity>
                }
                }
                style={{ marginTop:20,
                    marginHorizontal:5,}}
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
    },
    itemContainer:{
        borderRadius:8,
        margin:5,
        backgroundColor:'white'
    }
});

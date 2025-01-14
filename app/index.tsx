import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import products from "../assets/products.json";
import Productlistitem from "@/app/productlistitem";


export default function HomeScreen() {
    return (
        //flatlist for small lists
        <FlatList
               data={products}
               numColumns={2}
               contentContainerClassName="gap-2"
               renderItem={({ item }) =>
                   <Productlistitem product = {item}/>
               }


            />

    );
}



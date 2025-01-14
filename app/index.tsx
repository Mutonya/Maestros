import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import products from "../assets/products.json";
import {Button, ButtonText} from "@/components/ui/button";


export default function HomeScreen() {
    return (

        <Button>
            <ButtonText>Hello World</ButtonText>
        </Button>
        // //flatlist for small lists
        // <FlatList
        //        data={products}
        //        renderItem={({ item }) => (
        //            <Text style={{ fontSize: 30 }}>{item.name}</Text>
        //        )}
        //
        //
        //     />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

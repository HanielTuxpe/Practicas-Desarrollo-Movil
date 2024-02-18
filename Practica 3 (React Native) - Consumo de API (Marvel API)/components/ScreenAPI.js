import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { styles } from "./Estilos";

export const ScreenAPI = () => {

    const [comic, setComic] = useState(null);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const publicKey = "29b39a9328f81952900d069186fc10ad";
        const privateKey = "b250c2635ef94ab11e718b67345450d32e56341a";
        //MD5 HASH
        const ts = 1;
        const hash = "6c17c93e76c772f88eee88e6c3f3ecaa";
        //CONSULTAS
        const lcomURL =
            "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&dateDescriptor=lastWeek&";
        fetch(`${lcomURL}ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then((res) => res.json())
            .then((data) => {
                setComic(data.data.results);
                setLoad(true);
            })
            .catch((err) => Alert.alert("Ocurrio un error nenis: " + err));
    }, []);

    const screenLoad = () => {
        return (
            <FlatList
                data={comic}
                renderItem={({ item }) => (
                    <View style={styles.bgnd}>
                        <View style={styles.conts}>
                            <Text style={styles.scrText}>{item.title}</Text>
                            <Image
                                source={{
                                    uri: item.thumbnail.path + "." + item.thumbnail.extension,
                                }}
                                style={styles.imgScrn}
                            />
                            <Text style={styles.scrText}>Descripción: {item.description}</Text>
                            <Text style={styles.scrText}>Serie: {item.series.name}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }

    const screenUnload = () => {
        return (
            <View style={styles.bgnd}>
                <Text>Cargando datos...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Head />
            {load ? screenLoad() : screenUnload() }
            <Foot />
        </View>
    );

};

export const Head = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textF}>Marvel API</Text>
            <Text style={styles.textF}>Información de tus comics favoritos</Text>
        </View>
    );
};


export const Foot = () => {
    return (
        <View style={styles.footer}>
            <Text>©️</Text>
            <Text style={styles.textF}>Marvel Cómics 2023</Text>
        </View>
    );
};

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const comicDetails = ({ route }) => {
    const { comic } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{comic.title}</Text>
            <Image
                source={{
                    uri: comic.thumbnail.path + "." + comic.thumbnail.extension,
                }}
                style={styles.image}
            />
            <Text style={styles.description}>Descripción: {comic.description}</Text>
            <Text style={styles.series}>Serie: {comic.series.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    series: {
        fontSize: 16,
    },
});

export default comicDetails;

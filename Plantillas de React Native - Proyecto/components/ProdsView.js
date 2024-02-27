import React from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <Image source={require("./img/LOGO.png")} style={styles.logo} />
            </View>
            <View style={styles.menu}>
                <TextInput style={styles.input} placeholder="🔍Buscar Productos" />
            </View>
            <View style={styles.menu}>
                <Image
                    source={require("./img/cerrar-sesion.png")}
                    style={styles.logo}
                />
            </View>
        </View>
    );
};

const Product = ({ item, productImage }) => {
    return (
        <View style={styles.product}>
            <Image source={productImage} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <TouchableOpacity style={styles.productButton}>
                    <Text style={styles.productButtonText}>Ver Detalles</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ProdsView = () => {
    const productList = [
        { id: "1", title: "Lápiz Maped #1", image: require('./img/laipz.jpg') },
        { id: "2", title: "Lápiz Maped #2", image: require('./img/laipz.jpg') },
        { id: "3", title: "Lápiz Maped #3", image: require('./img/laipz.jpg') },
        { id: "4", title: "Lápiz Maped #3", image: require('./img/laipz.jpg') },
        { id: "5", title: "Lápiz Maped #3", image: require('./img/laipz.jpg') },
        { id: "6", title: "Lápiz Maped #3", image: require('./img/laipz.jpg') },
    ];

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={productList}
                renderItem={({ item }) => <Product item={item} productImage={item.image} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#1d3019',
        padding: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
    input: {
        flex: 1,
        height: 40,
        width: 250,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 150,
    },
    productList: {
        padding: 15,
    },
    product: {
        width: "45%",
        gap: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 30,
        backgroundColor: "#923",
    },
    productImage: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: "cover",
    },
    productInfo: {
        padding: 10,
    },
    productTitle: {
        fontSize: 16,
        marginBottom: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    productButton: {
        backgroundColor: "#2D4263",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    productButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ccc",
        paddingVertical: 10,
    },
    icons: {
        alignItems: "center",
    },
});

export default ProdsView;

import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <View style={styles.personalInfo}>
                    <Text style={styles.sectionTitle}>Información Personal</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>
                            <Text style={styles.infoLabel}>Nombre:</Text> Juan
                        </Text>
                        <Text style={styles.infoLabel}>
                            <Text style={styles.infoLabel}>Apellido:</Text> Pérez
                        </Text>
                        <Text style={styles.infoLabel}>
                            <Text style={styles.infoLabel}>Usuario:</Text> juanperez123
                        </Text>
                        <Text style={styles.infoLabel}>
                            <Text style={styles.infoLabel}>Correo electrónico:</Text>{" "}
                            juan@example.com
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => setIsEditing(true)}
                    >
                        <Text style={styles.editButtonText}>Editar Información</Text>
                    </TouchableOpacity>
                </View>

                {isEditing && (
                    <View style={styles.editInfo}>
                        <Text style={styles.sectionTitle}>Editar Información</Text>
                        <View style={styles.editForm}>
                            <Text style={styles.editLabel}>Actualizar Correo:</Text>
                            <TextInput style={styles.input} placeholder="Nuevo Usuario" />
                            <Text style={styles.editLabel}>Contraseña Anterior:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nuevo Correo electrónico"
                            />
                            <Text style={styles.editLabel}>Nueva Contraseña:</Text>
                            <TextInput style={styles.input} placeholder="Nueva Contraseña" />
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={() => setIsEditing(false)}
                            >
                                <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setIsEditing(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff56dbb",
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    menu: {
        flex: 1,
        alignItems: "center",
    },
    logo: {
        width: 30,
        height: 30,
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        marginBottom: 20,
    },
    personalInfo: {
        backgroundColor: "#923",
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoLabel: {
        fontWeight: "bold",
        color: "#fff",
    },
    editButton: {
        backgroundColor: "#2D4263",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    editButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    editInfo: {
        backgroundColor: "#923",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    editForm: {
        marginBottom: 20,
    },
    editLabel: {
        fontWeight: "bold",
        marginBottom: 5,
        color: "#fff",
    },
    input: {
        backgroundColor: "#2D4263",
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: "#fff",
    },
    saveButton: {
        backgroundColor: "#2D4263",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#2D4263",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    cancelButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    icons: {
        alignItems: "center",
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
});

export default Profile;

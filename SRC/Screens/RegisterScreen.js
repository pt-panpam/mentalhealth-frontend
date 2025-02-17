import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window'); // Get screen dimensions

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [address, setAddress] = useState("");
    const [sex, setSex] = useState("male");
    const [age, setAge] = useState("21");

    const handleSubmit = () => {
        // Handle the form submission here, such as calling an API
        Alert.alert("Form Submitted", `Name: ${name}\nFather Name: ${fatherName}\nAge: ${age}\nSex: ${sex}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Registration</Text>
            
            {/* Profile Image */}
            <View style={styles.imageContainer}>
                <Image source={require('../images/dp.jpg')} style={styles.profileImage} />
            </View>

            {/* Full Name */}
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
            />

            {/* Father Name */}
            <Text style={styles.label}>Father Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your father's name"
                value={fatherName}
                onChangeText={setFatherName}
            />

            {/* Address */}
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your address"
                value={address}
                onChangeText={setAddress}
            />

            {/* Sex - Custom Radio Buttons */}
            <Text style={styles.label}>Sex</Text>
            <View style={styles.radioContainer}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSex('male')}
                >
                    <View style={[styles.radioCircle, sex === 'male' && styles.selectedCircle]} />
                    <Text style={styles.radioText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSex('female')}
                >
                    <View style={[styles.radioCircle, sex === 'female' && styles.selectedCircle]} />
                    <Text style={styles.radioText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSex('other')}
                >
                    <View style={[styles.radioCircle, sex === 'other' && styles.selectedCircle]} />
                    <Text style={styles.radioText}>Other</Text>
                </TouchableOpacity>
            </View>

            {/* Age */}
            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Age"
                value={age}
                onChangeText={setAge}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Link to Login */}
            <Text style={styles.loginText}>
                Already have an account? <Text style={styles.link}>Click here</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        width: width * 0.9, // 70% of screen width
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#f9f9f9",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        boxShadow: "1px 1px 5px black",
        marginTop: height * 0.05, // 5% of screen height
    },
    heading: {
        textAlign: 'center',
        fontSize: width * 0.06, // Responsive font size
        fontWeight: 'bold',
        marginBottom: 20,
        fontVariant: 'small-caps',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: height * 0.05, // Adjust height based on screen height
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 8,
        borderRadius: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: width * 0.2, // 20% of screen width
        height: width * 0.2, // Make it a square
        borderRadius: width * 0.1, // Half of the width for circular image
    },
    button: {
        backgroundColor: 'rgb(158, 234, 234)',
        borderRadius: 20,
        height: height * 0.06, // Adjust height based on screen height
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    loginText: {
        textAlign: 'center',
        marginTop: 20,
    },
    link: {
        color: 'blue',
    },
    radioContainer: {
        marginBottom: 20,
        flexDirection:'row'
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
    },
    selectedCircle: {
        backgroundColor: '#000',
    },
    radioText: {
        fontSize: 16,
    },
});

export default RegisterScreen;

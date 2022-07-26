import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';



const Signin = ({ navigation }) => {

    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("");



    return (

        <View style={styles.con}>



            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.contaire}>
                    Se Connecter
                </Text>
            </View>
            <ScrollView style={styleES.ScrollV}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require("../img/logo.png")} style={{ width: 300, height: 300, }} />
                </View>

                <Text style={styles.contaire2}>E-mail</Text>
                <TextInput
                    style={styles.bord}
                    autoCorrect={false}

                    keyboardType={"email-address"}
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.contaire2}>mot de passe</Text>
                <TextInput
                    style={styles.bord}
                    autoCorrect={false}

                    secureTextEntry={true}
                    value={PassWord}
                    onChangeText={(text) => setPassWord(text)}
                />

                <Text style={styleES.texte}>Minimum 6 caractére
                    <Text style={styleES.texte2}>.</Text>
                    <Text style={styleES.texte}>Lettre </Text>
                    <Text style={styleES.texte2}>.</Text>
                    <Text style={styleES.texte2}>Chiffre</Text>
                </Text>

                <><TouchableOpacity
                //onPress={() => { Signin1() }}
                >
                    <Text style={styles.Btn}>
                        Entrer
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                        <Text
                            style={styleES.texte3}>
                            Je n’ai pas de compte
                        </Text>
                    </TouchableOpacity></>
            </ScrollView>

        </View>


    )
}


const styles = StyleSheet.create({
    con: {
        flex: 1,
        padding: 10,
        backgroundColor: "#E1FAF6"

    },
    Btn: {
        backgroundColor: '#268C63',
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,

    },
    marg: {
        marginVertical: 10,
    },
    contaire: {
        color: "#539D48",
        fontSize: 34,
        fontWeight: "bold"
    },
    bord: {
        fontSize: 25,
        color: '#373737',
        backgroundColor: '#fffff0',
        shadowColor: '#999999',
        padding: 17,
        paddingHorizontal: 5,
        marginVertical: 1,
        borderRadius: 8,

    },
    contaire2: {
        color: "#373737",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,

    }
})
const styleES = StyleSheet.create({
    texte: {
        color: '#229764',
        fontSize: 18,
        alignItems: 'stretch',
    },
    texte2: {
        color: '#000',
        alignItems: 'stretch',
        fontSize: 18,
    },
    texte3: {
        color: "#7d7d7d",
        alignItems: "stretch",
        fontSize: 18,
        marginVertical: 10,
    },
    ScrollV: {
        marginHorizontal: 20,
    },
})
export default Signin;
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from "react-redux";
import { actionLogin } from '../../store/Action/authAction';
const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const handleLogin = () => {
        const userInfo = {
            phone,
            pass
        }
        dispatch(actionLogin(userInfo));
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Image source={require('../../assets/thumb/bglogin.png')} style={styles.imgBanner} />
                        <View style={styles.document}>
                            <Text style={styles.txtIntro}>Xin chào,</Text>
                            <Text style={styles.txtTitle}>Đăng nhập hoặc tạo tài khoản</Text>
                            <TextInput
                                placeholder='Số điện thoại'
                                placeholderTextColor="#d8d8d8"
                                style={styles.textInput}
                                value={phone}
                                onChangeText={(value) => setPhone(value)}
                            />
                            <TextInput
                                placeholder='Mật khẩu'
                                placeholderTextColor="#d8d8d8"
                                style={styles.textInput}
                                secureTextEntry
                                value={pass}
                                onChangeText={(value) => setPass(value)}
                            />
                            <TouchableOpacity style={styles.btnContainer} onPress={() => handleLogin()}>
                                <Text style={styles.txtContainer}>Tiếp tục</Text>
                            </TouchableOpacity>
                            <Text
                                style={{ fontSize: 14, color: "#0A68FF", fontWeight: "500", marginTop: 20, alignSelf: "center" }}
                                onPress={() => navigation.navigate("Register")}
                            >
                                Đăng kí tài khoản
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
                                <Text style={styles.txtFooter}>Hoặc tiếp tục bằng</Text>
                                <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
                            </View>

                            <View style={styles.itemLogo}>
                                <TouchableOpacity style={styles.btnLogo}>
                                    <Image source={require('../../assets/thumb/face.png')} style={styles.logo} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnLogo}>
                                    <Image source={require('../../assets/thumb/gg.png')} style={styles.logo} />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.txtPolicy}>
                                Bằng việc tiếp tục, bạn đã đọc và đồng ý với điều khoản sử dụng, chính sách bảo
                                mật thông tin cá nhân và hướng dẫn hủy/xóa tài khoản của Tiki
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    imgBanner: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'
    },
    document: {
        flex: 1.2,
        paddingHorizontal: 20,
        paddingTop: 40,
        // backgroundColor:'red'
    },
    txtIntro: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 12
    },
    txtTitle: {
        fontSize: 16,
        marginBottom: 20
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: "#d8d8d8",
        height: 50,
        color: 'black',
        fontSize: 20,
        marginBottom: 20
    },
    btnContainer: {
        backgroundColor: '#ff515a',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    txtContainer: {
        color: '#fff',
        fontSize: 20,
        padding: 6
    },
    btnEmail: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    txtEmail: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '450'
    },
    footer: {
        flex: 0.9,
        // backgroundColor:'red',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 50
    },
    txtFooter: {
        marginHorizontal: 15
    },
    itemLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnLogo: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginRight: 20
    },
    logo: {
        width: 50,
        height: 50,

    },
    txtPolicy: {
        marginTop: 20,
        fontSize: 14
    }


})

export default Login
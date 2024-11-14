import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Image source={require('../../assets/thumb/bglogin.png')} style={styles.imgBanner} />
                        <View style={styles.main}>
                            <TouchableOpacity style={styles.btnUpfile}>
                                <Image source={require('../../assets/thumb/camera.png')} style={styles.LogoUpfile} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                            <Text style={styles.label}>Tên</Text>
                            <TextInput
                                style={styles.textInput}
                                value={name}
                            />
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                value={email}
                            />
                            <Text style={styles.label}>Số điện thoại</Text>
                            <TextInput
                                style={styles.textInput}
                                value={phone}
                            />
                            <Text style={styles.label}>Mật khẩu</Text>
                            <TextInput
                                style={styles.textInput} placeholder='Gồm chữ cái thường, viết hoa, chữ số và kí tự đặc biệt'
                                secureTextEntry
                                value={pass}
                            />
                            <Text style={styles.label}>Nhập lại mật khẩu</Text>
                            <TextInput
                                style={styles.textInput} placeholder='Mật khẩu của bạn' secureTextEntry
                                value={passConfirm} />
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 3
    },
    container: {
        flex: 1,
        width: '100%',
    },
    imgBanner: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnUpfile: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 100
    },
    LogoUpfile: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    scrollContent: {
        padding: 20, // Thêm padding cho nội dung trong ScrollView
        flexGrow: 1, // Đảm bảo ScrollView có thể cuộn
        justifyContent: 'flex-start', // Đảm bảo nội dung bắt đầu từ trên
    },
    textInput: {
        borderBottomWidth: 0.8,
        marginBottom: 20, // Thêm khoảng cách giữa các TextInput
        height: 40, // Đặt chiều cao cho TextInput
    },
});

export default Register;
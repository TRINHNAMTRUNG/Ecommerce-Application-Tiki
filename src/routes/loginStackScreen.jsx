import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/loginPage.jsx";
import Register from "../pages/Login/registerPage.jsx";
import OtpPage from "../pages/Login/otpPage.jsx";


const Stack = createNativeStackNavigator();

const LoginStackScreen = () => {

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="OtpPage" component={OtpPage} />
        </Stack.Navigator>
    );
}

export default LoginStackScreen;
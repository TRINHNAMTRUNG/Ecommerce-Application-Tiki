
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MainTabNavigator from "./mainTabNavigation";
import LoginStackScreen from "./loginStackScreen";
import AdminStackScreen from "./adminStackScreen";
const Layout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const linking = {
        prefixes: ['myAppTiki://'], // URL scheme của bạn
        config: {
            screens: {
                PaymentScreen: 'payment-complete', // Trỏ đến màn hình thanh toán
            },
        },
    };
    return (
        <NavigationContainer linking={linking}>
            {
                // isAuthenticated ? <MainTabNavigator /> : <LoginStackScreen />
                isAuthenticated ? (user.role === "customer" ? <MainTabNavigator /> : <AdminStackScreen />) : <LoginStackScreen />
            }
        </NavigationContainer>
    )
}

export default Layout;

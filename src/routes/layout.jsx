
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MainTabNavigator from "./mainTabNavigation";
import LoginStackScreen from "./loginStackScreen";
const Layout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log("=?>>>> auth: ", isAuthenticated);
    return (
        <NavigationContainer>
            {
                isAuthenticated ? <MainTabNavigator /> : <LoginStackScreen />
            }
        </NavigationContainer>
    )
}

export default Layout;

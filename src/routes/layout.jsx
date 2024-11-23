
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MainTabNavigator from "./mainTabNavigation";
import LoginStackScreen from "./loginStackScreen";
import AdminPage from "../pages/Seller/adminPage";
import AdminStackScreen from "./adminStackScreen";
const Layout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    console.log("=?>>>> auth: ", isAuthenticated);
    return (
        <NavigationContainer>
            {
                isAuthenticated ? (user.role === "seller" ? <MainTabNavigator /> : <AdminStackScreen/>) : <LoginStackScreen />
                // isAuthenticated ? <MainTabNavigator /> : <LoginStackScreen />
            }
        </NavigationContainer>
    )
}

export default Layout;

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../pages/Home/homePage.jsx";
import HomeDetail from "../pages/Home/homeDetail.jsx";
import DetailProductPage from "../pages/DetailProduct/DetailProductPage.jsx";
import CartPage from "../pages/Cart/CartPage.jsx";
import promoPage from "../pages/Promo/promoPage.jsx";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >

            <HomeStack.Screen name="home" component={HomePage} />
            <HomeStack.Screen name="homeDetail" component={HomeDetail} />
            <HomeStack.Screen name="productDetail" component={DetailProductPage} />
            <HomeStack.Screen name="cartPage" component={CartPage} />
            <HomeStack.Screen name="promoPage" component={promoPage} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
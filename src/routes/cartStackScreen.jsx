import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartPage from '../pages/Cart/CartPage';
import PromoPage  from '../pages/Promo/promoPage'


const CartStack= createNativeStackNavigator();
const CartStackScreen = () => {
 
    return (
        <CartStack.Navigator initialRouteName="cartPage" screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="cartPage" component={CartPage} />
            <CartStack.Screen name="promoPage" component={PromoPage } />
         
     
        </CartStack.Navigator>
    )
}

export default CartStackScreen;
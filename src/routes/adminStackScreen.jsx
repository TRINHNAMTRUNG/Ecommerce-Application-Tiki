import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminPage from '../pages/Seller/adminPage';
import CreateProduct from '../pages/Seller/createProduct';
import CreatePromoCode from '../pages/Seller/couponPage';
import CreateNewProduct from "../pages/Seller/createNewProduct";

const AdminStack = createNativeStackNavigator();

const AdminStackScreen = () => {
  return (
    <AdminStack.Navigator initialRouteName="adminPage" screenOptions={{ headerShown: false }}>
      <AdminStack.Screen name="adminPage" component={AdminPage} />
      <AdminStack.Screen name="createProduct" component={CreateProduct} />
      <AdminStack.Screen name="createNewProduct" component={CreateNewProduct} />
      <AdminStack.Screen name="couponPage" component={CreatePromoCode} />
    </AdminStack.Navigator>
  );
};

export default AdminStackScreen;



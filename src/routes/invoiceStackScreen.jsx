import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvoiceListScreen from '../pages/Invoice/orderHistoryPage';
import InvoiceDetailScreen from '../pages/Invoice/orderDetailPage';

const InvoiceStack = createNativeStackNavigator();

const InvoiceStackScreen = () => {
  return (
    <InvoiceStack.Navigator initialRouteName="InvoiceList" screenOptions={{ headerShown: false }}>
      <InvoiceStack.Screen name="InvoiceList" component={InvoiceListScreen} />
      <InvoiceStack.Screen name="InvoiceDetail" component={InvoiceDetailScreen} />
    </InvoiceStack.Navigator>
  );
};

export default InvoiceStackScreen;

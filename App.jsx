
import Layout from './src/routes/layout';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import LoadingSpinner from './src/components/loadingSpinner';
import { ModalProvider, ModelAccept } from './src/components/modelDialog';

import SignUpForm from './src/pages/SellerLogin/signupSellerPage';
import SellerLogin from './src/pages/SellerLogin/loginSellerPage';
import AdminPage from './src/pages/Seller/adminPage';
import CreatePromoCode from './src/pages/Seller/couponPage';
import CreateProduct from './src/pages/Seller/createProduct';
import PaymentMethods from './src/pages/Invoice/invoicePage';
import ChooseRoleScreen from './src/pages/RoleSelection/roleSelection';
import InvoiceListScreen from './src/pages/Invoice/orderHistoryPage'
import InvoiceDetailScreen from './src/pages/Invoice/orderDetailPage';
import InvoiceStackScreen from './src/routes/invoiceStackScreen';

import ForgotPasswordScreen from './src/pages/forgotPassword/ForgotPasswordPages';
export default function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <LoadingSpinner />
    //     <ModalProvider>
    //       <Layout />
    //     </ModalProvider>
    //   </PersistGate>
    // </Provider>
    <NavigationContainer>
    <ForgotPasswordScreen />
  </NavigationContainer>
  );
}

// const stylesApp = StyleSheet.create({
//   containerApp: {
//     flex: 1,
//     backgroundColor: '#F4F4F4',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: "black",
//     borderWidth: 1
//   },
// });
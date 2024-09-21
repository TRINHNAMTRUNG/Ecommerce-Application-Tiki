import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomePage from './src/pages/Home/homePage';
import DetailProductPage from './src/pages/DetailProduct/DetailProductPage';
import Cartpage from './src/pages/Cartpage/cartPage';

export default function App() {
  return (
    <Provider store={store}>
      <View style={stylesApp.containerApp}>
        {/* <HomePage /> */}
        {/* <DetailProductPage/> */}
        <Cartpage />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const stylesApp = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 1
  },
});

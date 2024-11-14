
import Layout from './src/routes/layout';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/store';
import LoadingSpinner from './src/components/loadingSpinner';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingSpinner />
        <Layout />
      </PersistGate>
    </Provider>
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

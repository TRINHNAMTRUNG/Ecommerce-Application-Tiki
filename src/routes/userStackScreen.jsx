import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InforPage from "../pages/Profile/InforPage";
import EditInforPage from "../pages/Profile/EditInforPage";

const UserStackScreen = () => {
    const StackUser = createNativeStackNavigator();
    return (
        <StackUser.Navigator initialRouteName="user" screenOptions={{ headerShown: false }}>
            <StackUser.Screen name="user" component={InforPage} />
            <StackUser.Screen name="setting" component={EditInforPage} />
        </StackUser.Navigator>
    )
}

export default UserStackScreen;
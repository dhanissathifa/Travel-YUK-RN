import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailTrip from "./src/modules/DetailTrip";
import Bali from "./src/modules/Bali";
import DashboardContainer from "./src/modules/Dashboard/Container/DashboardContainer";
// import DetailTripContainer from "./src/modules/DetailTrip/Container/DetailTripContainer";
import BookContainer from "./src/modules/Book/Container/BookContainer";
import LoginContainer from "./src/modules/Login/Container/LoginContainer";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import Loading from "./src/modules/Loading/Loading";
import SplashScreen from "./src/modules/SplashScreen/SplashScreen";

const Stack = createStackNavigator();

const MainApp = () => {
  const stateGlobal = useSelector(state => state)
  console.log('state global:', stateGlobal)
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginContainer} />
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={DashboardContainer} />
        <Stack.Screen options={{ headerTitle:'Travel Package'}} name="DetailTrip" component={DetailTrip} />
        <Stack.Screen options={{ headerTitle: 'Detail Trip'}} name="Book" component={BookContainer} />
        <Stack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name="Bali" component={Bali} />
      </Stack.Navigator>
    </NavigationContainer>
    {stateGlobal.loading && <Loading />}
    </>
  )
}
const App = () => {
  return (
    <Provider store={store}>
    <MainApp/>
    </Provider>
    )

}
export default App;

// options={{ headerTitle: 'Travel Package', headerStyle: { backgroundColor: '#EED180' } }} />
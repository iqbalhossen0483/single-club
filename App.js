import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Dimensions, SafeAreaView } from "react-native";
import Login from "./screens/Login";
import LoginWithNumber from "./screens/LoginWithNumber";
import Profile from "./screens/Profile";
import { colors } from "./variants/colors";
import Category from "./components/profile/Category";
import Ragistation from "./screens/Ragistation";
import FamousAnchors from "./screens/FamousAnchors";
import SendRanking from "./screens/SendRanking";
import ReceivedRanking from "./screens/ReceivedRanking";

const Stack = createStackNavigator();

export default function App() {
  const height = Dimensions.get("window").height;
  const body = {
    paddingTop: 32,
    minHeight: height + 32,
    backgroundColor: "#E2E2E2",
  };
  return (
    <SafeAreaView style={body}>
      <StatusBar style='auto' backgroundColor='#fff' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='login'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='loginNumber' component={LoginWithNumber} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='ragistation' component={Ragistation} />
          <Stack.Screen name='famousAnchors' component={FamousAnchors} />
          <Stack.Screen name='sendRanking' component={SendRanking} />
          <Stack.Screen name='receivedRanking' component={ReceivedRanking} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

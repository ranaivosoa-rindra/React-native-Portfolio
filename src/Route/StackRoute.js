import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarrerScreen from "../Screens/Carrer/CarrerScreen";
import Home from "../Screens/Home/Home";
import ProjectsScreen from "../Screens/Projects/ProjectsScreen";
import SkillsScreen from "../Screens/Skills/SkillsScreen";

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CarrerScreen"
          component={CarrerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SkillsScreen"
          component={SkillsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProjectsScreen"
          component={ProjectsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: "#F1F7FD" },
          tabBarInactiveTintColor: "#265399",
          tabBarActiveTintColor: "#000",
        }}>
            <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
            MaterialIcons: ({ color, size }) => (
            <Ionicons name="cloud" color={color} size={size} />
          ),
        }}
      />
        </Tab.Navigator>
    )
}

export default TabNavigator;
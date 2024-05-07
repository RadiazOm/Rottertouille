
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import receptenTonen from "./src/Component/receptenTonen";
import ReceptDetails from "./src/Component/ReceptDetails";
import AllRecepten from "./src/Component/AllRecepten";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name={'Recepten'}
              component={receptenTonen}
              headerShown={false}
            />

          <Stack.Screen
              name={'ReceptenDetail'}
              component={ReceptDetails}

          />
            <Stack.Screen
            name={'AllRecepten'}
            component={AllRecepten}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


import * as React from "react";
import {Button, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";

function SecondScreen({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Second Screen</Text>
            <Button
                title="Go Home"
                onPress={() => navigation.navigate("Main")}
            />
        </View>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{animationEnabled: false}}
                />
                <Stack.Screen
                    name="Second"
                    component={SecondScreen}
                    options={{animationEnabled: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

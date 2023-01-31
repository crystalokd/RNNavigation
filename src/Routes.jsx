import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "react-navigation/native";

const Stack = createStackNavigator()


function Login( ){
    return(
        <View>
            <Text>I am a login</Text>
        </View>
    )
}


export const Routes = ({}) => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={} />
                </Stack.Navigator>
            </NavigationContainer>
        );
}
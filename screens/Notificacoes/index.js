import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Gerais from './Gerais';
import Mensagens from './Mensagens';

const topTab = createMaterialTopTabNavigator();

function Notificacoes() {
    return (
        <topTab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 19,
                textTransform: 'none',
                fontWeight: 'bold'
            },
            style: {
                elevation: 10,
                paddingTop: 10,
            }
        }}
        >
            <topTab.Screen
                name="Gerais"
                component={Gerais}
            />
            <topTab.Screen
                name="Mensagens"
                component={Mensagens}
            />
        </topTab.Navigator>
    )
}

export default Notificacoes;
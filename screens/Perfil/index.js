import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VisaoGeral from './VisaoGeral';
import MeusPosts from './MeusPosts';

const topTab = createMaterialTopTabNavigator();

function MeuPerfil() {
    return (
        <topTab.Navigator 
            tabBarOptions={{
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
                name="Visão Geral"
                component={VisaoGeral}
            />
            <topTab.Screen
                name="Meus Posts"
                component={MeusPosts}
            />
        </topTab.Navigator>
    )
}

export default MeuPerfil;
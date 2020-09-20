import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Descobrir from '../Descobrir';
import Seguindo from '../Seguindo';

const topTab = createMaterialTopTabNavigator();

function Home() {
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
            }}}
        >
            <topTab.Screen 
                name="Descobrir" 
                component={Descobrir} 
            />
            <topTab.Screen 
                name="Seguindo" 
                component={Seguindo} 
            />
        </topTab.Navigator>
    )
}

export default Home;
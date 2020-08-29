import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Descobrir from '../Descobrir';
import Seguindo from '../Seguindo';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function Home() {
    return (
        <Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 19,
                textTransform: 'none',
                fontWeight: 'bold'
              },
            style: {
                elevation: 10,
                height: 100,
                paddingTop: 45,
            }}}
        >
            <Screen 
                name="Descobrir" 
                component={Descobrir} 
            />
            <Screen 
                name="Seguindo" 
                component={Seguindo} 
            />
        </Navigator>
    )
}

export default Home;
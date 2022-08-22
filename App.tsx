/** 
 * @ Author: Fabricio Costa
 * initial date: 20/08/2022
 * linkedin: https://www.linkedin.com/in/fabricio-da-costa-162472211/
**/

import React from 'react';
import { SafeAreaView } from 'react-native';
import TabNavigation from './src/navigations/tabnavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D8D8D8'}}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

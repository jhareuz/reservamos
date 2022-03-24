import React, {useEffect} from 'react';
import RootStack from './app/navigationStack/rootStack';
import 'react-native-gesture-handler'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {

  return (
    <>
            <RootStack />
    </>
  );
};

export default App;
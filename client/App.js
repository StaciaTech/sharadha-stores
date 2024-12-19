import React, {createContext} from 'react';
import {LogBox} from 'react-native';
import Navigator from './src/navigation';
import {AppContextProvider} from './src/utils/context';
import {Provider} from 'react-redux';
import store from './src/api/store';

LogBox.ignoreAllLogs();
export const CommonContext = createContext();

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <Navigator />
      </AppContextProvider>
    </Provider>
  );
};
export default App;

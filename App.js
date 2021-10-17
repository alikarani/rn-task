import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/src/integration/react';
import { store, persistor } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

import { Provider } from 'react-redux';
import AppRouter from './Router/AppRouter';
import store from './app/store';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    );
}

export default App;

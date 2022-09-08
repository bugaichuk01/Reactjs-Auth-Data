import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {setupStore} from './store/store';
import {Provider} from "react-redux";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }`;

const theme = {
    phone: '(max-width: 425px)',
    desktop: '(max-width: 1920px) and (min-width: 1025px)'
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Global/>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
</React.StrictMode>
);
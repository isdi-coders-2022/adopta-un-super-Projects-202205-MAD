import React from 'react';
import { MarvelContextProvider } from './context/marvel-provider';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { FavPage } from './pages/favPage';
import { aMenuItems } from './interfaces/menu.items';
import Layout from './App/layout';
// import AppUI from "./AppUI"

function App() {
    const options: aMenuItems = [
        { path: '', label: 'Home - AUS', page: <HomePage /> },
        { path: 'favorites', label: 'Favorites', page: <FavPage /> },
        { path: '*', label: '', page: <Navigate replace to="" /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <MarvelContextProvider>
                    <Routes>
                        {options.map((item) => (
                            <Route
                                key={item.label}
                                path={item.path}
                                element={item.page}
                            ></Route>
                        ))}
                    </Routes>
                    {/* <AppUI/> */}
                </MarvelContextProvider>
            </Layout>
        </Router>
    );
}

export default App;

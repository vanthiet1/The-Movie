import React from 'react';
import {Routes, Route } from 'react-router-dom';
import publicRoutes from './routes/routes';
const App = () => {
    return (
            <div className="app">
                <Routes>
                           {publicRoutes.map((route,index)=>{
                            return(
                                <Route
                                key={index}
                                path={route.path}
                                element={
                                <route.component/>
                                }
                                >
                                </Route>
                            )
                           })}
                </Routes>
            </div>

    );
};

export default App;
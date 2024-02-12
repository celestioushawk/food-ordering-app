import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Filters from './components/Filters';
import AboutClass from './components/AboutClass';
import RestaurantContainer from './components/RestaurantContainer';
import SingleRestaurant from './components/SingleRestaurant';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

const App = () => {

    const user = {
        username: 'John Doe',
        email: 'john@gmail.com'
    }

    return (
        <UserContext.Provider value={user}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <RestaurantContainer />
            },
            {
                path: '/restaurants/:resId',
                element: <SingleRestaurant />
            }
        ]
    },
    {
        path: '/about',
        element: <AboutClass />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
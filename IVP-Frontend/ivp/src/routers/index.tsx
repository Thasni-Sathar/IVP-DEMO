import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';


import Login from "../pages/login/loginPage";
import Tile from "../pages/tile/tilePage";


function RouterIndex() {

    return (
        <>
            <Router>


                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/tile" element={<Tile />} />
                </Routes>

            </Router>
        </>
    );
}

export default RouterIndex;
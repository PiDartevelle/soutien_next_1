import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Characters from '../routes/Characters';

const Main = () => {
    return (
        <div>
            <div className="routes-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/character/:id" element={<Characters />} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;
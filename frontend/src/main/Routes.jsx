import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />}  />
    </Routes>
)

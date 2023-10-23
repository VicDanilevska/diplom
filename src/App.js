import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import AnimRoutes from "./components/AnimRoutes";
import {UserContextProvider} from "./context/UserContextProvider";

function App() {
    return (
        <Router>
            <UserContextProvider>
                <AnimRoutes/>
            </UserContextProvider>
        </Router>
    );
}

export default App;

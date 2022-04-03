import React from "react";
import Main from "./Main";
import Detail from "./Detail";
import { Route } from "react-router-dom";

function App() {
    const Date = ["일", "월", "화", "수", "목", "금", "토"]
    return (
        <div className="App">
            <div className="appContainer">
                <Route path="/" exact render={(props) => <Main Date={Date} />} />
                <Route path="/detail" component={Detail} />
            </div>
        </div>
    );
}
        
export default App;

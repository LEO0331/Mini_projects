import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Q7 from "./screens/Q7"


function App() {
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <Page>
                            <Home />
                        </Page>
                    }
                />
                <Route
                    path="question7"
                    element={
                        <Page>
                            <Q7 />
                        </Page>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;

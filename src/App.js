import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Other from "./pages/Other";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home-page">
                    <Home />
                </Route>
                <Route path="/about-page">
                    <AboutUs />
                </Route>
                <Route path="/other-page">
                    <Other />
                </Route>
                <Route path="/page-login">
                    <LoginPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

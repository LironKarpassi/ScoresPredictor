import React, { useEffect } from 'react';
import Layout from "./components/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Other from "./pages/Other";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import { auth } from "./api/firebase";
import ScorePredictor from './pages/ScorePredictor';

function App() {

    const [currentUser, setCurrentUser] = React.useState();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(user) {
                console.log("Logged in");
            }
            else {
                console.log("Logged out");
            }
            setCurrentUser(user);
            setLoading(false);
        });
    })

    if(loading) {
        return (<div>Loading...</div>)
    }

    return (
        <Layout currentUser={currentUser}>
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
                    {!currentUser ? <LoginPage /> : <Redirect to='/page-score-predictor'/>}
                </Route>
                <Route path="/page-signup">
                    {!currentUser ?  <SignUp /> : <Redirect to='/home-page'/>}
                </Route>
                <Route path="/page-score-predictor">
                    {!currentUser ? <LoginPage /> : <ScorePredictor />}
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

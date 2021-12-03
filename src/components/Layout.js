import React from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";

const Layout = ({ children, currentUser }) => {
    return (
        <>
            <Header userExists={currentUser !== null}/>
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default Layout;

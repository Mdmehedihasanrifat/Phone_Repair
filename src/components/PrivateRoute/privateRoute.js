import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {userContext} from "../../App";
const PrivateRoute = ({children,...rest}) => {
    const  [loggenInuser,SetloginUser]=useContext(userContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggenInuser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
import React, { useEffect, useState } from "react";
import CardWrapper from "../common/Card";

const withSimpleComponent = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState();
    const onLogin = () => {
        localStorage.setItem("user", "User");
        setIsAuth(localStorage.getItem("user"));
        console.log("Add");
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(localStorage.getItem("user"));
        console.log("Remove");
    };

    useEffect(() => {
        setIsAuth(localStorage.getItem("user"));
    }, []);
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withSimpleComponent;

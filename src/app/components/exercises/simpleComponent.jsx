import React from "react";
import PropTypes from "prop-types";
import SmallTitle from "../common/typografy/smallTitle";

const SimpleComonent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <>
                    <SmallTitle>Вы в системе</SmallTitle>
                    <button
                        className="btn btn-outline-primary"
                        onClick={onLogOut}
                    >
                        Выйти
                    </button>
                </>
            ) : (
                <>
                    <SmallTitle>Вам необходимо войти в систему</SmallTitle>
                    <button className="btn btn-outline-info" onClick={onLogin}>
                        Войти
                    </button>
                </>
            )}
        </>
    );
};

SimpleComonent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComonent;

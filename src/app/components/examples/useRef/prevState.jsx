import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [otherState, setOtherState] = useState("true");
    const prevState = useRef("");
    const toggleOtherState = () => {
        setOtherState((prev) => (prev === "true" ? "false" : "true"));
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle Other State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

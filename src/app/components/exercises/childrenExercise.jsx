import React, { Children } from "react";
import CollapseWrapper from "../common/collapse";

const ListComponent = ({ children }) => {
    return Children.toArray(children).map((child, i) => {
        return (
            <div key={i} className="d-flex flex-row ">
                <span className="me-3">{`${i + 1}.`}</span>
                {child}
            </div>
        );
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;

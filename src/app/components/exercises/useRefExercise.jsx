import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const blockRefHandler = () => {
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        console.log(blockRef.current.firstChild);
        // blockRef.current.firstChild.textContent = "text";
        blockRef.current.innerHTML = "<small>text</small>";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={blockRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-info mt-3" onClick={blockRefHandler}>
                blockRef
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

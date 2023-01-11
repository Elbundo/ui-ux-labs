import { useState } from "react";

export function Task1() {
    const [value, setValue] = useState(0)
    return (
        <>
            <div className="main_text">Счетчик</div>
            <div className="count">{value}</div>
            <div className="counter_buttons">
                <div className="counter_wrapper">
                    <div className="counter_btn" onClick={() => setValue(value === 0 ? 0 : value - 1)}>
                        <div className="minus"></div>
                    </div>
                </div>
                <div className="counter_wrapper">
                    <div className="counter_btn" onClick={() => setValue(value + 1)}>
                        <div className="minus"></div>
                        <div className="plus"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React from "react";
import "./style.css";

function MapTest2() {
    const msgLists = ["안녕하세요. 오늘의 일정입니다.",
        "점심시간이 11시 30분으로 변경되었습니다.",
        "이제 곧 회의가 시작됩니다."
    ];
    return (
        <div className="wrapper">
            {msgLists.map((msg, index) => (
                <div key={index} className={`message ${index === 0 ? "highlight" : ""}`}>
                    <p>{msg}</p>
                </div>
            ))}
        </div>
    );
}

export default MapTest2;
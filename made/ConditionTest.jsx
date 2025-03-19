import React, { useState } from "react";
import "./ConditionTest.css";

const ConditionTest = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div className={"wrapp"}>
                {isLogin ? <span>환영합니다</span> : null}
            </div>

            <button
                className="btn"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "로그아웃" : "로그인"}
            </button>

            <p>{isLogin ? "로그인되었습니다." : "로그인하지 않았습니다."}</p>
        </>
    );
};

export default ConditionTest;
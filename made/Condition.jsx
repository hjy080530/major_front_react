import { useState } from "react";

export default function ConditionR() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ background: "#33A6A6", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}>
                {isLoggedIn ? "로그아웃" : "로그인"}
            </button>
            <p>모두 함께 리액트 공부</p>
            {isLoggedIn && (
                <>
                    <p>환영합니다!~~~~</p>
                </>
            )}
        </div>
    );
}

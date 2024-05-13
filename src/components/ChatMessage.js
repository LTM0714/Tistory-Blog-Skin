// 메세지를 입력하고, 답변을 받았을 때 어떤 형식으로 보여줄지 스타일 및 div설정을 보여주는 부분
import React from "react";

const ChatMessage=({message, isUser})=>{
    const messageStyle={
        marginBottom: isUser ? "16px" : "0",
    };

    return(
        <div
            className={`chat-message ${isUser ? "user-message" : "bot-message"}`}
            style={messageStyle}
        >
            <p>{message}</p>
        </div>
    );
};

export default ChatMessage;
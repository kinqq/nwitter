import React from "react";

const TitleFactory = ({ title, onChange }) => {
    return (
        <input
            className="factoryInput__title"
            value={title || ""}
            onChange={onChange}
            type="text"
            placeholder="제목을 입력하세요."
            maxLength={120}
        />
    );
};

export default TitleFactory;

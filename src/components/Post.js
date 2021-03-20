import React, { useState } from "react";
import PostFactory from "./PostFactory";
import TitleFactory from "./TitleFactory";
import { dbService } from "fbase";
import { useHistory } from "react-router";

const Post = ({ userObj }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const history = useHistory();
    const onSubmit = async (event) => {
        event.preventDefault();
        if (title === "") {
            alert("제목을 입력하세요.");
            document.getElementsByClassName("factoryInput__title")[0].focus();
            return;
        } else if (desc === "") {
            alert("본문을 입력하세요.");
            document.getElementsByClassName("ql-editor")[0].focus();
            return;
        }
        const day = new Date();
        const nweetObj = {
            title: title,
            desc: desc,
            createdAt: day.toLocaleString(),
            creatorId: userObj.uid,
        };
        await dbService.collection("nweets").add(nweetObj);
        setTitle("");
        setDesc("");
        history.push("/");
    };
    const onTitleChange = (e) => {
        const {
            target: { value },
        } = e;
        setTitle(value);
    };
    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div>
                <TitleFactory title={title} onChange={onTitleChange} />
                <PostFactory value={desc} onChange={setDesc} />
                <div className="center">
                    <input
                        type="submit"
                        value="완료"
                        className="factoryInput__arrow"
                    />
                </div>
            </div>
        </form>
    );
};

export default Post;

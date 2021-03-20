import React, { useState } from "react";
import { dbService } from "fbase";
import { useParams } from "react-router-dom";

export default () => {
    const { postId } = useParams();
    const doc = dbService.collection("nweets").doc(postId);
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    doc.get()
        .then((doc) => {
            if (doc.exists) {
                setPost(doc.data().desc);
                setTitle(doc.data().title);
            } else {
                alert("삭제되었거나 없는 게시물입니다.");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return (
        <>
            <div className="post__title">{title}</div>

            <div
                className="post__desc"
                dangerouslySetInnerHTML={{ __html: post }}
            ></div>
        </>
    );
};

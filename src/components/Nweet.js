import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPencilAlt,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nweet = ({ nweetObj, editPriority }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm(
            "Are you sure you want to delete this nweet?"
        );
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };
    return (
        <div className="nweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input
                            type="text"
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            autoFocus
                            onChange={onChange}
                            className="formInput"
                        />
                        <input
                            type="submit"
                            value="Update Nweet"
                            className="formBtn"
                        />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
                    </span>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && (
                        <a
                            href={nweetObj.attachmentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nweet__img"
                        >
                            <img
                                src={nweetObj.attachmentUrl}
                                alt="attachment"
                            />
                        </a>
                    )}
                    <div className="nweet__actions">
                        {editPriority && (
                            <>
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                                <Link
                                    to={`http://localhost:3000/#/detail/${nweetObj.id}`}
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Nweet;

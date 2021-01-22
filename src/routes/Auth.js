import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider =
            name === "google"
                ? new firebaseInstance.auth.GoogleAuthProvider()
                : new firebaseInstance.auth.GithubAuthProvider();
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="5x"
                style={{ marginBottom: 30 }}
            />
            <AuthForm />
            <div className="authBtns">
                <button
                    onClick={onSocialClick}
                    name="google"
                    className="authBtn"
                >
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                </button>
                <button
                    onClick={onSocialClick}
                    name="github"
                    className="authBtn"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </button>
            </div>
        </div>
    );
};
export default Auth;

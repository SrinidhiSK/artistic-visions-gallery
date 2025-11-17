import ArtworkGrid from "@/components/gallery/ArtworkGrid.tsx";
import {artworks, getCharcoalArtwork, getPastelArtwork} from "@/data/artworks.ts";

import React, {useEffect} from "react";
import Navbar from "@/components/ui/navbar.tsx";
import {Link} from "react-router-dom";
import Footer from "@/components/ui/footer.tsx";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier ,signInWithPhoneNumber } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBPlksMm5wjhovyi1XluwLPhsnXuKX14hQ",
    authDomain: "artgallery-3d9f5.firebaseapp.com",
    projectId: "artgallery-3d9f5",
    storageBucket: "artgallery-3d9f5.firebasestorage.app",
    messagingSenderId: "1074462668162",
    appId: "1:1074462668162:web:0c9f44a0164ac097d5cb9b",
    measurementId: "G-TXB4W31299"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const SignIn = () => {
    useEffect(() => {
        function onSignInSubmit() {
            console.log("reCAPTCHA solved, proceeding with phone number authentication.");
            // You could trigger signInWithPhoneNumber here if you want
        }

        const auth = getAuth(app);
        auth.useDeviceLanguage();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        });

        const phoneNumber = "+919481626022";
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("SMS sent. ConfirmationResult set.");
            })
            .catch((error) => {
                console.error("Error sending SMS:", error);
            });
    }, []);

// const [code, setCode] = React.useState("");
    const verifyOtp = () => {
        const code = prompt("Enter the verification code you received via SMS") || "";
        if (code && window.confirmationResult) {
            window.confirmationResult.confirm(code)
                .then((result) => {
                    const user = result.user;
                    console.log("User signed in:", user);
                    alert('User signed in successfully!');
                })
                .catch((error) => {
                    console.error('Error during OTP verification:', error);
                    alert('Invalid verification code. Please try again.');
                });
        } else {
            alert("OTP was not sent or expired. Please try again.");
        }
    };


return (
        <div>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <button id="sign-in-button" onClick={verifyOtp}>
                    Verify OTP
                </button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
);
};
export default SignIn;

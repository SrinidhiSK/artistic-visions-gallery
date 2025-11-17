
import type { RecaptchaVerifier, ConfirmationResult } from "firebase/auth";

export {};

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        confirmationResult: ConfirmationResult;
    }
    declare let grecaptcha: ReCAPTCHA.Global;
}

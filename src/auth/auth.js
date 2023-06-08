import passport from "passport";
import { PassportStrategy } from "./passport-config.js";

export const initializeAuthentication = () => {
    passport.use(PassportStrategy);
}
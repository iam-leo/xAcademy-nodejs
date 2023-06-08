import passport from "passport";

export const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        console.log('Validandoo..');

        if(err || !user){
            const error = new Error('Usuario no autorizado');
            return next(error);
        }

        next()
    })(req, res, next)
}
import passportJwt from 'passport-jwt';
import { User } from '../models/User.js';

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

export const PassportStrategy = new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ClaveUltraSecreta'
}, async (jwtPayload, next) => {
    const user = await User.findOne({
        where: {
            name: jwtPayload.name
        }
    });

    if(user){
        next(false, user, null);
    }else {
        next(true, null, null);
    }
})

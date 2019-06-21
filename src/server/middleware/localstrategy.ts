import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { ComparePassword } from '../utils/security/passwords';
import DB from '../db';

passport.serializeUser((author, done) => done(null, author));
passport.deserializeUser((author, done) => done(null, author));

passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        let [author]: any = await DB.Authors.findOneByEmail(email);
        if(author && ComparePassword(password, author.password)) {
            done(null, author);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error)
    }
}));
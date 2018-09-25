const passport = require('passport');
const passportJwt = require('passport-jwt');
const db = require('../data/dbConfig')


const { JWT_SECRET } = process.env;
const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: JWT_SECRET,
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    
    db('users')
        .where({ id: payload.sub })
        .first()
        .then(user => {
            if(user){
                return done(null, user, payload);
            }else {
                console.log(user)
                return done();
            }
        }).catch(err => {
            console.log('jwt error', err)
        })

}));



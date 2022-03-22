const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pwd'
    },
    (username, password, done) => {
        console.log('localstorage')
        return done()
    }
)) 

passport.serializeUser(function(user, done) {
    console.log('serializeUser() 호출됨.');
    console.log(user);

    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserializeUser() 호출됨.');
    console.log(user);

    done(null, user);
})

module.exports = passport
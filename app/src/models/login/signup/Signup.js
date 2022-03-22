const SignupStorage = require('./SignupStorage');

class Signup {
    constructor(body) {
        this.body = body;
    }

    async checkId(data) {
        try {
            const list = await SignupStorage.checkId(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Signup;
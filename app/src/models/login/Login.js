const LoginStorage = require('./LoginStorage');

class Login {
    constructor(body) {
        this.body = body;
    }

    async getMember(data) {
        try {
            const list = await LoginStorage.getMember(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Login;
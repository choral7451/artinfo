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

    async findId(data) {
        try {
            const list = await LoginStorage.findId(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async findUser(data) {
        try {
            const list = await LoginStorage.findUser(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async temporaryUpdate(pw, data) {
        try {
            const list = await LoginStorage.temporaryUpdate(pw, data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Login;
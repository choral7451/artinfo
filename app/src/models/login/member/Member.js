const MemberStorage = require('./MemberStorage');

class Member {
    constructor(body) {
        this.body = body;
    }

    async clientInfoUpdate(data) {
        try {
            const list = await MemberStorage.clientInfoUpdate(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Member;
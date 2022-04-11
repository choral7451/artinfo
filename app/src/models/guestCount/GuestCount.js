const guestCountStorage = require("./GuestCountStorage");

class GuestCount {
    constructor(body) {
        this.body = body;
    }

    async setCount(ip) {

        try {
            const list = await guestCountStorage.setCount(ip);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async getCount() {
        try {
            const list = await guestCountStorage.getCount();
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = GuestCount;
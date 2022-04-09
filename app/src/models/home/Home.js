const HomeStorage = require("./HomeStorage");

class Home {
    constructor(body) {
        this.body = body;
    }

    async leftList() {
        try {
            const list = await HomeStorage.leftList();
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async rightList() {
        try {
            const list = await HomeStorage.rightList();
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Home;
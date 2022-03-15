const BoardStorage = require("./boardStorage");

class Board {
    constructor(body) {
        this.body = body;
    }

    async list(id) {
        try {
            const list = await BoardStorage.getList(id);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async listCount() {
        try {
            const list = await BoardStorage.listCount();
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Board;
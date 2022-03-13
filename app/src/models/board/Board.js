const BoardStorage = require("./boardStorage");

class Board {
    constructor(body) {
        this.body = body;
    }

    async list(type) {
        try {
            const list = await BoardStorage.getList(type);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Board;
const BoardStorage = require("./BoardStorage");

class Board {
    constructor(body) {
        this.body = body;
    }

    async list(path, id) {
        try {
            const list = await BoardStorage.getList(path, id);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async listCount(path) {
        try {
            const list = await BoardStorage.listCount(path);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Board;
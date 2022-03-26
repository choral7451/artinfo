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

    async religionList(path, id) {
        try {
            const list = await BoardStorage.religionList(path, id);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async religionListCount(path) {
        try {
            const list = await BoardStorage.religionListCount(path);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async religionListContent(queryId) {
        try {
            const list = await BoardStorage.religionListContent(queryId);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async religionWrite(data, id, content) {
        try {
            const list = await BoardStorage.religionWrite(data, id, content);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Board;
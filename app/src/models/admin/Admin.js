const AdminStorage = require("./AdminStorage");

class Admin {
    constructor(body) {
        this.body = body;
    }

    async list() {
        try {
            const list = await AdminStorage.getList();
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async adminSave(data) {
        try {
            const list = await AdminStorage.adminSave(data);
            return list
        } catch (err) {
            return { success: false, err };
        }
    }

    async adminInit() {
        try {
            const list = await AdminStorage.adminInit();
            return list
        } catch (err) {
            return { success: false, err };
        }
    }

    async adminCrawling(data) {
        console.log(" admin :"  + data)
        try {
            const list = await AdminStorage.adminCrawling(data);
            return list
        } catch (err) {
            return { success: false, err };
        }
    }

    async adminDelete(id) {
        try {
            const list = await AdminStorage.adminDelete(id);
            return list
        } catch (err) {
            return { success: false, err };
        }
    }

    async updateContentGet(id) {
        try {
            const list = await AdminStorage.updateContentGet(id);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }

    async updateContentSave(data) {
        try {
            const list = await AdminStorage.updateContentSave(data);
            return list;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Admin;
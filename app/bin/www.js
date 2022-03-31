"use strict";

const app = require('../app');
const logger = require("../src/config/logger")
const PORT = process.env.PORT || 3000;


app.listen(PORT, '0.0.0.0', () => {
    logger.info(`${PORT} 포트에서 서바가 가동되었습니다.`)
});
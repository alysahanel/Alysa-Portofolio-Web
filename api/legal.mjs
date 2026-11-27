import express from "express";
import legalApp from "../legal/backend/server.js";

const wrapper = express();
wrapper.use("/legal", legalApp);
wrapper.use("/", legalApp);

export default wrapper;

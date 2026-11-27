import express from "express";
import serverless from "serverless-http";
import legalApp from "../../legal/backend/server.js";

const wrapper = express();
wrapper.use("/legal", legalApp);
wrapper.use("/", legalApp);

export const handler = serverless(wrapper);

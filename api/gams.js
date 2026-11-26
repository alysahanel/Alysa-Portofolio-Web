import { createRequire } from "module";

const require = createRequire(import.meta.url);
const app = require("../gams/server");

export default app;

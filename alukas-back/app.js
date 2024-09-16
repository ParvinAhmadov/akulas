const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const connectDB = require("./db/ConnectionDb");
const blogRouter = require("./routers/blogRouters");

app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 8080;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

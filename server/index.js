const express = require("express");
const app = express();
const cors = require("cors");

const jobRoutes = require("./dynamo");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/", jobRoutes);
// port on which the server listens
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

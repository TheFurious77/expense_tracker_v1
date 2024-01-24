// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const connectDb = require("./config/connectDB");

// //config dot env

// dotenv.config();

// //call database

// connectDb();
// //rest object
// const app = express();

// //middlewares



// app.use(morgan("dev"));
// app.use(express.json());
// app.use(cors());

// //routes
// //user routes
// app.use("/api/v1/users", require("./routes/userRoutes"));
// //transections routes
// app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// //port
// const PORT = 8080 || process.env.PORT;

// //listen
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");

//config dot env

dotenv.config();

//call database

connectDb();
//rest object
const app = express();

//middlewares



app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoutes"));
//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//port
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

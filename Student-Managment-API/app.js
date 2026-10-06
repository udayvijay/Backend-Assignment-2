import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import logger from "./middleware/logger.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send("Student Management REST API is running");
});

app.use("/students", studentRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
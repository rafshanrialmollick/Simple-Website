const express = require("express");
const path = require("path");
const shopRoutes = require("./routes/shopRoutes");
const contactRoutes = require("./routes/contactRoutes");
const contactDataRoutes = require("./routes/contact-data");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");

const PORT = 3000;
const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", shopRoutes);
app.use("/", contactRoutes);
app.use("/", contactDataRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found | MyWebsite" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // In case we send JSON

// Route to handle form submissions
app.post("/contact", (req, res) => {
  const formData = req.body;

  // Append the submitted data to a file (contact_submissions.json)
  fs.readFile("contact_submissions.json", (err, data) => {
    let submissions = [];

    if (!err) {
      try {
        submissions = JSON.parse(data);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
      }
    }

    submissions.push(formData);

    fs.writeFile(
      "src/pages/api/contact_submissions.json",
      JSON.stringify(submissions, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return res.status(500).json({ message: "Error saving form data." });
        }
        console.log("Form submission saved:", formData);
        res.json({ message: "Form submitted successfully!", data: formData });
      },
    );
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

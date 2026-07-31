const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

const questions = require("./questions");
const selectQuestions = require("./greedySelector");
const { topicTree } = require("./topicTree");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    status: "Backend is running ✅",
    message: "Question Paper Generator API",
    endpoints: [
      "GET /topics",
      "POST /generate-paper",
      "POST /generate-mcq",
      "POST /get-pyqs"
    ]
  });
});

// AI MCQ Generator
app.post("/generate-mcq", async (req, res) => {
  const { topic } = req.body;

  const prompt = `Generate 3 multiple-choice questions (MCQs) for the topic "${topic}". Each should have 4 options and indicate the correct answer.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ mcqs: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({
      error: "AI generation failed",
      details: err.message,
    });
  }
});

// DSA-Based Paper Generator
app.post("/generate-paper", (req, res) => {
  const { examLevel, subject, topic, totalMarks } = req.body;

  let filtered = questions.filter((q) => q.examLevel === examLevel);

  if (subject) {
    filtered = filtered.filter(
      (q) => q.subject === subject || q.chapter === subject
    );
  }

  if (topic && topic !== "all") {
    filtered = filtered.filter((q) => q.topic === topic);
  }

  const paper = selectQuestions(filtered, totalMarks);
  res.json({ paper });
});

// Past Year Questions
app.post("/get-pyqs", (req, res) => {
  const { examLevel, year, subject } = req.body;

  let filtered = questions.filter(
    (q) => q.examLevel === examLevel && q.isPYQ && (!year || q.year === year)
  );

  if (subject) {
    filtered = filtered.filter(
      (q) =>
        (q.subject && q.subject === subject) ||
        (q.chapter && q.chapter === subject)
    );
  }

  res.json({ pyqs: filtered });
});

// Get Topics by Exam
app.get("/topics", (req, res) => {
  res.json(topicTree);
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
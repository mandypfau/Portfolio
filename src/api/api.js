const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const questions = [
  {
    id: 1,
    type: "flashcard",
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    type: "fill-in-the-blank",
    question: "The ___ is the powerhouse of the cell.",
    answer: "mitochondria",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which of the following is a prime number?",
    options: ["6", "8", "13", "21"],
    answer: "13",
  },
];

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.post("/questions", (req, res) => {
  const newQuestion = req.body;
  questions.push(newQuestion);
  res.status(201).json(newQuestion);
});

app.put("/questions/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const questionIndex = questions.findIndex((q) => q.id === questionId);

  if (questionIndex !== -1) {
    questions[questionIndex] = { ...questions[questionIndex], ...req.body };
    res.status(200).json(questions[questionIndex]);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
});

app.delete("/questions/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const questionIndex = questions.findIndex((q) => q.id === questionId);

  if (questionIndex !== -1) {
    questions.splice(questionIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Question not found" });
  }
});

const usersProgress = [
  // Add user progress data here
];

app.get("/users/:userId/progress", (req, res) => {
  const userId = req.params.userId;
  const userProgress = usersProgress.find(
    (progress) => progress.userId === userId
  );

  if (userProgress) {
    res.status(200).json(userProgress);
  } else {
    res.status(404).json({ message: "User progress not found" });
  }
});

app.post("/users/:userId/progress", (req, res) => {
  const userId = req.params.userId;
  const userProgressIndex = usersProgress.findIndex(
    (progress) => progress.userId === userId
  );

  if (userProgressIndex !== -1) {
    usersProgress[userProgressIndex] = {
      ...usersProgress[userProgressIndex],
      ...req.body,
    };
    res.status(200).json(usersProgress[userProgressIndex]);
  } else {
    const newUserProgress = { userId, ...req.body };
    usersProgress.push(newUserProgress);
    res.status(201).json(newUserProgress);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

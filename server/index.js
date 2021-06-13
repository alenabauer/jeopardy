const path = require('path');
const express = require("express");
var cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static('client/public'));
app.use(cors());

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/api/questions", (req, res) => {
    const questions = [
        {id: 1, question: "Назовите столицу Китая.", answer: "Пекин"},
        {id: 2, question: "Кто президент Китая?", answer: "习近平"},
        {id: 3, question: "Вопрос 3", answer: "Ответ на 3й вопрос"},
        {id: 4, question: "Вопрос 4", answer: "Ответ на 4й вопрос"},
        {id: 5, question: "Вопрос 5", answer: "Ответ на 5й вопрос"},
        {id: 6, question: "Вопрос 6", answer: "Ответ на 6й вопрос"},
        {id: 7, question: "Вопрос 7", answer: "Ответ на 7й вопрос"},
        {id: 8, question: "Вопрос 8", answer: "Ответ на 8й вопрос"},
        {id: 9, question: "Вопрос 9", answer: "Ответ на 9й вопрос"},
        {id: 10, question: "Вопрос 10", answer: "Ответ на 10й вопрос"},
        {id: 11, question: "Вопрос 11", answer: "Ответ на 11й вопрос"},
        {id: 12, question: "Вопрос 12", answer: "Ответ на 12й вопрос"},
        {id: 13, question: "Вопрос 13", answer: "Ответ на 13й вопрос"},
        {id: 14, question: "Вопрос 14", answer: "Ответ на 14й вопрос"},
        {id: 15, question: "Вопрос 15", answer: "Ответ на 15й вопрос"},
        {id: 16, question: "Вопрос 16", answer: "Ответ на 16й вопрос"},
        {id: 17, question: "Вопрос 17", answer: "Ответ на 17й вопрос"},
        {id: 18, question: "Вопрос 18", answer: "Ответ на 18й вопрос"},
        {id: 19, question: "Вопрос 19", answer: "Ответ на 19й вопрос"},
        {id: 20, question: "Вопрос 20", answer: "Ответ на 20й вопрос"},
        {id: 21, question: "Вопрос 21", answer: "Ответ на 21й вопрос"},
        {id: 22, question: "Вопрос 22", answer: "Ответ на 22й вопрос"},
        {id: 23, question: "Вопрос 23", answer: "Ответ на 23й вопрос"},
        {id: 24, question: "Вопрос 24", answer: "Ответ на 24й вопрос"},
        {id: 25, question: "Вопрос 25", answer: "Ответ на 25й вопрос"},
        {id: 26, question: "Вопрос финальный", answer: "Ответ на финальный вопрос"}
    ];
    res.json(questions);
})

// All other GET requests not handled before will return our React app

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
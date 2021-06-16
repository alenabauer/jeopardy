const path = require('path');
const express = require("express");
var cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/api/questions", (req, res) => {
    const questions = [
        {id: 1, question: "В каком городе Китая в 2008 году проходили летние Олимпийские игры?", answer: "Пекин"},
        {id: 2, question: "Какая провинция в переводе означает «южное облако»?", answer: "Юньнань"},
        {id: 3, question: "В каком городе находится центр изучения и разведения панды?", answer: "Чэнду"},
        {id: 4, question: "К какой провинции относится город Пекин?", answer: "Ни к какой, Пекин – это город центрального подчинения."},
        {id: 5, question: "Что это?", questionImg: "shanghai", answer: "Телевизионная башня Восточная жемчужина в Шанхае"},
        {id: 6, question: "Какой праздник называют «праздник драконьих лодок»?", answer: "端午节 duānwǔjié"},
        {id: 7, question: "Как звучит слово «праздник» по-китайски?", answer: "节日 jiérì"},
        {id: 8, question: "Что это? ", questionImg: "zongzi", answer: "Цзунцзы 粽子 zòngzi\nТрадиционная еда на праздник 端午节 duānwǔjié"},
        {id: 9, question: "Почему каждый год меняется дата празднования Китайского Нового года?", answer: "Китайский Новый год отмечают в 1й день 1 месяца по лунному календарю, поэтому дата каждый год разная. "},
        {id: 10, question: "Что такое «золотая неделя» в Китае?", answer: "Неделя праздничных выходных дней (на Китайский Новый год и на День образования КНР)"},
        {id: 11, question: "Какая провинция является родиной чая Пуэр?", answer: "Юньнань"},
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
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
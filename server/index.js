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
        {id: 11, question: "Выберите, какого китайского чая не существует:\nЖелтый чай / Белый чай / Коричневый чай?", answer: "Коричневый чай"},
        {id: 12, question: "Как переводится на русский 红茶 hóngchá?", answer: "Черный чай"},
        {id: 13, question: "Что это?", questionImg: "huacha", answer: "花茶 huāchá цветочный чай"},
        {id: 14, question: "Какая провинция является родиной чая Пуэр?", answer: "Юньнань"},
        {id: 15, question: "На картинке популярный сорт чая 铁观音tiě guānyīn «Железная Гуаньинь». К какому виду чая он относится?", questionImg: "guanyin", answer: "Улун"},
        {id: 16, question: "Как переводится на русский слово 有名 yǒumíng?", answer: "Известный"},
        {id: 17, question: "Какое из данных слов лишнее и почему?\n牛奶 niúnǎi / 糖 táng / 咖啡 kāfēi / 果汁 guǒzhī", answer: "糖 táng сахар, т.к. остальные слова – названия напитков"},
        {id: 18, question: "Какие тоны в предложении ni jiao shenme mingzi ?", answer: "Тоны: 3-4-2-0-2-0\nnǐ jiào shénme míngzi"},
        {id: 19, question: "Какое из данных слов лишнее и почему?\nsuān / xián / yuán / tián", answer: "元 yuán юань, т.к. остальные слова – названия разных вкусов"},
        {id: 20, question: "Из каких ключей состоит слово 想?", answer: "木 дерево, 目 глаз, 心 сердце"},
        {id: 21, question: "Какой вкус является типичным для блюд провинции Сычуань?", answer: "麻辣 málà «острый до онемения»"},
        {id: 22, question: "Что означает 香 xiāng?", answer: "Ароматный, аппетитный, приятный на вкус и запах (о еде)"},
        {id: 23, question: "Какое блюдо не относится к традиционным блюдам провинции Сычуань?\n麻辣烫 málàtàng / 红烧肉 hóngshāoròu /  麻辣豆腐 málà dòufu", answer: "红烧肉 hóngshāoròu"},
        {id: 24, question: "Какое пекинское блюдо является самым известным в мире?", answer: "烤鸭 kǎoyā утка по-пекински"},
        {id: 25, question: "Какой вкус является типичным для шанхайских блюд?", answer: "甜 tián сладкий"},
        {id: 26, question: "Какое блюдо изображено на картинке?", questionImg: "guobaorou", answer: "锅包肉 guōbāoròu гобаожоу"}
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
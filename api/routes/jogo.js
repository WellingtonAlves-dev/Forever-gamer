const db = require("../database/database");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage });

module.exports = app => {
    // Gets
    app.get("/", (req, res) => {
        res.status(200).json("Bem vindo á API do Games Forever");
    })
    app.get("/jogos", (req, res) => {
        db.find({}, (err, results) => {
            if (err) res.status(400).json(err);
            res.status(200).json(results);
        })
    })

    // Posts
    app.post("/jogos", upload.single("file"), (req, res) => {
        let nome_jogo = req.body.nome;
        let desc_jogo = req.body.desc;
        let nota_jogo = req.body.nota;
        let file = req.file.filename;

        console.log(file);

        db.insert({ nome_jogo, desc_jogo, nota_jogo, file }, (err, user) => {
            if (err) res.status(400).json({ erro: err });
            res.status(200).json(user);
        })
    })

}
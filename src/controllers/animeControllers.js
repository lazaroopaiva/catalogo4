const Anime = require("../models/Anime");

let message = "";

const getAll = async (req, res) => {
  try {
    const animes = await Anime.findAll();
    res.render("index", {
      animes,
      animesPut: null,
      animesDel: null,
      message,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
const getById = async (req, res) =>{
    try{
        const anime = await Anime.findByPk(req.params.id);
        res.render("details", {anime});
        
    }catch (err) {
        res.status(500).send({ err: err.message });
      }
}

const criar = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const anime = req.body;
    if (!anime.nome || !anime.sinopse || !anime.genero || !anime.imagem) {
      return res.redirect("/cadastro");
    }
    await Anime.create(anime);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const editar = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.id);
    if (!anime) {
      res.render("editar", { message: "Anime não encontrado" });
    }
    res.render("editar", { anime, message: "" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.id);
    const { nome, sinopse, genero, imagem } = req.body;
    anime.nome = nome;
    anime.sinopse = sinopse;
    anime.genero = genero;
    anime.imagem = imagem;
    const animeEd = await anime.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const deletar = async (req, res) =>{
 try{
    await Anime.destroy({where:{id: req.params.id}});
    message = "Anime removido com sucesso!"
    res.redirect("/");


 } catch (err) {
    res.status(500).send({ err: err.message });
  }


}



module.exports = {
  getAll,
  criar,
  create,
  editar,
  update,
  deletar,
  getById,
};

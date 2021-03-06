const  {Sequelize} = require("sequelize");
const database = require("../database/bd");
const Anime = database.sequelize.define("anime",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
  
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  
      sinopse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      },
      {
        freezeTableName: true, 
        timestamps: false,
        createdAt: false,
        updateAt: false
      })

    
const initTable = async () =>{
  await Anime.sync();
}

initTable()

module.exports = Anime

      


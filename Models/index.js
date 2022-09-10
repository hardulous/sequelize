const dbConfig = require('../config.js')
const {Sequelize,DataTypes} = require('sequelize')

// Connecting to our mysql database
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        }
    }
)

// Making connection ot mysql
sequelize.authenticate()
.then(()=>{
    console.log("Connected...")
})
.catch((err)=>{
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// configuring model with DB
db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)

// if force is true means everytime we re run our server we will re create the table and data but if false then will not create again and again
db.sequelize.sync({force:false})
.then(()=>{
    console.log("Yes Re-sync done")
})

module.exports = db
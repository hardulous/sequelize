module.exports = (sequelize,DataTypes)=>{

    // Defining model review schema
    const Review = sequelize.define("review",{
        rating:{
            type:DataTypes.INTEGER,
        },
        description:{
            type:DataTypes.TEXT
        }
    })

    return Product

}
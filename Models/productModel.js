module.exports = (sequelize,DataTypes)=>{

    // Defining model product schema
    const Product = sequelize.define("product",{
        title:{
            type:DataTypes.STRING,
            allowNull:false // means this field is required
        },
        price:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        },
        published:{
            type:DataTypes.BOOLEAN
        }
    })

    return Product

}
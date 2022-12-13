
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("user", {
        username :{
            type: DataTypes.STRING,
            allowNull: false
        },
        country :{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email :{
            type: DataTypes.STRING,
            allowNull: false
        },
        organization :{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return User
}
module.exports = function (sequelize, DataTypes) {
    const Data = sequelize.define("Data", {
        state: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        positive: {
            type: DataTypes.INTEGER
        },
        recovered: {
            type: DataTypes.INTEGER
        },
        deaths: {
            type: DataTypes.INTEGER
        },
        index: {
            type: DataTypes.INTEGER
        }
    })
    return Data;
};
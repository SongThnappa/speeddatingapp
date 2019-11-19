//might change this model after going through the socket.io example

module.exports = function (sequelize, DataTypes) {
    var Tables = sequelize.define("Tables", {
        dater1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        dater2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

    });
    return Tables;
};
module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("User", {

      fname: {

        type: Sequelize.STRING

      },

      lname: {

        type: Sequelize.STRING

      },

      email: {

        type: Sequelize.STRING

      },

      username: {

        type: Sequelize.STRING

      },

      avatar: {

        type: Sequelize.STRING

      }

    });

    return User;

  };
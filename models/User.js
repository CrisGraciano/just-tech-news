const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// This creates our user model
class User extends Model {}

// Define table columns and configuration
User.init(
    {
        // define and id column
        id: {
            // Use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // This is the equivalent of SQL's 'NOT NULL' option
            allowNull: false,
            // Instruct that this is the Primary KEy
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in the table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // Define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the password must be at least 4 characters long
                len: [4]
            }
        }
        // Table column definitions go here
    },
    {
        // Table configuration options go here (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // Pass in our imported sequelize connection (the direct connection to our databse)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamps fields
        timestamps: false,
        // Don't pluralize name of databse table
        freezeTableName: true,
        // use underscores instaed of camel-casing (ie. `comment_text` and not `commentText`)
        underscored: true,
        // Make it so our model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;
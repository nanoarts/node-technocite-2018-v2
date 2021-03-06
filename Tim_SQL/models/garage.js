const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://nanosix_be:vwZevFJ8@nanosix.be:5432/nanosix.be.mysql')


const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});
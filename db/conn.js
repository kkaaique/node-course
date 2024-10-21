const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',  
    dialect: 'mysql',
})

try {

    sequelize.authenticate()

} catch(error) {

    console.log(error)

}

module.exports = sequelize
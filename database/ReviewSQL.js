const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('review_service', 'postgres', 'notmongo', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Successfully connected to PG'))
  .catch((err) => console.log(err));

const Reviews = sequelize.define('review', {
  // timestamps: false,
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // autoIncrement: true,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  // timestamps: false,
});

const Images = sequelize.define('image', {
  // timestamps: false,
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  // timestamps: false,
})
  
sequelize.sync({ force: true });


module.exports = { Reviews, Images };













// sequelize
//   .authenticate()
//   .then((err) => {
//     console.log('Connection established');
//   })
//   .catch((err) => {
//     console.log('Unable to connect', err);
//   });


// module.exports = sequelize.define('reviews', {

//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   review_id: {
//     type: DataTypes.INTEGER,
//     allowNULL: false,
//   },
//   nickname: {
//     type: DataTypes.STRING,
//   },
//   rating: {
//     type: DataTypes.INTEGER,
//   },
//   title: {
//     type: DataTypes.STRING,
//   },
//   body: {
//     type: DataTypes.TEXT,
//   },
//   tags: {
//     type: DataTypes.STRING,
//   },
//   images: {
//     type: DataTypes.STRING,
//     // id: {
//     //   type: DataTypes.INTEGER,
//     // },
//     // url: {
//     //   type: DataTypes.STRING,
//     // },
//     // description: {
//     //   type: DataTypes.STRING,
//     // },
//   },
//   height: {
//     type: DataTypes.STRING,
//   },
//   weight: {
//     type: DataTypes.STRING,
//   },
//   fit: {
//     type: DataTypes.STRING,
//   },
//   age: {
//     type: DataTypes.STRING,
//   },
//   location: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   helpful_yes: {
//     type: DataTypes.INTEGER,
//   },
//   helpful_no: {
//     type: DataTypes.INTEGER,
//   },

//   // sequelize,
//   // modelName: 'Reviews',
// });

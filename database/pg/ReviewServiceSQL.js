const { Sequelize, DataTypes } = require('sequelize');
const faker = require('faker');

const sequelize = new Sequelize('review_service', 'postgres', 'notmongo', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
  }
});

sequelize.authenticate()
  .then(() => console.log('Successfully connected to PG'))
  .catch((err) => console.log(err));

const Reviews = sequelize.define('review', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.TEXT,
  },
  body: {
    type: DataTypes.TEXT,
  },
  height: {
    type: DataTypes.TEXT,
  },
  weight: {
    type: DataTypes.TEXT,
  },
  fit: {
    type: DataTypes.TEXT,
  },
  age: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.TEXT,
  },
  helpful_yes: {
    type: DataTypes.INTEGER,
  },
  helpful_no: {
    type: DataTypes.INTEGER,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

Reviews.sync({force: true})
  .then(() => {
    Reviews.create({
      product_id,
      id,
      nickname,
      rating,
      title,
      created_at,
      body,
      fit,
      age,
      height,
      weight,
      location,
      email,
      helpful_yes,
      helpful_no,
      tags
    });
  })

  const Images = sequelize.define('image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  Images.sync({force: true})
  .then(() => {
    Reviews.create({
      id,
      url,
      description
    });
  });
  
  // const Tags = sequelize.define('tag', {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     autoIncrement: true,
  //     primaryKey: true,
  //   },
  //   body: {
  //     type: DataTypes.STRING,
  //   },
  // });

  // Tags.sync({force: true})
  // .then(() => {
  //   Reviews.create({
  //     id,
  //     body
  //   });
  // });
  
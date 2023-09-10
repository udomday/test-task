const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Books = sequelize.define(
  "books",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    release: { type: DataTypes.DATE, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    pagecount: { type: DataTypes.DECIMAL, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const Reviews = sequelize.define(
  "reviews",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    likes: { type: DataTypes.DECIMAL, defaultValue: 0 },
    createdat: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Books.hasOne(Reviews, { foreignKey: "bookid" });
Reviews.belongsTo(Books, { foreignKey: "bookid" });

module.exports = {
  Books,
  Reviews,
};

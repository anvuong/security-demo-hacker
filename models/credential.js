'use strict';
module.exports = (sequelize, DataTypes) => {
  var Credential = sequelize.define('Credential', {
    url: DataTypes.STRING,
    key: DataTypes.STRING,
    value: DataTypes.STRING(10000),
  });
  return Credential;
};

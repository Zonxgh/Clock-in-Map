const Bookshelf = require('../config/bookshelf.config');
const Promise = require('bluebird');
const CheckIn = require('./check-in');
const Location = Bookshelf.Model.extend({
  tableName: 'pl_location',
  location: function(){
    return this.belongsTo(CheckIn,'ci_id','lc_ci_id');
  }
});

module.exports = Bookshelf.model('Location',Location); 

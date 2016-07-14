import Backbone from 'backbone';

const SaveUser = Backbone.Model.extend({
  url: 'https://tiny-za-server.herokuapp.com/collections/amandablogusers'
});

export default SaveUser;

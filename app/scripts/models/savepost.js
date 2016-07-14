import Backbone from 'backbone';

const SavePost = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/amandablog',
  idAttribute: '_id'
});

export default SavePost;

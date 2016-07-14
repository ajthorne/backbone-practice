import $ from 'jquery';
import Backbone from 'backbone';
import renderBlogList from './bloglist';
import SavePost from '../models/savepost';


function renderSingleBlog(id) {
  let postId = new SavePost({_id: id});
  let postUrl = (postId.get('_id'));

  renderBlogList();

  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/amandablog/' + postUrl,
    success: function(response) {
      console.log(response);
      let newBlog = $(`<div class="new-blog">
      <h2 class="new-blog-title">${response.title}</h2>
        </div>
        <div class="new-blog-body">${response.body}
        </div>`);
        $('.blog-section').empty().append(newBlog);
  }
});
}

export default renderSingleBlog;

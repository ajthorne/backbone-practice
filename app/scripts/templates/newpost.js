import nav from './nav';
import $ from 'jquery';
import SavePost from '../models/savepost';
import router from '../router';

function renderNewPost() {
  let newPost = $(`<div class="new-post">
  <h2>Make a New Post</h2>
  	<form>
  		<input class="postTitle" type="text" name="title" placeholder="Give me a title">
  		<textarea name="body" class="postBody" placeholder="What's on your mind?"></textarea>
  		<input class="submitPost" type="button" name="Submit" value="Submit">
  	</form>
  </div>`);

  $('.container').empty().append(nav).append(newPost);

  $('.submitPost').on('click', function(evt) {
    evt.preventDefault();
    let post = new SavePost({
      title: $('.postTitle').val(),
      body: $('.postBody').val()
    });
    post.save(null, {
      success: function(response) {
        console.log('posted!');
        router.navigate('bloglist', {trigger: true});
      }
    });
  });
}

export default renderNewPost;

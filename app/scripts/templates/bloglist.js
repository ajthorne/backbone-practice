import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import nav from './nav';
import renderSingleBlog from './bloglistsingle';

function renderBlogList () {
  let blogList = $(`
    <div class="list-container">
    	<aside>
      <h2>Previous Blog Posts</h2>
    		<ul class="blog-list">
    		</ul>
    	</aside>
      <div class="blog-section">
      </div>
    </div>`);

    $('.container').empty().append(nav).append(blogList);

    $.ajax({
      url: 'https://tiny-za-server.herokuapp.com/collections/amandablog',
      success: function(response) {
        response.forEach(function(blog) {
          let singleblog = (_.pick(blog, 'title'));
          let blogId = (_.pick(blog, '_id'));
          // console.log(blogId);
          let blogListLi = $(`<li class="blog-title"><a class="blog-title-link" href="#bloglist/${blogId._id}">${singleblog.title}</a></li>`);
          // console.log(singleblog.title);
          $('.blog-list').append(blogListLi);
          });
        }
      });
      }

export default renderBlogList;

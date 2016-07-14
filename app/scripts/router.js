import Backbone from 'backbone';
import $ from 'jquery';
import renderNewPost from './templates/newpost';
import renderNewUser from './templates/newuser';
import renderBlogList from './templates/bloglist';
import renderSingleBlog from './templates/bloglistsingle';

const Router = Backbone.Router.extend({
  routes: {
    newpost: 'newPostFunction',
    newuser: 'newUserFunction',
    bloglist: 'blogListFunction',
    'bloglist/:id': 'viewBlogFunction',
    bookmark: 'bookmarkFunction',
    bloghome: 'blogHomeFunction'
  },
  newPostFunction() {
    renderNewPost();
  },

  newUserFunction() {
    renderNewUser();
  },

  blogListFunction() {
    renderBlogList();
  },

  viewBlogFunction(id) {
    renderSingleBlog(id);
  },

  // bookmarkFunction() {
  //
  // },

  // blogHomeFunction() {
  //
  // }
});

const router = new Router();

export default router;

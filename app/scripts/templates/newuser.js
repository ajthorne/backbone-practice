import $ from 'jquery';
import Backbone from 'backbone';
import nav from './nav';
import SaveUser from '../models/saveuser';

function renderNewUser() {
  let user = $(`<div class="new-user">
  <h2>Create a New User</h2>
  	<form>
  		<input type="text" id="first-name" name="firstname" placeholder="First name">
  		<input type="text" id="last-name" name="lastname" placeholder="Last name">
  		<textarea name="address" id="address" placeholder="Address"></textarea>
  		<input type="text" id="number" name="phonenumber" placeholder="Phone number">
  		<input id="submitUser" type="button" name="Submit" value="Submit">
  	</form>
  </div>`);

  $('.container').empty().append(nav).append(user);

  $('#submitUser').on('click', function(evt) {
    evt.preventDefault();
    let newUser = new SaveUser({
      'First name': $('#first-name').val(),
      'Last name': $('#last-name').val(),
      'Address': $('#address').val(),
      'Phone number': $('#number').val()
    });
    newUser.save(null, {
      success: function(response) {
        console.log('Added a user to the database!');
      }
    });
  });
}

export default renderNewUser;

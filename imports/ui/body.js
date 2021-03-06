import { Template } from 'meteor/templating';
import './task.js';
import './body.html';
import { Tasks } from '../api/tasks.js';
Template.body.helpers({
  tasks() {
    // Show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});
Accounts.ui.config({
passwordSignupFields: "USERNAME_ONLY"
});
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });


 

    // Clear form

    target.text.value = '';

  },

});


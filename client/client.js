// All Tomorrow's Parties -- client

Meteor.subscribe("directory");
Meteor.subscribe("localisation");


Accounts.ui.config({
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});



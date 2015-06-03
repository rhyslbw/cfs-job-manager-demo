Template.main.helpers({
  images: function () {
    return Images.find();
  },
  jobs: function() {
    return FS.JobManager.jobCollection.find();
  },
  logMe: function(){
    console.log(FS.JobManager.jobCollection.findOne())
  }
});

Template.main.events({
  'click .insert-image': function () {
    Meteor.call('insertImage', function(err, res){
      if(!err)
        console.log('Image inserted with ID', res._id);
    });
  },
  'click .remove-images': function () {
    Meteor.call('removeImages', function(err, res){
      if(!err)
        console.log(res, 'images removed');
    });
  },
  'click .remove-jobs': function () {
    Meteor.call('removeJobs', function(err, res){
      if(!err)
        console.log(res, 'jobs removed');
    });
  }
});

Meteor.methods({
  insertImage: function(){
    var fileObj = new FS.File('http://lorempixel.com/400/200/');
    return Images.insert(fileObj, function (error, result) {
      if (!error) {
        console.log('Image inserted', result._id);
      } else {
        console.log('Image insert failed', error);
      }
    });
  },
  removeImages: function(){
    return Images.remove({});
  },
  removeJobs: function(){
    return FS.JobManager.jobCollection.remove({});
  }
})
FS.debug = true;

var createThumb = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).resize('250', '250').gravity('Center').extent('150', '150').stream().pipe(writeStream);
};

Images = new FS.Collection('images', {
    stores: [
      new FS.Store.GridFS('thumbStore', { transformWrite: createThumb }),
      new FS.Store.GridFS('fullSizeStore')
    ],
    filter: {
      allow: {
        contentTypes: ['image/*'] //allow only images in this FS.Collection
      }
    }
  }
);

OtherFiles = new FS.Collection('otherFiles', {
    stores: [
      new FS.Store.GridFS('OtherStore1'),
      new FS.Store.GridFS('OtherStore2')
    ],
    filter: {
      allow: {
        contentTypes: ['image/*'] //allow only images in this FS.Collection
      }
    }
  }
);
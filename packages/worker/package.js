Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-CollectionFS.git',
  name: 'cfs:worker',
  version: '0.2.0',
  summary: 'CollectionFS, file worker - handles file copies/versions'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'cfs:base-package@0.0.30',
    'cfs:tempstore@0.1.4',
    'cfs:job-manager@0.1.0',
    'cfs:storage-adapter@0.2.1'
  ]);

  api.use([
    'livedata',
    'mongo-livedata',
    'vsivsi:job-collection@1.1.0'
  ]);

  api.addFiles([
    'fileWorker.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('cfs:standard-packages@0.0.0');

//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict', 'random']);

//   api.addFiles('tests/client-tests.js', 'client');
//   api.addFiles('tests/server-tests.js', 'server');
// });

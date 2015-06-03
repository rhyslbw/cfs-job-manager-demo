# CollectionFS + JobCollection demo Meteor app
See [this PR](https://github.com/CollectionFS/Meteor-CollectionFS/pull/667) for context.

Demonstration of [CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS) implementing [Job-Collection](https://github.com/vsivsi/meteor-job-collection) to enable systems with multiple instances sharing the same Mongo collections. In combination with a centralised TempStore, Fileworkers can be distributed and scaled horizontally, including on multi-core environments using [Meteorhacks Cluster](https://github.com/meteorhacks/cluster)

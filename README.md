# frame.js desktop editor

Electron version of @mrdoob's [frame.js editor](http://mrdoob.github.io/frame.js/editor/). Work in progress. Created for my personal projects. I haven't provided a binary for now.

Read more about frame.js at [http://mrdoob.github.io/frame.js/](http://mrdoob.github.io/frame.js/)

### Differences with web editor

* Copy and paste functions
* Open and save instead of import and export
* File paths are (and should stay) relative to the project on your hard disk. If you intend to use libraries and other files, you should start by saving your project.
* At this point, there is no auto-save and the app doesn't keep track if you have changed something. Be sure to save your project often.
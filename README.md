# frame.js desktop editor

Electron fork of @mrdoob's [frame.js editor](http://mrdoob.github.io/frame.js/editor/). Work in progress. Created for my personal projects. No binary is provided at this stage, but it should run on any supported OS using Electron. Feel free to contribute!

Read more about frame.js at [http://mrdoob.github.io/frame.js/](http://mrdoob.github.io/frame.js/)

### Differences with web editor

* Copy and paste functions
* Open and save instead of import and export
* File paths are (and should stay) relative to the project on your hard disk. If you intend to use libraries and other files, you should start by saving your project. One example project (from the original editor) is included with its paths fixed.
* At this point, there is no auto-save and the app doesn't keep track if you have changed something. Be sure to save your project often.

### Possible bugs & problems

* To avoid using non-relative paths within JSON files the renderer base URI is set to project path. This might cause weird things to happen in some cases, but mostly everything seems to run fine. I've found one minor bug with the play button SVG being lost due to changed path, but it's easy to fix.
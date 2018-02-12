# frame.js desktop editor

Electron fork of @mrdoob's [frame.js editor](http://mrdoob.github.io/frame.js/editor/). Work in progress - this is created for a personal project, so changes to the app might be somewhat erratic. No binary is provided at this stage, but it should run on any supported OS using Electron. Feel free to contribute!

Read more about frame.js at [http://mrdoob.github.io/frame.js/](http://mrdoob.github.io/frame.js/)

### Differences with the web editor

* Copy and paste functions
* Open and save instead of import and export
* Libraries can be added directly
* File paths are (and should stay) relative to the project on your hard disk. If you intend to use libraries and other files, you should start by saving your project in its final path. *Save as...* tries to relocate your libraries automatically if the path is changed, but you might still need to fix things manually in the JSON file. 
* At this point, there is no auto-save and the app doesn't keep track if you have changed something. Be sure to save your project often.

### Possible bugs & problems

* To avoid using non-relative paths within JSON files the renderer base URI is set to project path. This might cause weird things to happen in some cases, but mostly everything seems to run fine. There's one known bug with the play button directly caused by this situation (play button SVG file becomes 404), but it will be easy to fix.

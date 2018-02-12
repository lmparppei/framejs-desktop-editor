# frame.js desktop editor

Electron fork of @mrdoob's [frame.js editor](http://mrdoob.github.io/frame.js/editor/). Work in progress - this is created for a personal project, so changes to the app might be somewhat erratic. It should run on any supported OS using Electron. Feel free to contribute!

Read more about frame.js at [http://mrdoob.github.io/frame.js/](http://mrdoob.github.io/frame.js/)

If you dare, you can download the 0.1.0 binary at [https://www.dropbox.com/s/zhvfqp6ok6qvgsp/Frame.js%20Desktop%20Editor%200.1.0.zip?dl=1](https://www.dropbox.com/s/zhvfqp6ok6qvgsp/Frame.js%20Desktop%20Editor%200.1.0.zip?dl=1).

### Differences from the web editor

* Copy and paste functions (Cmd-C, Cmd-V and Cmd-D to duplicate)
* Open and save instead of import and export
* Libraries can be added and removed (not thoroughly tested yet)
* File paths are (and should stay) relative to the project on your hard disk. If you intend to use libraries and other files, you should start by saving your project in its final path. *Save as...* tries to relocate your libraries automatically if the path is changed, but you might still need to fix things manually in the JSON file.
* You can turn on the developer console under help menu
* To avoid using non-relative paths within JSON files the renderer base URI is set to project path. This might cause weird things in some cases, but mostly everything seems to run fine.

### Note

* Remember to save your project often as there is no auto-save and things are still a bit wonky
* I've tried to keep the desktop stuff as separated as possible to be able to include future features of frame.js web editor. App.js and Tools.js are the core components for desktop functionality.
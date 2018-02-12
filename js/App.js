// App settings

var app = {
	devMode: true,
	name: "frame.js desktop editor",
	status: null,
	saved: true,

	project: {
		path: null,
		file: null,
	},

	setCurrentProject: function (file) {
		var project = '';		
		if (!file) {
			project = 'New project';

			app.project.file = null;
			app.project.path = path.dirname(require.main.filename);
			document.head.innerHTML = app.header + 
				"<base href='" + path.dirname(require.main.filename) + "/'>";

		} else {

			console.log('Loaded project');
			project = path.basename( file );

			app.project.file = path.basename( file );
			app.project.path = path.dirname( file );
			document.head.innerHTML = app.header + 
				"<base href='" + app.project.path + "/'>";
		
		}

		document.title = app.name + " - " + project;
	}
}

window.addEventListener("beforeunload", function (event) {
	editor.config.setKey( 'lastProject', path.join(app.project.path, app.project.file) );

	if (app.devMode) { return; }

  	if (!app.shutDown) { event.preventDefault(); } else { return null; }
  	  
 	if (confirm("All unsaved data will be lost. Are you sure?")) {
		app.shutDown = true;
		window.close();
  	} else {
  		event.preventDefault();
  		event.returnValue = "No";
  	}
});
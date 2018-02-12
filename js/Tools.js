var Tools = function (editor) {

	this.delete = function () {
		if (editor.selected) {
			editor.removeAnimation( editor.selected );
			editor.selected = null;
		}
	}

	this.animation = function (animation) {
		console.log(animation);
	}

	this.duplicate = function (animation) {
		if ( editor.selected === null && animation === null) return;
	
		var selected;
		if (animation) selected = animation; else selected = editor.selected;

		var offset = selected.end - selected.start;

		var animation = new FRAME.Animation(
			selected.name,
			selected.start + offset,
			selected.end + offset,
			selected.layer,
			selected.effect
		);

		editor.addAnimation( animation );
		editor.selectAnimation( animation );
	}

	this.copy = function () {
		if (editor.selected === null) return;
		this.copied = editor.selected;
	}

	this.paste = function () {
		if (this.copied === null) return;

		var offset = this.copied.end - this.copied.start;
		console.log(this.copied.end, this.copied.start);

		var animation = new FRAME.Animation(
			this.copied.name,
			editor.player.currentTime,
			editor.player.currentTime + offset,
			this.copied.layer,
			this.copied.effect
		);

		editor.addAnimation( animation );
		editor.selectAnimation( animation );
	}

	this.recolor = function (selected, color) {
		if (selected === null) return;

		editor.selected.color = color;
		editor.selected.className (color);
	}

	this.open = function (file) {

		function openFile (filename) {
			if (!fs.existsSync(filename)) return;

			app.setCurrentProject(filename);

			fs.readFile(filename, 'utf-8', function (err, data) {
				editor.clear();
				editor.fromJSON( JSON.parse( data ) );
			});
		}

		if (file && fs.existsSync(file)) {
			openFile(file);
			return true;
		}

		dialog.showOpenDialog({
			title: 'Open frame.js project',
			filters: [
				{ name: 'JSON files', extensions: ['json'] }
			],
			properties: ['openFile']
		}, function (filePaths) {
			if (!filePaths) return;

			openFile(filePaths[0]);
		});
	}

	this.save = function (saveAs) {
		if (saveAs || !app.project.path || !app.project.file) {
			dialog.showSaveDialog({
				title: 'Save frame.js JSON',
				filters: [
					{ name: 'JSON files', extensions: ['json'] }
				]
			}, function (filename) {
				if (!filename) return;

				if (saveAs && editor.libraries.length > 0) {
					
					var newPath = path.dirname(filename);
					var libraries = [];

					for (var l in editor.libraries) {
						
						var originalPath = path.join(app.project.path, editor.libraries[l]);
						var newPath = path.relative(newPath, originalPath);
						libraries.push(newPath);

					}

					editor.libraries = libraries;
					for (var l in editor.libraries) {
						editor.addLibrary(editor.libraries[l]);
					}
					
					alert('Note: Project was saved with a new name. Libraries use relative paths, so double-check your library settings under Project tab. If you encounter problems, fix all library paths manually in the JSON file.');
					return;
				}

				app.setCurrentProject(filename);
				tools.save();
			});
			return;
		}

		var output = JSON.stringify( editor.toJSON(), null, '\t' );

		fs.writeFile(path.join(app.project.path, app.project.file), output, (err) => {
			if (err) console.log("Error writing file");
		});

		app.saved = true;
		console.log("Project saved");
	}

	this.addLibrary = function (panel) {
		dialog.showOpenDialog({
			title: 'Add libraries',
			filters: [
				{ name: 'JavaScript files', extensions: ['js'] }
			],
			properties: ['openFile', 'multiSelections']
		}, function (filePaths) {

			for (var f in filePaths) {
				var file = path.join( path.relative( app.project.path, path.dirname(filePaths[f])), path.basename(filePaths[f]) );
				editor.addLibrary(file);
			}

			return;
		});
	}

}
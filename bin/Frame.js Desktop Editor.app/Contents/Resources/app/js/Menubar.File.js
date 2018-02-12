/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.File = function ( editor ) {

	var signals = editor.signals;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'File' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// New

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'New' );
	option.onClick( function () {

		if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

			editor.clear();
			app.setCurrentProject();

		}

	} );
	options.add( option );

	// import

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Open' );
	option.onClick( Open );
	options.add( option );

	function Open () {

		if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) )
			tools.open();

	}

	// save

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Save' );
	option.onClick( Save );
	options.add( option );

	signals.exportState.add( Save );

	function Save () {
		tools.save();
	}

	// save

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Save as...' );
	option.onClick( SaveAs );
	options.add( option );

	signals.exportState.add( SaveAs );

	function SaveAs () {
		tools.save(true);
	}

	return container;

};

/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Edit = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Edit' );
	container.add( title );

	//

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// copy

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Copy' );
	option.onClick( function () {

		if ( editor.selected === null) return;
		tools.copy();

	} );
	options.add( option );

	// paste

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Paste' );
	option.onClick( function () {

		if ( editor.selected === null) return;
		tools.paste();

	} );
	options.add( option );


	// duplicate

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Duplicate' );
	option.onClick( function () {

		if ( editor.selected === null) return;
		tools.duplicate();

	} );
	options.add( option );

	// remove

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Remove' );
	option.onClick( function () {

		if ( editor.selected === null ) return;

		editor.removeAnimation( editor.selected );
		editor.selectAnimation( null );

	} );
	options.add( option );

	return container;

};

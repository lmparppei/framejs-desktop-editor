/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Help = function ( editor ) {

	var signals = editor.signals;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Help' );
	container.add( title );

	//

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// console

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Developer console' );
	option.onClick ( function () {
		require('electron').remote.getCurrentWindow().toggleDevTools();
	});
	options.add( option );

	// source code

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Source code' );
	option.onClick( function () { window.open( 'https://github.com/lmparppei/framejs-desktop-editor/', '_blank' ) } );
	options.add( option );

	// about

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'About Frame.js' );
	option.onClick( function () { window.open( 'http://github.com/mrdoob/frame.js/', '_blank' ) } );
	options.add( option );

	return container;

}

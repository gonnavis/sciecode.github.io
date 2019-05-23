// define-block
var _camera;
var mouse = new THREE.Vector2( 1, 1 );
var prev = new THREE.Vector3( 999, 0, 0 );
var tmpmouse = new THREE.Vector3();
var position = new THREE.Vector3( 999, 0, 0 );
var speed = new THREE.Vector3();
var raycaster = new THREE.Raycaster();
var plane3d = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ) );

function init( camera ) {

	_camera = camera;

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );

}

function update( ) {

	prev.copy( position );
	raycaster.setFromCamera( mouse, _camera );

	raycaster.ray.intersectPlane( plane3d, tmpmouse );
	if ( tmpmouse != null ) {

		position.copy( tmpmouse );

	}

	speed.copy( position.clone().sub( prev ) );
	speed.y = 0;

}

function onDocumentMouseMove( evt ) {

	mouse.x = ( evt.pageX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( evt.pageY / window.innerHeight ) * 2 + 1;

}

function onDocumentTouchStart( evt ) {

	if ( evt.touches.length === 1 ) {

		mouse.x = ( evt.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( evt.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;

	}

}

function onDocumentTouchMove( evt ) {

	if ( evt.touches.length === 1 ) {

		mouse.x = ( evt.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( evt.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;

	}

}

export { position, prev, speed, init, update };

var scene = new THREE.Scene( );
var camera = new THREE.PerspectiveCamera( 75,window.innerWidth / 
    window.innerHeight, 0.1, 1000); //Clippings

var renderer = new THREE.WebGLRenderer( );

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Blender load
// var loader = new THREE.GLTFLoader();
// loader.load(
//     "/render/meeseeks.glb",
//     function ( model) {

//         var scale = 5.6;
//         // meeseeks.body = model.scene.children[0];
//         // meeseeks.body.name = "body";
//         // meeseeks.body.rotation.set (0, -1.5708, 0);
//         // meeseeks.body.scale.set (.5,.5,.5);
//         // meeseeks.body.position.set(0, 3.6, 0);
//         // meeseeks.body.castShadow = true;
//         // meeseeks.frame.add(meeseeks.body);


//         model.scene;
//         model.scenes;
//         model.camera;
//     }
// );




//objects
var geometry = new THREE.BoxGeometry( 1, 1, 1);
var wallB = new THREE.BoxGeometry(9,10,1);
var wallF = new THREE.BoxGeometry(9,10,1);
var wallR = new THREE.BoxGeometry(1,10,20);
var wallL = new THREE.BoxGeometry(1,10,20);
var button = new THREE.BoxGeometry(0.5,0.5,0.5);

//Material & Textures
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: false});
var wallBMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var wallFMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var wallRMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var wallLMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var buttonMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});


//Render
var dataCreate = document.querySelector("#result");




var cube = new THREE.Mesh( geometry, material);
var wallBCreate = new THREE.Mesh(wallB, wallBMat);
var wallFCreate = new THREE.Mesh(wallF, wallFMat);
var wallRCreate = new THREE.Mesh(wallR, wallRMat);
var wallLCreate = new THREE.Mesh(wallL, wallLMat);
var buttonCreate = new THREE.Mesh(button, buttonMat);


scene.add(cube);
scene.add(wallFCreate);
scene.add(wallBCreate);
scene.add(wallRCreate);
scene.add(wallLCreate);
scene.add(buttonCreate);


wallBCreate.position.set(1,4,10);
wallFCreate.position.set(1,4,-10);
wallRCreate.position.set(5,4,0);
wallLCreate.position.set(-3,4,0);
buttonCreate.position.set(0,0.5, 0);

//scene.add(meeseeks.frame);






camera.position.z = 3;




// var meeseeks = 'meeseeks.glb';
// glbLoader.load('3d_models/' + meeseeks, function(geometry) {
//   shoeObject = geometry.scene.children[0];
//   scene.add(meeseeksObject);
// }, onLoadProgress);

//Controls
controls = new THREE.OrbitControls( camera, renderer.domElement);

var update = function ( ) {

};


var render = function ( ) {
    renderer.render( scene, camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);

    update();
    render();
}

GameLoop();


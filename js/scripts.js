// scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

//coarse
var partOftext = text.slice(0, 73.5);
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase(); 
var partOftextCharsAfter = partOftext.replace('Velociraptor', dinosaurUpperCased );
console.log(partOftextCharsAfter);

//cut
var effect = text.replace('Velociraptor', dinosaurUpperCased).slice(0, text.length/2);
console.log(effect);
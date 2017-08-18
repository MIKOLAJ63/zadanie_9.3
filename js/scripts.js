// scripts.js
$function(){
	console.log('DOM loaded - you can have fun');
});

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

//coarse
var partOftext = text.slice(0, 72.5);
var partOftextCharsAfter = partOftext.replace('Velociraptor', 'Triceratops');
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(partOftextCharsAfter);

// scripts.js
//cut
var effect = text.replace('Velociraptor', 'Triceratops'.toUpperCase()).slice(0, text.length/2);
console.log(effect);
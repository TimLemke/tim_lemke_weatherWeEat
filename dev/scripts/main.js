
//Teleport Autocomplete
$(function(){

getCity = function(){
	TeleportAutocomplete.init('.my-input').on('change', function(cityData){
		var latitude = cityData.latitude;
		var longitude = cityData.longitude;
		console.log(`The cities latitude is ${latitude} and it's longitude is ${longitude}`);
		getWeather(latitude, longitude);
	});
}

getCity();

//Dark Sky API Call

getWeather = function(latitude, longitude) {
var key = 'ecb6e7f16bb182021ecf519d1099721a';
	$.ajax({
	url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
	method: 'GET',
	dataType: 'jsonp',
	data: {
		format: 'jsonp'
	}
}).then(function(res) {
  console.log(res);
});


};

});



const app = {};

// Edamam variables
app.idEdamam = 'a4156de2';
app.keyEdamam = '10efc6df5c7cbcd8288887ca0f20e58c';
app.urlEdamam = 'https://api.edamam.com/search';

// ajax call to Edamam
app.callEdamam = () => {
	var recipeEdamam = $.ajax({
		url: app.urlEdamam,
		dataType: 'json',
		method: 'GET',
		data: {
			q: 'soup',
			app_id: app.idEdamam,
			app_key: app.keyEdamam,
			health: ['gluten-free']
		}
	}).then((res) => {
		console.log(res)
	});
}

// Yummly variables
app.idYummly = '95ec33fc';
app.keyYummly = '2410ab65b1957770177d384fa57c6070';
app.urlYummly = 'http://api.yummly.com/v1/api/recipes';
// app.urlExclude = 'http://api.yummly.com/v1/api/metadata/ingredient';

// ajax call to Yummly
app.callYummly = () => {
	var recipeYummly = $.ajax({
		url : app.urlYummly,
		dataType : 'json',
		method: 'GET',
		data: {
			q: 'soup',
			_app_id: app.idYummly,
			_app_key: app.keyYummly,
			excludedIngredient: ['Onion']
		}
	}).then((res) => {
		console.log(res);
	})	
}

// initialize code
app.init = () => {
	app.callEdamam();
	app.callYummly();
};

// document ready
$(app.init);



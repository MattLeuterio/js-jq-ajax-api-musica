console.log('ok');
console.log('jQuery ok ->', $);

/************************************************************************************
 * 
 * Esercizio di oggi: Esercizio Dischi
 * 
 * Attraverso una chiamata ajax all’Api di boolean avremo a 
 * disposizione una decina di dischi musicali. 
 * Servendoci di handlebars stampiamo tutto a schermo.
 * In questo momento non è importante la parte grafica.
 * 
 * Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa
 * scegliamo nella select vedremo i corrispondenti cd.
 * 
 *************************************************************************************/


$(document).ready(function() {
	
	// refs
	var apiAlbum = 'https://flynn.boolean.careers/exercises/api/array/music';
	var containerAlbum = $('.cds-container');

	// Init Handlebars
	var source = $("#album-template").html();
	var template = Handlebars.compile(source);

	// Genero Card Dischi Musicali con una chiamata ad una API


	$.ajax( 
		{
			url: apiAlbum,
			method: "GET",
			success: function(data) {

				// assegno ad una variabile i dati dell'array "response"
				var albums = data['response'];

				// ciclo nell'array per tutta la sua lunghezza
				for(var i = 0; i < albums.length; i++) {
					
					// creo un nuovo oggetto 
					var context = {
						poster: albums[i].poster,
						title: albums[i].title,
						author: albums[i].author,
						year: albums[i].year,
						genre: albums[i].genre
					};
					
					var html = template(context);
					console.log(html);
					
					containerAlbum.append(html);

				}

			},
			error: function() {
				alert('Errore');
			}
		}
	);





}); // <- End Doc Ready
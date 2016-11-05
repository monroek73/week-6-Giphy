
//Super Hero Array

var subject =["Aquaman", "Batman", "Captin America", "Iron Man", "Supergirl","Superman","The Flash","Thor", "Wonder Woman"]

// Function to display Giphy

function displayGiphy(){
	console.log("working");
		var hero = $(this).attr('data-name');
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&api_key=dc6zaTOxFJmzC&limit=10";
	console.log(queryURL); 
    $.ajax({url: queryURL, method: 'GET'})
    .done(function(response) {
        console.log(response;
        JSON.stringify(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
        	var heroDiv = $('<div class="hero">');
            var rating = results.[i].rating;
            var p = $('<p>').text("Rating: " + rating);

            var heroImage = $('<img>');
                   heroImage.attr('src', results[i].images.fixed_height.url);
                   heroImage.addClass('images');
                   heroImage.attr('data-state', 'animate')
                   heroDiv.append(p);
                   heroDiv.append(heroImage);
                   $('#gifsAppearHere').prepend(heroDiv);
                    //--------------------------------
    }
    });
    };
//
    function addButtons(){

    	$('#ButtonvView').empty();

    	for (var i = 0, i < subject.length; i++){
    		var a = $('<button>')
    		a.addClass('hero');
    		a.attr('data-name', subject[i] + '+' 'hero');
    		a.text('#buttonView').append(a);
   }
   }
   $('#addHero').on('click', function(){

   	var hero = $('#hero-input').val().trim();

   	subject.push(hero);

   	addButtons();

   	return false;
   });

   $(document).on('click', 'hero',displayGiphy);

   // function addButtons();

  $(document).on('click', '.images', function(){
  	var state = $(this).attr('date-state');
  	console.log(state);
  	if (state === 'still'){
  		$(this).attr('src', '.gif string');
  		$(this).attr('data-state','still');
  	}
  });

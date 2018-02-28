/* global $*/
var myPlayList = [{
		"title": "24K Magic",
		"artist": "Bruno Mars",
		"mp3-url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"mp3-url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"mp3-url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}
];



// DOCUMENT READY FUNCTION
$(document).ready(function() {
	function displayList() {
		$('.list').html("");
		for (var i = 0; i < myPlayList.length; i++) {
			$('.list').append("<hr>");
			$('.list').append("<h3>" + myPlayList[i].title + "</h3>");
			$('.list').append("<p>Artist: " + myPlayList[i].artist + "</p>");
			$('.list').append("<a href=" + myPlayList[i]["mp3-url"] + ">URL</a>");
			$('.list').append("<img id='listImage' src = " + myPlayList[i]["image-url"] + ">");
		}
		$('.currentSong').append("<img class='currentImage' src = " + myPlayList[0]["image-url"] + ">");
	    $('.currentSong').append("<a class='currentLink' href=" + myPlayList[0]["mp3-url"] + ">Listen Here</a>");
	}
	displayList();


	function clearList() {
		myPlayList = [];
		displayList();
	}
	
	$("#clear").click(function() {
		clearList();
	});

	function addSong() {
			var title = $("#title").val();
			var artist = $("#artist").val();
			var playLink = $("#play-link").val();
			var albumImage = $("#album-image").val();

			var newSong = {
				"title": title,
				"artist": artist,
				"mp3-url": playLink,
				"image-url": albumImage
			};

			myPlayList.push(newSong);
			displayList();
	}



    $("#submit").click(function() {
		addSong();
	});







});

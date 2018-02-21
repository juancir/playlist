

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	},
	{
		"title":"Finesse",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/search/results/bruno%20mars",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Bruno_Mars_%26_Cardi_B_-_Finesse.png/220px-Bruno_Mars_%26_Cardi_B_-_Finesse.png"
	}
];



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
 $( document ).ready(function() {
     for(var i = 0; i < myPlayList.length; i++) { 
		 $('.list').append("<hr>");
         $('.list').append("<h3>" + myPlayList[i].title + "</h3>");
         $('.list').append("<p>Artist: " + myPlayList[i].artist + "</p>");
         $('.list').append("<a href=" + myPlayList[i]["mp3-url"] + ">URL</a>");
         $('.list').append("<img src = " + myPlayList[i]["image-url"] + ">");
   	} 
});

var song = display;
$(".song1").html(song);


});






function displayList(){
}


function clearList(){
}

function addSong(){
	$("#submit").click(function() {
    var title = $("#title").val();
    var url = $("#url").val();
    var newSong = {
        "title": title,
	    "url": url,
    };
    console.log(newSong);
});
}


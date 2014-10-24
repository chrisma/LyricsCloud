$( document ).ready(function() {
	var artist = "Michael_Jackson";
	var song = "Bad";

	var url = "https://query.yahooapis.com/v1/public/yql?q=" +
		"select * from html where " +
		"url='http://lyrics.wikia.com/" + artist + ":" + song + "?useskin=wikiamobile' " +
		"and xpath='//div[@class=%22lyricbox%22]'" +
		"&format=json&callback=?"

	$.getJSON( url, function( data ) {
		var lyrics = data.query.results.div.p.content;
		lyrics += data.query.results.div.p.em.join(' ');
		lyrics = lyrics.replace(/\r?\n|\r/g, ' '); // get rid of linebreaks
		lyrics = lyrics.replace(/[\[\]|&;$%@<>()+,.!?-]/g, ' '); // get rid of unwanted characters
		lyrics = lyrics.replace(/ +/g, ' '); // get rid of multiple spaces
		console.log(lyrics);
	}).fail( function(jqxhr, textStatus, error){
		console.log("ERROR ", jqxhr, textStatus, error);
	});
});
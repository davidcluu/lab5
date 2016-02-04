'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".friend-container a").click(function(e){
		e.preventDefault();

		var anagram = anagrammedName( $(this).text() );
		$(this).text(anagram);
	});
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	var trimmedName = name.trim();

	if (trimmedName == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (trimmedName == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (trimmedName == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (trimmedName == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (trimmedName == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (trimmedName == "Allen Newell") {
		return "Ellen All New";
	}
	else if (trimmedName == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (trimmedName == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(trimmedName + " not known for anagramming.");
		return trimmedName;
	}
}
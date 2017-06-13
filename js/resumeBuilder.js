/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio ={
	"name" : "Ana Gómez Andrades",
	"role" : "Data Scientist - Researcher",
	"contacts" : {
		"email": "ana.gom.and@gmail.com",
		"mobile" : "(+34) 655 366 365",
		"github" : "agaspain",
		"location" : "Málaga"
	},
	"welcomeMessage" : "Welcome",
	"skills" : ["s1", "s2", "s3"],
	"bioPic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);




var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedMobile =HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

$("#header").prepend(formattedName, formattedRole);
/*$("#topContacts").append(formattedMobile, formattedEmail, formattedEmail);*/
/*$("#header").append(formattedPic, formattedWelcomeMessage);*/



$("#main").append(internationalizeButton);
//$("#header").append(HTMLskillsStart);
/*
if (!bio.skills.empty){
	$("#header").append([ HTMLskillsStart]);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	//$("#header").append([ HTMLskills.replace("%data%", bio.skills)]);
};*/




var work = {
	"jobs" : [
	{
		"employer" : "Innovati",
		"title" : "Data scientist",
		"location" : "Málaga",
		"dates": "2016-Present",
		"description" : "ooooooooooooooo"
	},
	{
		"employer" : "Universidad de Málaga",
		"title" : "Data scientist",
		"location" : "Málaga",
		"dates": "2012-2016",
		"description" : "ooooooooooooooo"
	},
	{
		"employer" : "Universidad de Alcalá",
		"title" : "Researcher",
		"location" : "Madrid",
		"dates": "2011",
		"description" : "ooooooooooooooo"
	}
	]
};

function displaywork(){

for (indWork in work.jobs){
	/*var formattedWorkTitle= HTMLworkTitle.replace("%data%", work.jobs[indWork].title);
	var formattedWorkEmployer= HTMLworkEmployer.replace("%data%", work.jobs[indWork].employer);
	var formattedDates =HTMLworkDates.replace ('%data%', work.jobs[indWork].dates);
	var formattedLocation = HTMLworkLocation.replace ('%data%', work.jobs[indWork].location);
	var formattedDescription = HTMLworkDescription.replace ('%data%', work.jobs[indWork].description);



	var formattedEmployerTitle=formattedWorkEmployer + formattedWorkTitle + formattedDates+ formattedLocation+ formattedDescription;
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployerTitle);
	*/
};
}


displaywork();
$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
  console.log(loc.screenX);
  console.log(loc.screenY);
});



var publications = {
	"papers" : [
	{
		"title" : "Data scientist",
		"dates": "2016-Present",
		"description" : "ssssssssssssss",
		"images": "images/fry.jpg"
	},
	{
		"title" : "Data scientist",
		"dates": "2016-Present",
		"description" : "ssssssssssssss",
		"images": "images/fry.jpg"
	},
	{
		"title" : "Data scientist",
		"dates": "2016-Present",
		"description" : "sssssssssssss",
		"images": "images/fry.jpg"
	}
	]
};



/*
publications.display = function (){

	for (ind=0;ind<=publications.papers.length;ind++){
		var formattedTitle= HTMLworkTitle.replace("%data%", publications.papers[ind].title);
		var formattedDates =HTMLworkDates.replace ('%data%', publications.papers[ind].dates);
		var formattedDescription = HTMLworkDescription.replace ('%data%', publications.papers[ind].description);
		var formattedImage = HTMLprojectImage.replace ('%data%', publications.papers[ind].images)


		var formattedProject= formattedTitle + formattedDates+ formattedDescription+ formattedImage;
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProject);
	}
};

publications.display();*/


/*
 var education = {
	"school": [{
			"name": "school 1",
			"location": "city 1",
			"degree dates": "majors 1",
			"url" : "",
			"majors" : ["",""]
		},
		{
			"name": "school 1",
			"location": "city 1",
			"degree dates": "majors 1",
			"url" : "",
			"majors" : ["",""]
		}
	]
}*/
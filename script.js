var Name,DOB,gender,address,graduation;
var number;
var mail,skill;
function get()
{	
	Name=document.forms["form"]["firstName"].value+" "+document.forms["form"]["lastName"].value;
	number=document.forms["form"]["Number"].value;
	DOB=document.forms["form"]["DOB"].value;
	gender=document.forms["form"]["Gender"].value;
	graduation=document.forms["form"]["Graduation"].value;
	mail=document.forms["form"]["Mail"].value;
	address=document.forms["form"]["Address"].value;
	skill=document.forms["form"]["skills"].value;

	localStorage.setItem("name",Name);
	localStorage.setItem("number",number);
	localStorage.setItem("dob",DOB);
	localStorage.setItem("gender",gender);
	localStorage.setItem("graduation",graduation);
	localStorage.setItem("mail",mail);
	localStorage.setItem("address",address);
	localStorage.setItem("skill",skill);
	window.open("../html/filled form.html","_blank");
}
function put(){
		Name=localStorage.getItem("name");
		number=localStorage.getItem("number");
		DOB=localStorage.getItem("dob");
		gender=localStorage.getItem("gender");
		graduation=localStorage.getItem("graduation");
		mail=localStorage.getItem("mail");
	    address=localStorage.getItem("address");
	    skill=localStorage.getItem("skill");
		var x=document.getElementsByClassName("setName");
		var i;
		for (i =0; i < x.length; i++) {
			x[i].innerHTML=Name;
		}
		document.getElementById("setNumber").innerHTML=number;
		document.getElementById("setDOB").innerHTML=DOB;
		document.getElementById("setGender").innerHTML=gender;
		document.getElementById("setGraduation").innerHTML=graduation;
		document.getElementById("setMail").innerHTML=mail;
		document.getElementById("setSkills").innerHTML=skill;
		var y=document.getElementsByClassName("setAddress");
		for (i =0; i < y.length; i++) {
			y[i].innerHTML=address;
		}
}

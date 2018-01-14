var splt = "|";
var lvls = "3";

level1 = new Array ();
/*Level 0 Menu Options*/
/* Add Level 0 options here eg. Vehicle Make etc */
/* These must be in double quotes and comma separated */
level0 = new Array ("Tyres", "Wheels","Tyre and Wheel Packages");
/*Level 1 Menu Options*/
/* Add Level 1 options here eg. Vehicle Model etc */
/* Each Array name must match exactly with the name in level 0 above */
level1["Tyres"] = new Array("15 Inch Tyres","16 Inch Tyres","17 Inch Tyres","18 Inch Tyres","19 Inch Tyres","20 Inch Tyres","21 Inch Tyres","22 Inch Tyres");
level1["Wheels"] = new Array("15 Inch Wheels","16 Inch Wheels","17 Inch Wheels","18 Inch Wheels","19 Inch Wheels","20 Inch Wheels","21 Inch Wheels","22 Inch Wheels");
level1["Tyre and Wheel Packages"] = new Array("15 Inch Packages","16 Inch Packages","17 Inch Packages","18 Inch Packages","19 Inch Packages","20 Inch Packages","21 Inch Packages","22 Inch Packages");
/*Level 2 Options*/
/* Add Level 2 options here eg. Part etc */
/* Each Array name must match exactly with the name in level 1 above */
level2 = new Array ("");
level2["15 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["16 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["17 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["18 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["19 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["20 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["21 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["22 Inch Tyres"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Tyres Slightly Used");
level2["15 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["16 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["17 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["18 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["19 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["20 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["21 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["22 Inch Wheels"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Wheels Slightly Used","Wheels Scratch and Dent");
level2["15 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["16 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["17 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["18 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["19 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["20 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["21 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");
level2["22 Inch Packages"] = new Array("Mercedes Benz","BMW","Audi","VW","Toyota","Lexus","Nissan","Ford","Holden","Isuzu","Land Rover","Slightly Used Packages","Scratch and Dent Packages");



function writeoptions(dta, lvl)
{
clearoptions(lvl);
if (dta != ""){
lvl = "level"+lvl+"";

if (lvl == "level0"){
arr = window[lvl];}
else {arr = window[lvl];
arr = arr[dta]}

var len= arr.length;


var len= arr.length;
for (i=0; i<len; i++)
{
reslt = arr[i]
reslt1 = reslt

document.getElementById(lvl).options[i+1] = new Option(reslt1,reslt);
document.getElementById(lvl).disabled = 0;
}}}


function clearoptions(clr)
{
for (i=clr; i<lvls; i++) {
lvl = "level"+i+"";
document.getElementById(lvl).options.length = 1;
document.getElementById(lvl).options.selected = 0;
document.getElementById(lvl).disabled = 'disabled';
}}


function makesearch()
{
srchquery1 = document.getElementById('level0').options[document.getElementById('level0').selectedIndex].value;
srchquery2 = document.getElementById('level1').options[document.getElementById('level1').selectedIndex].value;
srchquery3 = document.getElementById('level2').options[document.getElementById('level2').selectedIndex].value;
var fullquery = ""+ srchquery2 +" "+ srchquery3 +"";
document.dropdowns_form.query.value = fullquery;
document.dropdowns_form.submit();
}
writeoptions("level1","level2");

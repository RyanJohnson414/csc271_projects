var sign = "Capricorn";
var birthmonth = "December"
var birthday = 30;
var luckynum = 0.35;
var horoscopedesc = "Cardinal Earth sign ruled by Saturn, and its symbol is the Sea-goat";
var belief = false;

document.getElementById("sign").innerHTML = sign;
var birthdaydate = document.getElementsByClassName("birthday");
birthdaydate[0].innerHTML += birthmonth + " " + birthday;
var luck = document.getElementsByClassName("luckyNum");
luck[0].innerHTML += luckynum;
var paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = horoscopedesc;
paragraph[1].innerHTML += belief;


var capricornfeel = 3;
var librafeel = 4;
var piscesfeel = 3;

var averagemood = (capricornfeel + librafeel + piscesfeel) / 3;
paragraph[2].innerHTML = "Today\'s mood rating for Libra: 4 out of 5. Todays mood rating for Capricorn: 3 out of 5. Todays mood rating for Pisces: 3 out of 5. The average rating for Libra, Capricorn, and Pisces is: " + averagemood;

var signslist = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var Capricorn = [0];
var Libra = [9];
var Pisces = [2];

paragraph[3].innerHTML = "My sign is Capiricorn, Saurab's sign is Libra, and Kevins sign is Pisces"

var signDesc = ["Today is a day for new beginnings. Embrace change and seize opportunities.","Your determination will lead to success today. Stay focused on your goals.","Communication is key today. Express yourself clearly and listen to others.","Trust your intuition. It will guide you in making the right decisions.","Your creativity shines today. Use it to inspire and lead others.","Pay attention to the details. Your meticulous work will pay off.","Balance is essential. Find harmony in all aspects of your life.","Embrace transformation. Let go of what no longer serves you.","Adventure awaits. Explore new horizons and expand your horizons.","Hard work leads to success. Keep pushing toward your goals.","Your unique perspective is an asset. Share your ideas with others.","Trust your emotions. They will guide you in making the right choices."];
var choosehoroscope = signDesc[0];
var SaurabHoroscope = signDesc[2];
var KevinHoroscope = signDesc[9];

var custom = signDesc[0];
custom += " This is my horoscope!";
signDesc[0] = custom;
var choosehoroscope = signDesc[0];

paragraph[4].innerHTML = "Capricorn horoscope: " + choosehoroscope + ". Pisces horoscope: " + KevinHoroscope + ". Libra horoscope: " + SaurabHoroscope;


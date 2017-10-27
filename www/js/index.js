var description;


function user(){
	var name = document.forms['form1']['tanga'].value

	if(name==""){
		alert("Kargam so ngaran mo Tanga!");
		return false;
	}
	else{
		localStorage.setItem('name',name);
		document.forms['form1']['tanga'].value = "";
		location.href = 'Picking.html';

	}
}

function card1(){
description="Ang iyong pangalan ay nagmula sa mahirap na angkan na may milyong milyong pera.";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card2(){
description="Ang pangalan mo ay galing sa matatalinong pamilya na walang narating at napatunayan sa buhay.";	
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card3(){
description="Ang iyong pangalan ay sinasabing nanggaling sa pinanggalingan ng pinanggalingan ng iyong pangalan.";	
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card4(){
description="Nagmula ang pangalan mo sa napakamayamang angkan na walang makain tuwing hapag-kainan.";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card5(){
description="Sinasabing nagmula ang iyong pangalan sa isang lugar kung saan pinaniniwalaang nagmula ang iyong pangalan.";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card6(){
description="Hindi mo ba alam kung saan nagmula ang iyong pangalan? Ako rin hindi ko alam. Halika't tuklasin natin.";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card7(){
description="Ang iyong napakagandang pangalan ay nagmula sa PSU Memes at PSU Secret Files.";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card8(){
description="Ang ganda ng iyong pangalan, ngunit wala itong pinagmulan. Ikinalulungkot ko";
localStorage.setItem("desc",description);
location.href="Card1.html";
}
function card9(){
description="Ang pangalan mo ay nagmula sa... Hmmm. Tignan mo nalang sa birth certificate mo. Andoon na yun. Salamat!";
localStorage.setItem("desc",description);
location.href="Card1.html";
}

document.getElementById('pangalan').innerHTML=localStorage.getItem('name');
document.getElementById('description').innerHTML=localStorage.getItem('desc');

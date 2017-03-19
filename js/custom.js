
function ClickSignUp() {
	
	var Fn = document.SignUp.Fnm.value;
	var Ln = document.SignUp.Lnm.value;
	var El = document.SignUp.Eml.value;
	var PsW = document.SignUp.Psw.value;
	var RPs = document.SignUp.RPsw.value;
	var Tx = document.SignUp.TxT.value;
	var Show = document.getElementById("Error");
	var Reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (Fn=="" || Ln=="" || El=="" || PsW=="" || RPs=="" || Tx==""){
		Show.innerHTML="Please fill the form correctly !";
		document.SignUp.Fnm.style.border="1.5px solid #EE4646";
		document.SignUp.Lnm.style.border="1.5px solid #EE4646";
		document.SignUp.Eml.style.border="1.5px solid #EE4646";
		document.SignUp.Psw.style.border="1.5px solid #EE4646";
		document.SignUp.RPsw.style.border="1.5px solid #EE4646";
		document.SignUp.TxT.style.border="1.5px solid #EE4646";

	}
	else if (!Reg.test(El)){
		Show.innerHTML="Invalid email address!";
		document.SignUp.Eml.style.border="1.5px solid #EE4646";
	}
	else if ( PsW.length <=5){
		Show.innerHTML="Please input the password more than 5 characters !";
		document.SignUp.Psw.style.border="1.5px solid #EE4646";
	}
	else if ( PsW != RPs){
		Show.innerHTML="Password does not match!";
		document.SignUp.RPsw.style.border="1.5px solid #EE4646";

	}
	else{
		document.SignUp.Fnm.style.border="1.5px solid #63B062";
		document.SignUp.Lnm.style.border="1.5px solid #63B062";
		document.SignUp.Eml.style.border="1.5px solid #63B062";
		document.SignUp.Psw.style.border="1.5px solid #63B062";
		document.SignUp.RPsw.style.border="1.5px solid #63B062";
		document.SignUp.TxT.style.border="1.5px solid #63B062";
	}


}
function ClickMulty(){
	var n = document.getElementById("Num").value;
	var i = 1, 	z="";

	for (i; i<=10; i++){
		z = n + " * " + i + " = " + n*i + "<br>";
		document.getElementById("mulRe").innerHTML=z;
	}
}

function ClickSeven(){
	document.getElementById("disp").value +=7;
}
function ClickEight(){
	document.getElementById("disp").value +=8;
}
function ClickNine(){
	document.getElementById("disp").value +=9;
}
function ClickFour(){
	document.getElementById("disp").value +=4;
}
function ClickFive(){
	document.getElementById("disp").value +=5;
}
function ClickSix(){
	document.getElementById("disp").value +=6;
}
function ClickOne(){
	document.getElementById("disp").value +=1;
}
function ClickTwo(){
	document.getElementById("disp").value +=2;
}
function ClickThree(){
	document.getElementById("disp").value +=3;
}
function ClickZero(){
	document.getElementById("disp").value +=0;
}
function ClickDivd(){
	document.getElementById("disp").value +="/";
}
function ClickMultp(){
	document.getElementById("disp").value +="*";
}
function ClickMins(){
	document.getElementById("disp").value +="-";
}
function ClickPlus(){
	document.getElementById("disp").value +="+";
}
function ClickEqu(){
	var Reslt = eval(document.getElementById("disp").value);
	document.getElementById("disp").value =Reslt;
}
function ClickClear(){
	document.getElementById("disp").value ="";

}
// calculator

// palindrome
function ClickPaldr(){
	var str = document.getElementById("Paldr").value;
	var a = str.length;
	var revstr="";

	for(var i=a ; i>=0; i--){
		revstr = str.charAt(i);
	}

	if (str == revstr) {
		document.getElementById("PDmulRe").innerHTML="Not palindrome";
	} 
	else{
		document.getElementById("PDmulRe").innerHTML="palindrome";
	}
}
// palindrome
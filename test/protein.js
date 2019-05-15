//protein definitions
var IpDef = [];
var PpDef = [];
var LpDef = [];
IpDef[0] = "Are usually spanning the entire membrane- trans membrane";
IpDef[1] = "Are anchored by hydrophobic interactions with membrane phospholipids";
IpDef[2] = "Also interact with cytosol and outer cytoplasmic environments through hydrophilic bonds";
IpDef[3] = "Structurally contain &beta;-sheets and/or &alpha;-helices";
IpDef[4] = "Not easily extracted- use detergents or organic solvents";

PpDef[0] = "bind via protein-protein interactions or to lipid head groups";
PpDef[1] = "Bind directly or indirectly to other membrane proteins (IP or LP)";
PpDef[2] = "Usually water soluble (globular proteins)";
PpDef[3] = "Can be extracted by high salt ( salting out) or by chelating agents e.g. EDTA";
PpDef[4] = "May involve cell signaling reactions or cell shape through cytoskeleton associations";

LpDef[0] = "Are usually bound to a lipid molecule in the membrane";
LpDef[1] = "Are anchored by hydrophobic interactions with membrane phospholipids";
LpDef[2] = "The protein chain is not embedded in the membrane";


//question 1

var qtn1 = document.getElementById("Q1");
var q1a = [];
for(var i =0 ;i<5;i++)
{
	var random = Math.floor((Math.random()*3) + 1);
	var text = "";
	switch(random)
	{
		case 1 : 
			text = IpDef[Math.floor((Math.random()*5))];
			q1a[q1a.length]=i;
			break;
		case 2 : 
			text = PpDef[Math.floor((Math.random()*5))];
			break;
		case 3 : 

			text = LpDef[Math.floor((Math.random()*3))];
			if (text==IpDef[1]) {q1a[q1a.length]=i;};
			break;
	}
	qtn1.children[i+2].children[1].innerHTML = text;
}


//question 2

var qtn2 = document.getElementById("Q2");
var q2a = [];
for(var i =0 ;i<5;i++)
{
	var random = Math.floor((Math.random()*3) + 1);
	var text = "";
	switch(random)
	{
		case 1 : 
			text = IpDef[Math.floor((Math.random()*5))];
			break;
		case 2 : 
			text = PpDef[Math.floor((Math.random()*5))];
			q2a[q2a.length]=i;
			break;
		case 3 : 
			text = LpDef[Math.floor((Math.random()*3))];
			break;
	}
	qtn2.children[i+2].children[1].innerHTML = text;
}

//question 3

var qtn3 = document.getElementById("Q3");
var q3a = [];
for(var i =0 ;i<5;i++)
{
	var random = Math.floor((Math.random()*3) + 1);
	var text = "";
	switch(random)
	{
		case 1 : 
			text = IpDef[Math.floor((Math.random()*5))];
			break;
		case 2 : 
			text = PpDef[Math.floor((Math.random()*5))];
			break;
		case 3 : 
			text = LpDef[Math.floor((Math.random()*3))];
			q3a[q3a.length]=i;
			break;
	}
	qtn3.children[i+2].children[1].innerHTML = text;
}

console.log(q1a);

//question 4

var func = ["Enzymes","Transport ( active and passive)","Signal transduction","Receptors","Energy transfer"];












function Submit()
{
	//question 1
	var q1s = 0;  
	for(var i=0;i<5;i++)
	{

		if(qtn1.children[i+2].children[0].checked ==true)
		{
			console.log(i + " is checked");
			if(q1a.indexOf(i) != -1)
			{
				q1s++;
				console.log(q1s);
			}
		}
	}
	if(q1s == q1a.length)
	{
		qtn1.children[0].style.color="lightgreen";
	}
	else
	{
		qtn1.children[0].style.color="red";
	}


	//question 2
	var q2s = 0;  
	for(var i=0;i<5;i++)
	{

		if(qtn2.children[i+2].children[0].checked ==true)
		{
			console.log(i + " is checked");
			if(q2a.indexOf(i) != -1)
			{
				q2s++;
				//console.log(q1s);
			}
		}
	}
	if(q2s == q2a.length)
	{
		qtn2.children[0].style.color="lightgreen";
	}
	else
	{
		qtn2.children[0].style.color="red";
	}


	//question 3
	var q3s = 0;  
	for(var i=0;i<3;i++)
	{

		if(qtn3.children[i+2].children[0].checked ==true)
		{
			console.log(i + " is checked");
			if(q3a.indexOf(i) != -1)
			{
				q3s++;
				//console.log(q1s);
			}
		}
	}
	if(q3s == q3a.length)
	{
		qtn3.children[0].style.color="lightgreen";
	}
	else
	{
		qtn3.children[0].style.color="red";
	}


	//question 4
	var q4 = document.getElementById("Q4");
	var totalCorrect = 0;
	var patt1 = /[e,E]nzymes/;
	var patt2 = /[t,T]ransport/;
	var patt3 = /[s,S]ignal transduction/;
	var patt4 = /[r,R]eceptors/;
	var patt5 = /[e,E]nergy transfer/;
	for(var i=0;i<3;i++)
	{
		var val =q4.children[i+2].value;
		if(val.match(patt1)||val.match(patt2)||val.match(patt3)||val.match(patt4)||val.match(patt5))
		{
			totalCorrect++;
			console.log(totalCorrect);
		}
	} 
	if(totalCorrect==3)
	{
		q4.children[0].style.color="lightgreen";
	}
	else
	{
		q4.children[0].style.color="red";
	}
	

	//question 5

	var q5a = document.getElementById("5a").value;
	var q5b = document.getElementById("5b").value;
	var q5c = document.getElementById("5c").value;

	if(q5a == "cell membranes" && (q5b == "Halobacterium halobium" || q5b == "halobacterium halobium") && q5c.match(/high[-,\s]temperature/))
	{
		document.getElementById("Q5").children[0].style.color="lightgreen";
	}
	else 
	{
		document.getElementById("Q5").children[0].style.color="red";

	}


	//question 6

	var q6a = document.getElementById("6a").value;
	var q6b = document.getElementById("6b").value;

	if(q6a == "570 nm" && q6b == "blue")
	{
		document.getElementById("Q6").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q6").children[0].style.color="red";
	}

	//question 7
	var q7a = document.getElementById("7a").value;

	if(q7a == "IP")
	{
		document.getElementById("Q7").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q7").children[0].style.color="red";
	}

	//question 8

	var q8a = document.getElementById("8a").value;
	var q8b = document.getElementById("8b").value;
	var q8c = document.getElementById("8c").value;

	if(q8a.match(/[l,L]eu/)&&q8b.match(/[i,I]le/)&&q8c.match(/[v,V]al/))
	{
		document.getElementById("Q8").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q8").children[0].style.color="red";
	}


	//question 9

	var q9 = document.getElementById("9").value;

	if(q9.match(/[r,R]aft/))
	{
		document.getElementById("Q9").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q9").children[0].style.color="red";
	}

	//question 10

	var q10a = document.getElementById("10a").value;
	var q10b = document.getElementById("10b").value;

	if(q10a.match(/[m,M]annose/) && q10b.match(/[g,G]lucosamine/))
	{
		document.getElementById("Q10").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q10").children[0].style.color="red";
	}


	//question 11

	var q11a = document.getElementById("11a").value;
	var q11b = document.getElementById("11b").value;
	var q11c = document.getElementById("11c").value;

	if(q11a.match(/[a,A]mide/)&&q11b.match(/[p,P]hosphodiester/) && q11c.match(/[h,H]ydroxyester/))
	{
		document.getElementById("Q11").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q11").children[0].style.color="red";
	}

	//question 12

	var q12a = document.getElementById("12a").value;
	var q12b = document.getElementById("12b").value;
	var q12c = document.getElementById("12c").value;
	var q12d = document.getElementById("12d").value;

	if(q12a.match()&&q12b.match()&&q12c.match()&&q12d.match())
	{
		document.getElementById("Q12").children[0].style.color="lightgreen";
	}
	else
	{
		document.getElementById("Q12").children[0].style.color="red";
	}
}
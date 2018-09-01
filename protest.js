
function change(){
	if(document.getElementById('mycheckbox').checked==false)
	{
		document.getElementById('mycheckboxdiv').style.display="block";
	}
	else{
		document.getElementById('mycheckboxdiv').style.display="none";
		document.getElementById('facultyid').style.display="none";
		document.getElementById('date1').value="";
		document.getElementById('date2').value="";
		document.getElementById("dept").value="IT";
		document.getElementById('sir1').textContent="UMA MAHESH";
		document.getElementById('sir2').textContent="BASHEER";
		document.getElementById('sir3').textContent="BASHA";
		document.getElementById('sir4').textContent="TRILOK REDDY";
		document.getElementById('sir5').textContent="CHANAKYA";
		document.getElementById('sir6').textContent="SRINIVAS ACHARI";
		document.getElementById('facu').value="1";
	}
}
function myFunction() {
    var x = document.getElementById("dept").value;
	if(x=="CSE"){
    document.getElementById('sir1').textContent="VIKAS";
	document.getElementById('sir2').textContent="HARISH";
	document.getElementById('sir3').textContent="NASEER";
	document.getElementById('sir4').textContent="SARFARAZ";
	document.getElementById('sir5').textContent="RAVI";
	document.getElementById('sir6').textContent="NAVEEN";
	document.getElementById('facu').value="1";
	}
	else if(x=="CSSE"){
    document.getElementById('sir1').textContent="MOUNIKA";
	document.getElementById('sir2').textContent="SIREESHA";
	document.getElementById('sir3').textContent="GEETHA";
	document.getElementById('sir4').textContent="SEETHA";
	document.getElementById('sir5').textContent="RAMANI";
	document.getElementById('sir6').textContent="SARAYU";
	document.getElementById('facu').value="1";
	}
	else if(x=="ECE"){
    document.getElementById('sir1').textContent="DURGA";
	document.getElementById('sir2').textContent="CHAITHANYA";
	document.getElementById('sir3').textContent="JASWANTH";
	document.getElementById('sir4').textContent="DHARANI";
	document.getElementById('sir5').textContent="KUMAR";
	document.getElementById('sir6').textContent="PREMJI";
	document.getElementById('facu').value="1";
	}
	else if(x=="EEE"){
    document.getElementById('sir1').textContent="MAHESH";
	document.getElementById('sir2').textContent="SASHI";
	document.getElementById('sir3').textContent="NIKHIL";
	document.getElementById('sir4').textContent="VENKY";
	document.getElementById('sir5').textContent="PRANEETH";
	document.getElementById('sir6').textContent="REDDY";
	document.getElementById('facu').value="1";
	}
	else if(x=="IT"){
    document.getElementById('sir1').textContent="UMA MAHESH";
	document.getElementById('sir2').textContent="BASHEER";
	document.getElementById('sir3').textContent="BASHA";
	document.getElementById('sir4').textContent="TRILOK REDDY";
	document.getElementById('sir5').textContent="CHANAKYA";
	document.getElementById('sir6').textContent="SRINIVAS ACHARI";
	document.getElementById('facu').value="1";
	}
}
function chname(){
    
    if (document.forms["fe1"]["dd1"].value == "" | document.forms["fe1"]["dd2"].value == "") {
		document.getElementById('error').innerHTML="Select From Date and TO Date";
		
        return false;
    }
else{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('facultyid').style.display="block";
		document.getElementById('table_date1').textContent=document.getElementById('date1').value;
		document.getElementById('table_date2').textContent=document.getElementById('date2').value;
		if(document.getElementById('facu').value=="6")
		{
			document.getElementById('name').textContent=document.getElementById('sir6').textContent;
			document.getElementById('table_year').textContent="I";
			document.getElementById('table_course').textContent="PROBLEM SOLVING AND COMPUTER PROGRAMMING";
			document.getElementById('table_section').textContent="A";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
		else if(document.getElementById('facu').value=="1")
		{
	
			document.getElementById('name').textContent=document.getElementById('sir1').textContent;
			document.getElementById('table_year').textContent="III";
			document.getElementById('table_course').textContent="WEB PROGRAMMING";
			document.getElementById('table_section').textContent="B";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
		else if(document.getElementById('facu').value=="2")
		{
	
			document.getElementById('name').textContent=document.getElementById('sir2').textContent;
			document.getElementById('table_year').textContent="II";
			document.getElementById('table_course').textContent="OBJECT ORIENTED PROGRAMMING";
			document.getElementById('table_section').textContent="B";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
		else if(document.getElementById('facu').value=="3")
		{
			
			document.getElementById('name').textContent=document.getElementById('sir3').textContent;
			document.getElementById('table_year').textContent="IV";
			document.getElementById('table_course').textContent="OBJECT ORIENTED ANALYSIS AND DESIGN";
			document.getElementById('table_section').textContent="A";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
		else if(document.getElementById('facu').value=="4")
		{
			
			document.getElementById('name').textContent=document.getElementById('sir4').textContent;
			document.getElementById('table_year').textContent="II";
			document.getElementById('table_course').textContent="DATABASE MANAGEMENT SYSTEM";
			document.getElementById('table_section').textContent="B";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
		else if(document.getElementById('facu').value=="5")
		{
			document.getElementById('name').textContent=document.getElementById('sir5').textContent;
			document.getElementById('table_year').textContent="III";
			document.getElementById('table_course').textContent="DESIGN ANALYSIS AND ALGORITMS";
			document.getElementById('table_section').textContent="B";
			document.getElementById('table_program').textContent=document.getElementById('dept').value;
		}
	
	}

}

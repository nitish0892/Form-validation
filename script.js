
function clearError(){

var error=document.querySelectorAll('small');
for(let item of error)
{
	item.innerHTML="";
}
}




function validation(){

	clearError();

	var user=document.querySelector('#user').value;
	var pass=document.querySelector('#password').value;
	var cpass=document.querySelector('#cpassword').value;
	var mob=document.querySelector('#mobile').value;
	var mail=document.querySelector('#email').value;
	

	


	  if(user.length<3 || user.length>20)
	  {
	  	var e=document.querySelector('#username');
	  	e.innerHTML="*username should be 3 to 20 letters long";
	  	return false;
	  }

	  if(!isNaN(user))
	  {
	  	var e=document.querySelector('#username');
	  	e.innerHTML="*only characters are allowed";
	  	return false;
	  }

	   if(pass.length<5 || pass.length>20)
	  {
	  	var p=document.querySelector('#p');
	  	p.innerHTML="*password should be 5 to 20 letters long";
	  	return false;
	  }

	   if(pass.length!==cpass.length)
	  {
	  	var c=document.querySelector('#c');
	  	c.innerHTML="*password is not matching";
	  	return false;
	  }

	  var flag=true;

	  	var x=document.myform.gender;

	  	for(let i=0; i<x.length;i++){
	  		if(x[i].checked){
	  		  flag=false;
	  			break;
	  		}
	  		 } 	

	  		if(flag){
	  			var g=document.querySelector('#g');
	  			g.innerHTML="select a gender";
	  			return false;
	  		}


	  if(isNaN(mob))
	  {
	  	var m=document.querySelector('#m');
	  	m.innerHTML="characters are not allowed";
	  	return false;
	  }

	  if(mob.length!=10)
	  {
	  	var m=document.querySelector('#m');
	  	m.innerHTML="Mobile no. should be 10 digits";
	  	return false;
	  }
      
      if(mail.charAt(mail.length-4)!='.' && mail.charAt(mail.length-3)!='.')
	  {
	  	var em=document.querySelector('#em');
	  	em.innerHTML="invalid email";
	  	return false;
	  }

	  
	 }

	 var toggle1=document.querySelector('#toggle1');
	 var password=document.querySelector('#password');

	 var toggle2=document.querySelector('#toggle2');
	 var cpassword=document.querySelector('#cpassword');

	 toggle1.addEventListener('click', function showHide(){

	 	if(password.type=== 'password')
	 	{
	 		password.setAttribute('type','text');
	 	}
	 	else
	 	{
	 		password.setAttribute('type', 'password');
	 	}

	 	toggle1.classList.toggle('hide');
	 });


	 toggle2.addEventListener('click',function(){

	 	if(cpassword.type==='password')
	 	{
	 		cpassword.setAttribute('type', 'text');
	 	}

	 	else
	 	{
	 		cpassword.setAttribute('type', 'password');
	 	}
	 	toggle2.classList.toggle('hide');
	 });

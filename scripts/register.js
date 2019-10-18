$(document).ready(function()
{
	console.log("Ready");
	  
	
	
	
	
});

function openNav()
{
	
	
	 $('#drawer').css("width","16%");
	
}

function closeNav()
{
	
	
	 $('#drawer').css("width","0");
	
}
function expandCollapse()
{
	var wc=$('#login').width();
	var wp=$('#content_table').width();
	
	var percent= Math.round(100*wc/wp);
	
	if(percent>=75)
	{	collapseLogin();
	}else
	{
		expandLogin();
	}

}

function expandLogin()
{
	
	 $('#login').css("width","75%");
	
	 $('#signup').css("width","25%");
	  $('#login_img').hide();
	  $('#signup_img').show();
	
}
function collapseLogin()
{
	 $('#signup').css("width","75%");
	
	 $('#login').css("width","25%");
	  $('#login_img').show();
	   $('#signup_img').hide();
	  
	
}


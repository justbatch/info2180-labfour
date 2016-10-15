window.onload = function()
{
	var walls = document.getElementsByClassName('boundary');
	var check = false;
	//walls.setAttribute('class', 'boundary youlose');
	
	//hover iterative function, when the player goes out of the route of the game. 
	for(var i = 0; i < walls.length; i++)
	{
		walls[i].onmouseover = function()
		{
			this.setAttribute('class', 'boundary youlose');
			check = true;
		}
	}
	
	//Uses a variable to keep track of the mouse hovering over a boundary 
	var ed = document.getElementById('end');
				ed.onmouseover = function ()
	{
		var sat = document.getElementById('status');
				
		if(check == false)
		{
			sat.innerHTML = 'You Win!';
		}
		else
		{
			sat.innerHTML = 'You Lose!';
		}
	}
	
	var st = document.getElementById('start');
				st.onclick = function()
	{
		for(var l = 0; l < walls.length; l++)
		{
			walls[l].setAttribute('class', 'boundary');
		}
	}
	
	var t = document.getElementById('maze');
	clientX = (t.offsetLeft - t.offsetTop);
	clientY = (t.offsetHeight - t.offsetWidtth);
	clientX = true;
	clientY = true;
	
	t.onmousemove = function(event)
	{
		if (clientX && clientY == true)
		{
			console.log('You Lose');
		}
	}
}
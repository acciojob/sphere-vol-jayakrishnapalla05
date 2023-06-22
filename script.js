function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let radius = document.querySelector("#radius").value;
	let vol=document.querySelector("#volume");
	let result=(4/3)*Math.PI* radius*radius*radius;
	vol.value=result.toFixed(2);
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

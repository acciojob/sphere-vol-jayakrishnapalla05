function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let vol=document.getElementById("volume");
	let result=(4/3)*Math.PI* radius*radius*radius;
	console.log(result);
	vol.value=result.toFixed(2);
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

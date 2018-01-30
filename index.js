
window.onload = function(){
	
 bannerMove()
 
 
}

function bannerMove(){
	//获取ul标签元素
	var oUl =document.querySelector(".banner");
 	var oli =document.querySelectorAll("li")
 	//console.log(oUl)
 	//console.log(oli)
 	//oUl.innerHTML+=oUl.innerHTML
 	var i =0
 	timer =setInterval(function(){
 		i++;
 		//console.log(i)
 		if (i>oli.length-1) {
 			i=0
 		}
 		oUl.style.marginLeft = (-100*i) +"%";
 	},1000)
	
}

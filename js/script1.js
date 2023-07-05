var array=[1,2,3,4,5]
var calling=document.getElementById("frm")
var ul=document.createElement("ul")

var submit=document.getElementById("submit")

calling.appendChild(ul)

calling.addEventListener("submit",function(e){
	e.preventDefault()
	
	array.forEach(function (array){
		var li=document.createElement("li")
		ul.appendChild(li)
		li.innerHTML = array
	})
	
	// for(const element of array.values()){
		// var li=document.createElement("li")
		// ul.appendChild(li)
		// li.innerHTML = element
	// }
	
	// for(const element of array.keys()){ //it returns the index value
		// var li=document.createElement("li")
		// ul.appendChild(li)
		// li.innerHTML = element
	// }
	
	// for(const element of array.entries()){
		// var li=document.createElement("li")
		// ul.appendChild(li)
		// li.innerHTML = element
	// }
})

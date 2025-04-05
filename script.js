function toCase(text) {
	if(text.length==0){
		return "-"
	}
   let a=text.toLowerCase(); 
	let b=text.toUpperCase();
	return `${a}-${b}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

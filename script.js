function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();
	let i=0;
	while(i < str.length) {
		let c = str[i];

		if(map.has(c)) {
			map.set(c,map.get(c)+1); 
		}else{
			map.set(c, 1);
		}
		i++;
	}
	i=0;
	while(i<str.length) {
		if(map.get(str[i]) == 1) return str[i];
		i++;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

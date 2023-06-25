// complete the given function

function palindrome(str){
	let s="";
	for(let i=str.length-1;i>=0;i--){
	    s+=str[i];
	}
	if(s===str){
		return true;
	}else{
		return false;
	}

}
module.exports = palindrome

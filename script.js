// complete the given function

function palindrome(str){
	let s="";
	for(let i=0;i<str.length;i++){
	   if(str[i]!=" "){
		    s+=str[i];
	   }
	}
	let rev="";
	for(let i=s.length-1;i>=0;i--){
		rev+=s[i];
	}
	if(s===rev){
		return true;
	}else{
		return false;
	}

}
module.exports = palindrome

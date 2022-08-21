var sum=0;
console.log("this is made by shivang bhardwaj wwww.shivang.tech")
var num;
const addNums =()=>{
	console.log("you clicked Button");
	
	 num=parseInt(document.getElementById("inputt").value);
// if(num===null){num=0;}
     num=num||0;
// num=num?num:0;
// which will convert a from any "falsey" value to 0.
// falsy values are false, null, undefined, 0, ''' empty string, NaN(Not a Number)
	console.log("this is num:"+num)
	sum=sum+num;
	console.log("the sum is : "+sum);
	document.getElementById("text").value=sum;
}

//Create a function with two arguments called greaterNum
//retun the biggest number as result
function greaterNum (a,b){
  if (a>b) {
    return a
  }else {
    return b
  }
}
console.log(greaterNum(-67,45));

function greaterNum1 (a,b){
  if (a=b) {
    return true
  }else {
    return false
  }
}
console.log(greaterNum1(-67,45));


//create function called hello world with one argument
//return translation

function helloWorld (lang){
  if (lang=== "spanish") {
    console.log("hola mundo")
  } else if (lang==="german") {
    console.log("Hallo Welt")
  } else {
    console.log ("Hello World")
  }
}
helloWorld ("french")

//Create a function with one argument called assignGrade
//return a grade based on the score
function assignGrade(score) {
  if (score >= 90) {
    console.log("A")
  } else if (score >= 80 && score < 90) {
    console.log("B")
  } else if (score >= 70 && score < 80) {
    console.log("C")
  } else if (score >= 60 && score < 70) {
    console.log("D")
  } else {
    console.log("F")
  }
}

assignGrade(88)
assignGrade(12)

//create a funtion called pluralize with two arguments
//return the number and the plural

function pluralize(a, b) {
  if (a> 1) {
   console.log (a + (" "+b+"s"))
   } else {
   console.log (a + b)
   }
 }
pluralize (4, "cat")

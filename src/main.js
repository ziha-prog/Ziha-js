console.log("hellow world");
console.log("huhi");
alert("Welcome to My Website");
let name= "ziha";
console.log(name);
let number1 = 100;
let number2 = 250;
console.log(number1 + number2);
console.log(number1 * number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 % number2);

let bb = 40;
let tb = 140;
let bmi = (bb/(tb*tb))*10000
console.log(bmi);

let time = 6;
if (time <=6){
    console.log("Good Morning");
}
let eat = "steak";
if (eat = "cake"){
    console.log("don't eat");
}
//PR: jika hujan bawa payung, jika tidak hujan tidak bawa payung 
let today ="rain";
if (today == "rain"){
    console.log("take an umbrella");
}
else{
    console.log("don't take an umbrella");
}
let value =80;
if (value = "75"){
    console.log("Tidak Lulus");
}
else{
    console.log("lulus");
}
let nilai = 90;
console.log ("Nilai = ", nilai);
if (nilai > 75){
    console.log("Lulus");
}
else{
    console.log("Tidak lulus");
}
//jika bilangannya itu genap, maka genap
//jika bilangannya itu ganjil, maka ganjil
let bilangan = 80;
if (bilangan%2 == 0){
    console.log(bilangan + " adalah bilangan genap");
}
else{
    console.log(bilangan + " adalah bilangan ganjil");
}
let BB = 40;
let TB = 140;
let BMI = (BB/(TB*TB))*10000;
console.log("Tinggi Badan = " , TB, "cm");
console.log("Berat Badan = " , BB, "kg");
console.log("BMI = ", BMI);
// jika bmi < 18.5 , maka underweight
//jika bmi 18.5 - 24., maka normal weight
//jika bmi 25.0 - 29.9, maka overweight
//jika bmi >= 30.0, maka obese
if (BMI < 18.5) {
    console.log("underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) { //&& nya sebagai AND = batas nya
    console.log("normal weight");
}
else if (BMI >= 25.0 && BMI <= 29.0) {
    console.log("overweight");
}
else{
    console.log("obese");
}

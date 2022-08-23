console.log('Hello IV');
let name ='Indravignesh';
console.log(name);
let surname="sarathy"
console.log(name + surname);
//consatnts
let interestrate = 0.3;//if reassign use let
interestrate=1;
console.log(interestrate);

/*const ir = 0.3;
ir=1; //throw  error brcoz constant cant reassign
console.log(ir);*/


// 1.primitive datatypes

let name1 ="iv"; //string literal
let age =30; //Number Literal
let isapproved = false; //boolean lit
let firstname =undefined;// explicitly showing undefined
//let selectedcolor = null;

//dynamic typing


/*typeof name1
name1 = 5
typeof name1;*/

// 2. Reference Types objects

let person = {
    name2 :'Indarvignesh',
    age : 19
};
console.log( person.age );
console.log( person );

//array
let selectedcolor =[ 'blue' , 'Red ' ,3];
console.log(selectedcolor[1]);
 selectedcolor[3] = 'yellow';
 console.log(selectedcolor[3]); //increasing length

//Functions
function greet(name,lastname){
    console.log('hello ' +name +' ' + lastname)

}

function square(a)
{
    return a *a ;
}
greet('john','smith')
number = square(100);
console.log(number)



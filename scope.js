
//function scope


function say(){
    let name="Javascript"
    console.log("Hai Global scope");
    console.log("within the func"+name);
}
say()

//Block Scope
//The block scope of a variable means that the variables is accessabile
//within the block that is between the curly braces.
function Voting(age){
    if(age>=18){
          let iscloudy=true;
          var israining=true;
          console.log("eligible");
          console.log(iscloudy);
      }
      console.log(israining);
      console.log(iscloudy);
  }
  Voting(18)
  
  //local scope (same as function or block scope depending on context)
  //callback function
  
function text(){
    console.log("message");
}
text();

function send(callback){
    console.log("message sended");
    setTimeout(callback,2000);
}
send(text)
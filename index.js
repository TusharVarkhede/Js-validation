
function showPassword(){
    var x=document.getElementById("pass");

    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

function displayText(text){
    document.getElementById("alertText").innerHTML=text;
    document.getElementById("showAlert").classList.add("show");
    setTimeout(
        ()=>{

        
            document.getElementById("showAlert").classList.remove("show");

        },3000
    )
    
}

function sucessRegister(text){
    document.getElementById("alertText").innerHTML=text;
    document.getElementById("showAlert").classList.add("success");
    setTimeout(
        ()=>{

        
            document.getElementById("showAlert").classList.remove("success");

        },3000
    )
}
function validateForm(){

    var fulln=document.getElementById("fullName").value;
    var usern=document.getElementById("username").value;
    var email=document.getElementById("emailid").value;
    var mob=document.getElementById("mobno").value;

    var pass1=document.getElementById("pass").value;
    var pass2=document.getElementById("conpass").value;
    console.log(pass1);
    console.log(pass2)
    if(fulln.length<=3){
        displayText("The name is too short : ")
    }
    // else if(usern.length<=3){
    //  displayText("The username is too short : ")   
    // }
    // else if(email.length==0){
    //     displayText("Please enter the email")
    // }
    // else if(mob.length!=10){
    //     displayText("Enter the correct mobile number ")
    // }
    // else if(pass1.length<8){
    //     displayText("Password Length must be more than 7")
    // }
    // else if(pass1!==pass2){
    //     displayText("The password is incorrect")
    //}
    else{
        sucessRegister("Registered successfully")
    }



    

}





function seeName(){
    var fulln=document.getElementById("fullName").value;
    console.log("hello",fulln)

}

















































































// var val=confirm("Hello world");
// // console.log(val);
// var a=prompt("Enter the value of a: ");
// console.log(typeof(a));

// function sum(arg){
//     var s=0;

//     for(var i=0;i<arg.length;i++){
//         console.log(arg[i]);
//         s+=arg[i];
//     }
//     return s;
// }

// s=sum([1,2,3,"4",5,6]);
// console.log(s);
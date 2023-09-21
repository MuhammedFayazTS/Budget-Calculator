var LoginBox = document.getElementById("LoginBox");
var RegisterBox = document.getElementById("RegisterBox");
var lname = document.getElementById("lname");
var lpass = document.getElementById("lpass");
var rname = document.getElementById("rname");
var rpass = document.getElementById("rpass");
var remail = document.getElementById("remail");
var errorLname = document.getElementById("error-message-lname");
var errorLpass = document.getElementById("error-message-lpass");
var errorRname = document.getElementById("error-message-rname");
var errorRpass = document.getElementById("error-message-rpass");
var errorRemail = document.getElementById("error-message-remail");
var imageQr = document.getElementById("image-qr");


function RegisterSwitchBtn(){
    LoginBox.classList.add('outAnimationLogin');
    RegisterBox.classList.add('inAnimationRegistration');
    RegisterBox.classList.remove('outAnimationRegistration');
}

function LoginSwitchBtn(){
    LoginBox.classList.remove('outAnimationLogin');
    RegisterBox.classList.add('outAnimationRegistration');
    LoginBox.classList.add('inAnimationLogin');
}
// image change function
function changeImage(){
    imageQr.classList.toggle('QrAdded');
    if(imageQr.classList.contains('QrAdded')){
        imageQr.src ='./images/Qr.png'
    }
    else{
        imageQr.src ='./images/Investment data-cuate.svg'
    }
}

// Register function
function Register(){
    if(rname.value == "" && remail.value =='' && rpass.value == ''){
        errorRname.innerHTML="*Please enter a name";
        errorRemail.innerHTML = "*Please enter a email address";    
        errorRpass.innerHTML = "*Please enter a password";
    }
    else if(rname.value == "" && remail.value =='' ){
        errorRpass.innerHTML = "";
        errorRname.innerHTML="*Please enter a name";
        errorRemail.innerHTML = "*Please enter a email address";    
    }
    else if(rpass.value == "" && remail.value == ""){
        errorRname.innerHTML="";
        errorRpass.innerHTML = "*Please enter a password";
        errorRemail.innerHTML = "*Please enter a email address";
    }
    else if(rpass.value == "" && rname.value == ''){
        errorRemail.innerHTML = "";
        errorRname.innerHTML="*Please enter a name";
        errorRemail.innerHTML = "*Please enter a email address";
    }
    else if(rname.value == ""){
        errorRpass.innerHTML = "";
        errorRemail.innerHTML = "";    
        errorRname.innerHTML="*Please enter a name";
    }
    else if(rpass.value == ""){
        errorRname.innerHTML="";
        errorRemail.innerHTML = "";
        errorRpass.innerHTML = "*Please enter a password";
    }
    else if(remail.value == ''){
        errorRname.innerHTML="";
        errorRpass.innerHTML = "";
        errorRemail.innerHTML = "*Please enter a email address";
    }
    else{
        checkRegistration(rname.value, rpass.value,remail.value);
    }
}
// LoginSwitchBtn();

function checkRegistration(uname,password,email){
    uname = uname.toLowerCase();
    if(JSON.parse(localStorage.getItem(uname))){
        errorRname.innerHTML = "*User name already exists!";
    }
    else if(password.lenght <= 6 && password.lenght >= 10){
        errorRpass.innerHTML = "*Please enter a password between 6 and 10 characters";
    }
    else if(ValidateEmail(email) == false){
        errorRemail.innerHTML = "*Please enter a valid email address";
    }
    else{
        let udetails ={
            uname,
            password,
            email
        }
        alert('Registration Successfull');
        localStorage.setItem(uname,JSON.stringify(udetails));
        LoginSwitchBtn();
    }
}

// login function
function Login(){
    Inputname =  JSON.parse(localStorage.getItem(lname.value.toLowerCase()));
    if(lname.value == ''  && lpass.value == ''){
        errorLname.innerHTML = "*Please enter a User name"; 
        errorLpass.innerHTML = "*Please enter a password";
    }
    else if(lname.value == ''){
        errorLname.innerHTML = "*Please enter  a User name";
        errorLpass.innerHTML = "";
    }
    else if(lpass.value == ''){
        errorLname.innerHTML = "";
        errorLpass.innerHTML = "*Please enter a password";
    }
    else if(Inputname == '' || Inputname == null){
        errorLname.innerHTML = "*User name does not exist!";
        errorLpass.innerHTML = "";
    }
    else if(Inputname.password != lpass.value){
        errorLname.innerHTML = "";
        errorLpass.innerHTML = "*Wrong password!";
    }
    else{
        alert('Login Successfull');
        localStorage.setItem('unameKey',JSON.stringify(Inputname.uname));
        window.location = './home.html';
    }
}

// email validation
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
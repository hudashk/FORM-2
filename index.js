function validate(){
    var name=document.getElementById('name').value;
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var number=document.getElementById('number').value;

    if(name==null || name==""){
        document.getElementById('fname').innerHTML="Please enter your full name";
        return false;
    }
    else{
        document.getElementById('fname').innerHTML="";
    }

    if(username==null || username==""){
        document.getElementById('uname').innerHTML="Please enter your user name";
        return false;
    }
    else{
        document.getElementById('uname').innerHTML="";
    }

    if(email==null || email==""){
        document.getElementById('emailid').innerHTML="Please enter your email";
        return false;
    }
    else{
        document.getElementById('emailid').innerHTML="";
    }

    if(password==null || password==""){
        document.getElementById('pass').innerHTML="Please enter your password";
        return false;
    }
    else{
        document.getElementById('pass').innerHTML="";
    }

    if(number==null || number==""){
        document.getElementById('contactno').innerHTML="Please enter your contact";
        return false;
    }
    else{
        document.getElementById('contactno').innerHTML="";
    }

    if((name.length<=2) || (name.length>=30)){
        document.getElementById('fname').innerHTML="Please enter your proper name";
        return false;
    }
    else{
        document.getElementById('fname').innerHTML="";
    }

    if((password.length<=3) || (password.length>=10)){
        document.getElementById('pass').innerHTML="Please enter valid password";
        return false;
    }
    else{
        document.getElementById('pass').innerHTML="";
    }

    if(number.length!=10){
        document.getElementById('contactno').innerHTML="Please enter 10 digits";
        return false;
    }
    else{
        document.getElementById('contactno').innerHTML="";
    }
    
    if(email.indexOf('@') <=0 ){
        document.getElementById('emailid').innerHTML="Please enter your proper email";
        return false;
    }
    else{
        document.getElementById('emailid').innerHTML="";
    }

    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
        document.getElementById('emailid').innerHTML="Please enter your email";
        return false;
    }
    
    else{
        document.getElementById('emailid').innerHTML="";
    }

return true;

}
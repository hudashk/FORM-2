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

    if(email==null || eamil==""){
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


    
}
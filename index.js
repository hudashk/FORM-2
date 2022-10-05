function validate(){
    var name=document.getElementById('name').value;
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var contact=document.getElementById('contact').value;

    if(name==null || name==""){
        document.getElementById('fname').innerHTML="Please enter your full name";
        return false;
    }
    else{
        document.getElementById('fname').innerHTML="";
    }

    if(username==null || name==""){
        document.getElementById('uname').innerHTML="Please enter your user name";
        return false;
    }
    else{
        document.getElementById('uname').innerHTML="";
    }
}
var em=document.getElementById('exampleInputEmail1');
var pwd=document.getElementById('inputPassword');
var regemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var regpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
function validate()
{
    if(em.value.trim() ==""||pwd.value.trim() =="")
    {
        alert('Fields cannot be empty');
        return false
    }
    else if(!(regemail.test(em.value)))
    {
        mail.innerText="enter valid email address";
        em.style.border="2px solid red"
        return false
    }
    else if(!(regpassw.test(pwd.value))) 
    {   
        pwd.style.border="2px solid red"
        er.innerText="password should contain alteast one uppercase, one lowrcase must contain atleast one number";
        return false
    }
else
{
    return true
}

}
 
ph=document.getElementById("phno");
pswd=document.getElementById("inputPassword");
nme=document.getElementById("nme");
male=document.getElementById("male");
female=document.getElementById("female");
other=document.getElementById("others");
adree=document.getElementById("adss");
email=document.getElementById("email");
var regph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var regname=/^[A-Za-z]+$/;
var regemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var regpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
function valid()
{
if(ph.value.trim() ==""||pswd.value.trim() ==""||nme.value.trim() ==""||adree.value.trim() ==""||email.value.trim() =="")
    {
    alert("fields cannot be blank");
    return false
    }
 else if(!(regph.test(ph.value)))
     {
    pho.innerText="phone number is invalid";
    ph.style.border="2px solid red";
    return false 
    }
else if(!(regname.test(nme.value)))
    {
    nme1.innerText="enter valid name";
    nme.style.border="2px solid red"
    return false
    }
  else if(!(regemail.test(email.value)))
    {
        mail.innerText="enter valid email address";
        email.style.border="2px solid red"
         return false
    }
else if(!(regpassw.test(pswd.value)) ) 
    {   
        pswd.style.border = "2px solid red";
        pd.innerText="password should contain alteast one uppercase, one lowrcase must contain atleast one number";
        return false
    }
 else if((male.checked==false)&&(female.checked==false)&&(others.checked==false))
    {   
        male.style.border="2px solid red";
        female.style.border="2px solid red";
        other.style.border="2px solid red";
        gender.innerText="select any gender";
        return false
    }
else
    {
    
    return true   
    }

}
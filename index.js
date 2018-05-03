function validate(){
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;

    if (name !=null && email !=null){
        alert("you are registred"); 
    }
    else alert("input field are required");
}
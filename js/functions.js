

function fireScroll(){
    
    var t = window.scrollY;
    var nav1 = document.getElementById("nav1");
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    var nav4 = document.getElementById("nav4");
    
    var s1 = document.getElementById("A");
    var s2 = document.getElementById("P");
    var s3 = document.getElementById("C");
    var s4 = document.getElementById("R");
    
    var t1 = s1.offsetTop;
    var t2 = s2.offsetTop;
    var t3 = s3.offsetTop;
    var t4 = s4.offsetTop;
    
    nav1.style.color = "";
    nav2.style.color = "";
    nav3.style.color = "";
    nav4.style.color = "";
    
    if (t > t4) {
            nav4.style.color = "white";
    } else if (t > t3) {
            nav3.style.color = "white";
    } else if (t > t2) {
            nav2.style.color = "white";
    } else if (t > t1) {
            nav1.style.color = "white";
    }
    
}




//Parallax Functions

function scrollA(){
    
    t = window.scrollY;
    var m = -0.25;
    var b = 0;
    newY = m*t + b;
    
    var paraAbout = document.getElementById("para-About");
    paraAbout.style.backgroundPositionY = newY + "px";
   
}

function scrollP(){
        
    t = window.scrollY;
    var m = -0.25;
    var b = 120;
    newY = m*t + b;
    
    var paraProducts = document.getElementById("para-Products");
    paraProducts.style.backgroundPositionY = newY + "px";
}

function scrollC(){
        
    t = window.scrollY;
    var m = -0.25;
    var b = 900;  /* change this to fix tiling */
    newY = m*t + b;
    
    var paraContact = document.getElementById("para-Contact");
    paraContact.style.backgroundPositionY = newY + "px";
    
}

function scrollR(){
        
    t = window.scrollY;
    var m = -0.25;
    var b = 0;  /* change this to fix tiling */
    newY = m*t + b;
    
    var paraReferences = document.getElementById("para-References");
    paraReferences.style.backgroundPositionY = newY + "px";
    
}


//Form validation functions


function checkName() {
    var namebox = document.getElementById("name");
    var name = namebox.value;
    
    var nameLabel = document.getElementById("nLabel");
    var valid = true;
    
    for(var i = 0; i <name.length; i++){
        if (name.length < 7) valid = false;
        
        var ascii = name.charCodeAt(i);
        if (isNumber(ascii)) {
            valid = false;
        }        
    }
    
    if (valid == false) nameLabel.style.color = "#eb5c52";
    else if (valid == true) nameLabel.style.color = "lightgreen";

}


function checkEmail() {
    var emailbox = document.getElementById("email");
    var email = emailbox.value;
    
    var emailLabel = document.getElementById("eLabel");
    
    var pattern = /(\w)*@(\w)*[.](\w)*$/;
    
    if(pattern.test(email) && email.length>4) emailLabel.style.color = "lightgreen";
    else emailLabel.style.color = "#eb5c52";

}


function checkReason() {
    var cb = document.getElementById("reason");
                
    var opts = cb.options;
    var si = cb.selectedIndex;
    var sel = opts[si];
    
    var rLabel = document.getElementById("rLabel");
    
    var hidden = document.getElementsByClassName("hideID");
    
    if(sel.index == 0){
        cb.style.borderColor = "#eb5c52";
        rLabel.style.color = "white"
    }
    else{
        cb.style.borderColor = "white";
        rLabel.style.color = "lightgreen"
    }
    
    
    if (sel.index == 3) {
        for(var i = 0; i != hidden.length; i++){
            hidden[i].style.display = "block";
        }               
    }
    else{
        for(var i = 0; i != hidden.length; i++){
            hidden[i].style.display = "none";
        } 
    }

}


function checkProduct() {
    var productbox = document.getElementById("product");
    var ID = productbox.value;
    
    var plabel = document.getElementById("pLabel");
                
    if (ID.length > 4 && (ID == "CJ0621" || ID == "B1A2S3" || ID == "B1I2K3" || ID == "B0W1N3" || ID == "H0C1E4" || ID == "P1N6P0" || ID == "R031N6" || ID == "R2D2C2" || ID == "R1D3FS" || ID == "S0C6E7" || ID == "A1B2C3" || ID == "T3N1S0" || ID == "W3I6T5")) { //List product codes here
        // Valid.
        plabel.style.color = "lightgreen";
        
    } else {
        // Invalid.
        plabel.style.color = "#eb5c52";
        
    }
}


function updateCharCount(){
    var msg  = document.getElementById("message").value;
    var charCount = msg.length;
    
    var msgLabel = document.getElementById("mLabel");
    
    if (charCount > 10 && charCount < 30){
        msgLabel.style.color = "lightgreen";
    } else{
        msgLabel.style.color = "#eb5c52";
        if(charCount == 0) msgLabel.style.color = "white";
    }
}



function isLetter (ch) {

    if (ch >= 65 && ch <= 90) { // Capital letters
        return true;
    } else if (ch >= 97 && ch <= 122) { // Lowercase letters
        return true;
    } else { // Anything else
        return false;
    }
}
            
function isNumber (ch) {

    if (ch >= 48 && ch <= 57) { // Digits
        return true;
    } else { // Anything else
        return false;
    }
}















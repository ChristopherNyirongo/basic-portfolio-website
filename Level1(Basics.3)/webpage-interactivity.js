
const toggleBtn = document.getElementById("toggleBtn");
const skills = document.getElementById("skillsList");
const skillSelect = document.getElementById("skillSelect");
const skillOutput = document.getElementById("skillOutput");
const contactForm = document.getElementById("contactForm");


toggleBtn.onclick = function(){
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else{
        skills.style.display ="none";
    }
};

skillSelect.addEventListener("change", selectSkill );
function selectSkill(){
    skillOutput.textContent = "you selected:" + this.value;
};

contactForm.addEventListener("submit", contactInfo );
function contactInfo(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("please fill in the fields");
        return;  
    }
    else{
        alert("message sent successfully");
        this.reset();
    }
};
// GET REFERCES TO THE FORM AND DISPLAY AREA 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// HANDLE FORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload 
    // collect input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var eudcation = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically 
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal information</h3?\n<p><b>Name:</b><span contendeditable=\"true\">".concat(name, "</span></P>\n<p><b>Name:</b><span contendeditable=\"true\">").concat(email, "</span></P>\n<p><b>Name:</b><span contendeditable=\"true\">").concat(phone, "</span></P>\n\n<h3>Education</h3>\n<p contendeditable=\"true\">").concat(eudcation, "\n\n<h3>Experience</h3>\n<p contendeditable=\"true\">").concat(experience, "\n\n<h3>Skills</h3>\n<p contendeditable=\"true\">").concat(skills, "\n");
    //Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});

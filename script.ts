// GET REFERCES TO THE FORM AND DISPLAY AREA 
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLFormElement;

// HANDLE FORM SUBMISSION
form.addEventListener('submit', (event: Event) => {
event.preventDefault (); // prevent page reload 

// collect input values 
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const eudcation = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

// Generate the resume content dynamically 
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal information</h3?
<p><b>Name:</b><span contendeditable="true">${name}</span></P>
<p><b>Name:</b><span contendeditable="true">${email}</span></P>
<p><b>Name:</b><span contendeditable="true">${phone}</span></P>

<h3>Education</h3>
<p contendeditable="true">${eudcation}

<h3>Experience</h3>
<p contendeditable="true">${experience}

<h3>Skills</h3>
<p contendeditable="true">${skills}
`;

//Display the generated resume 
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('the resume display element is missing.')
}
})
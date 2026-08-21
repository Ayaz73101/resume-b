const showResume = document.getElementById("showResume");
const resumeDetails = document.getElementById("resumeDetails");

showResume.addEventListener("click", function () {

    // Clear previous content
    resumeDetails.innerHTML = "";

    // Main heading
    const heading = document.createElement("h1");
    heading.textContent = "My Resume";
    resumeDetails.appendChild(heading);

    // Personal Details
    const personalHeading = document.createElement("h2");
    personalHeading.textContent = "Personal Details";
    resumeDetails.appendChild(personalHeading);

    const name = document.createElement("p");
    name.innerHTML = "<strong>Name:</strong> Ayaz Khan";
    resumeDetails.appendChild(name);

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> ayaz03570@gmail.com";
    resumeDetails.appendChild(email);

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> 7310195293";
    resumeDetails.appendChild(phone);

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> Ghaziabad, Uttar Pradesh";
    resumeDetails.appendChild(address);

    // Education
    const educationHeading = document.createElement("h2");
    educationHeading.textContent = "Education";
    resumeDetails.appendChild(educationHeading);

    const education = document.createElement("p");
    education.textContent = "B.Tech in Computer Science (AIML)";
    resumeDetails.appendChild(education);

    // Skills
    const skillsHeading = document.createElement("h2");
    skillsHeading.textContent = "Skills";
    resumeDetails.appendChild(skillsHeading);

    const skillsList = document.createElement("ul");

    const skills = ["HTML", "CSS", "JavaScript", "Python"];

    skills.forEach(function (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    resumeDetails.appendChild(skillsList);

    // Projects
    const projectHeading = document.createElement("h2");
    projectHeading.textContent = "Projects";
    resumeDetails.appendChild(projectHeading);

    const project = document.createElement("p");
    project.textContent = "Resume Builder Project";
    resumeDetails.appendChild(project);

    // About Me
    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "About Me";
    resumeDetails.appendChild(aboutHeading);

    const about = document.createElement("p");
    about.textContent =
        "Hello! I am a student interested in web development and programming.";
    resumeDetails.appendChild(about);
});


// Functions to display the contents ribbon at the top of the page
// function showHome() {
//     document.getElementById("Home").style.display = "block"
//     document.getElementById("AboutMe").style.display = "none"
//     document.getElementById("Projects").style.display = "none"
//     document.getElementById("Contact").style.display = "none"
//     document.getElementById("GuestBook").style.display = "none"

//     document.getElementById("HomeTab").style.color = "#e4add6"
//     document.getElementById("AboutMeTab").style.color = "black"
//     document.getElementById("ProjectsTab").style.color = "black"
//     document.getElementById("ContactTab").style.color = "black"
// }

function showAboutMe() {

    document.getElementById("AboutMe").style.display = "block"
    // document.getElementById("Home").style.display = "none"
    document.getElementById("Projects").style.display = "none"
    document.getElementById("Contact").style.display = "none"
    document.getElementById("GuestBook").style.display = "none"

    document.getElementById("AboutMeTab").style.color = "#e4add6"
    // document.getElementById("HomeTab").style.color = "black"
    document.getElementById("ProjectsTab").style.color = "black"
    document.getElementById("ContactTab").style.color = "black"

   
}

const showProjects = () => {

    document.getElementById("Projects").style.display = "block"
    // document.getElementById("Home").style.display = "none"
    document.getElementById("AboutMe").style.display = "none"
    document.getElementById("Contact").style.display = "none"
    document.getElementById("GuestBook").style.display = "none"

    document.getElementById("ProjectsTab").style.color = "#e4add6"
    // document.getElementById("HomeTab").style.color = "black"
    document.getElementById("AboutMeTab").style.color = "black"
    document.getElementById("ContactTab").style.color = "black"
}

function showContact() {

    document.getElementById("Contact").style.display = "block"
    // document.getElementById("Home").style.display = "none"
    document.getElementById("AboutMe").style.display = "none"
    document.getElementById("Projects").style.display = "none"
    document.getElementById("GuestBook").style.display = "none"

    document.getElementById("ContactTab").style.color = "#e4add6"
    document.getElementById("AboutMeTab").style.color = "black"
    document.getElementById("ProjectsTab").style.color = "black"
    // document.getElementById("HomeTab").style.color = "black"


   
}

window.onload = showAboutMe;

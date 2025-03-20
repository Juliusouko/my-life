let heading = 'The Life of Julius'
let paragraph= 'Julius is a self taught software engineer'
const skills = ['Problem Solving', 'Good Communicator', 'Team Player', 'Self Taught', 'Fast Learner']
const projects = ['Odin Project', 'Learn Kenya', 'Git-Test', 'My-Blog', 'Punchlines-KE', 'Style-UP']

const aboutMeSection = document.getElementById("aboutme")
const skillsSection = document.getElementById("skillsprojects")

// About me section
let headingElement = document.createElement('h1')
headingElement.innerHTML = heading
let paragraphElement = document.createElement('p')
paragraphElement.innerHTML = paragraph

// End of about me section

// Skills Section
const skillsContainer =  document.createElement('div')
const projectContainer = document.createElement('div')

skillsContainer.innerHTML = `
    <h2>Skills ${skills.length}</h2>
`

let skillsList = document.createElement('ul')

for (let skill = 0; skill < skills.length; skill++ ) {
    console.log(skills[skill])
    let listItem = document.createElement('li') 
    let buttonItem = document.createElement('button')
    buttonItem.innerHTML = "View More"
    listItem.innerHTML = skills[skill] 
    skillsList.appendChild(listItem) 
    skillsList.appendChild(buttonItem)
}

skillsContainer.appendChild(skillsList)

//add button to the skillsContainer to view more about skills.



projectContainer.innerHTML = `
    <h2>Projects</h2>
`

let projectList = document.createElement('ol')

projects.forEach((project) => {
    let listItem = document.createElement('li')
    listItem.innerHTML = project
    let buttonItem = document.createElement('button')
    buttonItem.innerHTML = "View More"
    projectList.appendChild(listItem)
    projectList.appendChild(buttonItem)
})

projectContainer.appendChild(projectList)

//add button to the projectContainer to view more about projects.

// End of skills section 

aboutMeSection.appendChild(headingElement)
aboutMeSection.appendChild(paragraphElement)
skillsSection.appendChild(skillsContainer)
skillsSection.appendChild(projectContainer)


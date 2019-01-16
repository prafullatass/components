const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

const h1 = (...props) => {
    return `<h1 class="${props[1]} ${props[2]}"> ${props[0]}</h1>`
}

/*const student_div = (name, name_style, clazz, info) => `
    <div id="student">
        ${h1(name, "xx-large", name_style)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`
*/

const student_div = (name, name_style, clazz, info) => `
    <div id="student">
        ${element("h1", name, "xx-large", name_style)}
        ${element("section", clazz, "section--padded")}
        ${element("aside", info, "pushRight")}
    </div>
`

const element = (...props) => {
    return `<${props[0]} class="${props[2]} ${props[3]}"> ${props[1]}</${props[0]}>`
}

// const h1 = element("h1", "Generic Component Maker", "xx-large orange")

for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent =  "passing"
    } else {
        studentComponent = "failing"
    }
    
    const container = document.querySelector("#container")
    container.innerHTML += student_div(student.name,studentComponent, student.class, student.info)
    //console.log(container.innerHTML)
}



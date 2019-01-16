// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()
console.log(fragment)
// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/

const AddAndCreateElement = (...arg) => {
    const augustus = document.createElement(`${arg[0]}`)
    augustus.textContent = arg[1]
    fragment.appendChild(augustus)
}

AddAndCreateElement("div", "Julius Caesar")
AddAndCreateElement("div", "Augustus Caesar")
AddAndCreateElement("div", "Marcus Aurelius")

document.querySelector("#emperorList").appendChild(fragment)



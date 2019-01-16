// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)
document.body.appendChild(list)

console.log(list)



// create ana article creating Elements
const articleName = document.querySelector("#messages")

const createSectionElement = (messageText) => {
    const sectionTag = document.createElement('section')
    sectionTag.className = "message"
    sectionTag.textContent = messageText
    return sectionTag
}

const subSection1 = createSectionElement("Are we doing fireworks this year?")
articleName.appendChild(subSection1)
const subSection2 = createSectionElement("After last year's \"tree incident\", should we?")
articleName.appendChild(subSection2)
const subSection3 = createSectionElement("The fire fighters put it out in like a minute. Wasn't even a real fire.")
articleName.appendChild(subSection3)
const subSection4 = createSectionElement("We can set them off in the street.")
articleName.appendChild(subSection4)
const subSection5 = createSectionElement(" Our neighbors' houses are flammable, too")
articleName.appendChild(subSection5)

console.log(articleName)

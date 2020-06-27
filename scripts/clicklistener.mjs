export default (clickHandler) => {
  document.addEventListener('click', e => {
    e.stopPropagation()
    e.preventDefault()
    if (typeof clickHandler[e.target.id] !== 'function')
      return
    if (e.target.parentNode.tagName !== 'FORM') {
      clickHandler[e.target.id]()
      return
    }
    const formElement = e.target.parentNode,
      inputElements = formElement.getElementsByTagName("input"), // text, checkbox, redio-button, file
      selectElements = formElement.getElementsByTagName("select"),
      textareaElements = formElement.getElementsByTagName("textarea"),
      jsonObject = {}
    for (let i of inputElements) jsonObject[i.name] = i.value
    for (let i of selectElements) jsonObject[i.name] = i.value
    for (let i of textareaElements) jsonObject[i.name] = i.value

    clickHandler[e.target.id](jsonObject)
  })
}
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
    var formElement = e.target.parentNode,
      inputElements = formElement.getElementsByTagName("input"),
      jsonObject = {}
    for (var i of inputElements) {
      jsonObject[i.name] = i.value
    }
    clickHandler[e.target.id](jsonObject)
  })
}
var clickHandler = {}

clickHandler['add-class'] = data => {
  Object.keys(data).forEach(i => write(`<p>${i}:${data[i]}</p>`))
  console.log(data)
}

export default clickHandler
var clickHandler = {}

clickHandler['add-class'] = data => {
  Object.keys(data).forEach(i => write(`<p>${i}:${data[i]}</p>`))
  db.insert('class', data)
}

export default clickHandler
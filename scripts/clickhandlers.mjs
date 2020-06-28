var clickHandler = {}

clickHandler['add-class'] = data => {
  Object.keys(data).forEach(i => write(`<p>${i}:${data[i]}</p>`))
  store.insert('class', data)
}
clickHandler['get-all'] = async () => {
  const members = await store.retrive('members')
  if (!members) return;
  members.forEach(member => {
    Object.keys(member).forEach(i => write(`<p>${i}:${member[i]}</p>`))
  })
}

export default clickHandler
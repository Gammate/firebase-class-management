export const getByID = async (collection, id) => {
  const result = firebase.firestore().collection(collection).doc(id).get()
  return result.data()
}

export const getAll = async (collection, orderBy) => {
  const result = firebase.collection(collection).orderBy(orderBy, 'desc').get()
  return result.data()
}
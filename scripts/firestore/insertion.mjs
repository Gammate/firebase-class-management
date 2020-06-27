export default (collection, data) => {
  firebase.firestore().collection(collection).add(data)
}
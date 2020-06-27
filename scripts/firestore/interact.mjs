export default async (collection, orderBy, { onAdd, onDelete, onEmpty }) => {
  var query = firebase.firestore()
    .collection(collection)
    .orderBy(orderBy, 'desc')
    .limit(50)
  query.onSnapshot(function (snapshot) {
    if (!snapshot.size)
      onEmpty('nothing to show!')
    snapshot.docChanges().forEach(function (change) {
      var data = change.doc.data();
      if (change.type === 'removed') {
        onDelete(data)
      } else {
        onAdd(data)
      }
    })
  })
  return await 2
}
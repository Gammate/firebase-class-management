export default async function (db, collection, query) {
  if (query) { /* .orderBy(orderBy, 'desc') */ }
  const snapshot = await db.collection(collection).get().catch(error => console.log(error))
  const result = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return result
}
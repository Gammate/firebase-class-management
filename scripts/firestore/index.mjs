import insert from './insertion.mjs'
import retrive from './retrive.mjs'
import live from './interact.mjs'

export default function (firestore) {
  /**
   * Stores data in firestore
   * @param collection The name of the collection
   * @param data The document to store in database
   */
  this.insert = (collection, data) => {
    insert(firestore, collection, data)
  }
  /**
   * 
   * @param collection The name of the collection
   * @param query Object of query { id, order, where }
   */
  this.retrive = async (collection, query) => {
    return await retrive(firestore, collection, query)
  }
  this.live = (collection, onAdd, onDelete) => {
    live(firestore, collection, onAdd, onDelete)
  }
}
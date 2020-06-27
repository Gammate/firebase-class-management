import handlers from './scripts/clickhandlers.mjs'
import listener from './scripts/clicklistener.mjs'
import write from './scripts/preview/write.mjs'
import * as db from './scripts/firestore/index.mjs'

// firebase is already defined
firebase.initializeApp(db.config);

// write is defined as a demonstration function
window['write'] = write
// db is defined as an interaction to the firebase
window['db'] = db

listener(handlers)
console.log('up and running')
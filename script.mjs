import handlers from './scripts/clickhandlers.mjs'
import listener from './scripts/clicklistener.mjs'
import write from './scripts/preview/write.mjs'
import app from './scripts/firestore/index.mjs'
import firebaseConfig from './firebaseConfig.private.mjs'

// -- initialization
// firebase is already defined
(function () {
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  
  
  
  window['store'] = new app(db)
  window['write'] = write
})()

// -- application
listener(handlers)

// -- all good
console.log('up and running')
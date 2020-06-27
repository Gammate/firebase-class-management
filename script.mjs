import handlers from './scripts/clickhandlers.mjs'
import listener from './scripts/clicklistener.mjs'
import write from './scripts/preview/write.mjs'

window['write'] = write

listener(handlers)
console.log('up and running')
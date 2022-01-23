const mongoose = require('mongoose')

var Schema = mongoose.Schema 

var quoteSchema = new Schema ({ 
    _id : Number,
    quote : String, 
    movie : String, 
    character : String
}, {collection : 'quotes'})

module.exports = mongoose.model('quotes', quoteSchema);
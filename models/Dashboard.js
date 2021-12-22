const mongoose = require('mongoose');

const DashboardSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'

    },
    layout:{
        type: Array,
        required: true
    }


});

module.exports = mongoose.model('dashboard', DashboardSchema);


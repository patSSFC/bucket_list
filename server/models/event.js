const mongoose = require('mongoose');
// const deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

console.log('Loaded Event Schema');
var EventSchema = new Schema({
    title: {type: String, required: true, minlength: 5},
    description: {type: String, required: true, minlength: 10},
    _user: {type: Schema.Types.ObjectId, ref : 'User'},
    complete: {type: Boolean, default: false}
}, { timestamps: { createdAt: 'created_at' } });
// EventSchema.plugin(deepPopulate);

var Event = mongoose.model('Event', EventSchema);

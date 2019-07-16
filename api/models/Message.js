const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MessageSchema = Schema({
    text: String,
    created_at: String,
    emitter: { type: Schema.objectId, ref: 'User' },
    receiver: { type: Schema.objectId, ref: 'User' }
});

module.exports = mongoose.model('Message', MessageSchema);
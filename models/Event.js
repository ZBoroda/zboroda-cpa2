'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var eventSchema = Schema( {
  userId: ObjectId,
  title: String,
  description:String,
  eventDate: String,
  eventLocation: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Event', eventSchema );

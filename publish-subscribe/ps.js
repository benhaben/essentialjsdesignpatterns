/**
 * Created by shenyin.sy on 17/3/16.
 */

"use strict"
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    subscribe(eventName, listener) {
        this.on(eventName, listener);
    }

    publish() {
        var args = Array.prototype.slice.call(arguments);
        this.emit.apply(this, args);
    }
}

const myEmitter = new MyEmitter();

// A very simple new mail handler

// A count of the number of messages received
var mailCounter = 0;

// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage".

// Render a preview of new messages
myEmitter.subscribe("inbox/newMessage", function (topic, data) {

    // Log the topic for debugging purposes
    console.log("A new message was received, show topic: ", topic);

});

// Here's another subscriber using the same data to perform
// a different task.

// Update the counter displaying the number of new
// messages received via the publisher

myEmitter.subscribe("inbox/newMessage", function (topic, data) {
    console.log("A new message was received, show data: ", data);

});

myEmitter.publish("inbox/newMessage", [{
    sender: "hello@google.com",
    body: "Hey there! How are you doing today?"
}], "this is data");

// We could then at a later point unsubscribe our subscribers
// from receiving any new topic notifications as follows:
// unsubscribe( subscriber1 );
// unsubscribe( subscriber2 );
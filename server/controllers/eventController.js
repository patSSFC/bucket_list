const mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = {
    postEvent : function(req, res) {
        // console.log(req.body);
        // console.log(req.body.taggedUser);
        if(req.body.currentUser === req.body.taggedUser.name) {
            var event = new Event({
                title: req.body.title,
                description: req.body.description,
                _user: req.body.taggedUser._id
            });
            User.findOne({_id : req.body.taggedUser._id}, function(err, user) {
                event.save(function(err) {
                    user._events.push(event);
                    user.save(function(err) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({data : 'event saved!'});
                        }
                    })
                })
            })
        } else {
            var events = [];
            var event1 = new Event({
                title: req.body.title,
                description: req.body.description,
                _user: req.body.taggedUser._id
            });
            events.push(event1);
            User.findOne({name : req.body.currentUser}, function(err, user) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    var event2 = new Event({
                        title: req.body.title,
                        description: req.body.description,
                        _user: req.body.taggedUser._id
                    });
                    events.push(event2);
                    user._events.push(event2);
                    Event.create(events, function(err, events) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            console.log(events);
                            user.save(function(err) {
                                if(err) {
                                    res.status(500).json(err);
                                } else {
                                    User.findOne({_id : req.body.taggedUser._id}, function(err, user2) {
                                        console.log(user2);
                                        console.log(event1);
                                        if(err) {
                                            res.status(500).json(err);
                                        } else {
                                            user2._events.push(events[0]);
                                            user2.save(function(err) {
                                                if(err) {
                                                    res.status(500).json(err);
                                                } else {
                                                    res.status(200).json({date: "events added to both users!"});
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    },
    getAllEvents : function(req, res) {
        console.log(req.params);
        User.findOne({_id : req.params.user_id})
        .populate('_events')
        .exec(function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                Event.populate(user._events, {
                    path: '_user',
                    model: 'User'
                }, function(err) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(user);
                    }
                })
            }
        })
    },
    updateComplete : function(req, res) {
        console.log(req.body);
        var update = {$set : {complete: true}};
        Event.findOneAndUpdate({_id : req.body._id}, update, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(user);
            }
        })
    }
}

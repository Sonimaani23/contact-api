const express=require('express')
const bodyParser = require('body-parser');
const app=express()
require("./models/schema")
const Contact=require("./models/model")

app.use(bodyParser.json());
app.get('/contacts', (req, res) => {
    Contact.find({}, (err, contacts) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving contacts from database');
        } else {
            res.send(contacts);
        }
    });
});

app.post('/contacts', async (req, res) => {
    const newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    await newContact.save()})

//    await newContact.save((err, contact) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error saving contact to database');
//         } else {
//             res.send(contact);
//         }
//     });
// });

app.get('/contacts/:id', (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving contact from database');
        } else if (!contact) {
            res.status(404).send('Contact not found');
        } else {
            res.send(contact);
        }
    });
});

app.put('/contacts/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    }, { new: true }, (err, contact) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating contact in database');
        } else if (!contact) {
            res.status(404).send('Contact not found');
        } else {
            res.send(contact);
        }
    });
});

app.delete('/contacts/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id, (err, contact) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting contact from database');
        } else if (!contact) {
            res.status(404).send('Contact not found');
        } else {
            res.send(contact);
        }
    })
});




app.listen(3000,()=>{console.log("conected")})
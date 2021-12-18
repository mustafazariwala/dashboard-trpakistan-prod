const express = require('express')
const Resource = require('../model/resource')

var fs = require('fs'); 
const csv = require('csv-parse');


let router = express.Router()

router.post('/add', (req,res)=> {
    console.log('resources');
    let data = new Resource({
        title: req.body.title,
        catagory: req.body.catagory,
        thumbnail: req.body.thumbnail,
        url:req.body.url
    })
    data.save()
})

router.get('/allresources', (req,res)=> {
    Resource.find({}).then(result => {
        res.status(200).send(result)
    })
})

let data = new Resource({
    title: 'Sales & Financial Management for Small & Medium Businesses',
    catagory: 'Business Education', 
    thumbnail: '',
    url: 'https://www.youtube.com/embed/kNOW6g7OnpM',
})
data.save()




module.exports = router
const express = require('express')
const BusinessMuwasaat = require('../model/businessMuwasaat')

let router = express.Router()

let data = {
    sn: 01,
    trRef: "try",
    counsellor: [
        {
            prefix: "try",
            counsellorName: "try",
            its: 5,
            mobileNo: 5,
            grade: "try"
        },
        {
            prefix: "try",
            counsellorName: "try",
            its: 5,
            mobileNo: 5,
            grade: "try"
        },
        {
            prefix: "try",
            counsellorName: "try",
            its: 5,
            mobileNo: 5,
            grade: "try"
        }
    ],
    muminDetails: {
        prefix: "try",
        name: "try",
        its: 5,
        mauze: "try",
        mobileNo: 5,
    },
    caseDetails: {
        caseYear: 5,
        caseType: "try",
        enayatApproval: true,
        caseStatus: "try",
        businessName: "try",
        keyNote: "try"
    }    
}

router.get('/findRecord', (req,res) => {
    BusinessMuwasaat.find({}
        , '_id sn trRef muminDetails.name muminDetails.its counsellor.counsellorName caseDetails.caseYear caseDetails.caseType caseDetails.enayatApproval ')
    .then(result => {
        filtered = result.filter(function(e){return e}) 
        res.status(200).send(filtered)
    })
})

router.post('/search', (req,res)=> {
    console.log(req.body)
    BusinessMuwasaat.findOne(req.body)
    .then(result => {
        res.status(200).send(result)
        
    }).catch(err => {
        console.log(err)
    })
})




router.post('/addRecord', (req,res)=> {
    console.log('Entry')
    let businessMuwasaat = new BusinessMuwasaat(req.body);
    businessMuwasaat.save().then((err, response) => {
        if(err){
            res.status(400)
        }
        res.status(200).send({
            its: req.body.muminDetails.its
        })
    })

})


// let newData = new businessMuwasaat(data);
// newData.save()

module.exports = router
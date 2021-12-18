const express = require('express')
const BusinessMuwasaat = require('../model/businessMuwasaat')

var fs = require('fs'); 
const csv = require('csv-parse');
const businessMuwasaat = require('../model/businessMuwasaat');


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

});

router.get('/gettrref', (req,res)=> {
    businessMuwasaat.find({}, 'trRef').then(result => {
        let dataArray = []
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            dataArray.push({label: element.trRef, _id: element._id})
        }
        res.send(dataArray)
    })
})

router.get('/deletetrref/:id', (req,res)=> {
    console.log(req.params)
    businessMuwasaat.deleteOne({_id: req.params.id}).then(response => {
        console.log(response)
        res.status(200).send({
           message: response
        })
    })
})

// var csvData=[];
// console.log(__dirname + '\\..\\crc.csv')
// fs.createReadStream(__dirname + '\\..\\bs.csv')
//     .pipe(csv.parse({}))
//     .on('data', function(csvrow) {
//         let data = {
//             sn: csvrow[0],
//             trRef: csvrow[1],
//             muminDetails: {
//                 prefix: csvrow[17],
//                 name: csvrow[18],
//                 its: csvrow[19],
//                 mauze: csvrow[20],
//                 mobileNo: csvrow[21]
//             },
//             caseDetails: {
//                 caseYear: csvrow[22],
//                 caseType: csvrow[23],
//                 enayatApproval: csvrow[24],
//                 caseStatus: csvrow[25],
//                 businessName: csvrow[26],
//                 keyNote: csvrow[27],
//             },
//             counsellor: []
//         }
//         if(csvrow[3] != ''){
//             let councsellor1 = {
//                 prefix: csvrow[2],
//                 counsellorName: csvrow[3],
//                 its: csvrow[4],
//                 mobileNo: csvrow[5],
//                 grade: csvrow[6],
//             };
//             data.counsellor.push(councsellor1)
//             // console.log(councsellor1)
//         };
//         if(csvrow[8] != ''){
//             let councsellor2 = {
//                 prefix: csvrow[7],
//                 counsellorName: csvrow[8],
//                 its: csvrow[9],
//                 mobileNo: csvrow[10],
//                 grade: csvrow[11],
//             };
//             data.counsellor.push(councsellor2)
//         }
//         if(csvrow[13] != ''){
//             let councsellor3 = {
//                 prefix: csvrow[12],
//                 counsellorName: csvrow[13],
//                 its: csvrow[14],
//                 mobileNo: csvrow[15],
//                 grade: csvrow[16],
//             };
//             data.counsellor.push(councsellor3)
//         }

//         csvData.push(data)         
//     })
//     .on('end',function() {
//       //do something with csvData
//         // BusinessMuwasaat.insertMany(csvData).then(result => {
//         //     console.log(result)
//         // })
//         console.log(csvData)
//     });



// let newData = new businessMuwasaat(data);
// newData.save()

module.exports = router
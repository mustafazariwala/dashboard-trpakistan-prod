const mongoose = require('mongoose');

const businessMuwasaatSchema = mongoose.Schema({
    sn: {type: String, required: true},
    trRef: {type: String},
    counsellor: [
        {
            prefix: {type: String},
            counsellorName: {type: String},
            its: {type: String},
            mobileNo: {type: String},
            grade: {type: String}
        }
    ],
    muminDetails: {
        prefix: {type: String},
        name: {type: String},
        its: {type: String},
        mauze: {type: String},
        mobileNo: {type: String},
    },
    caseDetails: {
        caseYear: {type: String},
        caseType: String,
        enayatApproval: String,
        caseStatus: String,
        businessName: String,
        keyNote: String
    }    
})

module.exports = mongoose.model('businessMuwasaat', businessMuwasaatSchema)
const mongoose = require('mongoose');

const businessMuwasaatSchema = mongoose.Schema({
    sn: {type: Number, required: true},
    trRef: {type: String},
    counsellor: [
        {
            prefix: {type: String},
            counsellorName: {type: String},
            its: {type: Number},
            mobileNo: {type: Number},
            grade: {type: String}
        }
    ],
    muminDetails: {
        prefix: {type: String},
        name: {type: String},
        its: {type: Number},
        mauze: {type: String},
        mobileNo: {type: Number},
    },
    caseDetails: {
        caseYear: {type: String},
        caseType: String,
        enayatApproval: Boolean,
        caseStatus: String,
        businessName: String,
        keyNote: String
    }    
})

module.exports = mongoose.model('businessMuwasaat', businessMuwasaatSchema)
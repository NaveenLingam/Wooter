const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        qualification: {
            type: String,
            required: true,
            trim: true
        },
        yearOfPassing: {
            type: Number,
            required: true
        },
        workExperience: {
            type: String,
            required: true,
            trim: true
        },
        skills: {
            type: Array,
            required: true,
            trim: true
        },
        domain: {
            type: String,
            required: true,
            trim: true
        },
        githubId: {
            type: String,
            required: false,
            trim: true
        },
        skypeId: {
            type: String,
            required: false,
            trim: true
        },
        linkedinId: {
            type: String,
            required: false,
            trim: true
        },
        course: {
            type: String,
            required: false,
            trim: true
        },
        resumeUpload: {
            type: String,
            required: false,
            trim: true
        }
    },
    {
        timestamps: true,
        useNestedStrict: true,
    }
);
module.exports = mongoose.model('candidate', candidateSchema);
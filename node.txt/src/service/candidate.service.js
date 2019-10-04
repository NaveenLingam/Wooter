const candidate = require('../model/candidate.model');
const baseService = require('./base.service');

exports.createCandidate = async (body) => {
    return await baseService.create(candidate, body);
};
exports.getAllCandidate = async () => {
    return await baseService.findAll(candidate);
}
exports.getCandidate = async (id) => {
    return await baseService.findById(candidate, id);
}
exports.getCandidateByParams = async (params) => {
    return await baseService.findByParams(candidate, params);
}
exports.updateCandidate = async (id, body) => {
    return await baseService.findOneAndUpdate(candidate, id, body);
}
exports.deleteCandidate = async (id) => {
    return await baseService.findByIdAndDelete(candidate, id);
}
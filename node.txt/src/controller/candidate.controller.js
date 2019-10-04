const candidateService = require('../service/candidate.service');
/**
 * create a candidate
 * @param req
 * @param res
 * @posts 
 **/
exports.createCandidate = async (req, res) => {
    const candidate = await candidateService.createCandidate(req.body);
    res.status(candidate.statusCode).json(candidate);
};
/**
 * get all candidate
 * @param req
 * @param res
 * @get
 */
exports.getAllCandidate = async (req, res) => {
    const candidate = await candidateService.getAllCandidate();
    res.status(candidate.statusCode).json(candidate);
}
/**
 * get single candidate by object id
 * @param req
 * @param res
 * @get
 */
exports.getCandidate = async (req, res) => {
    const candidate = await candidateService.getCandidate(req.params.id);
    res.status(candidate.statusCode).json(candidate);
}
/**
 * get  candidate by any parameter
 * @param req
 * @param res
 * @get
 */
exports.getCandidateByParams = async (req, res) => {
    const candidate = await candidateService.getCandidateByParams(req.query);
    res.status(candidate.statusCode).json(candidate);
}
/**
 * update candidate by object id
 * @param req
 * @param res
 * @put
 */
exports.updateCandidate = async (req, res) => {
    const candidate = await candidateService.updateCandidate(req.params.id, req.body);
    res.status(candidate.statusCode).json(candidate);
}
/**
 * delete candidate by object id
 * @param req
 * @param res
 * @put
 */
exports.deleteCandidate = async (req, res) => {
    const candidate = await candidateService.deleteCandidate(req.params.id);
    res.status(candidate.statusCode).json(candidate);
}



const user = require('../model/user.model');
const baseService = require('./base.service');

exports.createUser = async (body) => {
    return await baseService.create(user, body);
};
exports.getAllUser = async () => {
    return await baseService.findAll(user);
}
exports.getUser = async (id) => {
    return await baseService.findById(user, id);
}
exports.getUserByParams = async (params) => {
    return await baseService.findByParams(user, params);
}
exports.updateUser = async (id, body) => {
    return await baseService.findOneAndUpdate(user, id, body);
}
exports.deleteUser = async (id) => {
    return await baseService.findByIdAndDelete(user, id);
}

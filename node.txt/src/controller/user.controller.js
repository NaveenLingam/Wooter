const userService = require('../service/user.service');
/**
 * create a user
 * @param req
 * @param res
 * @posts 
 **/
exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(user.statusCode).json(user);
};
/**
 * get all users
 * @param req
 * @param res
 * @get
 */
exports.getAllUser = async (req, res) => {
  const user = await userService.getAllUser();
  res.status(user.statusCode).json(user);
}
/**
 * get single user by object id
 * @param req
 * @param res
 * @get
 */
exports.getUser = async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.status(user.statusCode).json(user);
}
/**
 * get  user by any parameter
 * @param req
 * @param res
 * @get
 */
exports.getUserByParams = async (req, res) => {
  const user = await userService.getUserByParams(req.query);
  res.status(user.statusCode).json(user);
}
/**
 * update user by object id
 * @param req
 * @param res
 * @put
 */
exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.status(user.statusCode).json(user);
}
/**
 * delete user by object id
 * @param req
 * @param res
 * @put
 */
exports.deleteUser = async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  res.status(user.statusCode).json(user);
}



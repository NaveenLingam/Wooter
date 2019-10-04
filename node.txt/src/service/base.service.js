const response = require('../utils/response');
/**
 * create document
 * @param schema
 * @param body
 */
exports.create = async (schema, body) => {
    // Save to the database
    try {
        const user = await schema.create(body);
        if (!user) {
            return response.badRequest();
        }
        return response.success(user);
    } catch (err) {
        return response.error(err.message);
    }
};

/**
 * get all documents
 * @param schema
 */
exports.findAll = async (schema) => {
    try {
        const users = await schema.find().sort({ createdAt: -1 });
        if (!users) {
            return response.notFound();
        }
        return response.success(users);
    } catch (err) {
        return response.error(err.message);
    }
}
/**
  * find by param generic for model
  * @param schema
  * @param params
  **/
exports.findById = async (schema, id) => {
    try {
        const user = await schema.findById(id);
        if (!user) {
            return response.notFound();
        }
        return response.success(user);
    } catch (err) {
        return response.error(err.message);
    }
};
/**
  * find by param generic for model
  * @param schema
  * @param params
  **/
exports.findByParams = async (schema, params) => {
    try {
        const user = await schema.find(params).sort({ createdAt: -1 });
        if (!user) {
            return response.notFound();
        }
        return response.success(user);
    } catch (err) {
        return response.error(err.message);
    }
};
/**
  * find one and update generic model
  * @param schema
  * @param id
  * @param body
  **/
exports.findOneAndUpdate = async (schema, id, body) => {
    try {
        const user = await schema.findByIdAndUpdate(id, { $set: body },
            { upsert: false, new: false, runValidators: true, context: 'query' },
            function (err, result) {
                if (err) {
                    return response.error(err.message);
                } else {
                    return response.success(result);
                }
            });
        if (!user) {
            return response.notFound();
        }
        return response.success(user);
    } catch (err) {
        return response.error(err.message);
    }
};
/**
  * delete generic model
  * @param schema
  * @param id
  **/
exports.findByIdAndDelete = async (schema, id) => {
    try {
        const user = await schema.findByIdAndDelete(id);
        if (!user) {
            return response.notFound();
        }
        return response.deleted();
    } catch (err) {
        return response.error(err.message);
    }
};
const Joi = require('joi');

module.exports = {
    validateParam: (schema, name)=> {
        return (req, res, next) => {
            console.log('req.params', req.params);
            const result = Joi.validate({param: req['params'][name]}, schema);
            console.log('name is ', name);
            console.log('result ', result);
            if (result.error){
                res.status(400).json(result.error);
            } else {
                if (!req.value) req.value = {};
                if (!req.value['params']) req.value['params'] = {};
                req.value['params'][name] = result.value.params;
                next();
            }
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
};
const db = require('./connection');
const Joi = require('joi');

const urls = db.get('urls');


const schema = Joi.object({
        name: Joi.string().token().min(1).max(100).required(),
        nURL: Joi.string().uri({
            scheme: [/https?/]
        }),
    })
    .with('name', 'nURL')

schema.validate({
    name: '',
    nURL: ''
});

try {
    const value = await schema.validateAsync({
        name: 'abc',
        nURL: 1994
    });
} catch (err) {}


/* 
oURL: example.com
nURL: 'super-catchy'

{
        name: '',
        nURL: '',
}

*/



function create(almostnURL) {
    const result = Joi.validate(almostnURL, schema);
    if (result.error === null) {
        urls.insert(almostnURL);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create
};
const createSchema = {
  'title': 'User',
  'description': 'Input data used for sign up',
  'type': 'object',
  'properties': {
    'idtoken': {
      'description': 'Id token provided by an external service',
      'type': 'string',
    },
    'provider':{
      'description': 'Provider for login',
      'type': 'string',
    }
  },
  'required': ['provider', 'idtoken'],
  'additionalProperties': false,
};

module.exports = {
  createSchema
};

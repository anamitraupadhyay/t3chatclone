const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const auth = ClerkExpressWithAuth();

module.exports = auth;
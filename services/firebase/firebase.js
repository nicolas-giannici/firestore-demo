const admin = require('firebase-admin');
const serviceAccount = require('../../credentials/firebasekey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
const admin = require('firebase-admin');
const config = require('./config');

// for Local serve, uncomment below
// const serviceAccount = require('../../socialape.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://socialape-d1bb9.firebaseio.com',
//   storageBucket: config.storageBucket,
// });

// for deployment, uncomment below
admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };

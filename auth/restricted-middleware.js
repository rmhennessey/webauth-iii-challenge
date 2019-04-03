// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets= require('../api/secrets.js')
// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if(error) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        // req.decodedJwt = decodedToken;  <-not sure what is happening here.

        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};
  
// we stripped away all of the below bc we no longer need bc of token

// const { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json({ message: 'Ran into an unexpected error' });
//       });
//   } else {
//     res.status(400).json({ message: 'No credentials provided' });
//   }
// };

const bycript = require("bcrypt");
const jwt = require('jsonwebtoken');

const {validarSesion} = require('../api/db.js');

const jwtGenerator = async (req, res) => {
  

  const user = await validarSesion(req);

  console.log("estas en jwtgenerator   ");

  console.log(user);
  if(user.ingresoCorrecto != true) {
    
      res.send({
        token: null
      });
  
  } else {

    const token = jwt.sign(user.id, "ruizgei");

    res.send({
      token: token
    });
    console.log(user);
  }

};


module.exports = jwtGenerator;
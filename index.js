if(process.env.NODE_ENV === 'production'){
    module.exports = require('dist/Gcookie.min.js');
}else{
    module.exports = require('dist/Gcookie.js');
}
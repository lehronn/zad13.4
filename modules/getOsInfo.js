var os = require('os');
var timeFormat = require('./timeFormat');

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  var CPU = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  if(type === 'Darwin') {
    type = 'OSX';
  }
    else if(type === 'Windows_NT') {
      type = 'Windows';
    }
  console.log('\nSystem:' , type);
  console.log('Release:' , release);
  console.log('CPU: ' + CPU);
  console.log('User name:' , userInfo.username);
  console.log('Home dir:' , userInfo.homedir);
  console.log('Uptime:', timeFormat.sth(uptime));
}
exports.getOSinfo = getOSinfo;

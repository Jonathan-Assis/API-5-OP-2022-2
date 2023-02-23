const { exec } = require('child_process');

const uri = `mongodb+srv://root:root@cluster0.a0mnjqy.mongodb.net/opdb`;
const defaultArgs = `--uri=${uri} --archive=src/backups/opdb-backup.archive --db=opdb`
const cmdRestore = `mongorestoreasd ${defaultArgs} --drop`;
const cmdBackup = `mongodumpasd ${defaultArgs}`;

const runCmd = function(cmd) {
  exec(cmd, (error, _stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stderr);
  });
}

const backup = function() {
  runCmd(cmdBackup);
}

const restore = function() {
  runCmd(cmdRestore);
}

module.exports = {
  backup,
  restore,
}
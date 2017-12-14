const fs = require('fs');
const path = require('path');
const simplegit = require('simple-git');
process.chdir(process.env.HOME);

function isDir(projectPath) {
  return fs.statSync(path.resolve('Dokumente/Projekt/', projectPath)).isDirectory();
}

function isGitDir(projectPath) {
  return fs.existsSync(path.resolve('Dokumente/Projekt/', projectPath, '.git'));
}

fs.readdir(path.resolve('Dokumente/Projekt/'), (err, paths) => {
  const dirs = paths
              .filter((path) => isDir(path))
              .filter((path) => isGitDir(path))
              .map((gitDir) => {
                return simplegit(path.resolve('Dokumente/Projekt/', gitDir))
              });
              console.log(dirs[13]);
              // .map((git) => Object.assign({}, git, {status: git.git.status()}));
              dirs[13].status((err, status) => {
                console.log(status);
              })
});

// simplegit().stash(() => {
//   console.log('files stashed');
// })

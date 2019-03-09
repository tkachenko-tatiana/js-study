const fs = require('fs');
const path = require('path');
const cp = require('copyfiles');

const rootPath = path.relative(process.cwd(), path.resolve(__dirname, '..'));
const buildPath = path.relative(process.cwd(), path.resolve(rootPath, 'build'));
const serverPath = path.relative(process.cwd(), path.resolve(rootPath, 'server'));

function copyFilesAsync(sourceGlob, destinationGlob) {
  return new Promise((res, rej) => cp(
    [sourceGlob, destinationGlob],
    { verbose: false },
    (err) => err ? rej(err) : res())
  );
}

async function createProductionLernaConfig() {
  const lernaJson = fs.readFileSync(path.resolve(rootPath, 'lerna.json'));
  const lernaConfig = JSON.parse(lernaJson);

  lernaConfig.command = {
    bootstrap: {
      npmClientArgs: ["--production"]
    }
  };

  fs.writeFileSync(path.resolve(buildPath, 'lerna.json'), JSON.stringify(lernaConfig));
}

async function copyBuildFiles() {
  await copyFilesAsync(`${serverPath  }/package*.json`, buildPath);
  await copyFilesAsync(`${rootPath  }package*.json`, buildPath);
  await copyFilesAsync(`${rootPath  }scripts/*`, buildPath);
  await createProductionLernaConfig();
}

copyBuildFiles()
  .then(() => console.log('Successfully copied build files'))
  .catch(console.log);

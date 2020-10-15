const path = require('path');
const { spawn } = require('child_process');
const { yarn, npm } = require('./command');

const rootPath = path.resolve(__dirname, '../');

const projectList = [
  {
    cmd: yarn,
    route: '',
  },
  {
    cmd: npm,
    route: 'NeteaseCloudMusicApi',
  }
];
function install(index = 0,packageNames = []) {
  const { cmd, route } = projectList[index];
  const packageName = require(path.resolve(rootPath, route,'package.json')).name;
  packageNames.push(packageName);
  const spawnInstance = spawn(
    cmd,
    ['install'],
    {
      cwd: path.resolve(rootPath, route),
      stdio: 'inherit'
    }
  );
  spawnInstance.on('exit', () => {
    const chalk = require('chalk');
    
    if (index === projectList.length - 1) {
      console.log(packageNames);
      console.log(chalk.blue('==============='));
      packageNames.forEach(name=>{
        console.log(chalk.blue(`${name}:安装成功`));
      });
      console.log(chalk.blue('==============='));
      console.log('\n');
      console.log(chalk.blue('模块全部安装完成啦~'));
      console.log(chalk.blue('快去yarn start吧~'));
      console.log('\n');
    } else {
      console.log(chalk.blue('==============='));
      console.log(chalk.blue(`${packageName}:安装完成了`));
      console.log(chalk.blue('==============='));
      install(index + 1,packageNames);
    }
  });
}

install();
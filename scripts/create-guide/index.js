#!/usr/bin/env node

import { spawn } from 'child_process';
import inquirer from 'inquirer';

const chooseInstallation = () =>
  new Promise((resolve) => {
    console.clear();
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'installation',
          message: 'What do you want to install?',
          choices: [
            { name: 'Install Everything', value: 0 },
            { name: 'Only Styleguide', value: 1 },
            { name: 'Only Linter and Formatter', value: 2 },
          ],
        },
      ])
      .then((answers) => {
        resolve(answers.installation);
      });
  });

const install = (installationType) =>
  new Promise((resolve) => {
    console.log('[!] - Starting the installation...');

    const npm = ['npm', ['install', '-D', 'eslint', '@typescript-eslint/eslint-plugin']];
    const guidelines = ['npx', ['degit', 'choozn/guidelines/README.md', 'STYLEGUIDE.md', '--force']];
    const configuration = ['npx', ['degit', 'choozn/guidelines/config', '.', '--force']];

    const installations = [[npm, guidelines, configuration], [guidelines], [npm, configuration]];
    const processes = installations[installationType].map((task) => spawn(...task, { shell: true }));

    let processesDone = 0;
    processes.forEach((process) => {
      process.on('close', () => {
        processesDone += 1;
        if (processesDone === processes.length) {
          resolve();
        }
      });
    });
  });

const finish = () => {
  console.log('[!] - The installation has successfully been completed.');
};

const main = async () => {
  try {
    const installationType = await chooseInstallation();
    await install(installationType);
    await finish();
  } catch (error) {
    console.log('[!] - An error occured during the installation.');
  }
};

main();

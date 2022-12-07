#!/usr/bin/env node

import chalk from 'chalk';
import { spawn } from 'child_process';
import inquirer from 'inquirer';
import process from 'node:process';

const divider = chalk.dim('-------------------------------------');

const chooseInstallation = async () => {
  console.clear();
  console.log(chalk.green('! ') + chalk.bold('Welcome to the style guide setup!'));
  console.log(divider);
  console.log(chalk.green('? ') + chalk.bold(`You are about to install here: ${chalk.reset.cyan(process.cwd())}`));

  const { install } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'install',
      message: 'Are you sure?',
      default: true,
    },
  ]);

  if (install !== true) {
    process.exit(1);
  }
  const { installation } = await inquirer.prompt([
    {
      type: 'list',
      name: 'installation',
      message: 'What do you want to install?',
      choices: [
        { name: 'Install Everything', value: 0 },
        { name: 'Only Style Guide', value: 1 },
        { name: 'Only Linter and Formatter', value: 2 },
      ],
    },
  ]);
  return installation;
};

const install = (installationType) =>
  new Promise((resolve, reject) => {
    console.log(chalk.green('! ') + chalk.bold('Starting the installation...'));

    const npm = ['npm', ['install', '-D', 'eslint', '@typescript-eslint/eslint-plugin', 'stylelint', 'stylelint-config-idiomatic-order']];
    const guidelines = ['npx', ['degit', 'choozn/guidelines/README.md', 'STYLEGUIDE.md', '--force']];
    const configuration = ['npx', ['degit', 'choozn/guidelines/config', '.', '--force']];

    const installations = [[npm, guidelines, configuration], [guidelines], [npm, configuration]];
    const installationProcesses = installations[installationType].map((task) => spawn(...task, { shell: true }));

    let processesDone = 0;
    installationProcesses.forEach((installProcess) => {
      installProcess.on('close', (code) => {
        if (code !== 0) {
          reject(code);
        }
        processesDone += 1;
        if (processesDone === installationProcesses.length) {
          resolve();
        }
      });
    });
  });

const finish = () => {
  console.log(chalk.green('! ') + chalk.bold('The installation has successfully been completed.'));
};

const errorPrompt = () => {
  console.log(
    chalk.red('! ') + chalk.bold('An error occured during the installation. (You may already have the guide installed)')
  );
};

const main = async () => {
  try {
    const installationType = await chooseInstallation();
    console.log(divider);
    await install(installationType);
    await finish();
  } catch (error) {
    errorPrompt();
    process.exit(1);
  }
};

main();

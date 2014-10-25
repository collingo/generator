#!/usr/bin/env node

require('shelljs/global');
var changeCase = require('change-case');
var lodashTpl = require('lodash.template');
var github = require('octonode');

var data = {
  name: process.argv[2],
  constructor: changeCase.pascalCase(process.argv[2]),
  title: changeCase.titleCase(process.argv[2]),
  description: process.argv[3] || changeCase.titleCase(process.argv[2])
};

function applyDataTo(path) {
  lodashTpl(cat(path), data).to(path);
}

config.silent = true;
echo('Setting up ' + data.name);
exec('git clone https://github.com/collingo/template-commonjs.git ' + data.name);
cd(data.name);
rm('-rf', './.git');
mkdir('src');
''.to('src/' + data.name + '.js');
applyDataTo('test/test.js');
applyDataTo('package.json');
('# ' + data.title + '\n' + data.description).to('readme.md');
exec('npm i');

github.client(process.env.GITHUB_KEY_GENERATOR).me().repo({
  name: data.name,
  description: data.description
}, function(err, res) {
  exec('git init');
  exec('git remote add origin ' + res.ssh_url);
  exec('git add -A');
  exec('git commit -m "initial commit"');
  exec('git push -u origin master');
  echo('New repository, ' + res.full_name + ', created at ' + res.html_url);
});
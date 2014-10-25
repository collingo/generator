# Generator

Generates a commonjs module boilerplate for lightning quick nodejs package authoring.

### Install

npm i -g https://github.com/collingo/generator.git

### Usage

generator name \[description\]

### Explanation

At a high level it will...

- create a new directory in the current directory using the name provided
- clone the boilerplate template from https://github.com/collingo/template-commonjs.git
- clear any git associations
- apply the given params to lodash templates
- install npm dependencies
- authenticate with Github using access token stored on env var $GITHUB_KEY_GENERATOR (see https://help.github.com/articles/creating-an-access-token-for-command-line-use/ for how to create your own access token)
- create new Github repo with given name
- initialize git and pushes everything to the repo

### Future plans

- support more than one boilerplate template
- setup Github authentication via command line
- allow private repos
- support Bitbucket
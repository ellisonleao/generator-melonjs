'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MelonjsGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      var options = this.options;
      this.installDependencies({
        skipInstall: options['skip-install'],
        callback: function () {
          this.spawnCommand('grunt');
        }.bind(this) // bind the callback to the parent scope
      });
    });
  },

  askFor: function () {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    console.log(chalk.bold.green('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOOOOOOOOOOOOOZ.   ~I7?  =OOOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOOOOOOOOO  ,OOOOOOOOOOOOI?OOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOOOOO, .OOOOOOOOOOOOOOOO, OOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOO, ~OOOOOOOOOOOOOOOOOO+  ,OO'));
    console.log(chalk.bold.green('OOOOOOOOOO .OOOOOOOOOOOOOOOOOOOO     OO'));
    console.log(chalk.bold.green('OOOOOOO, OOOOOOOOOOOOOOOOOOOOO:      OO'));
    console.log(chalk.bold.green('OOOOO~ OOOOOOOOOOOOOOOOOOOOO+        OO'));
    console.log(chalk.bold.green('OOOO OOOOOOOOOOOOOOOOOOOOO,         IOO'));
    console.log(chalk.bold.green('OO..OOOOOOOOOOOOOOOOOOOO            OOO'));
    console.log(chalk.bold.green('O,IOOOOOOOOOOOOOOOOO?              OOOO'));
    console.log(chalk.bold.green('O OOOOOOOOOOOOOOZ                 ?OOOO'));
    console.log(chalk.bold.green('O ZOOOOOOOOO~                    ZOOOOO'));
    console.log(chalk.bold.green('OO                              OOOOOOO'));
    console.log(chalk.bold.green('OOO:                          OOOOOOOOO'));
    console.log(chalk.bold.green('OOOOO                       OOOOOOOOOOO'));
    console.log(chalk.bold.green('OOOOOOO~                 ZOOOOOOOOOOOOO'));
    console.log(chalk.bold.green('OOOOOOOOOOO7.       ~OOOOOOOOOOOOOOOOOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'));
    console.log(chalk.bold.green('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'));
    console.log(chalk.yellow("• ▌ ▄ ·. ▄▄▄ .▄▄▌         ▐ ▄  ▐▄▄▄.▄▄ · "));
    console.log(chalk.yellow("·██ ▐███▪▀▄.▀·██•  ▪     •█▌▐█  ·██▐█ ▀. "));
    console.log(chalk.yellow("▐█ ▌▐▌▐█·▐▀▀▪▄██▪   ▄█▀▄ ▐█▐▐▌▪▄ ██▄▀▀▀█▄"));
    console.log(chalk.yellow("██ ██▌▐█▌▐█▄▄▌▐█▌▐▌▐█▌.▐▌██▐█▌▐▌▐█▌▐█▄▪▐█"));
    console.log(chalk.yellow("▀▀  █▪▀▀▀ ▀▀▀ .▀▀▀  ▀█▄▀▪▀▀ █▪ ▀▀▀• ▀▀▀▀ "));
    console.log('Hi! It\'s time to build great games with MelonJS');

    var prompts = [
      {
        name: 'gameName',
        message:  'What\'s the name of your game?'
      },
    ];

    this.prompt(prompts, function (props) {
      this.gameName = props.gameName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('js');
    this.mkdir('build');
    this.mkdir('css');
    this.mkdir('data');
    this.mkdir('data/img');
    this.mkdir('js/screens');
    // empty for now
    this.mkdir('js/entities');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
  },

  projectfiles: function () {
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('index.html', 'index.html');
    this.copy('css/index.css', 'css/index.css');
    this.copy('build/game.js', 'build/game.js');
    this.copy('build/game-min.js', 'build/game-min.js');
    this.copy('js/game.js', 'js/game.js');
    this.copy('js/resources.js', 'js/resources.js');
    this.copy('js/screens/play.js', 'js/screens/play.js');
    this.copy('js/debugPanel.js', 'js/debugPanel.js');
    this.copy('data/img/melonjs.png', 'data/img/melonjs.png');
    this.copy('data/img/bg.png', 'data/img/bg.png');
  }
});

module.exports = MelonjsGenerator;
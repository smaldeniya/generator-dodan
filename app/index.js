'use strict';
var path = require('path');
var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');
var glob = require('glob')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    prompting() {
        let _this = this;

        return this.prompt([{
            name: 'name',
            message: 'What is your project name?',
            default: "my-project"
        }]).then((props)=>{
            return new Promise((resolve, reject)=>{
                _this.projectName = props.name;

                let projectDir = "";

                if(process.cwd().indexOf(props.name) === -1) {
                    projectDir = `${props.name}/`;
                }

                glob("**", {
                    cwd: path.join(__dirname, 'templates'),
                    dot: true,
                    ignore:["**/_*"]
                }, (err, files)=>{

                    if(err) {
                        return reject(err);
                    }

                    files.map((file)=>{
                        _this.fs.copy(
                            _this.templatePath(file),
                            _this.destinationPath(`${projectDir}${file}`)
                        );
                    });

                    _this.fs.copyTpl(
                        this.templatePath('_package.json'),
                        this.destinationPath(`${projectDir}package.json`), {
                            name: props.name
                        }
                    );
                    _this.fs.copyTpl(
                        this.templatePath('src/localConfigs/_logger.json'),
                        this.destinationPath(`${projectDir}src/localConfigs/logger.json`), {
                            name: props.name
                        }
                    );

                    return resolve();
                });
            })
        });
    }

    install() {
	if(process.cwd().indexOf(this.projectName) === -1) 
            process.chdir(`${process.cwd()}/${this.projectName}`);

        this.installDependencies({
            bower : false,
            npm : true
        });
    }
};

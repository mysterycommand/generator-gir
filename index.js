/** ====================================================================================================== **/
/**
 * @fileOverview
 * This is the base generator for Gir/Duty Mode generator.
 *
 * @author Matt Hayes
 * @version 0.1
 */
/** ====================================================================================================== **/

var util = require('util');
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman');

module.exports = Generator;

function Generator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('name', {
        type: String,
        required: false,
        defaults: 'app'
    });
    this.option('warn', {
        type: Boolean,
        defaults: false,
        desc: 'Use yeoman.write (instead of fs.writeFileSync) and get warnings about overwriting various files.'
    });

    this.sourceRoot(path.join(__dirname, 'templates'));

    // cleanup the name property from trailing /, typical usage of directories.
    // update the args object, it's used to initialize js-framework hooks
    if (this.name) this.name = this.name.replace(/\/$/, '');
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askFor = function() {
    var prompts = [
        {
            name: 'h5bp',
            message: 'We\'re going to grab the .htaccess, 404.html, humans.txt, robots.txt, and a modified index.html file from HTML5 Boilerplate version:',
            'default': 'v4.0.3',
            warning: '.htaccess, 404.html, humans.txt, robots.txt, and index.html will be copied into: app/'
        },
        {
            name: 'main',
            message: 'We\'re going to grab the main.css file from HTML5 Boilerplate version:',
            'default': 'v4.0.3',
            warning: 'It will be renamed & saved into: app/scss/main-VERSION.scss'
        },
        {
            name: 'normalize',
            message: 'We\'re going to grab normalize.css version:',
            'default': 'v2.0.1',
            warning: 'It will be renamed & saved into: app/scss/normalize-VERSION.css'
        },
        {
            name: 'modernizr',
            message: 'We\'re going to grab modernizr version:',
            'default': 'v2.6.2',
            warning: 'It will be renamed & saved into: app/js/vendor/modernizr-VERSION.js'
        },
        {
            name: 'require',
            message: 'We\'re going to grab require.js version:',
            'default': '2.1.2',
            warning: 'It will be renamed & saved into: app/js/vendor/require-VERSION.js'
        }
        // ,
        // {
        //     name: '',
        //     message: '',
        //     'default': '',
        //     warning: ''
        // }
    ];

    var cb = this.async();
    var self = this;

    this.prompt(prompts, function(error, props) {
        if (error) { return self.emit('error', error); }

        self.h5bp = props.h5bp;
        self.main = props.main;
        self.normalize = props.normalize;
        self.modernizr = props.modernizr;
        self.require = props.require;

        cb();
    });
};



Generator.prototype.templateGruntfile = function templateGruntfile() {
    this.template('Gruntfile.js');
};

Generator.prototype.templatePackage = function templatePackage() {
    this.template('package.json');
};



// Generator.prototype.copyGitignore = function copyGitignore() {
//     this.copy('gitignore', '.gitignore');
// };

// Generator.prototype.copyGitattributes = function copyGitattributes() {
//     this.copy('gitattributes', '.gitattributes');
// };

// Generator.prototype.copyBowerrc = function copyBowerrc() {
//     this.copy('bowerrc', '.bowerrc');
// };

// Generator.prototype.copyJshint = function copyJshint() {
//     this.copy('jshintrc', '.jshintrc');
// };

// Generator.prototype.copyEditorconfig = function copyEditorconfig() {
//     this.copy('editorconfig', '.editorconfig');
// };

// Generator.prototype.copyFavicon = function copyFavicon(){
//     this.copy('favicon.ico', 'app/favicon.ico');
// };

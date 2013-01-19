/** ====================================================================================================== **/
/**
 * @fileOverview
 * This generates an AMD module definition. Accepting a list of requirements to include.
 *
 * @author Matt Hayes
 * @version 0.1
 */
/** ====================================================================================================== **/

var util = require('util');
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman');
var grunt = require('grunt');
var _ = grunt.utils._;

module.exports = Generator;

function Generator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
    
    this.argument('parentClassName', {
        type: String,
        required: false,
        defaults: 'Extendable'
    });
    this.argument('path', {
        type: String,
        required: false,
        defaults: 'app/js'
    });
    this.argument('reqs', {
        type: String,
        required: false,
        defaults: ''
    });

    this.option('warn', {
        type: Boolean,
        defaults: false,
        desc: 'Use yeoman.write (instead of fs.writeFileSync) and get warnings about overwriting various files.'
    });

    this.sourceRoot(path.join(__dirname, '../templates'));

    // cleanup the name property from trailing /, typical usage of directories.
    // update the args object, it's used to initialize js-framework hooks
    if (this.name) this.name = this.name.replace(/\/$/, '');

    this.className = _.camelize(this.name);
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.templateDefine = function templateDefine() {
    var data = {
        fileOverview: 'This is the file overview.',
        author: 'Your Name <your@email.com>',
        version: '0.0.0'
    };
    this.fileHeader = grunt.template.process(grunt.file.read(path.join(this.sourceRoot(), 'partials/fileHeader.js')), data);

    this._ = _;
    this.template('app/js/define.js', path.join(this.path, this.className + '.js'));
};

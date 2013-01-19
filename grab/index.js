/** ====================================================================================================== **/
/**
 * @fileOverview
 * This is a utility 'generator' it goes out to Github, copies some source files optionally renaming them.
 *
 * @author Matt Hayes
 * @version 0.1
 */
/** ====================================================================================================== **/

var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman');
var grunt = require('grunt');
var _ = grunt.utils._;

function Generator(args, options, config) {
    'use strict';

    yeoman.generators.Base.apply(this, arguments);


    this.argument('username', {
        type: String,
        required: true
    });
    this.argument('repository', {
        type: String,
        required: true
    });
    this.argument('branchOrTag', {
        type: String,
        required: false,
        defaults: 'master'
    });



    this.option('sources', {
        alias: 'src',
        type: String,
        defaults: '',
        desc: 'A comma separated list of files to copy from the remote repository.'
    });
    this.option('targets', {
        alias: 'tgt',
        type: String,
        defaults: '',
        desc: 'A comma separated list of files to copy from the remote repository.'
    });



    // console.log('args:', args);
    // console.log('options:');
    // console.log(this.options);
}

module.exports = Generator;
util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.grab = function grab() {
    'use strict';
    var cb = this.async();

    // console.log(this.username, this.repository, this.branchOrTag);
    this.remote(this.username, this.repository, this.branchOrTag, function (err, remote) {
        if (err) { return cb(err); }

        var srcs = this.options.sources.replace(' ', '').split(',');
        var tgts = this.options.targets.replace(' ', '').split(',');
        var i = 0, numSources = srcs.length;
        var src, tgt;

        for (; i < numSources; ++i) {
            src = srcs[i];
            tgt = tgts[i] || src;
            remote.copy(src, tgt);
        }

        cb();
    }.bind(this));
};

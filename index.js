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
    var dutymode = [
        '                                           ',
        '                                           ',
        '  Zim: "I am going to attempt to lock you  ',
        '        into duty mode with this behavioral',
        '        modulator...what?"                 ',
        '                                           ',
        '  Gir: "Hehe...doodee."                    ',
        '                                           ',
        '                                           ',
        '                          .'+'$M'.red.bold+'              ',
        '                        .M                 ',
        '                      I~M                  ',
        '                     M=M                   ',
        '                    M=M                    ',
        '                .MMMMMMMMMM.               ',
        '            ,MM+============MM.            ',
        '          MM+==================MM          ',
        '       MMM?===================== M         ',
        '      MM??======================= MM       ',
        '     MM???=======================  M       ',
        '  M$=====~~======================  M       ',
        '  .M MMM+?======================.  M       ',
        '  M.  :M??======================  MM       ',
        '  M.MMMM???=====================  M  ~MMM  ',
        '  MIM'+'$$$$'.red.bold+'MM~====================.MMMZ'+'$$'.red.bold+'MM  ',
        '  MMM'+'$$$$$$$$'.red.bold+'MN~===========MM'+'$$$$$$$$$$'.red.bold+'M$  ',
        '  MMMM'+'$$$$$$$$$$$'.red.bold+'M?~====M'+'$$$$$$$$$$$$$'.red.bold+'7M   ',
        '  MM M'+'$$$$$$$$$$$$$'.red.bold+'M====='+'$$$$$$$$$$$$$'.red.bold+'M.   ',
        '   ~.MM'+'$$$$$$$$$$$$'.red.bold+'======M'+'$$$$$$$$$$$'.red.bold+'MM    ',
        '   MM MM'+'$$$$$$$$'.red.bold+'Z$========MM'+'$$$$$$$$'.red.bold+'MM     ',
        '   M~. MM'+'$'.red.bold+'MMM'+'$$$'.red.bold+'M=========??M'+'$$$'.red.bold+'???M       ',
        '    ~M  .MMMMM+=============???MMM         ',
        '    M=   M???~==================MM         ',
        '    .MM. .M??===================M          ',
        '     M~M  NM???================M           ',
        '      M=M  +M????~============M            ',
        '      .M=M   MM??????=~===~=M.             ',
        '        M=MN   MMM??==??8MM.               ',
        '         M==M.M~  .M~~M.                   ',
        '          M==$$$M7$?????+7$$M.             ',
        '           MMZ$M$$$?N~????$$M              ',
        '            7OZM$MO'+'$$$$$'.red.bold+'M?OMM              ',
        '              MM$MZ'+'$$$$$'.red.bold+'M?MM.              ',
        '               M$MZ'+'$$$$$'.red.bold+'M?MM               ',
        '               M$OZD'+'$$$$'.red.bold+'M?MM               ',
        '               M$$$$??????MM               ',
        '                M$$$$$???MZM.M. .          ',
        '                 M$$$$$ZM..MMMZM           ',
        '                                           ',
        '                 M      ..                 ',
        '                M?      MM                 ',
        '                ?=      M?M                ',
        '               M?=M     M?M                ',
        '               M?=M     M?~.               ',
        '               M?=M.   8??==               ',
        '              .M?=?    M??=M               ',
        '               M?=~M   M?MM~               ',
        '                                           ',
        '                                           ',
        '                                           '
    ];

    console.log(dutymode.join('\n'));

    var prompts = [
        {
            name: 'h5bp',
            message: 'We\'re going to grab the .htaccess, 404.html, humans.txt, robots.txt, and a modified index.html file from HTML5 Boilerplate version:',
            'default': 'v4.0.2',
            warning: 'They will be copied into: app/'
        },
        {
            name: 'main',
            message: 'We\'re going to grab the main.css file from HTML5 Boilerplate version:',
            'default': 'v4.0.2',
            warning: 'It will be renamed & saved into: scss/main-VERSION.scss'
        },
        {
            name: 'normalize',
            message: 'We\'re going to grab normalize.css version:',
            'default': 'v2.0.1',
            warning: 'It will be renamed & saved into: normalize-VERSION.css'
        },
        {
            name: 'modernizr',
            message: 'We\'re going to grab modernizr version:',
            'default': 'v2.6.2',
            warning: 'It will be renamed & saved into: modernizr-VERSION.js'
        },
        {
            name: 'require',
            message: 'We\'re going to grab require.js version:',
            'default': '2.1.2',
            warning: 'It will be renamed & saved into: js/vendor/require-VERSION.js'
        },
        {
            name: '',
            message: '',
            'default': '',
            warning: ''
        }
    ];

    // var cb = this.async();
    // var self = this;

    // this.prompt(prompts, function(error, props) {
    //     if (error) { return self.emit('error', error); }

    //     self;
    // });
}

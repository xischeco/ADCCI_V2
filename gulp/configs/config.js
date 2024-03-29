import extend from 'extend';
import path from 'path';
import configUtils from '../util/setThemePath';

export default {

    // Change to TRUE if you want add source map for sass files
    sassSourceMap: false,
    // Please configure
    serverOptions: {
        server: 'https://tammdevcm2.tamm.abudhabi', //need to be changed
        removeScriptPath: '/-/script/v2/master/RemoveMedia',
        uploadScriptPath: '/sitecore modules/PowerShell/Services/RemoteScriptCall.ashx',
        updateTemplatePath: '/-/script/v2/master/ChangeTemplate',
        mediLibraryPath: '/-/script/media/master'
    },

    autoprefixer: {
        browsers: ['last 2 versions',
            '> 1%',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: false
    },
    //Rules for excluding files from uploading
    excludedPath: [
        'styles/has.css', // can be a string
        '///gulp',
        ///[\\\/][\w-]*.css$/g   //exclude all css files
        /[\\\/]test.css$/g, //exclude test.css files
        /[\\\/][\w-]*.css.map$/g //exclude css.map files
        ///styles[\\\/][\w-]*.css$/g //exclude all css files from style folder
    ],
    //Server check all items names with this rule. It is not recommended to change
    serverNameValidation: [
        /^[\w\*\$][\w\s\-\$]*(\(\d{1,}\)){0,1}$/
    ],

    html: {
        path: (function() {
            let rootCreativeExchangePath = global.rootPath.split('-\\media'),
                _path = './';
            if (rootCreativeExchangePath.length > 1) {
                _path = path.relative('./', global.rootPath.split('-\\media')[0])
            }
            return _path + '/**/*.html';
        })()
    },
    img: {
        path: 'images/**/*'
    },
    fonts: {
        path: 'fonts/**/*'
    },
    js: {
        path: ['scripts/**/*.js' , '!scripts/**/*.source.code.js','!scripts/*.source.code.js'],
        esLintUploadOnError: true
    },
    css: {
        path: 'styles/**/*.css',
        targetPath: ''
    },
    sass: {
        root: 'sass/*.scss',
        components: {
            sassPath: ['sass/*.scss' , '!sass/*.ignore.scss'],
            coreFiles: 'sass/*-core.scss',
            stylePath: 'styles'
        },
        styles: {
            sassPath: ['sass/styles/common/*.scss',
                'sass/styles/content-alignment/*.scss',
                'sass/styles/layout/*.scss',
                'sass/components/*.scss'
            ],
            stylePath: 'styles',
            concatName: 'styles.css'
        },
        dependency: {
            sassPath: ['sass/styles/**/*.scss'],
            exclusion: ['!sass/styles/common/*.scss',
                '!sass/styles/content-alignment/*.scss',
                '!sass/styles/layout/*.scss'
            ],
        },
        core: {
            sassPath: ['sass/abstracts/**/*.scss',
                'sass/base/**/*.scss',
                'sass/components/**/*.scss'
            ],
            stylePath: 'styles'
        }
    },

    sprites: {
        flags: {
            spritesmith: {
                imgName: 'sprite-flag.png',
                cssName: '_sprite-flag.scss',
                imgPath: '../images/sprite-flag',
                cssFormat: 'scss',
                padding: 10,
                algorithm: 'top-down',
                cssOpts: {
                    cssSelector: function(sprite) {
                        return '.flags-' + sprite.name;
                    }
                },
                cssVarMap: function(sprite) {
                    sprite.name = 'flags-' + sprite.name;
                }

            },
            flagsFolder: 'images/flags/*.png',
            imgDest: './images',
            cssDest: './sass/base/sprites'
        }

    },

    stylesConfig: {
        'accordion': 'component-accordion.scss',
        'breadcrumb': 'component-breadcrumb.scss',
        'container': 'component-container.scss',
        'divider': 'component-divider.scss',
        'feed': 'component-feed.scss',
        'flip': 'component-flip.scss',
        'forms': 'component-forms.scss',
        'image': 'component-image.scss',
        'link-list': 'component-link-list.scss',
        'navigation': 'component-navigation.scss',
        'play-list': 'component-playlist.scss',
        'promo': 'component-promo.scss',
        'richtext': 'component-richtext-content.scss',
        'tabs': 'component-tabs.scss',
        'file-list': 'component-file-list.scss'
    },

    loginQuestions: [{
            type: 'login',
            name: 'login',
            message: 'Enter your login',
            default: ''
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter your password',
            default: ''
        }
    ],


    user: { login: '', password: '' },

    init: function() {
        let config = configUtils.getConf() || {};
        extend(this.serverOptions, config.options || {});
        return this;
    }

}.init();
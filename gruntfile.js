var fontName = 'fonterrific';
var fontClass = 'ft';
var fontClassPrefix = 'ft-';

module.exports = function(grunt) {
    grunt.initConfig({
        webfont: {
            icons: {
                src: 'icons/svg/*.svg',
                dest: 'build/font',
                destCss: 'build/',
                options: {
                    fontBaseName: fontName,
                    fontFilename: fontName,
                    normalize: true,
                    template: 'templates/fonterrific.css',
                    htmlDemoTemplate: 'templates/fonterrific.html',
                    templateOptions: {
                        fontBaseName: fontName,
                        baseClass: fontClass,
                        classPrefix: fontClassPrefix
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);
};

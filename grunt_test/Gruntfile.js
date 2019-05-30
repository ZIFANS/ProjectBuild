module.exports = function (grunt) {

    // 初始化grunt任务.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/js/build.js',
            },
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    'build/js/build.min.js': ['build/js/build.js']
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/build.min.css': ['src/css/*.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js','src/css/*.css'],    // 找需要监视的文件 当文件发送变化时候
                tasks: ['concat','uglify','cssmin'],
                options: {
                    spawn: false,   // 变量更新 true全量更新
                },
            },
        },
        /*jshint:{
            options: {
                jshintrc:'.jshintrc'
            },
            build: ['Gruntfile.js','src/js/*.js']
        }*/
    });

    // 加载包含 "concat" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 注册grunt的默认任务
    // grunt执行任务的同步的
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('Mywatch', ['default','watch']);
};
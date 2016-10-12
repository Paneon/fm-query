var path = require("path");

module.exports = function (grunt) {
    "use strict";


    var pkg = grunt.file.readJSON("package.json");

    var paths = {

        source: path.join("source"),
        build: path.join("dist")

    };

    var bannerTemplate = function (name) {

        var version = " v" + pkg.version;

        var banner =
            '/*!\n' +
            ' * ' + name + version + ' - <%=grunt.template.today("yyyy-mm-dd HH:MM")%>\n' +
            ' * Copyright (c) <%=grunt.template.today("yyyy")%> ' + pkg.author + '\n' +
            ' */';

        return banner;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            build: ['dist']
        },

        typescript: {
            // Tests
            tests: {
                src: ["test/**/*.ts"],
                dest: "test/",
                options: {
                    module: 'system',
                    target: 'es5',
                    //jsx: 'react'
                    sourceMap: false,
                    declaration: false,
                    experimentalDecorators: true,
                    noImplicitAny: false
                }
            }
        },

        uglify: {

            script: {
                'dist/index.min.js': ['dist/index.js']
            }

        },

        /*
         * Watches for changes in files and executes the tasks
         */
        watch: {

            /**
             * Watch for js changes during development and build Dev-Files
             */
            ts: {
                options: {cwd: paths.js},
                files: ["**/*.ts", "**/*.tsx"],
                tasks: ["browserify:script"]
            }

        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadNpmTasks("grunt-shell");

    /**
     * Default Build task
     */
    grunt.registerTask("default", [
        "scripts-dev"
    ]);

    grunt.registerTask("build", [
        "scripts-min"
    ]);

    /**
     * Scripts: Production
     */
    grunt.registerTask("scripts-min", [
        "clean:build",
        "uglify:script"
    ]);

    /**
     * Scripts: Development
     */
    grunt.registerTask('scripts-dev', [
        "clean:build"
    ]);

    grunt.event.on("watch", function (action, filepath) {
        grunt.log.writeln(filepath + " has " + action);
    });
};

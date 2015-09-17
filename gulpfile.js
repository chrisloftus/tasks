var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // Sass
    mix.sass('app.scss');

    // Concat the dependencies
    mix.scripts([
        'moment/min/moment.min.js',
        'jquery/dist/jquery.min.js',
        'angular/angular.min.js',
        'ui-router/angular-ui-router.js',
        'satellizer/satellizer.min.js',
        'angucomplete-alt/dist/angucomplete-alt.min.js'
    ],
    'resources/assets/js/node_modules.js',
    'node_modules/'
    );

    // Concat the dependencies and app
    mix.scripts([
        'node_modules.js',
        'app.js',
        'services/**/*.js',
        'controllers/**/*.js'
    ]);
});

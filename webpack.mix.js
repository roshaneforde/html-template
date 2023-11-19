/*
 *--------------------------------------------------------------------------
 * Mix Asset Management
 *--------------------------------------------------------------------------
 *
 * Mix provides a clean, fluent API for defining some Webpack build steps
 * for Laravel applications. Instead of Laravel, we are using it here to compile
 * the Sass files as well as bundling up all the JS files.
 */

const fs = require( 'fs' );

if ( ! fs.existsSync( 'dist' ) && 'production' === process.env.NODE_ENV ) {
    fs.mkdirSync( 'dist' );
}

// Require laravel mix.
let mix = require( 'laravel-mix' );

// Compile dev assets and copy fiiles.
mix
    .sass( 'assets/scss/style.scss', 'assets/min/style.min.css' )
    .js( 'assets/js/script.js', 'assets/min/script.min.js' )
    .sourceMaps()
    .disableNotifications()
    .options( { manifest: false } );

// Copy theme or plugin files to dist directory.
if ( 'production' === process.env.NODE_ENV ) {
    mix
        .copyDirectory( 'assets/img', 'dist/assets/img' )
        .copyDirectory( 'assets/min', 'dist/assets/min' )
        .copy(
            [
                'index.html',
            ],
            'dist/'
        )
}

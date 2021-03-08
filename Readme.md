# postcss-build-pipe
## Showing what is possible with postcss w/o using SCSS

### I'm moving from SCSS to postcss and I was looking for a nice alternative of the 9862930 lines CSS file of WordPress instances. This is why I created this little build pipe.

## Was is used

### Build tool
1. ViteJS - Blazing fast (really) build tool and dev server based on es modules.

### PostCSS Plugins
1. @import (default) - Resolves @import statements.
2. autoprefixer (plugin) - Sets browser specific vendor prefixes.
3. cssnano (plugin) - Minifcation and optimization of the outcoming css.
4. postcss-custom-properties (plugin) - Using CSS Custom Properties.
5. postcss-nested (plugin) - Nesting selecetors like in SCSS.
6. purgecss (plugin) - Removes unused css by checking the html files.
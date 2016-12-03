var metalsmith    = require('metalsmith');
var collections   = require('metalsmith-collections');
var layouts       = require('metalsmith-layouts');
var markdown      = require('metalsmith-markdown');
var sass          = require('metalsmith-sass');
var writemetadata = require('metalsmith-writemetadata');
var paths = require('metalsmith-paths')

var nunjucks = require('nunjucks');
nunjucks.configure('./layouts', {watch: false})

var selectProjects = function(projects) {
  var filepaths = [];
  for(var i = 0; i < projects.length; i++) {
    filepaths.push('work/' + projects[i] + '/index.html');
  }
  return filepaths;
}

var work = [
  "mountain-leader",
  "what-on-earth",
  "annie-sloan",
  "food-matters",
  "nlmc",
  "macmillan-organiser"
];
var workFilenames = selectProjects(work);

metalsmith(__dirname)
  .source('./contents')
  .destination('./build')
  .use(markdown())
  // .use(collections({
  //   work: 'work/*/index.html',
  // }))
  .use(collections({
    work: workFilenames
  }))
  .use(paths())
  .use(layouts({
    engine: 'nunjucks'
  }))
  .use(sass({
    includePaths: ['node_modules']
  }))
  .use(writemetadata({
    collections: {
      work: {
        output: {
          path: 'content/work.json',
          asObject: true,
          metadata: {
            "type": "list"
          }
        },
        ignorekeys: ['contents', 'next', 'previous']
      }
    }
  }))
  .build(function(err) {
    if (err) throw err;
  });

var metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var collections   = require('metalsmith-collections');
var paths         = require('metalsmith-paths');
var layouts       = require('metalsmith-layouts');
var sass          = require('metalsmith-sass');
var autoprefixer  = require('metalsmith-autoprefixer');

var nunjucks = require('nunjucks');
nunjucks.configure('./layouts', {watch: false})

// Convert slugs to full paths
var selectProjects = function(projects) {
  var filepaths = [];
  for(var i = 0; i < projects.length; i++) {
    filepaths.push('work/' + projects[i] + '/index.html');
  }
  return filepaths;
}

// Sorting function for ordering Work projects
var sorter = function(arr) {
  return function(a, b) {
    if (arr.indexOf(a.path) > arr.indexOf(b.path)) {
      return 1;
    }
    if (arr.indexOf(a.path) < arr.indexOf(b.path)) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
}

// Ordering and selection of work projects
var work = [
  "mountain-leader",
  "what-on-earth",
  "annie-sloan",
  "food-matters",
  "nlmc",
  "macmillan-organiser"
];
var workFilenames = selectProjects(work);

// Build the site
metalsmith(__dirname)
  .source('./contents')
  .destination('./build')
  .use(markdown())
  .use(collections({
    work: {
      pattern: workFilenames,
      sortBy: sorter(workFilenames)
    }
  }))
  .use(paths())
  .use(layouts({
    engine: 'nunjucks'
  }))
  .use(sass({
    includePaths: ['node_modules']
  }))
  .use(autoprefixer())
  .build(function(err) {
    if (err) throw err;
  });

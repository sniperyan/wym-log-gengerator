var gitlog = require('../log')
  , options =
    { repo: __dirname
    , number: 20
    // , author: 'liyan@jswym.net'
    , branch: 'master'
    , all: true
    , fields:
      [
    //   [ 'hash'
    //   , 'abbrevHash'
       'subject'
       ,'hash'
      , 'authorName'
      , 'authorDateRel'
      , 'authorDate'
    //   , 'committerDate'
      ]
    }

gitlog(options, function(error, commits) {
  // Commits is an array of commits in the repo
  console.log(commits)
})
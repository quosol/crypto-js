/*jshint node: true*/

'use strict';

module.exports = {
  build: {
    files: [{
      expand: false,
      cwd: '<%= meta.cwd %>',
      src: [
      ],
      dest: '<%= meta.build %>'
    }]
  }
};

var fs = require('fs');


module.exports = {
  warnOn: '*',

  template: function(grunt, init, callback) {
    init.process({}, [
      init.prompt('name'),
      init.prompt('packages', ''),
      init.prompt('github_username', 'vslinko'),
      init.prompt('github_repo', 'vslinko/grunt-init-project'),
      init.prompt('build_system', 'gulp'),
      init.prompt('build_dir', ''),
      init.prompt('ip_address', '10.10.10.10')
    ], function(err, props) {
      props['packages_json_array'] = JSON.stringify(props.packages.split(/\s+/).filter(function(p) {
        return p.length > 0;
      }));
      init.copyAndProcess(init.filesToCopy(props), props);
      fs.chmodSync(props.name + '_manager', 0755);
      callback();
    });
  }
};

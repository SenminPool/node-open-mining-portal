module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'NOMP',
      script    : './init.js',
      cwd: '/opt/nomp/',
      env: {
      },
//      instances: 1,
//      exec_mode: 'cluster',
    }
  ]
};

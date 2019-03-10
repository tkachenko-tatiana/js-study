module.exports = {
  apps: [{
    name: 'studyjs',
    script: './',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      DATABASE_URL: 'postgres://nqzbniuw:TeD8FnhH0SKrRGTOSfWxgRCdIbQF3IRM@stampy.db.elephantsql.com:5432/nqzbniuw',
      PUBLIC_URL: 'http://localhost:3333'
    }
  }]
}

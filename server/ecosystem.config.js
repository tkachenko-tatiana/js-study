module.exports = {
  apps: [{
    name: 'studyjs',
    script: '/',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
}

module.exports = {
  apps: [{
    name: 'studyjs',
    script: './',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      DATABASE_URL: 'postgresql://postgres:123@10.10.82.147:5432/js-study',
      PUBLIC_URL: 'http://localhost:3333'
    }
  }]
}

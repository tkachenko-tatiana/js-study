# This file runs on the EC2 server production
# Installing deps and running migration just first time on deploy each service
  npm install --production
  npx lerna run db:migrate --parallel

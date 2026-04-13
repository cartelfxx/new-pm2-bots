'use strict';

const defaults = {
  watch:               false,
  exec_mode:           'fork',
  instances:           1,
  autorestart:         true,
  max_restarts:        10,
  min_uptime:          '10s',
  restart_delay:       3000,
  max_memory_restart:  '1500M',
  log_date_format:     '',
  merge_logs:          false,
  env: {
    NODE_ENV:    'development',
    FORCE_COLOR: '3',
    COLORTERM:   'truecolor',
  },
  env_production: {
    NODE_ENV:    'production',
    FORCE_COLOR: '3',
    COLORTERM:   'truecolor',
  },
};

const apps = [
  {
    name:   'Countery',
    script: 'apps/countery/countery.js',
  },
  {
    name:   'Moderator',
    script: 'apps/moderator/moderator.js',
  },
  {
    name:   'Point',
    script: 'apps/point/point.js',
  },
  {
    name:   'Invite',
    script: 'apps/invite/invite.js',
  },
  {
    name:   'Guardian',
    script: 'apps/guardian/main.js',
    max_memory_restart: '2G',   // Guardian 4 bot çalıştırır
  },
  // {
  //   name:   'Welcome',
  //   script: 'apps/welc/index.js',
  // },
  // {
  //   name:   'Economy',
  //   script: 'apps/eco/index.js',
  // },
];

const configured = apps.map(app => {
  const slug = app.name.toLowerCase();
  return {
    ...defaults,
    ...app,
    out_file:   `logs/${slug}.out.log`,
    error_file: `logs/${slug}.err.log`,
    pid_file:   `logs/${slug}.pid`,
    env: {
      ...defaults.env,
      ...(app.env ?? {}),
    },
    env_production: {
      ...defaults.env_production,
      ...(app.env_production ?? {}),
    },
  };
});

module.exports = { apps: configured };

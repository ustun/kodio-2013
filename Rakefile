# -*- encoding: utf-8 -*-
require "bundler/setup"
sass_listener="sass_kodio"
task :default => ["run_server"]

desc "Run local server"
task :run_server do
  system %{
    source config/server.sh
    screen -dmS #{sass_listener} sass --watch sass/application.scss:public/css/site.css --style compressed
    server
  }
end

desc "Kill sass watch"
task :kill_sass_watch do
  system %{
    screen -S #{sass_listener} -X quit
  }
end
require 'sinatra/base'
require 'json'

class App < Sinatra::Base
  # Disable all built-in protections
  disable :protection

  # This is the correct way to disable HostAuthorization in newer Rack versions.
  # It prevents the TypeError and allows all hosts.
  set :host_authorization, { permitted_hosts: [] }

  set :bind, '0.0.0.0'
  set :port, 3000

  get '/api/hello' do
    content_type :json
    { message: 'Hello from Rails API!' }.to_json
  end

  run! if app_file == $0
end
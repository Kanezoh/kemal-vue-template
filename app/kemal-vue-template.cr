require "kemal"
require "./helper/webpack_helper.cr"

get "/" do
  render "app/view/index.ecr"
end

Kemal.run

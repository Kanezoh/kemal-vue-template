require "./helper/webpack_helper.cr"

get "/" do
  render "app/view/index.ecr"
end

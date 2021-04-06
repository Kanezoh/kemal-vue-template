def webpack_javascript_path(port=3035)
  if Kemal.config.env == "development"
    "http://localhost:#{port}/public/dest/bundle.js"
  else
    "dest/bundle.js"
  end
end

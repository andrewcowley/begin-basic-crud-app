@app
begin-app

@http
get  /todos
post /todos
post /todos/delete
post /inc

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

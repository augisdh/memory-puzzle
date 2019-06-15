# Memory puzzle game

## #### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```

If dev server port is used in your machine go to package.json and in "Scripts"=>"start": add (--port <port number>). For example "start": 
```"webpack-dev-server --port 9000"```
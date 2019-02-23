# Antoine's webpack config 

This config is still WIP but it's a good start for front-end dev.

## How to use 

###  Install the dependencies 
 ```npm install```


### Use the project's scaffolding

The ```css``` should co in ```src/css```

The ```js``` should co in ```src/js```

The entry ```HTML``` file goes in ```src/index.html``` 

### run the dev env

```npm run dev``` ( will enable hot reloading )

### Build for production

```npm run build```

<hr>


## Babel 

The current config will transpile ES2017 ( async await into ES5 )

```JavaScript 
loader: 'babel-loader',
query: {
    presets: ["env", "stage-0"]
}
```


## Aliases

```JavaScript 
alias: {
    '@css': path.resolve('./src/css/'),
    '@': path.resolve('./src/')
}
```


There's two aliases ```@``` and ```@css```

As an example I can use in my JavaScript to import my CSS 

```JavaScript 
import css from '@css/app.scss'
import yop from '@css/yop.css'
```



## Images performance 

If the image size is lower than 8192 bits we will return a DataURL (base64) if the file is smaller than a byte limit.
Otherwise we use the [imagemin plugins](https://www.npmjs.com/search?q=keywords:imageminplugin)


## Images path

Images should go to ```src/img/```

```
  |- /src
    |- /img
        |- photo.jpeg
        |- raccoon.png
```

In the HTML we can reference our images like so :

```html
<img src="/img/photo.jpeg">
```

In our CSS 

```CSS
body{
    background: url('../img/raccoon.png');
}
```

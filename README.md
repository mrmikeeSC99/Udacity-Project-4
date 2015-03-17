


Github Pages:
http://mrmikeesc99.github.io/Udacity-Project-4/

###Changes:

####Part 1:

Installed Grunt and Grunt Plugins to minify css, js, and html.

Google Optimized files

* images/pizzeria.jpg
* images/profilepic.jpg

Moved analytic js to bottom of page AND added async.

Inlined script perfmatters.js

Used javascript to delay load of style.css until document ready.

Converted profile pic to BASE64 data instead separate file.


####Part 2:
moved offending calcuation out of for loop so calculation only needed to be run once instead of every iteration of the for loop.

```js
      var items = document.querySelectorAll('.mover');
      var scrllTp = (document.body.scrollTop / 1250);
      for (var i = 0; i < items.length; i++) {
        var phase = Math.sin(scrllTp + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
      }
```

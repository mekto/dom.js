This is my expermimental JavaScript micro library to convince myself that working with
the DOM can be easy and we don't always need to use jQuery.

Some examples using jQuery:

``` javascript
var $element = $('#example');

var id = $element.attr('id');
var href = $element.attr('href');
var parent = $element.parent();
var targetUrl = $element.data('target-url');
var next = $element.next();
var html = $element.html();

$element.css('border-color', 'red');
$element.appendClass('important');
$element.toggleClass('highlight');
$element.hide();
```

The same functionality written without using __any__ library:

``` javascript
var element = document.getElementById('example');

var id = element.id;
var href = element.href;
var parent = element.parentElement;
var targetUrl = element.dataset.targetUrl;
var next = element.nextElementSibling;
var html = element.innerHTML;

element.style.borderColor = 'red';
element.classList.add('important');
element.classList.toggle('highlight');
element.style.display = 'none';
```

The code above will work in modern browsers. Some polyfills will be needed to support
older browsers (IE < 9), but it is currently not the aim of this library.

How to use this library?
------------------------

There are no wrappers. Just some helpers. For everything else use native DOM methods like
in the example above.

Selecting element(s) - these are just shortcuts:

``` javascript
var element, elements;

// element = document.getElementById('example');
element = dom.byId('example');

// element = document.querySelector('[type=submit]')
element = dom.query('[type=submit]')

// elements = document.querySelectorAll('.buttons');
elements = dom.queryAll('.buttons');
```

__Important!__ The last example returns `Array` instead of `NodeList`.

To select element(s) inside given element use `find` or `findAll`:

``` javascript
var inner = dom.find(element, '.inner');
var checkboxes = dom.findAll(element, '[type=checkbox]');
```

If you want to work on array of elements, do:

``` javascript
checkboxes.forEach(function(item) {
  item.checked = !item.checked; // toggle checkbox
});
```

Or:

``` javascript
var i = checkboxes.length;
while (i--) {
  checkboxes[i].checked = false;
}
```

Some other helpers you can use (there are not many):

``` javascript
dom.remove(element); // remove element from the DOM
dom.empty(element); // remove all children from element
dom.insertAfter(element, referenceElement);
dom.insertBefore(element, referenceElement);

var form = dom.closest(element, 'form');
```

Events
------

For events [Bean](https://github.com/fat/bean/) micro library is used internally.

``` javascript
dom.on(element, 'click', function(e) {
  // ...
});
```

It supports event delegation:

``` javascript
dom.on(element, 'click', '.target', function(e) {
  // ...
});
```

To trigger an event simply call:

``` javascript
element.click();
```

Or:

``` javascript
dom.trigger(element, 'click');
```

`dom.ready` is also available:

``` javascript
dom.ready(function(e) {
  // ...
});
```

Effects
-------

Sorry, this part is missing right now :(

Ajax
----

Use my [Request.js](https://github.com/mekto/request.js) or anything you want.

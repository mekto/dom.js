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
element = dom.id('example');

// element = document.querySelector('[type=submit]')
element = dom.find('[type=submit]')

// elements = document.querySelectorAll('.buttons');
elements = dom.findAll('.buttons');
```

__Important!__ The last example returns `Array` instead of `NodeList`.

You can pass `element` as the first argument of `find` and `findAll` methods:

``` javascript
var inner = dom.find(element, '.inner');
var checkboxes = dom.findAll(element, '[type=checkbox]');
```

If you want to work with array of elements, use `forEach`:

``` javascript
checkboxes.forEach(function(item) {
  item.checked = !item.checked; // toggle checkbox
});
```

Or `while`:

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

For events use `addEventListener` or this shortcuts:

``` javascript
dom.on(element, 'click', function(e) {
  // ...
});
```

Event delegation can be achieved as follows:

``` javascript
dom.on(element, 'click', function(e) {
  if (e.target.tagName === 'A') {
    // ...
  }
});
```

To trigger an event simply call:

``` javascript
element.click();
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

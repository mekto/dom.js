(function(exports) {
  "use strict";

  var dom = {
    /* Querying */

    id: function(identifier) {
      return document.getElementById(identifier);
    },

    find: function(element, selector) {
      return dom.query(selector, element);
    },

    findAll: function(element, selector) {
      return dom.query(selector, element);
    },

    /* Events */

    on: function(element, types, fn) {
      types.split(' ').forEach(function(type) {
        element.addEventListener(type, fn, false);
      });
      return element;
    },

    off: function(element, types, fn) {
      types.split(' ').forEach(function(type) {
        element.removeEventListener(type, fn, false);
      });
      return element;
    },

    ready: function(fn) {
      document.addEventListener('DOMContentLoaded', fn);
    },

    /* Traversing */

    closest: function(element, selector, maxElement) {
      var current = element;
      do {
        if (current.matchesSelector(selector))
          return current;
        current = current.parentElement;
      } while (current && current != maxElement);
      return null;
    },

    /* Manipulation */

    empty: function(element) {
      while (element.firstChild)
        element.removeChild(element.firstChild);
    },

    insertAfter: function(newElement, referenceElement) {
      if (referenceElement.parentNode.lastChild === referenceElement)
        referenceElement.parentNode.appendChild(newElement);
      else
        referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
    },

    insertBefore: function(newElement, referenceElement) {
      referenceElement.parentNode.insertBefore(newElement, referenceElement);
    },

    remove: function(element) {
      element.parentNode.removeChild(element);
    },

    /* Creation */

    createElement: function(html) {
      var element = document.createElement('div');
      element.innerHTML = html;
      return element.children[0];
    },

    createFragment: function(html) {
      var fragment = document.createDocumentFragment();

      var container = document.createElement('div');
      container.innerHTML = html;

      for (var i = 0, k = container.children.length; i < k; ++i)
        fragment.appendChild(container.children[i]);

      return fragment;
    }
  };

  exports.dom = dom;

})(typeof exports !== 'undefined' ? exports : this);


if (!Element.prototype.matchesSelector) {
  Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.protytype.msMatchesSelector;
}

(function(exports) {
  "use strict";

  var dom = {
    /* Helpers */

    toArray: function(nodelist) {
      return Array.prototype.slice.call(nodelist);
    },

    /* Querying */

    id: function(identifier) {
      return document.getElementById(identifier);
    },

    find: function(element, selector) {
      if (typeof element === 'string')
        return document.querySelector(element);
      return element.querySelector(selector);
    },

    findAll: function(element, selector) {
      if (typeof element === 'string')
        return this.toArray(document.querySelectorAll(selector));
      return this.toArray(element.querySelectorAll(selector));
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
      return element;
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
      return element;
    },

    /* Creation */

    createElement: function(html) {
      var element = document.createElement('div');
      element.innerHTML = html;
      return element.firstElementChild;
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

})(this);


if (!Element.prototype.matchesSelector) {
  Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.protytype.msMatchesSelector;
}

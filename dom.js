(function(exports) {
  "use strict";

  var dom = {
    /* Querying */

    query: function(selector, ctx) {
      if (!ctx)
        ctx = document;
      return ctx.querySelector(selector);
    },

    queryAll: function(selector, ctx) {
      if (!ctx)
        ctx = document;
      return Array.prototype.slice.call(ctx.querySelectorAll(selector));
    },

    byId: function(identifier) {
      return document.getElementById(identifier);
    },

    find: function(element, selector) {
      return dom.query(selector, element);
    },

    findAll: function(element, selector) {
      return dom.query(selector, element);
    },

    /* Events */

    on: function(element, events, fn, delfn) {
      return bean.add(element, events, fn, delfn);
    },

    off: function(element, typeSpec, fn) {
      return bean.remove(element, typeSpec, fn);
    },

    trigger: function(element, type, args) {
      return bean.fire(element, type, args);
    },

    ready: function(fn) {
      return bean.add(document, 'DOMContentLoaded', fn);
    },

    /* Traversing */

    closest: function(element, selector) {
      var current = element;
      do {
        if (current.matchesSelector(selector))
          return current;
        current = current.parentElement;
      } while (current);
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

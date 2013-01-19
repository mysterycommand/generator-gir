<%= fileHeader %>

'use strict';

require.config(
    {
        deps: ['main'],

        paths: {<% _.each(paths, function(element, index, list) { %>
            <%= element.key %>: '<%= element.value %>'<% if(index !== list.length - 1) { %>,<% } %>
        <% }); %>},
        
        shim: {<% _.each(shims, function(element, index, list) { %>
            <%= element.key %>: {<% if(element.value.deps && element.value.deps.length) { %>
                deps: [<% _.each(element.value.deps, function(element, index, list) { %>
                    '<%= element %>'<% if(index !== list.length - 1) { %>,<% } %>
                <% }); %>],<% } %>
                exports: '<%= element.value.exports %>'
            }<% if(index !== list.length - 1) { %>,<% } %>
        <% }); %>}
    }
);
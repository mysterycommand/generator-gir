<%= fileHeader %>

define(
    [<% _.each(reqs, function(element, index, list) { %>
        '<%= element %>'<% if(index !== list.length - 1) { %>,<% } %>
    <% }); %>],

    function(<% _.each(reqs, function(element, index, list) { %>
        <%= _.camelize(element.substr(element.lastIndexOf('/') + 1)) %><% if(index !== list.length - 1) { %>,<% } %>
    <% }); %>) {
        'use strict';

        var <%= className %> = <%= parentClassName %>.extend();
        return <%= className %>;
    }
);
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $('#responsive-menu').mobileMenu();
});
	
$(function () {
    $(document).tooltip();
});
  
$(function () {
    $("#tabs").tabs();
});
  
$(function () {
    $("#accordion").accordion();
});
  
$(function () {
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
});
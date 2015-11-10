/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $('#responsive-menu').mobileMenu();
});
	
$(function () {
    $(document).tooltip();
});
  
$(function () {
    $("#radio").buttonset();
});
  
$(function () {
    $("#check").button();
    $("#format").buttonset();
});
              
$(function () {
    $("#companysize").selectmenu();
});

$(document).ready(function () {
    $("#dialog").dialog({autoOpen: false, closeText: false});
    $("#opener").click(function () {
        $("#dialog").dialog("open");
        event.preventDefault();
    });
            
    $("#dialog").dialog({
        close: function (event, ui) {}
    });
    $("#dialog").on("dialogclose", function (event, ui) {
        window.location = "thanks.html";
    });
});
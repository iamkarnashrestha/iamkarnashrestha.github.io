"use strict";


window.addEventListener("DOMContentLoaded", async() => {

    $("#submitButton").click(function(ev) {
        var form = $("#formId");
        var url = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add ";
        
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function(data) {
                  
                // Ajax call completed successfully
                alert("Form Submited Successfully");
            },
            error: function(data) {
                  
                // Some error in ajax call
                alert("some Error");
            }
        });
    });

});
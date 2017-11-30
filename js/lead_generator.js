$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            // Let's select and cache all the fields
            var $inputs = $form.find("input, select, button, textarea");
            // Serialize the data in the form
            var serializedData = $form.serialize();
            
            //var name = $("input#Name").val();
            //var email = $("input#Email").val();
            //var company = $("input#Company").val();
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbz8DkKlFp6UPWzsvpWOTtdPWau4NFONi8P-5e3r5mzer8hFwJ0/exec",
                method: "POST",
                //data: {
                //    Name: name,
                //    Email: email,
                //    Company: company
                data: serializedData
                },
                dataType: "json",
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Thank you for your interest in CleanRobotics! </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

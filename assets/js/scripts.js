$(document).ready(function() {
    function scrollStat() {
        if ($(this).scrollTop() > 20) {
            $('.navbar-default').addClass("sticky");
        } else {
            $('.navbar-default').removeClass("sticky");
        }
    }
    scrollStat();

    $(window).scroll(function() {
        scrollStat();
    });

    /**************** Contact Form Validation *******************/
    if($("#contactForm").length){
        $("#contactForm").validator().on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                // handle the invalid form...
                formError();
                submitMSG(false, "Did you fill in the form properly?");
            } else {
                // everything looks good!
                event.preventDefault();
                submitForm();
            }
        });
    }


    function submitForm() {
        // Initiate Variables With Form Content
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var country = $("#country").val();
        var streetaddress = $("#streetAddress").val();
        var city = $("#city").val();
        var postcode = $("#postcode").val();
        var telephone = $("#telephone").val();
        var enquiry = $("#enquiry").val();

        $.ajax({
            type: "POST",
            url: "../../contact/form-process.php",
            data: "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&country=" + country + "&streetaddress=" + streetaddress + "&city=" + city + "&postcode=" + postcode + "&telephone=" + telephone + "&enquiry=" + enquiry,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
});
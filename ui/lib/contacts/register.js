$(document).ready(function () {

    var btn_form_action = $("#btn_form_action");


    var iform = $('#iform');



    var _url = $("#_url").val();

    btn_form_action.on('click', function(e) {
        e.preventDefault();
        iform.block({ message: block_msg });
        $.post( _url + "client/register_post/", iform.serialize())
            .done(function (data) {
                if ($.isNumeric(data)) {

                    location.reload();

                }
                else {



                    // OR

                    iform.unblock();


                    toastr.error(data);





                }
            });

    });

});
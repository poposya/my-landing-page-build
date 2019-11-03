$('#callback_form').submit((e) => {
    validateForm(e);
});


function validateForm(e) {
    e.preventDefault();
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    const nameVal = $("#name").val();
    const phoneVal = $("#phone").val();

    const emailVal = $("#email").val();
    const comment = $("#comment").val();

    let valid = true;

    if (nameVal === "") {
        $('#nameLabel').find('.error').css({
            visibility: 'visible'
        });
        valid = false;
    } else {
        $('#nameLabel').find('.error').css({
            visibility: 'hidden'
        });
    }

    if (phoneVal === "") {
        $('#phoneLabel').find('.error').css({
            visibility: 'visible'
        });
        valid = false;
    } else {
        $('#phoneLabel').find('.error').css({
            visibility: 'hidden'
        });
    }

    if (emailVal && !emailReg.test(emailVal)) {
        $('#emailLabel').find('.error').css({
            visibility: 'visible'
        });
        valid = false;
    } else {
        $('#emailLabel').find('.error').css({
            visibility: 'hidden'
        });
    }

    if (valid) {
        $("#name").val('');
        $("#phone").val('');
        $("#email").val('');
        $("#comment").val('');

        $('#callback_form_wrapper').velocity({
            display: 'none',
            opacity: '0',
        },{duration: 300});

        $('#callback_form_success').velocity({
            display: 'block',
            opacity: '1',
        },{duration: 300, delay: 300});

        setTimeout(() => {
            $('#callback_form_success').velocity({
                display: 'none',
                opacity: '0',
            },{
                duration: 300,
            });

            $('#callback_form_wrapper').velocity({
                display: 'block',
                opacity: '1',
            },{duration: 300, delay: 300});
        }, 3000)
    }



}

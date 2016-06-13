function check_email(email){
    var regex = new RegExp("^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$");
    return regex.test(email.toLowerCase());
}

$(function(){
    $(".create-invite-button img").click(function(){
        $(".participants-block .invitation").show();
        var position = parseInt($(this).attr("position"));

        var corner_pos = position * 33.3333333 + 33.3333333/2;
        $(".participants-block .invitation .corner").css("left", "calc(" + corner_pos + "% - 20px)");
    });

    $(".invite-button .button").click(function(){
        var email = $("input#invite-email").val();
        //TODO: check email
        if (check_email(email)){
            var url = '/winter/team?a=invite&email=' + email;
            window.location.href = url;
        }else{
            $("input#invite-email").parent().addClass("error");
        }
    });

});
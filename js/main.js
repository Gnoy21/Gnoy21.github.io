function postClick(url){
    var ajaxOption = {
        url : url,
        async : true,
        type : "POST",
        dataType : "html",
        cache : false
    };

    $.ajax(ajaxOption).done(function(data){
        $('#post_list').children().remove();
        $('#post_list').html(data);
    });
}

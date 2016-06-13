var Shop = {
    _request: function(url, params, callback){
        params.csrfmiddlewaretoken = $("input[name=csrfmiddlewaretoken]").val();
        $.post(url, params, callback, 'json');
    },
    toBasket: function(el, cert_id){
        this._request('/shop/tobasket/', {cert_id: cert_id}, function(data){
            Informer.show(data.message);
        });
        return false;
    },
    fromBasket: function(el, cert_id){
        $(el).parents('.item').remove();
        this._request('/shop/frombasket/', {cert_id: cert_id}, function(data){

        });
        return false;
    },
    makeOrder: function(el, cert_id){
        var $item = $(el).parents('.item');
        $item.hide();
        this._request('/shop/makeorder/', {cert_id: cert_id}, function(data){
            Informer.show(data.message);
            if(data.success){
                $('#basket_history').html(data.history)
            } else {
                $item.show();
            }
        });
        return false;
    }
}

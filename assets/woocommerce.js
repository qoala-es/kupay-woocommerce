function kupayBuildIframe(iframeUrl){

    const w = 450;
    const h = 1000;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    
    window.open(iframeUrl, "Kupay Checkout", '_self, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

}

function kupayPDPCheckout(){

    kupayEvent("CLICK", {
        storeId: document.getElementById("kupay-app-id").value,
        origin: document.getElementById("kupay-origin").value,
        platform: "WOOCOMMERCE"
    });

    let variantId = ''

    if(document.getElementsByClassName("variation_id").length){
        variantId = document.getElementsByClassName("variation_id")[0].value;
    }


    var iframeUrl = document.getElementById("kupay-url").value;

    iframeUrl += "?appId=" + document.getElementById("kupay-app-id").value;
    iframeUrl += "&productId=" + document.getElementById("kupay-product-id").value;
    iframeUrl += "&productName=" + document.getElementById("kupay-product-name").value;
    iframeUrl += "&productQuantity=" + document.getElementsByClassName("input-text qty text").quantity.valueAsNumber;
    iframeUrl += "&productImageUrl=" + "";
    iframeUrl += "&productPrice=" + document.getElementById("kupay-product-price").value;
    iframeUrl += "&requiresProcessing=" + document.getElementById("kupay-requires-processing").value;
    iframeUrl += "&origin=" + document.getElementById("kupay-origin").value;
    iframeUrl += "&currency=" + document.getElementById("kupay-currency").value;
    iframeUrl += "&deliveryCost=" + document.getElementById("kupay-delivery-cost").value;
    iframeUrl += "&variantId=" + variantId;

    kupayBuildIframe(iframeUrl);

}

function kupayCartCheckout(){

    kupayEvent("CLICK", {
        storeId: document.getElementById("kupay-app-id").value,
        origin: document.getElementById("kupay-origin").value,
        platform: "WOOCOMMERCE"
    });

    var iframeUrl = document.getElementById("kupay-url").value;

    iframeUrl += "?appId=" + document.getElementById("kupay-app-id").value;
    iframeUrl += "&requiresProcessing=" + document.getElementById("kupay-requires-processing").value;
    iframeUrl += "&origin=" + document.getElementById("kupay-origin").value;
    iframeUrl += "&currency=" + document.getElementById("kupay-currency").value;
    iframeUrl += "&deliveryCost=" + document.getElementById("kupay-delivery-cost").value;
    iframeUrl += "&cartId=" + document.getElementById("kupay-cart-id").value;

    kupayBuildIframe(iframeUrl);

}

if(document.getElementsByClassName("kupay-buy").length > 0){
    document.getElementsByClassName("kupay-buy")[0].innerHTML = "COMPRAR EN 1-CLICK";
}

(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
;r.type="text/javascript"
;r.integrity="sha384-tzcaaCH5+KXD4sGaDozev6oElQhsVfbJvdi3//c2YvbY02LrNlbpGdt3Wq4rWonS"
;r.crossOrigin="anonymous";r.async=true
;r.src="https://cdn.amplitude.com/libs/amplitude-8.5.0-min.gz.js"
;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
    console.log("[Amplitude] Error: could not load SDK")}}
;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
;function s(e,t){e.prototype[t]=function(){
    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
    var o=function(){this._q=[];return this}
    ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
    ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
        ;return this}
    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
    ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
    ;function v(e){function t(t){e[t]=function(){
        e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
        for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
        e=(!e||e.length===0?"$default_instance":e).toLowerCase()
        ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
        }return n._iq[e]};e.amplitude=n})(window,document);

amplitude.getInstance().init("c4e504b6688c4962603fbcab309038cd");

function kupayEvent(eventName, properties){
    amplitude.getInstance().logEvent(eventName, properties);
}

if(document.getElementsByClassName('single_add_to_cart_button').length > 0){
    document.getElementsByClassName('single_add_to_cart_button')[0].onclick = function() {
        kupayEvent("CLICK", {
            storeId: document.getElementById("kupay-app-id").value,
            origin: "ADD_TO_CART",
            platform: "WOOCOMMERCE"
        })
    }
}

document.getElementsByClassName('checkout-button')[0].onclick = function() {
    kupayEvent("CLICK", {
        storeId: document.getElementById("kupay-app-id").value,
        origin: "PROCEED_CHECKOUT",
        platform: "WOOCOMMERCE"
    })
}

document.getElementById('place_order').onclick = function() {
    kupayEvent("CLICK", {
        storeId: document.getElementById("kupay-app-id").value,
        origin: "PLACE_ORDER",
        platform: "WOOCOMMERCE"
    })
}
function navi(css){
    document.getElementById("navigator").classList.add(css); 
}
function bar1(css){
    document.getElementById("bar1").classList.add(css);
    document.getElementById("bar2").classList.remove(css);
    document.getElementById("bar3").classList.remove(css);
}
function bar2(css){
    document.getElementById("bar2").classList.add(css);
    document.getElementById("bar1").classList.remove(css);
    document.getElementById("bar3").classList.remove(css);
}
function bar3(css){
    document.getElementById("bar3").classList.add(css);
    document.getElementById("bar1").classList.remove(css);
    document.getElementById("bar2").classList.remove(css);
}

function image(css){
    if (!document.getElementById("image").classList.contains(css)) {
        document.getElementById("leftbanner").classList.add("left_banner");
        document.getElementById("left_intro").classList.toggle("left_intro_change");
        document.getElementById("image").classList.toggle(css);
        document.getElementById("brief").classList.toggle("brief_change");
        document.getElementById("iframe1").classList.toggle("iframe1_change");
        document.getElementById("left_blank").classList.add("left_blank");
        document.getElementById("return_index").classList.add("return_index");
        document.getElementById("left_line").classList.replace("left_line_init","left_line");
    }   
}

function index(css){
    if (document.getElementById("image").classList.contains(css)) {
        document.getElementById("navigator").classList.remove("nagivation"); 
        document.getElementById("leftbanner").classList.remove("left_banner");
        document.getElementById("left_intro").classList.remove("left_intro_change");
        document.getElementById("image").classList.remove(css);
        document.getElementById("brief").classList.remove("brief_change");
        document.getElementById("iframe1").classList.remove("iframe1_change");
        document.getElementById("left_blank").classList.remove("left_blank");
        document.getElementById("bar1").classList.remove("banner_a_change");
        document.getElementById("bar2").classList.remove("banner_a_change");
        document.getElementById("bar3").classList.remove("banner_a_change");
        document.getElementById("return_index").classList.remove("return_index");
        document.getElementById("return_index").classList.add("return_index_init");
        document.getElementById("left_line").classList.replace("left_line","left_line_init");
    }   
}
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function reinitIframe(){
    var iframe = document.getElementById("test");
    try{
    var bHeight = iframe.contentWindow.document.body.scrollHeight;
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
    var height = Math.max(bHeight, dHeight);
    iframe.height = height;
    console.log(height);
    }catch (ex){}
    }
window.setInterval("reinitIframe()", 200);
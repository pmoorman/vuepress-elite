// DRIP SNIPPET
  var _dcq = _dcq || [];
  var _dcs = _dcs || {}; 
  _dcs.account = '3029595';

  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; 
    dc.src = '//tag.getdrip.com/3029595.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
// END DRIP SNIPPET

// CUSTOM CODE on top of Drip Pro Tools
  window._drip_pro = new DripPro
  window.drip_plinko = function(drip, page) {
    var response = {}
    if (drip.has_tag('Purchase!')){
      localStorage.setItem('p', '1');
      window.location.href = '/';
    }
    else {
      localStorage.removeItem('p');
    }
    return response
  }
  
 jQuery(function(){
    window._drip_pro.init({
      debug: true,
    })
  })
// DRIP SNIPPET
  var _dcq = _dcq || [];
  var _dcs = _dcs || {}; 
  _dcs.account = '3029595';

  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true; 
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
      response = {
        login: '<br><br><br><h1>Je bent nu ingelogd</h1>'
      }
    }
    else {
      response = {
        login: '<br><br><br><p>oh oh, je hebt geen toegang!<p></br><a href="https://www.getdrip.com/forms/835790157/submissions/new" data-drip-show-form="835790157">Click here to log in!</a>'
      }
    }
    return response
  }
  jQuery(function(){
    window._drip_pro.init({
      debug: true,
    })
  })
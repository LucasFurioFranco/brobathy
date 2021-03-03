(function() {
  
  //------------------INSTALAÇÃO DAS TAGS-----------------------------
  
  //raccoon_tag_manager.js Loaded
  function jsLoaded() {
    //Disparo da tag de pageView logo no carregametno deste script
    tags.ga.pageview('UA-119143550-3');
  }

  ///Dom Ready
  function domLoaded() {

  }

  //Element Clicked
  function elementClicked(evt) {
    console.log("Heard a click. See:", evt);
  }


  //-------------------------------------------------------------------


  var variables = {
    "Page URL": document.URL
  }
  

  var tags = {
    ga: {
      pageview: function(uaProperty, obj) {
        (function(i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
          a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        var trackerName = (Date.now() + Math.random().toString(36).substring(1)).replace(".", "");
        ga('create', uaProperty, 'auto', trackerName);
        ga([trackerName, 'send'].join("."), 'pageview', obj);
      },
      event: function(uaProperty, category, action, label, value, obj) {
        (function(i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
          a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        var trackerName = (Date.now() + Math.random().toString(36).substring(1)).replace(".", "");
        ga('create', uaProperty, 'auto', trackerName);
        ga([trackerName, 'send'].join("."), 'event', category, action, label, value, obj);
      }
    }
  }


  //-------------------------------------------------------------------
  

  //Aciona tags do carregamento deste script
  jsLoaded();

  //Acionamento de tags que precisam do DOM pronto
  if (document.readyState == "complete") {
    domLoaded();
  } else {
    document.addEventListener("DOMContentLoaded", function(event) {
      domLoaded();
    });
  }

  //Acionamento de tags que disparam no clique em elementos
  document.body.addEventListener("click", function(event) {
    elementClicked(event);
  });


})()

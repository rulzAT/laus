// ==UserScript==
// @name         LEGO Affiliate Checker
// @namespace    https://brickbank.app
// @version      0.1.0
// @description  try to take over the world!
// @author       Abd El Hamid LASHIN
// @match        https://www.lego.com/de-at/cart*
// @match        https://www.lego.com/de-de/cart*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lego.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
// @connect      brickbank.app
// @grant        none
// @run-at       document-end
// ==/UserScript==
/* global $ */
/* global jQ */


var mids = {
  "fJieVPVibyc":"Brickbank APP",
  "8rHsct8DN/8": "Brickmerge",
  "wiuE/WmhD04":"Bricktracker",
  "":"Promobricks",
  "aH1gnOErcGI":"Stonewars.de",
}
var urls = [
  "<a href=\"https://click.linksynergy.com/deeplink?id=fJieVPVibyc&mid=50641&u1=tbbaac&murl=https%3A%2F%2Fwww.lego.com%2Fcart\">Brickbank App</a>",
  "<a href=\"https://click.linksynergy.com/deeplink?id=8rHsct8DN/8&mid=50641&u1=tbbaac&murl=https%3A%2F%2Fwww.lego.com%2Fcart\">Brickmerge</a>",
  "<a href=\"https://click.linksynergy.com/deeplink?id=aH1gnOErcGI&mid=50641&u1=tbbaac&murl=https%3A%2F%2Fwww.lego.com%2Fcart\">Stonewars.de</a>"
]

function mlrg_gendata() {

  const cookieName = 'rakuten';
  const urlToFetch = 'https://www.lego.com'

  var cookie = JSON.parse(Cookies.get('rakuten')??"[]");
  var links = urls.join(" | ");
  

  if (Object.keys(cookie).length == 0) {
    $('[class^="OrderSummarystyles__SummaryWrapper-sc"]').append('<b>Keine aktiven Cookies gefunden!</b><br>Möchtest du deine Unterstützung ändern:</br>'+links)
    console.log('Cookie not found');
    return;
  }

  if (cookie?.ranEAID in mids) {
    $('[class^="OrderSummarystyles__SummaryWrapper-sc"]').append("Mit deiner Bestellung unterstützt du: <br><b>"+mids[cookie.ranEAID] +"</b>")
  } else {
    $('[class^="OrderSummarystyles__SummaryWrapper-sc"]').append("Dein Tracker ist leider unbekannt.<br>Möchtest du deine Unterstützung ändern:</br>"+links)
  }
  console.log(cookie);
  
}

(function () {
  'use strict';

  // Wait Page Post Loade READY
  var observer = new MutationObserver(resetTimer);
  var timer = setTimeout(action, 30, observer); // wait for the page to stay still for 3 seconds

  observer.observe(document, { childList: true, subtree: true });

  // reset timer every time something changes
  function resetTimer(changes, observer) {
    clearTimeout(timer);
    timer = setTimeout(action, 2000, observer);
  }

  function action(observer) {
    observer.disconnect();
    // code
    console.log('Document Ready ID: ');

    //console.log(xhr_data);
    mlrg_gendata();
  }

  $(document).ready(function () {

    //mlrg_gendata ();

  });
})();

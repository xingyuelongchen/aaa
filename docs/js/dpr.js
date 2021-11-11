// const AutoRem = 7.5; //设计稿宽度/100
// (function (AutoRem) {
//   let rootEl = document.documentElement;
//   let metaEl = document.querySelector('meta[name="viewport"]');
//   let dpr = window.devicePixelRatio || 1;
//   let rem = dpr % 1 === 0 ? rootEl.clientWidth * dpr / AutoRem : rootEl.clientWidth / AutoRem;
//   let scale = (1 / dpr).toFixed(2);
//   metaEl.setAttribute('content', 'width=' + dpr * rootEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
//   rootEl.setAttribute('data-dpr', dpr);
//   rootEl.setAttribute('style', 'font-size:' + rem.toFixed(2) + 'px!important;');
//   window.rem2px = function (v) {
//     v = parseFloat(v);
//     return v * rem;
//   };
//   window.px2rem = function (v) {
//     v = parseFloat(v);
//     return v / rem;
//   };
// })(AutoRem);
(function () {
  var width = 750, pw = parseInt(window.screen.width), scale = pw / width, ua = navigator.userAgent;
  if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
      document.write('<meta name="viewport" content="width=' + width + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',target-densitydpi=device-dpi">');
    } else {
      document.write('<meta name="viewport" content="width=' + width + ',target-densitydpi=device-dpi">');
    }
  } else {
    document.write('<meta name="viewport" content="width=' + width + ',user-scalable=no,target-densitydpi=device-dpi">');
  }
})();
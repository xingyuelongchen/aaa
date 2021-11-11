const AutoRem = 7.5; //设计稿宽度/100
(function (AutoRem) {
  let rootEl = document.documentElement;
  let metaEl = document.querySelector('meta[name="viewport"]');
  let dpr = window.devicePixelRatio || 1;
  let rem = dpr % 1 === 0 ? rootEl.clientWidth * dpr / AutoRem : rootEl.clientWidth / AutoRem;
  let scale = (1 / dpr).toFixed(2);
  metaEl.setAttribute('content', 'width=' + dpr * rootEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
  rootEl.setAttribute('data-dpr', dpr);
  rootEl.setAttribute('style', 'font-size:' + rem.toFixed(2) + 'px!important;');
  window.rem2px = function (v) {
    v = parseFloat(v);
    return v * rem;
  };
  window.px2rem = function (v) {
    v = parseFloat(v);
    return v / rem;
  };
})(AutoRem);
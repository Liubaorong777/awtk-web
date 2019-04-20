function TBrowser() {

}

TBrowser.getDevicePixelRatio = function () {
    return window.devicePixelRatio || 1;
}

TBrowser.adjustCanvas = function (canvas) {
    let view = TBrowser.getViewPort();
    let dpr = TBrowser.getDevicePixelRatio();

    canvas.width = view.width * dpr;
    canvas.height = view.height * dpr;

    canvas.style.position = 'absolute';
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.width = view.width + "px";
    canvas.style.height = view.height + "px";

}

TBrowser.getViewPort = function () {
    let width = 0;
    let height = 0;

    if (window.displayInfo) {
        width = window.displayInfo.width;
        height = window.displayInfo.height;
    } else if (typeof window.innerWidth != 'undefined') {
        width = window.innerWidth;
        height = window.innerHeight;
    } else if (typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else {
        width = document.getElementsByTagName('body')[0].clientWidth;
        height = document.getElementsByTagName('body')[0].clientHeight;
    }

    return {
        width: width,
        height: height
    };
}

TBrowser.isMobile = function () {
    return false;
}

TBrowser.updateDate = function () {
  TBrowser.date = new Date();
}

TBrowser.getFullYear = function () {
  return TBrowser.date.getFullYear();
}

TBrowser.getMonth = function () {
  return TBrowser.date.getMonth() + 1;
}

TBrowser.getDate = function () {
  return TBrowser.date.getDate();
}

TBrowser.getHours = function () {
  return TBrowser.date.getHours();
}

TBrowser.getMinutes = function () {
  return TBrowser.date.getMinutes();
}

TBrowser.getSeconds = function () {
  return TBrowser.date.getSeconds();
}

TBrowser.getDay = function () {
  return TBrowser.date.getDay();
}

TBrowser.getParam = function(name, defval) {
  let search = window.location.search;

  if(search) {
    let start = search.indexOf(name + '=');

    if(start >= 0) {
      start += name.length + 1;
      let str = search.substring(start);
      let end = str.indexOf('&');

      if(end >= 0) {
        str = str.substring(0, end);
      }
      
      return str;
    }
  }

  return defval; 
}


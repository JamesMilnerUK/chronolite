!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.chronolite=n()}(this,function(){var e=void 0;return e.time=function(e,n,r){if(void 0===r&&(r=20),!Array.isArray(n))throw Error("function arguments is not an array");for(var t,i=0,o=0;o<r;o++)i+=(t=new Date,e.apply(null,n),new Date-t);return i/r},e.compare=function(n,r,t,i){var o=e.time(n,fnArgs,10),f=e.time(n,fnArgs,10);return{faster:o<f,firstFnTime:o,secondFnTime:o,fastestTime:o<f?o:f}},{compare:e.compare,time:e.time}});
//# sourceMappingURL=chronolite.umd.js.map

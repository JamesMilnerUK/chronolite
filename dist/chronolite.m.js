var r=void 0;export default r.time=function(r,e,t){if(void 0===t&&(t=20),!Array.isArray(e))throw Error("function arguments is not an array");for(var n,a=0,i=0;i<t;i++)a+=(n=new Date,r.apply(null,e),new Date-n);return a/t},r.compare=function(e,t,n,a){var i=r.time(e,fnArgs,10),o=r.time(e,fnArgs,10);return{faster:i<o,firstFnTime:i,secondFnTime:i,fastestTime:i<o?i:o}},{compare:r.compare,time:r.time};
//# sourceMappingURL=chronolite.m.js.map

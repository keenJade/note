 // 页面多个倒计时
 var aTime = [3600, 3800];
 for (var i = 0; i < 2; i++) {
     (function (i) {
         var obj = 'timer' + i;
         countDown(aTime[i], function (msg) {
             var timeDom = document.getElementsByClassName(obj)
             timeDom[0].textContent = msg;
         })
     })(i)
 }
 function countDown(maxtime, fn) {
     var timer = setInterval(function () {
         if (!!maxtime) {
             var day = Math.floor(maxtime / 86400),
                 hour = Math.floor((maxtime % 86400) / 3600),
                 minutes = Math.floor((maxtime % 3600) / 60),
                 seconds = Math.floor(maxtime % 60),
                 msg = (hour < 10 ? '0' + hour : hour) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
             fn(msg);
             --maxtime;
         } else {
             clearInterval(timer);
         }
     }, 1000);
 }

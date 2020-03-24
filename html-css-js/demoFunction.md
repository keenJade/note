一：关于页面拥有一个定时器
  html: <div class="daojishi"></div>
  js:  
		window.load=function(){
			let time=399388484838；
		    countdown(time)
		}
		function countdown(time){
			let countDownTime;
			if(time<0){
				countDownTime ="00:00:00"
				return;
			}else{
				countDownTime= dateformat(time)  //显示时间
				time -=1000;  //剩余的毫秒数
			}
			$(".daojishi").html(countDownTime)
			     setTimeout(function(){
			        countdown(time)
					},1000)
			}
			//时间格式化输出
			function dateformat(micro_second){}{
				var second=Math.floor(micro_second/1000)
				var day =Math.floor(second/3600/24)
				var hr= Math.floor(second/3600%24)
				var min =Math.floor(second/60%60)
				var sec = Math.floor(second%6)
				return(hr<10?'0'+hr:hr)+ ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
            }
			}
		}
二：form的自动完成开关
	autocomplate =on  autocomplate=off
	
三：实现跑马灯文字的两种方式
	html方式：<marquee>文字内容</marquee>  （不建议使用，不符合w3c的功能性分离）
	css方式:
		<div class="marquee><span class="marquee-text">跑马灯实现</span></div>
			<style>
				.marquee{
					height:25px;
					line-height:25px;
					box-sizing:border-box;
					word-break:break-all;  // 在恰当的断字点进行换行
					white-space:nowrap;  //规定段落中的文字不进行换行
					overflow:hidden;
				}
				.marguee-txt{
					display:inline-block;
					padding-left:100%;
					animation:marqueeTransform 16s linear infinite;   //从右至左开始滚动
				}
				@keyframes marqueeTransform{
					0%{transform:translate(0,0)}
					100%{transform:translate(-100%,0)}
				}
			</style>
4：阻止别人在iframe中加载自己的页面,将这段代码放在每个页面的head中
	if(top !==window){
		top.location.href=window.location.href
	}
5：获取属性值dom.dataset.*
	html: <div data-coloe="red"></div>
	js:     var div = document.querySelector("div")
			// 获取h5自定义属性，dataset是一个对象
			var color =div.dataset.coloe
6:解决h5标签的兼容问题
     html5shiv.js
7：当前时间到固定时间的倒计时功能
	html:<div id="showTime"></div>
	js: 
		function formatTime(ms){
			ms = new Date("2019/11/15 14:20:00").getTime() - Date.now();
			if(ms<=0){
				document.getElementById("showTime").innerHTML ="已结束";
				//window.requestAnimationFrame()浏览器提供的js全局方法，针对动画效果
				//结束animate动画
				window.cencelAnimationFrame(animate)
				return;
			}
			var ss=1000,mi=ss*60,hh=mi*60,dd=hh*24;
			var day=parseInt(ms/dd),hour=parseInt(ms-day*dd)/hh,minute=parseInt((ms-day*dd-hour*hh)/mi),
				second=parseInt((ms-day*dd-hour*hh-minute*mi)/ss),milliSecond =ms-day*dd-hour*hh-minute*mi-second*ss;
			let sb="";
			if(day>=0){
				sb+=day+"天"
			}
			if(hour>=0){
				   sb = hour > 9 ? sb + hour + ":" : sb + '0' + hour + ":"
        }
        if (minute >= 0) {
            sb = minute > 9 ? sb + minute + ":" : sb + '0' + minute + ":"
        }
        if (second >= 0) {
            sb = second > 9 ? sb + second + ":" : sb + '0' + second + ":"
        }
        if (milliSecond >= 0) {
            sb += parseInt(milliSecond / 1000)
        }
		}
	
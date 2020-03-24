// 常用的js功能

// 上传多个文件功能
function changepic(obj) {
  var fl = obj.files.length;
  for (var i = 0; i < fl; i++) {
    var file = obj.files[i];
    var reader = new FileReader();
    //读取文件过程方法
    reader.onload = function(e) {
      var imgstr = `<img class="img_11" src="` + e.target.result + `" alt="">`;
      $("#uploaderFiles").append(
        ` <li class="weui-uploader__file weui-uploader__file_status shit_d">
                                  ` +
          imgstr +
          `
                                    <img class="shit" src="../assets/images/34.png" alt="">
                                </li>`
      );
    };
    //读取文件内容，结果用data:url的字符串形式表示
    reader.readAsDataURL(file);
  }
}
// 上传单个文件功能
function changepic() {
  var reads = new FileReader();
  let f = $("#uploaderInput")[0].files[0];
  reads.readAsDataURL(f);
  reads.onload = function(e) {
    $(".info_img").attr("src", this.result);
  };
}

// 检验中文的方法

function isChinese() {
  const regular = /^[\u4e00-\u9fa5]+$/;
  return regular.test(str);
}

// 让一个数组乱序
function shuffle(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let j = Math.floor(Math.random() * len);
    if (i !== j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))(
  // 评价星星的选择
  // 点击评价星星
  function() {
    var isClick = false;
    var beforeClickedIndex = -1,
      clickNum = 0;

    $(".xing_img").on("click", function() {
      $(".xing_img").attr("src", "../assets/images/xing_2.png");
      isClick = true;
      index = $(this).index();
      for (var i = 1; i <= index + 1; i++) {
        $(".xing_img:nth-child(" + i + ")").attr(
          "src",
          "../assets/images/xing_2_h.png"
        );
      }
      if (index == beforeClickedIndex) {
        clickNum++;
        if (clickNum % 2 === 1) {
          $(".xing_img:nth-child(" + (index + 1) + ")").attr(
            "src",
            "../assets/images/xing_2.png"
          );
        } else {
          $(".xing_img:nth-child(" + (index + 1) + ")").attr(
            "src",
            "../assets/images/xing.png"
          );
        }
      } else {
        clickNum = 0;
        beforeClickedIndex = index;
      }
    });
  }
)();

// 获取当前url查询字符串中的参数的几种方式
function params() {
  const search = window.location.search();
}

// 获取数组的最大值和最小值的方法
$(function() {
  Math.max.apply(Array, [24, 3, 45, 6673, 3, 23]);
  Math.min.apply(Array, [24, 3, 45, 6673, 3, 23]);

  let arr = [10, 20];
  let arr2 = arr.sort(function(a, b) {
    return b - a;
  });
  document.write(arr2[0]);
});

// 禁止浏览器的默认行为等操作
$(function() {
  // 禁止浏览器默认右键菜单
  document.oncontextmenu = function(event) {
    encodeURIComponent.preventDefault();
  };

  // 禁止浏览器文本选中
  if (document.all) {
    document.onselectstart = function() {
      return false; // for ie
    };
  } else {
    document.onmousedown = function() {
      return false;
    };
    document.onmouseup = function() {
      return false;
    };
  }
  document.onselectstart = new Function("event.returnValue = false");

  // 禁止F12打开控制台
  document.onkeydown = document.onkeyup = document.onkeypress = function(
    event
  ) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
      e.returnValue = false;
      return false;
    }
  };
});

// 求n的阶乘
$(function() {
  // 方法一
  function factorial(n) {
    if (n > 1) return n * factorial(n - 1);
    return 1;
  }
  // 方法二
  const getN = function(n, sum = 1) {
    if (typeof n !== "number") {
      return "请输入数字类型";
    }
    if (n === 0) {
      return sum;
    } else {
      sum = sum * n;
      return getN(--n, num);
    }
  };
});

// 通过js 检测是否支持webp格式的图片

function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha:
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation:
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
  };
  var img = new Image();
  img.onload = function() {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function() {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}

// 在字符串的原型上添加一个repeat的重复事件
function stringRepeat() {
  String.prototype.repeat = function(count) {
    let originStr = String(this);
    let thisStr = this;
    for (let i = 1; i < count; i++) {
      thisStr += originStr;
    }
    return thisStr;
  };
  console.log("asd".repeat(2));
}
$(function() {
  // 监听input的value值
  $(function() {
    $("weui-cell__input").bind("input propertychange", function() {
      console.log($(this).val());
    });
  });
  // 监听select的值得变化
  $(".select").change(function() {
    // 获取当前select选择的值
    let currentSelect = $(".select option:selected").text();
  });
  // 将获取的内容不重复存储在数组中
  function addArr() {
    let listName = document.getElementsByClassName("list_name");
    let arr = []; // 存储值
    console.log(listName.length);
    for (var i = 0; i < listName.length; i++) {
      let listText = listName[i].textContent;
      if ($.inArray(listText, arr) == -1) {
        arr.push(listText);
      }
    }
    // console.log(arr)
  }
});



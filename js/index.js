$(document).ready(function () {
  var curIndex = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var autoChange = setInterval(function(){ 
    if(curIndex < $(".imgList li").length-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },2500);
 
   // banner
   var tip=$(".tip")
   var tips=$(".tips");
   var a=$("a",tips);
   var banner=$(".banner")
   var btnone=$(".btnone")
   var b=$("b",banner)
   var i=$("i",banner)
   var span=$("span",banner)
   var imgs=$("a",banner)
   var bnow=0;
   var bnext=0;
   var bw=a.width();
   var bt;
   var bannerl=$(".goleft")
   var bannerr=$(".goright")
   var bflag=true;
    i.eq(0).css({height:5,background:"#e3101e"})
    btnone.eq(0).css("display","block")
    span.eq(0).css("display","none")
   imgs.css({"zIndex":0,"opacity":0})
   imgs.eq(0).css({"zIndex":1,"opacity":1})
   function bmove(){
    bnext=bnow+1;
    if(bnext==imgs.length){
      bnext=0;
    }
    imgs.eq(bnext).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   function bmove1(){
   
    bnext=bnow+1;
    if(bnext>=imgs.length){
      bnext=0;
    }
    imgs.css({"zIndex":2,"opacity":0})
    // imgs.eq(bnow).css("opacity",1)
    // imgs.eq(bnow+2).css("opacity",0)
    if(bnow%2!=0){
    imgs.eq(bnext).css({"zIndex":4}).end().eq(bnow).animate({"opacity":0.5},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    }
    else{
      imgs.eq(bnext-1).css("opacity",1)
    }
    bnow=bnext;
   }
    function bmovel(){
    bnext=bnow-1;
    if(bnext<0){
      bnext=imgs.length-1;
    }
    imgs.eq(bnext).css({"zIndex":2,"opacity":1}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   bannerr.click(function(){
      if(bflag){bmove()}
      bflag=false;
   })
    bannerl.click(function(){
      if(bflag){bmovel()}
      bflag=false;
   })
    bt=setInterval(bmove1,1500)
   banner.hover(function(){clearInterval(bt);
   },function(){bt=setInterval(bmove1,1500)
   })
   b.mouseover(function(){
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    var index=b.index($(this))
    i.eq(index).css({height:5,background:"#e3101e"})
    var index1=Math.floor((index)/2)
    btnone.eq(index1).css("display","block")
    span.eq(index1).css("display","none")
    imgs.eq(index).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(index).animate({"opacity":1},function(){bflag=true});
    bnow=index;
   })


  $(".indexList").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(autoChange);
      changeTo(item);
      curIndex = item;
    },function(){ 
      autoChange = setInterval(function(){ 
        if(curIndex < $(".imgList li").length-1){ 
          curIndex ++; 
        }else{ 
          curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex); 
      },2500);
    });
  });
  

  function changeTo(num){ 
    $(".imgList").find("li").removeClass("imgOn").fadeOut().eq(num).fadeIn().addClass("imgOn");
    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }

  var Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var Change = setInterval(function(){ 
    if(Index < $(".imgListf1 li").length-1){ 
      Index ++; 
    }else{ 
      Index = 0;
    }
    //调用变换处理函数
    changeT(Index); 
  },2500);
 
  $(".indexListf1").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(Change);
      changeT(item);
      Index = item;
    },function(){ 
      Change = setInterval(function(){ 
        if(Index < $(".imgListf1 li").length-1){ 
          Index ++; 
        }else{ 
          Index = 0;
        }
        //调用变换处理函数
        changeT(curIndex); 
      },2500);
    });
  });
  function changeT(num){ 
    $(".imgListf1").find("li").removeClass("imgOnf1").fadeOut().eq(num).fadeIn().addClass("imgOnf1");
    $(".infoListf1").find("li").removeClass("infoOnf1").eq(num).addClass("infoOnf1");
    $(".indexListf1").find("li").removeClass("indexOnf1").eq(num).addClass("indexOnf1");
  }

 var f2Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f2Change = setInterval(function(){ 
    if(f2Index < $(".imgListf2 li").length-1){ 
      f2Index ++; 
    }else{ 
      f2Index = 0;
    }
    //调用变换处理函数
    f2changeT(f2Index); 
  },2500);
 
  $(".indexListf2").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f2Change);
      f2changeT(item);
      f2Index = item;
    },function(){ 
      f2Change = setInterval(function(){ 
        if(f2Index < $(".imgListf2 li").length-1){ 
          f2Index ++; 
        }else{ 
          f2Index = 0;
        }
        //调用变换处理函数
        f2changeT(curIndex); 
      },2500);
    });
  });
  function f2changeT(num){ 
    $(".imgListf2").find("li").removeClass("imgOnf2").fadeOut().eq(num).fadeIn().addClass("imgOnf2");
    $(".infoListf2").find("li").removeClass("infoOnf2").eq(num).addClass("infoOnf2");
    $(".indexListf2").find("li").removeClass("indexOnf2").eq(num).addClass("indexOnf2");
  }



var f3Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f3Change = setInterval(function(){ 
    if(f3Index < $(".imgListf3 li").length-1){ 
      f3Index ++; 
    }else{ 
      f3Index = 0;
    }
    //调用变换处理函数
    f3changeT(f3Index); 
  },2500);
 
  $(".indexListf3").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f3Change);
      f3changeT(item);
      f3Index = item;
    },function(){ 
      f3Change = setInterval(function(){ 
        if(f3Index < $(".imgListf3 li").length-1){ 
          f3Index ++; 
        }else{ 
          f3Index = 0;
        }
        //调用变换处理函数
        f3changeT(curIndex); 
      },2500);
    });
  });
  function f3changeT(num){ 
    $(".imgListf3").find("li").removeClass("imgOnf3").fadeOut().eq(num).fadeIn().addClass("imgOnf3");
    $(".infoListf3").find("li").removeClass("infoOnf3").eq(num).addClass("infoOnf3");
    $(".indexListf3").find("li").removeClass("indexOnf3").eq(num).addClass("indexOnf3");
  }


  var f4Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f4Change = setInterval(function(){ 
    if(f4Index < $(".imgListf4 li").length-1){ 
      f4Index ++; 
    }else{ 
      f4Index = 0;
    }
    //调用变换处理函数
    f4changeT(f4Index); 
  },2500);
 
  $(".indexListf4").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f4Change);
      f4changeT(item);
      f4Index = item;
    },function(){ 
      f4Change = setInterval(function(){ 
        if(f4Index < $(".imgListf4 li").length-1){ 
          f4Index ++; 
        }else{ 
          f4Index = 0;
        }
        //调用变换处理函数
        f4changeT(curIndex); 
      },2500);
    });
  });
  function f4changeT(num){ 
    $(".imgListf4").find("li").removeClass("imgOnf4").fadeOut().eq(num).fadeIn().addClass("imgOnf4");
    $(".infoListf4").find("li").removeClass("infoOnf4").eq(num).addClass("infoOnf4");
    $(".indexListf4").find("li").removeClass("indexOnf4").eq(num).addClass("indexOnf4");
  }

  var f5Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f5Change = setInterval(function(){ 
    if(f5Index < $(".imgListf5 li").length-1){ 
      f5Index ++; 
    }else{ 
      f5Index = 0;
    }
    //调用变换处理函数
    f5changeT(f5Index); 
  },2500);
 
  $(".indexListf5").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f5Change);
      f5changeT(item);
      f5Index = item;
    },function(){ 
      f5Change = setInterval(function(){ 
        if(f5Index < $(".imgListf5 li").length-1){ 
          f5Index ++; 
        }else{ 
          f5Index = 0;
        }
        //调用变换处理函数
        f5changeT(curIndex); 
      },2500);
    });
  });
  function f5changeT(num){ 
    $(".imgListf5").find("li").removeClass("imgOnf5").fadeOut().eq(num).fadeIn().addClass("imgOnf5");
    $(".infoListf5").find("li").removeClass("infoOnf5").eq(num).addClass("infoOnf5");
    $(".indexListf5").find("li").removeClass("indexOnf5").eq(num).addClass("indexOnf5");
  }


  var f6Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f6Change = setInterval(function(){ 
    if(f6Index < $(".imgListf6 li").length-1){ 
      f6Index ++; 
    }else{ 
      f6Index = 0;
    }
    //调用变换处理函数
    f6changeT(f6Index); 
  },2500);
 
  $(".indexListf6").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f6Change);
      f6changeT(item);
      f6Index = item;
    },function(){ 
      f6Change = setInterval(function(){ 
        if(f6Index < $(".imgListf6 li").length-1){ 
          f6Index ++; 
        }else{ 
          f6Index = 0;
        }
        //调用变换处理函数
        f6changeT(curIndex); 
      },2500);
    });
  });
  function f6changeT(num){ 
    $(".imgListf6").find("li").removeClass("imgOnf6").fadeOut().eq(num).fadeIn().addClass("imgOnf6");
    $(".infoListf6").find("li").removeClass("infoOnf6").eq(num).addClass("infoOnf6");
    $(".indexListf6").find("li").removeClass("indexOnf6").eq(num).addClass("indexOnf6");
  }

    var f7Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f7Change = setInterval(function(){ 
    if(f7Index < $(".imgListf7 li").length-1){ 
      f7Index ++; 
    }else{ 
      f7Index = 0;
    }
    //调用变换处理函数
    f7changeT(f7Index); 
  },2500);
 
  $(".indexListf7").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f7Change);
      f7changeT(item);
      f7Index = item;
    },function(){ 
      f7Change = setInterval(function(){ 
        if(f7Index < $(".imgListf7 li").length-1){ 
          f7Index ++; 
        }else{ 
          f7Index = 0;
        }
        //调用变换处理函数
        f7changeT(curIndex); 
      },2500);
    });
  });
  function f7changeT(num){ 
    $(".imgListf7").find("li").removeClass("imgOnf7").fadeOut().eq(num).fadeIn().addClass("imgOnf7");
    $(".infoListf7").find("li").removeClass("infoOnf7").eq(num).addClass("infoOnf7");
    $(".indexListf7").find("li").removeClass("indexOnf7").eq(num).addClass("indexOnf7");
  }

    var f8Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f8Change = setInterval(function(){ 
    if(f8Index < $(".imgListf8 li").length-1){ 
      f8Index ++; 
    }else{ 
      f8Index = 0;
    }
    //调用变换处理函数
    f8changeT(f8Index); 
  },2500);
 
  $(".indexListf8").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f8Change);
      f8changeT(item);
      f8Index = item;
    },function(){ 
      f8Change = setInterval(function(){ 
        if(f8Index < $(".imgListf8 li").length-1){ 
          f8Index ++; 
        }else{ 
          f8Index = 0;
        }
        //调用变换处理函数
        f8changeT(curIndex); 
      },2500);
    });
  });
  function f8changeT(num){ 
    $(".imgListf8").find("li").removeClass("imgOnf8").fadeOut().eq(num).fadeIn().addClass("imgOnf8");
    $(".infoListf8").find("li").removeClass("infoOnf8").eq(num).addClass("infoOnf8");
    $(".indexListf8").find("li").removeClass("indexOnf8").eq(num).addClass("indexOnf8");
  }

    var f9Index = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  var f9Change = setInterval(function(){ 
    if(f9Index < $(".imgListf9 li").length-1){ 
      f9Index ++; 
    }else{ 
      f9Index = 0;
    }
    //调用变换处理函数
    f9changeT(f9Index); 
  },2500);
 
  $(".indexListf9").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(f9Change);
      f9changeT(item);
      f9Index = item;
    },function(){ 
      f9Change = setInterval(function(){ 
        if(f9Index < $(".imgListf9 li").length-1){ 
          f9Index ++; 
        }else{ 
          f9Index = 0;
        }
        //调用变换处理函数
        f9changeT(curIndex); 
      },2500);
    });
  });
  function f9changeT(num){ 
    $(".imgListf9").find("li").removeClass("imgOnf9").fadeOut().eq(num).fadeIn().addClass("imgOnf9");
    $(".infoListf9").find("li").removeClass("infoOnf9").eq(num).addClass("infoOnf9");
    $(".indexListf9").find("li").removeClass("indexOnf9").eq(num).addClass("indexOnf9");
  }
// setInterval(function(){
//     $(".back").css.('background','rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')')
// },2500)




  $(".lazy").lazyload({
      effect:"fadeIn",
      skip_invisible:false,
      threshold:200
    })


  var $tab_li = $('.floor1topright li ');
  $tab_li.hover(function(){
    $(this).css("background","#535353","color","#fff").siblings().css("background","");
    // $(".floor1topright li a").css("color","#000").siblings().css("color","#000");
    var index = $tab_li.index(this);
  }); 
 




                  function xuangxiang(obj,xxk){
                     obj.mouseover(function(){
                        xxk.show();
                        
                      });
                      obj.mouseout(function(){
                        xxk.hide();
                        
                      });
                  }
                              xuangxiang($(".qwer6"),$(".df6"))
                              xuangxiang($(".qwer7"),$(".df7"))
                              xuangxiang($(".qwer8"),$(".df8"))
                              xuangxiang($(".qwer9"),$(".df9"))
                              xuangxiang($(".qwer10"),$(".df10"))
                              xuangxiang($(".qwer11"),$(".df11"))
                              xuangxiang($(".qwer12"),$(".df12"))
                              xuangxiang($(".qwer13"),$(".df13"))
                              xuangxiang($(".qwer"),$(".df"))
                              xuangxiang($(".qwe"),$(".rdf"))
                              xuangxiang($(".qwer1"),$(".df1"))
                              xuangxiang($(".qwer2"),$(".df2"))
                              xuangxiang($(".qwer3"),$(".df3"))
                              xuangxiang($(".qwer4"),$(".df4"))
                              xuangxiang($(".qwer5"),$(".df5"))
                              xuangxiang($(".f1zi1"),$(".f1xk1"))
                              xuangxiang($(".f1zi2"),$(".f1xk2"))
                              xuangxiang($(".f1zi3"),$(".f1xk3"))
                              xuangxiang($(".f1zi4"),$(".f1xk4"))
                              xuangxiang($(".f1zi5"),$(".f1xk5"))
                              xuangxiang($(".f1zi6"),$(".f1xk6"))
                              xuangxiang($(".f1zi7"),$(".f1xk7"))
                              xuangxiang($(".gm"),$(".guomeixk"))
                              xuangxiang($(".wgm"),$(".wdgm"))
                              xuangxiang($(".fuwu"),$(".fwzx"))
                              xuangxiang($(".wangzhan"),$(".wzdh"))
                              xuangxiang($(".shoujigm"),$(".sjgm"))
                              xuangxiang($(".gouwu"),$(".gwxk"))
                              xuangxiang($(".floor1"),$(".f1rightshou1"))

                              xuangxiang($(".f2zi2"),$(".f2xk2"))
                              xuangxiang($(".f2zi3"),$(".f2xk2"))
                              xuangxiang($(".f2zi4"),$(".f2xk3"))
                              xuangxiang($(".f2zi5"),$(".f2xk4"))
                              xuangxiang($(".f2zi6"),$(".f2xk5"))
                              xuangxiang($(".f2zi7"),$(".f2xk6"))

                              xuangxiang($(".f3zi2"),$(".f3xk1"))
                              xuangxiang($(".f3zi3"),$(".f3xk2"))
                              xuangxiang($(".f3zi4"),$(".f3xk3"))
                              xuangxiang($(".f3zi5"),$(".f3xk4"))
                              xuangxiang($(".f3zi6"),$(".f3xk5"))
                              xuangxiang($(".f3zi7"),$(".f3xk6"))

                              xuangxiang($(".f4zi2"),$(".f4xk1"))
                              xuangxiang($(".f4zi3"),$(".f4xk2"))
                              xuangxiang($(".f4zi4"),$(".f4xk3"))
                              xuangxiang($(".f4zi5"),$(".f4xk4"))
                              xuangxiang($(".f4zi6"),$(".f4xk5"))
                              xuangxiang($(".f4zi7"),$(".f4xk6"))

                              xuangxiang($(".f5zi2"),$(".f5xk1"))
                              xuangxiang($(".f5zi3"),$(".f5xk2"))
                              xuangxiang($(".f5zi4"),$(".f5xk3"))
                              xuangxiang($(".f5zi5"),$(".f5xk4"))
                              xuangxiang($(".f5zi6"),$(".f5xk5"))
                              xuangxiang($(".f5zi7"),$(".f5xk6"))

                              xuangxiang($(".f6zi2"),$(".f6xk1"))
                              xuangxiang($(".f6zi3"),$(".f6xk2"))
                              xuangxiang($(".f6zi4"),$(".f6xk3"))
                              xuangxiang($(".f6zi5"),$(".f6xk4"))
                              xuangxiang($(".f6zi6"),$(".f6xk5"))
                              xuangxiang($(".f6zi7"),$(".f6xk6"))
                              
                              xuangxiang($(".f7zi2"),$(".f7xk1"))
                              xuangxiang($(".f7zi3"),$(".f7xk2"))
                              xuangxiang($(".f7zi4"),$(".f7xk3"))
                              xuangxiang($(".f7zi5"),$(".f7xk4"))
                              xuangxiang($(".f7zi6"),$(".f7xk5"))
                              xuangxiang($(".f7zi7"),$(".f7xk6"))

                              xuangxiang($(".f8zi2"),$(".f8xk1"))
                              xuangxiang($(".f8zi3"),$(".f8xk2"))
                              xuangxiang($(".f8zi4"),$(".f8xk3"))
                              xuangxiang($(".f8zi5"),$(".f8xk4"))
                              xuangxiang($(".f8zi6"),$(".f8xk5"))
                              xuangxiang($(".f8zi7"),$(".f8xk6"))

                              xuangxiang($(".f9zi2"),$(".f9xk1"))
                              xuangxiang($(".f9zi3"),$(".f9xk2"))
                              xuangxiang($(".f9zi4"),$(".f9xk3"))
                              xuangxiang($(".f9zi5"),$(".f9xk4"))
                              xuangxiang($(".f9zi6"),$(".f9xk5"))
                              xuangxiang($(".f9zi7"),$(".f9xk6"))


 
 
 function luoxxk(lei,xxk){
var lei= $(lei);
var fcbot=$(xxk);
fcbot.eq(0).css("display","block");
lei.eq(0).css({"background":"#535353","color":"#fff"});
    lei.hover(function(){
      for(var i=0;i<fcbot.length;i++){
        i++;
        a=lei.index($(this)) 
          fcbot.eq(a-i).css("display","none");
      lei.eq(a-i).css({"background":"","color":""});
      fcbot.eq(a+i).css("display","none");
      lei.eq(a+i).css({"background":"","color":""});
      fcbot.eq(a-2*i).css("display","none");
      lei.eq(a-2*i).css({"background":"","color":""});
      fcbot.eq(a+2*i).css("display","none");
      lei.eq(a+2*i).css({"background":"","color":""});
      fcbot.eq(a-4*i).css("display","none");
      lei.eq(a-4*i).css({"background":"","color":""});
      fcbot.eq(a+4*i).css("display","none");
      lei.eq(a+4*i).css({"background":"","color":""});
          fcbot.eq(a).css("display","block");
        lei.eq(a).css({"background":"#535353","color":"#fff"});
      }
     })
}   
    
luoxxk(".floor1topright li a",".f2xk")







// 楼层跳转
   
  var lctz=$(".lctz")
  console.log(lctz)
  var loucengtz=$(".floorleft")
  var louceng=$(".yiceng")
  console.log(louceng)
  var louceng1=$(".floorleft span")
  var louceng2=$(".floorleft p")
  var flag=true;
  $(window).scroll(function(){
    if(flag){
      var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(louceng.eq(0).offset().top<=obj.scrollTop+800)
        {
            lctz.css("display","block")
        }
        else 
        {
           lctz.css("display","none")

        }
     for(var i=0;i<louceng.length;i++)
        {    
          if(louceng.eq(i).offset().top<=obj.scrollTop+100)
          {  
            louceng1.css("color","#777");
            louceng2.css("color","#5e5e5e")
            louceng1.eq(i).css("color","#e3101e")
            louceng2.eq(i).css("color","#e3101e")
            
          }   

        }
       
    }
  })
 
    loucengtz.click(function(){
          var index=loucengtz.index($(this))
          flag=false;
          $("body").animate({"scrollTop":louceng.eq(index).offset().top-100},function(){flag=true})
        })




// 右边
   var youce4=$(".youce4").eq(0)
   var erweima=$(".erweima")
   var word=$(".word")
   youce4.mouseover(function(){
      erweima.animate({"right":35})
   })
   var youce5=$(".youce5")
   youce5.hover(function(){
      // $(this).stop(true);
      word.eq(0).animate({"right":35},200)
      erweima.animate({"right":-140},200)
   },function(){
      // $(this).stop(true);
      word.eq(0).animate({"right":-60})
   })
    var youce6=$(".youce6")
   youce6.hover(function(){
      
      $(this).stop(true);
      erweima.animate({"right":-140},200)
      word.eq(1).animate({"right":35},200)
   },function(){
      $(this).stop(true);
      word.eq(1).animate({"right":-60})
   })
    var youce7=$(".youce7")
   youce7.hover(function(){
      $(this).stop(true);
      erweima.animate({"right":-140},200)
      word.eq(2).animate({"right":35},200)
   },function(){
      $(this).stop(true);
      word.eq(2).animate({"right":-60})
   })


})

    
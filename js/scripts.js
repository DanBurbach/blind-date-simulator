var score = 6;
var drinks = 0;
var fire = 0;
var waiter = 0;
var subject = "";
var name = "";
var fistslam = 0;
var frame = 0;
var chances = "second";
$(document).ready(function(){
  function nextFrame(){
    var x=$(".frame").eq(frame);
    x.css("display", "none");
    frame+=1;
    var x=$(".frame").eq(frame);
    x.css("display", "block");
  };
  function scoreCheck(){
    $("div:not(.frame, .jumbotron, .container)").hide();
    if (score>0) {
      nextFrame();
    } else {
      $(".frame").hide();
      $("#offensive").show();
    }
  };
  function chanceCheck(){
    if (chances==="second") {
      chances="third";
      $("div:not(.frame, .jumbotron, .container)").hide();
      nextFrame();
      $("#chancelevel").text(chances);
    } else {
      $("div:not(.frame, .jumbotron, .container)").hide();
      $("#badend3").show();
    }
  };
  function endCheck(){
    if (score>=30) {
      $(".frame").hide();
      $("#goodend1").show();
    } else if (score>=15) {
      if (subject==="Startrek") {
        $(".frame").hide();
        $("#trekend1").show();
      } else {
        $(".frame").hide();
        $("#okend").show();
      }
    } else {
      if (subject==="Startrek") {
        $(".frame").hide();
        $("#trekend2").show();
      } else {
        $(".frame").hide();
        $("#badend4").show();
      }
    }
  }
  $(".click").click(function(){
    $("#title").hide();
    var x=$(".frame").eq(frame);
    x.css("display", "block");
  });
  $("button[name=good]").click(function(){
    score += 2;
    scoreCheck();
  });
  $("button[name=ok]").click(function(){
    score += -1;
    scoreCheck();
  });
  $("button[name=neut]").click(function(){
    scoreCheck();
  });
  $("button[name=bad]").click(function(){
    score += -3;
    scoreCheck();
  });
  $("button[name=trump]").click(function(){
    subject = "about Trump";
    $(".subject").text(subject);
    score += -5;
    $(".frame").hide();
    $("#trump").show();
  });
  $("button[name=next]").click(function(){
    $("#trump").hide();
    $("#trek").hide();
    $("#drunk1").hide();
    $("#offensive").hide();
    scoreCheck();
  });
  $("button[name=lie]").click(function(){
    subject = "about being a billionaire";
    $(".subject").text(subject);
    score += -3;
    scoreCheck();
  });
  $("button[name=trek]").click(function(){
    subject = "Startrek";
    score += 5;
    $(".frame").hide();
    $("#trek").show();
  });
  $("button[name=fire]").click(function(){
    $(".frame").hide();
    $("#fireend").show();
  });
  $("button[name=username]").click(function(){
    name = $("input[type=text]").val();
    if (name.length>0) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      $(".username").text(name);
      nextFrame();
    } else {
      alert("Please enter your name")
    }
  });
  $("button[name=ditch]").click(function(){
    $(".frame").hide();
    if (score>5) {
      $("#ditchend2").show();
    } else {
      $("#ditchend1").show();
    }
  });
  $("button[name=badend2]").click(function(){
    $(".frame").hide();
    $("#drunk1").hide();
    $("#offensive").hide();
    $("#badend2").show();
  });
  $("button[name=badend1]").click(function(){
    $(".frame").hide();
    $("#drunk1").hide();
    $("#offensive").hide();
    $("#badend1").show();
  });
  $(".drink").click(function(){
    drinks +=1;
    if (drinks>2) {
      $(".frame").hide();
      $("#drunk1").show();
    }
  });
  $(".chance").click(function(){
    chanceCheck();
    score=1;
    console.log(score);
  });
  $(".final").click(function(){
    endCheck();
  });
  $("button").click(function(){
    console.log(frame);
  });
  $("button[name=sidereply1]").click(function(){
    $(".frame").eq(frame).show();
    $("#drunk1").hide();
    $("#offensive").hide();
  });
  $("button[name=sidereply2]").click(function(){
    $(".frame").eq(frame).show();
    $("#drunk1").hide();
    $("#offensive").hide();
    score +=-2;
  });
});

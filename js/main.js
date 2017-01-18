/**
 * Created by Oleg on 1/9/2017.
 */


jQuery(function ($) {


    /*$("addClass").on("click",function() {
     $(this).addClass("black");
     })*/

    $("#addClass").click(function() {
        $(this).addClass("btn-lg");
    });
    $("#removeClass").click (function () {
        $(this).removeClass("btn-secondary");
    });
    $("#toggleClass").click(function () {
        $(this).toggleClass("btn-sm");
    });
    $("#getAttr").click(function () {
        alert( $(this).attr("type"));
    });
    $("#setAttr").click(function () {
        $(this).attr("class", "type");
    });
    $("#alertOnClick").click(function(){
        alert("What's going on here?");
    });
    $("#triggerAlert").click(function () {
        alert("#alertOnClick").trigger("click");
    });

    $("#cloneThis").click(function(){
        var text = $(this).attr("value");
        $(this).clone().text(text + " (cloned)").insertAfter("#cloneThis");
    });
    $("#closestElement").click(function(){
        console.log($(this).closest(parent));
    });
    $("#eachBtnText").click(function () {
        var allBtns = $(".btn");

        for (var i = 0; i < allBtns.length; i++) {
            console.log(allBtns.text());
        }
    });
    $("#findMe").click(function(){
        console.log($("body").find("#findMe"));
    });
    $("#fadeInText").click(function(){
        $(".f-text").fadeIn(3000);
    });
    $("#fadeOutText").click(function(){
        $(".visible-text").fadeOut(3000);
    });
    $("#hideText").click(function(){
        $(".hide-text").hide(3000);
    });
    $("#showText").click(function(){
        $(".show-text").show(3000);
    });
    $("#dataAboutMe").click(function(){
        var dataList = [
            $(this).height(),
            $(this).width(),
            $(this).offset(),
            $(this).attr("type"),
            $(this).parent(),
            $(this).prev(),
            $(this).next(),
            $(this).text()
            ];
        console.log(dataList);
    });
});

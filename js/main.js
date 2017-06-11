var RandomGenerator = require('./RandomGenerator');
var CompareNumber = require('./CompareNumber');
var NewNumber = require('./NewNumber');
var $ = require('jquery');

$(function () {
    var number = NewNumber();
    $("#number").val(number);

    var count = 0;
    $(".btn").click(function () {
        count++;
        var Numbers = $('#number').val();
        var numbers = [];
        var Input = $('#input').val();
        var input = [];
        if (Input.length > 0) {
            for (var index1 = 0; index1 < 7; index1++) {
                if (Numbers.slice(index1, index1 + 1) == ",") continue;
                numbers.push(parseInt(Numbers.slice(index1, index1 + 1)));
            }
            for (var index2 = 0; index2 < 4; index2++) {
                input.push(parseInt(Input.slice(index2, index2 + 1)));
            }
            var result = CompareNumber(numbers, input);
            var div = document.getElementById('result');
            div.innerHTML = div.innerHTML + "輸入：" + Input + " 結果：" + result + "<br>";

            if (result == "4A0B") {
                div.innerHTML = div.innerHTML + "共" + count + "次找到答案";
            } else {}
            $('#input').val("");
        } else {
            alert("請輸入數字");
        }
    });
    $("#reset").click(function () {
        $("#number").val(NewNumber());
        count = 0;
        var div = document.getElementById('result');
        div.innerHTML = "";
    });
});
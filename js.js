$(document).ready(function() {

    $('#start').on('click', work);

    function work() {
        var txt = $('#url').val();
        var txt1 = 'qwe';

        if (txt.indexOf("https://www") == 0) txt1 = txt.substring(12)
        else if (txt.indexOf("http://www") == 0) txt1 = txt.substring(11)
        else if (txt.indexOf("https://") == 0) txt1 = txt.substring(8)
        else if (txt.indexOf("http://") == 0) txt1 = txt.substring(7)
        else txt1 = txt;

        if (txt1[txt1.length - 3] == '.') {
            var n = txt1.length - 3;
            txt1 = txt1.substring(0, n);
        }

        // объявляем результирующую строку

        var txt2 = '';

        for (var i = 0; i < txt1.length; i++) {
            if (txt1[i] == 'o' || txt1[i] == 'O') txt2 += '0';
            else if (txt1[i] == 'l') txt2 += 1
            else if (txt1[i] == 'i') txt2 += 3
            else if (txt1[i] == 's') txt2 += 5

            else txt2 += txt1[i];

        }

        // добавляем три (не четыре) случайных символа в конце строки

        var rand1 = Math.floor(Math.random() * 74) + 48;
        var rand2 = Math.floor(Math.random() * 74) + 48;
        var rand3 = Math.floor(Math.random() * 74) + 48;
        var let1 = String.fromCharCode(rand1);
        var let2 = String.fromCharCode(rand2);
        var let3 = String.fromCharCode(rand3);

        txt2 = txt2 + let1 + let2 + let3;

        $('#result').html(txt2);
    }


})
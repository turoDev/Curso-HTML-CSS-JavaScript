var _num, signo, signo_, rslt, _numM, signoM, signo_M, opr = "", dtCSV;
var Obj_Vis, Obj_Num, Obj_Mem;

function ini_var() {
    dtCSV = "";
    signo = 1;
    signo_ = "";
    rslt = false;
}
function limpiar(_id) {
    var sCad = "";
    if (_id === "num") {
        sCad = "0";
    }
    if (_id === "memo") {
        sCad = "Memo";
    }

    $("#" + _id).html(sCad);
}
function lmp_var() {
    ini_var();
    _num = "";
    opr = "";

    limpiar("info");
    limpiar("num");
}
function lmp_var_() {
    _numM = "";
    signoM = 1;
    signo_M = "";
    limpiar("memo");

    lmp_var();
}
function inic() {
    Obj_Num = $("#num");
    Obj_Vis = $("#info");
    Obj_Mem = $("#memo");

    lmp_var_();
}

function KeyEsp(e) {
    key = e.keyCode || e.which;
    if (key === 27) {
        lmp_var_();
    }
}
function soloNumbers(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789.";
    operaciones = "+-/*,";

    if (operaciones.indexOf(tecla) > -1) {
        switch (tecla) {
            case "+":
                operac(1);
                break;
            case "-":
                operac(2);
                break;
            case "*":
                operac(3);
                break;
            case "/":
                operac(4);
                break;
            case ",":
                operac(15);
                break;
        }
    }

    if (key === 13) {
        operac(10);
    }
    if (key === 27) {
        lmp_var_();
    }

    if (letras.indexOf(tecla) === -1) {
        return false;
    } else {
        Obj_Num.html("0");
        numero(tecla);
    }//*/
}
function numero(num) {
    if (_num === "NaN" || _num === "Infinity") {
        lmp_var();
    }

    if (rslt) {
        lmp_var();
    }
    var lnTt = 11;
    if (_num.indexOf(".") > -1) {
        lnTt = 12;
    }

    if (_num.replace(/,/g, "").length <= lnTt) {
        if (num === ".") {
            if (_num.indexOf(".") === -1) {
                _num += num;
            }
        } else {
            _num += num;
        }
    }

    _signo();
    Obj_Num.html(signo_ + _num);
}
function operac(oper) {
    if (_num === "NaN" || _num === "Infinity") {
        lmp_var();
    }

    rslt = false;

    switch (oper) {
        case 0://cambiar signo
            signo *= -1;
            _signo();
            break;
        case 1: // suma
            if (_num.length === 0) {
                signo = 1;
                _signo();
            } else {
                num01 = signo * _num;

                _num = "";
                signo = 1;
                limpiar('num');

                opr = oper;
                Obj_Vis.html(num01 + " +");
            }
            break;
        case 2://resta
            if (_num.length === 0) {
                signo = -1;
                _signo();
            } else {
                num01 = signo * _num;

                _num = "";
                signo = 1;
                limpiar('num');

                opr = oper;
                Obj_Vis.html(num01 + " -");
            }
            break;
        case 3://mult
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            _num = "";
            signo = 1;
            limpiar('num');

            opr = oper;
            Obj_Vis.html(num01 + " *");
            break;
        case 4://div
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            _num = "";
            signo = 1;
            limpiar('num');

            opr = oper;
            Obj_Vis.html(num01 + " /");
            break;
        case 5:// cuadrado
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            resultado(oper);
            break;
        case 6:// raiz
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            resultado(oper);
            break;
        case 7:// redondeo
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            resultado(oper);
            break;
        case 8://potencia
            if (_num === "") {
                _num = "0";
            }
            num01 = signo * _num;

            _num = "";
            signo = 1;
            limpiar('num');

            opr = oper;
            Obj_Vis.html(num01 + " ^");
            break;
        case 9:// 1 / x
            if (_num === "") {
                _num = "0";
            }

            num01 = signo * _num;
            resultado(oper);
            break;
        case 10:// igual
            resultado(opr);
            break;
        case 11: // 2^n
            if (_num === "") {
                _num = "0";
            }

            num01 = signo * _num;
            resultado(oper);
            break;
        case 12: // n!
            if (_num === "") {
                _num = "0";
            }

            num01 = signo * _num;
            resultado(oper);
            break;
        case 13: // sumatoria CSV
            if (_num === "") {
                _num = "0";
            }
            num02 = signo * _num;
            dtCSV = dtCSV + num02;

            num01 = dtCSV.split(",");
            resultado(oper);
            break;
        case 14: // multiplicacion CSV
            if (_num === "") {
                _num = "0";
            }
            num02 = signo * _num;
            dtCSV = dtCSV + num02;

            num01 = dtCSV.split(",");
            resultado(oper);
            break;//*/
        case 15: // ,
            if (_num === "") {
                _num = "0";
            }

            num01 = signo * _num;
            _num = "";
            signo = 1;
            limpiar('num');

            dtCSV = dtCSV + num01 + ",";
            Obj_Vis.html(dtCSV);
            break;
    }
}

function _signo() {
    var val = (_num === "") ? 0 : _num;

    signo_ = "";
    if (signo < 0) {
        signo_ = "-";
    }
    Obj_Num.html(signo_ + val);
}
function resultado(oper_rst) {
    switch (oper_rst) {
        case 1: // suma
            if (_num.length > 0 && Obj_Vis.html().length > 0) {
                num02 = signo * _num;
                _num = num01 + num02;
                _num = "" + _num;

                Obj_Vis.html(num01 + " + " + num02 + " =");
                Obj_Num.html(_num);

                ini_var();
                rslt = true;
            }
            break;
        case 2: // resta
            if (_num.length > 0 && Obj_Vis.html().length > 0) {
                num02 = signo * _num;
                _num = num01 - num02;
                _num = "" + _num;

                Obj_Vis.html(num01 + " - " + num02 + " =");
                Obj_Num.html(_num);

                ini_var();
                rslt = true;
            }
            break;
        case 3: //mult
            if (_num.length > 0 && Obj_Vis.html().length > 0) {
                num02 = signo * _num;
                _num = num01 * num02;
                _num = "" + _num;

                Obj_Vis.html(num01 + " * " + num02 + " =");
                Obj_Num.html(_num);

                ini_var();
                rslt = true;
            }
            break;
        case 4: // div
            if (_num.length > 0 && Obj_Vis.html().length > 0) {
                num02 = signo * _num;
                _num = num01 / num02;
                _num = "" + _num;

                Obj_Vis.html(num01 + " / " + num02 + " =");
                Obj_Num.html(_num);

                ini_var();
                rslt = true;
            }
            break;
        case 5: // cuadrado
            _num = num01 * num01;
            _num = "" + _num;

            Obj_Vis.html(num01 + "<sup>2</sup> =");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 6: // raiz
            _num = Math.sqrt(num01);
            _num = "" + _num;

            Obj_Vis.html("Raiz(" + num01 + ")");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 7: // redondeo
            if (num01 >= 0) {
                _num = Math.floor(num01);
            } else {
                _num = Math.ceil(num01);
            }
            _num = "" + _num;

            Obj_Vis.html("Redondeo(" + num01 + ")");

            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 8: // potencia
            if (_num.length > 0 && Obj_Vis.html().length > 0) {
                num02 = signo * _num;
                _num = Math.pow(num01, num02);
                _num = "" + _num;

                Obj_Vis.html(num01 + " ^ " + num02 + " =");
                Obj_Num.html(_num);

                ini_var();
                rslt = true;
            }
            break;
        case 9: // 1 / x
            _num = 1 / num01;
            _num = "" + _num;

            Obj_Vis.html("1 / " + num01 + " =");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 11: // 2^n
            _num = Math.pow(2, num01);
            _num = "" + _num;

            Obj_Vis.html("2<sup>" + num01 + "</sup>");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 12: // n!
            var n = num01 - 1;
            _num = num01;
            while (n > 0)
                _num *= n--;
            _num = "" + _num;

            Obj_Vis.html(num01 + "! =");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 13: // sumatoria CSV
            var n = 0;
            _num = 0;
            while (n < num01.length)
                _num += +num01[n++];

            Obj_Vis.html("&#931 +(" + num01 + ")");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 14: // multiplicacion CSV
            var n = 0;
            _num = 1;
            while (n < num01.length)
                _num *= +num01[n++];

            Obj_Vis.html("&#931 *(" + num01 + ")");
            Obj_Num.html(_num);

            ini_var();
            rslt = true;
            break;
        case 16:
            if (_num !== "NaN" && _num !== "Infinity") {
                Num_Mem();
            }
            break;
        case 17:
            Mem_Num();
            break;
    }
}

function Num_Mem() {
    if (_num !== "NaN" && _num !== "Infinity") {
        if (_num === "") {
            _num = "0";
        }
        _numM = _num;
        signoM = signo;
        signo_M = signo_;

        Obj_Mem.html(signo_M + _numM);
    }
}
function Mem_Num() {
    if (_numM !== "") {
        _num = _numM;
        signo = signoM;
        signo_ = signo_M;

        Obj_Num.html(signo_ + _num);
    }
}
function drag_drop() {
    Obj_Num.draggable({opacity: 0.8, revert: true, zIndex: 100});
    Obj_Mem.draggable({opacity: 0.8, revert: true, zIndex: 100});

    Obj_Num.droppable({tolerance: "touch", drop: function (event, ui) {
            Mem_Num();
        }});
    Obj_Mem.droppable({tolerance: "touch", drop: function (event, ui) {
            Num_Mem();
        }});
}

$(function () {
    inic();
    drag_drop();
});
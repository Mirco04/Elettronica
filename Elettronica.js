function mA_to_A(){

    let mA = document.getElementById('mA').value;
    let A = mA/1000;

    document.getElementById('AConv').innerHTML = A + ' ' +"A";

}

function A_to_mA(){

    let A = document.getElementById('A').value;

    let mA = (A*1000);

    document.getElementById('mAConv').innerHTML = mA + ' ' + "mA";

}

function mV_to_V(){

    let mV = document.getElementById('mV').value;

    let V = mV / 1000;

    document.getElementById('VConv').innerHTML = V + ' ' + "V";

}

function V_to_mV(){

    let V = document.getElementById('V').value;

    let mV = (V*1000);

    document.getElementById('mVConv').innerHTML = mV + ' ' + "mV";

}

function ohm_to_kohm(){

    let ohm = document.getElementById('ohm').value;

    let kohm = (ohm/1000);

    document.getElementById('kohmConv').innerHTML = kohm + ' ' + "KΩ";

}

function kohm_to_ohm(){

    let kohm = document.getElementById('Kohm').value;

    let ohm = (kohm*1000);

    document.getElementById('ohmConv').innerHTML = ohm + ' ' + "Ω";

}

function getResistenza(){

    let V = document.getElementById('VlOhm').value;
    let I = document.getElementById('IlOhm').value;

    let R = V/I;

    document.getElementById('Resistenza').innerHTML = R + ' ' + 'Ω';

}

function getTensione(){

    let R = document.getElementById('RlOhm').value;
    let I = document.getElementById('IlOhm2').value;

    let V = I*R;

    document.getElementById('Tensione').innerHTML = V + ' ' + 'V';

}

function getCorrente(){

    let V = document.getElementById('VlOhm2').value;
    let R = document.getElementById('RlOhm2').value;

    let I = V/R;

    document.getElementById('Corrente').innerHTML = I + ' ' + 'A';

}

function Resistenza(){

    let V = document.getElementById('VlOhm3').value;
    let I = document.getElementById('IlOhm3').value;
    let Ve = document.getElementById('Ve').value;

    let Vtemp = Ve - V;

    let R = Vtemp/I;

    document.getElementById('quanta_resistenza').innerHTML = R + ' ' + 'Ω';

}

function Tensione(){

    let Ia = document.getElementById('Ia').value;
    let R = document.getElementById('Rlohm3').value;
    let Va = document.getElementById('Va').value;

    let VeTemp = (R*Ia);

    let Ve = (VeTemp) +  (Va);

    document.getElementById('quanta_tensione').innerHTML = Ve + ' ' + 'V';


}



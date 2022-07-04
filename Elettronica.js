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

    let Ve = (VeTemp) +  parseFloat(Va);

    document.getElementById('quanta_tensione').innerHTML = Ve + ' ' + 'V';

}

function Corrente(){
    
    let Ve = document.getElementById('Ve2').value;
    let R = document.getElementById('Rlohm4').value;
    let Ia = document.getElementById('Ia2').value;

    let Ie = (Ve/R) + parseFloat(Ia);

    document.getElementById('quanta_corrente').innerHTML = Ie + ' ' + "A";

}

function Partitore_Tensione(){

    let V = document.getElementById('V_partitore').value;
    let R1 = document.getElementById('R1').value;
    let R2 = document.getElementById('R2').value;

    let VR = (R1/(parseFloat(R1) + parseFloat(R2)))*V;
    
    document.getElementById('partitore_tensione').innerHTML = VR + ' ' + 'V';

}

function Partitore_Corrente(){

    let I = document.getElementById('I_partitore').value;
    let R1 = document.getElementById('R1-').value;
    let R2 = document.getElementById('R2-').value;

    let IR = (R1/(parseFloat(R1) + parseFloat(R2)))*I;
    
    document.getElementById('partitore_corrente').innerHTML = IR + ' ' + 'A';

}

function Resistore_Serie(){
    let R1 = document.getElementById('R1--').value;
    let R2 = document.getElementById('R2--').value;

    let Rserie = parseFloat(R1) + parseFloat(R2);

    if(Rserie>= 1000){
        document.getElementById('Rserie').innerHTML = (Rserie/1000) + ' ' + 'KΩ';
    }else{
        document.getElementById('Rserie').innerHTML = Rserie + ' ' + 'Ω';
    }

    

}

function Resistore_Parallelo(){
    let R1 = document.getElementById('R1---').value;
    let R2 = document.getElementById('R2---').value;

    let Rparallelo = (parseFloat(R1) * parseFloat(R2))/(parseFloat(R1) + parseFloat(R2));

    if(Rparallelo>=1000){

        document.getElementById('Rparallelo').innerHTML = (Rparallelo/1000) + ' ' + 'KΩ';
        
    }else{

        document.getElementById('Rparallelo').innerHTML = Rparallelo + ' ' + 'Ω';

    }

   

}


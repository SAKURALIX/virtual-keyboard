'use strict';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const title = document.createElement('h1');
title.className = 'title';
wrapper.append(title);
title.textContent = 'RSS Virtual Keyboard'

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
wrapper.append(textarea);
// textarea.focus()

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

const keyRow = document.createElement('div');
keyRow.className = 'keyRow';
keyboard.append(keyRow);




const keyBackquote = document.createElement('div');
keyBackquote.className = 'key';
keyBackquote.dataset.id = '96';
keyRow.append(keyBackquote);
keyBackquote.textContent = '`'

const key1 = document.createElement('div');
key1.className = 'key';
key1.dataset.id = '49';
keyRow.append(key1);
key1.textContent = '1'

const key2 = document.createElement('div');
key2.className = 'key';
key2.dataset.id = '50';
keyRow.append(key2);
key2.textContent = '2'

const key3 = document.createElement('div');
key3.className = 'key';
key3.dataset.id = '51';
keyRow.append(key3);
key3.textContent = '3'

const key4 = document.createElement('div');
key4.className = 'key';
key4.dataset.id = '52';
keyRow.append(key4);
key4.textContent = '4'

const key5 = document.createElement('div');
key5.className = 'key';
key5.dataset.id = '53';
keyRow.append(key5);
key5.textContent = '5'

const key6 = document.createElement('div');
key6.className = 'key';
key6.dataset.id = '54';
keyRow.append(key6);
key6.textContent = '6'

const key7 = document.createElement('div');
key7.className = 'key';
key7.dataset.id = '55';
keyRow.append(key7);
key7.textContent = '7'

const key8 = document.createElement('div');
key8.className = 'key';
key8.dataset.id = '56';
keyRow.append(key8);
key8.textContent = '8'

const key9 = document.createElement('div');
key9.className = 'key';
key9.dataset.id = '57';
keyRow.append(key9);
key9.textContent = '9'

const key0 = document.createElement('div');
key0.className = 'key';
key0.dataset.id = '48';
keyRow.append(key0);
key0.textContent = '0'

const keyMinus = document.createElement('div');
keyMinus.className = 'key';
keyMinus.dataset.id = '45';
keyRow.append(keyMinus);
keyMinus.textContent = '-'

const keyEqual = document.createElement('div');
keyEqual.className = 'key';
keyEqual.dataset.id = '61';
keyRow.append(keyEqual);
keyEqual.textContent = '='

const keyBackspace = document.createElement('div');
keyBackspace.className = 'key';
keyBackspace.classList.add('backspace');
keyRow.append(keyBackspace);
keyBackspace.textContent = 'Backspace'




const keyRow2 = document.createElement('div');
keyRow2.className = 'keyRow';
keyboard.append(keyRow2);

const keyTab = document.createElement('div');
keyTab.className = 'key';
keyTab.classList.add('tab');
keyRow2.append(keyTab);
keyTab.textContent = 'Tab'

const keyQ = document.createElement('div');
keyQ.className = 'key';
keyQ.dataset.id = '113';
keyRow2.append(keyQ);
keyQ.textContent = 'q'

const keyW = document.createElement('div');
keyW.className = 'key';
keyW.dataset.id = '119';
keyRow2.append(keyW);
keyW.textContent = 'w'

const keyE = document.createElement('div');
keyE.className = 'key';
keyE.dataset.id = '101';
keyRow2.append(keyE);
keyE.textContent = 'e'

const keyR = document.createElement('div');
keyR.className = 'key';
keyR.dataset.id = '114';
keyRow2.append(keyR);
keyR.textContent = 'r'

const keyT = document.createElement('div');
keyT.className = 'key';
keyT.dataset.id = '116';
keyRow2.append(keyT);
keyT.textContent = 't'

const keyY = document.createElement('div');
keyY.className = 'key';
keyY.dataset.id = '121';
keyRow2.append(keyY);
keyY.textContent = 'y'

const keyU = document.createElement('div');
keyU.className = 'key';
keyU.dataset.id = '117';
keyRow2.append(keyU);
keyU.textContent = 'u'

const keyI = document.createElement('div');
keyI.className = 'key';
keyI.dataset.id = '105';
keyRow2.append(keyI);
keyI.textContent = 'i'

const keyO = document.createElement('div');
keyO.className = 'key';
keyO.dataset.id = '111';
keyRow2.append(keyO);
keyO.textContent = 'o'

const keyP = document.createElement('div');
keyP.className = 'key';
keyP.dataset.id = '112';
keyRow2.append(keyP);
keyP.textContent = 'p'

const bracketLeft = document.createElement('div');
bracketLeft.className = 'key';
bracketLeft.dataset.id = '91';
keyRow2.append(bracketLeft);
bracketLeft.textContent = '['

const bracketRight = document.createElement('div');
bracketRight.className = 'key';
bracketRight.dataset.id = '93';
keyRow2.append(bracketRight);
bracketRight.textContent = ']'

const backslash = document.createElement('div');
backslash.className = 'key';
backslash.dataset.id = '92';
keyRow2.append(backslash);
backslash.textContent = '\\'

const keyDel = document.createElement('div');
keyDel.className = 'key';
keyRow2.append(keyDel);
keyDel.textContent = 'Del'






const keyRow3 = document.createElement('div');
keyRow3.className = 'keyRow';
keyboard.append(keyRow3);

const keyCapsLock = document.createElement('div');
keyCapsLock.className = 'key';
keyCapsLock.classList.add('capslock');
keyRow3.append(keyCapsLock);
keyCapsLock.textContent = 'CapsLock'

const keyA = document.createElement('div');
keyA.className = 'key';
keyA.dataset.id = '97';
keyRow3.append(keyA);
keyA.textContent = 'a'

const keyS = document.createElement('div');
keyS.className = 'key';
keyS.dataset.id = '115';
keyRow3.append(keyS);
keyS.textContent = 's'

const keyD = document.createElement('div');
keyD.className = 'key';
keyD.dataset.id = '100';
keyRow3.append(keyD);
keyD.textContent = 'd'

const keyF = document.createElement('div');
keyF.className = 'key';
keyF.dataset.id = '102';
keyRow3.append(keyF);
keyF.textContent = 'f'

const keyG = document.createElement('div');
keyG.className = 'key';
keyG.dataset.id = '103';
keyRow3.append(keyG);
keyG.textContent = 'g'

const keyH = document.createElement('div');
keyH.className = 'key';
keyH.dataset.id = '104';
keyRow3.append(keyH);
keyH.textContent = 'h'

const keyJ = document.createElement('div');
keyJ.className = 'key';
keyJ.dataset.id = '106';
keyRow3.append(keyJ);
keyJ.textContent = 'j'

const keyK = document.createElement('div');
keyK.className = 'key';
keyK.dataset.id = '107';
keyRow3.append(keyK);
keyK.textContent = 'k'

const keyL = document.createElement('div');
keyL.className = 'key';
keyL.dataset.id = '108';
keyRow3.append(keyL);
keyL.textContent = 'l'

const keySemicolon = document.createElement('div');
keySemicolon.className = 'key';
keySemicolon.dataset.id = '59';
keyRow3.append(keySemicolon);
keySemicolon.textContent = ';'

const keyQuotes = document.createElement('div');
keyQuotes.className = 'key';
keyQuotes.dataset.id = '39';
keyRow3.append(keyQuotes);
keyQuotes.textContent = '\''

const keyEnter = document.createElement('div');
keyEnter.className = 'key';
keyEnter.dataset.id = '13';
keyEnter.classList.add('capslock');
keyRow3.append(keyEnter);
keyEnter.textContent = 'Enter'






const keyRow4 = document.createElement('div');
keyRow4.className = 'keyRow';
keyboard.append(keyRow4);

const keyLeftShift = document.createElement('div');
keyLeftShift.className = 'key';
keyLeftShift.classList.add('capslock');
keyRow4.append(keyLeftShift);
keyLeftShift.textContent = 'Shift'

const keyZ = document.createElement('div');
keyZ.className = 'key';
keyZ.dataset.id = '122';
keyRow4.append(keyZ);
keyZ.textContent = 'z'

const keyX = document.createElement('div');
keyX.className = 'key';
keyX.dataset.id = '120';
keyRow4.append(keyX);
keyX.textContent = 'x'

const keyC = document.createElement('div');
keyC.className = 'key';
keyC.dataset.id = '99';
keyRow4.append(keyC);
keyC.textContent = 'c'

const keyV = document.createElement('div');
keyV.className = 'key';
keyV.dataset.id = '118';
keyRow4.append(keyV);
keyV.textContent = 'v'

const keyB = document.createElement('div');
keyB.className = 'key';
keyB.dataset.id = '98';
keyRow4.append(keyB);
keyB.textContent = 'b'

const keyN = document.createElement('div');
keyN.className = 'key';
keyN.dataset.id = '110';
keyRow4.append(keyN);
keyN.textContent = 'n'

const keyM = document.createElement('div');
keyM.className = 'key';
keyM.dataset.id = '109';
keyRow4.append(keyM);
keyM.textContent = 'm'

const keyComma = document.createElement('div');
keyComma.className = 'key';
keyComma.dataset.id = '44';
keyRow4.append(keyComma);
keyComma.textContent = ','

const keyDot = document.createElement('div');
keyDot.className = 'key';
keyDot.dataset.id = '46';
keyRow4.append(keyDot);
keyDot.textContent = '.'

const keyRightSlash = document.createElement('div');
keyRightSlash.className = 'key';
keyRightSlash.dataset.id = '47';
keyRow4.append(keyRightSlash);
keyRightSlash.textContent = '/'

const keyArrowUp = document.createElement('div');
keyArrowUp.className = 'key';
keyRow4.append(keyArrowUp);
keyArrowUp.textContent = '▲'

const keyRightShift = document.createElement('div');
keyRightShift.className = 'key';
keyRightShift.classList.add('capslock');
keyRow4.append(keyRightShift);
keyRightShift.textContent = 'Shift'




const keyRow5 = document.createElement('div');
keyRow5.className = 'keyRow';
keyboard.append(keyRow5);

const keyLeftCtrl = document.createElement('div');
keyLeftCtrl.className = 'key';
keyRow5.append(keyLeftCtrl);
keyLeftCtrl.textContent = 'Ctrl'

const keyWin = document.createElement('div');
keyWin.className = 'key';
keyRow5.append(keyWin);
keyWin.textContent = 'Win'

const keyLeftAlt = document.createElement('div');
keyLeftAlt.className = 'key';
keyRow5.append(keyLeftAlt);
keyLeftAlt.textContent = 'Alt'

const keySpace = document.createElement('div');
keySpace.className = 'key';
keySpace.classList.add('space');
keyRow5.append(keySpace);
keySpace.textContent = ' '

const keyRightAlt = document.createElement('div');
keyRightAlt.className = 'key';
keyRow5.append(keyRightAlt);
keyRightAlt.textContent = 'Alt'

const keyArrowLeft = document.createElement('div');
keyArrowLeft.className = 'key';
keyRow5.append(keyArrowLeft);
keyArrowLeft.textContent = '◄'

const keyArrowDown = document.createElement('div');
keyArrowDown.className = 'key';
keyRow5.append(keyArrowDown);
keyArrowDown.textContent = '▼'

const keyArrowRight = document.createElement('div');
keyArrowRight.className = 'key';
keyRow5.append(keyArrowRight);
keyArrowRight.textContent = '►'

const keyRightCtrl = document.createElement('div');
keyRightCtrl.className = 'key';
keyRow5.append(keyRightCtrl);
keyRightCtrl.textContent = 'Ctrl'









document.onkeypress = function(event) {
    console.log(event.code)
    console.log(event.keyCode)
    document.querySelectorAll('.key').forEach(function(element) {
        element.classList.remove('active');
    })

    document.querySelector('.key[data-id="' + event.keyCode +'"]').classList.add('active');
    setTimeout(()=>{ document.querySelector('.key[data-id="' + event.keyCode +'"]').classList.remove('active'); }, 200);
}

document.querySelectorAll('.key').forEach(function(element) {
    element.onclick = function(event){
        textarea.focus()

        document.querySelectorAll('.key').forEach(function(element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data-id');
        textarea.innerHTML += String.fromCharCode(code);
        // this.classList.add('active');
        console.log(code);
        // textarea.focus()

    }
});

// console.log(String.fromCharCode(109))

textarea.focus()
















// textarea.onkeydown = function (event) {
//     console.log(event.code)
//     console.log(event.key)
// }

// let anyKey = document.querySelectorAll('.key');
// // let display = document.querySelector('.textarea');
// let clear = document.querySelector('.clear');

// for(let i of anyKey){
// i.onclick = function(){
//     if(i.textContent === 'Tab') {
//         textarea.textContent += '    ';
//     } else if(i.textContent === 'CapsLock') {
//         textarea.textContent += '';
//     } else if(i.textContent === 'Enter') {
//         textarea.textContent += '\n';
//     } else {
//         textarea.textContent += i.textContent;
//         // i.classList.add('active')
//     }

//   }
// }  
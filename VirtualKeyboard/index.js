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

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

const keyRow = document.createElement('div');
keyRow.className = 'keyRow';
keyboard.append(keyRow);

const key = document.createElement('div');
key.className = 'key';
keyRow.append(key);
key.textContent = 'ё'

const key1 = document.createElement('div');
key1.className = 'key';
keyRow.append(key1);
key1.textContent = '1'

const key2 = document.createElement('div');
key2.className = 'key';
keyRow.append(key2);
key2.textContent = '2'

const key3 = document.createElement('div');
key3.className = 'key';
keyRow.append(key3);
key3.textContent = '3'

const key4 = document.createElement('div');
key4.className = 'key';
keyRow.append(key4);
key4.textContent = '4'

const key5 = document.createElement('div');
key5.className = 'key';
keyRow.append(key5);
key5.textContent = '5'

const key6 = document.createElement('div');
key6.className = 'key';
keyRow.append(key6);
key6.textContent = '6'

const key7 = document.createElement('div');
key7.className = 'key';
keyRow.append(key7);
key7.textContent = '7'

const key8 = document.createElement('div');
key8.className = 'key';
keyRow.append(key8);
key8.textContent = '8'

const key9 = document.createElement('div');
key9.className = 'key';
keyRow.append(key9);
key9.textContent = '9'

const key0 = document.createElement('div');
key0.className = 'key';
keyRow.append(key0);
key0.textContent = '0'

const keyMinus = document.createElement('div');
keyMinus.className = 'key';
keyRow.append(keyMinus);
keyMinus.textContent = '-'

const keyEqual = document.createElement('div');
keyEqual.className = 'key';
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
keyRow2.append(keyQ);
keyQ.textContent = 'q'

const keyW = document.createElement('div');
keyW.className = 'key';
keyRow2.append(keyW);
keyW.textContent = 'w'

const keyE = document.createElement('div');
keyE.className = 'key';
keyRow2.append(keyE);
keyE.textContent = 'e'

const keyR = document.createElement('div');
keyR.className = 'key';
keyRow2.append(keyR);
keyR.textContent = 'r'

const keyT = document.createElement('div');
keyT.className = 'key';
keyRow2.append(keyT);
keyT.textContent = 't'

const keyY = document.createElement('div');
keyY.className = 'key';
keyRow2.append(keyY);
keyY.textContent = 'y'

const keyU = document.createElement('div');
keyU.className = 'key';
keyRow2.append(keyU);
keyU.textContent = 'u'

const keyI = document.createElement('div');
keyI.className = 'key';
keyRow2.append(keyI);
keyI.textContent = 'i'

const keyO = document.createElement('div');
keyO.className = 'key';
keyRow2.append(keyO);
keyO.textContent = 'o'

const keyP = document.createElement('div');
keyP.className = 'key';
keyRow2.append(keyP);
keyP.textContent = 'p'

const keySquare = document.createElement('div');
keySquare.className = 'key';
keyRow2.append(keySquare);
keySquare.textContent = '['

const keySquareRight = document.createElement('div');
keySquareRight.className = 'key';
keyRow2.append(keySquareRight);
keySquareRight.textContent = ']'

const keySlash = document.createElement('div');
keySlash.className = 'key';
keyRow2.append(keySlash);
keySlash.textContent = '\\'

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
keyRow3.append(keyA);
keyA.textContent = 'a'

const keyS = document.createElement('div');
keyS.className = 'key';
keyRow3.append(keyS);
keyS.textContent = 's'

const keyD = document.createElement('div');
keyD.className = 'key';
keyRow3.append(keyD);
keyD.textContent = 'd'

const keyF = document.createElement('div');
keyF.className = 'key';
keyRow3.append(keyF);
keyF.textContent = 'f'

const keyG = document.createElement('div');
keyG.className = 'key';
keyRow3.append(keyG);
keyG.textContent = 'g'

const keyH = document.createElement('div');
keyH.className = 'key';
keyRow3.append(keyH);
keyH.textContent = 'h'

const keyJ = document.createElement('div');
keyJ.className = 'key';
keyRow3.append(keyJ);
keyJ.textContent = 'j'

const keyK = document.createElement('div');
keyK.className = 'key';
keyRow3.append(keyK);
keyK.textContent = 'k'

const keyL = document.createElement('div');
keyL.className = 'key';
keyRow3.append(keyL);
keyL.textContent = 'l'

const keySemicolon = document.createElement('div');
keySemicolon.className = 'key';
keyRow3.append(keySemicolon);
keySemicolon.textContent = ';'

const keyQuotes = document.createElement('div');
keyQuotes.className = 'key';
keyRow3.append(keyQuotes);
keyQuotes.textContent = '\''

const keyEnter = document.createElement('div');
keyEnter.className = 'key';
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
keyRow4.append(keyZ);
keyZ.textContent = 'z'

const keyX = document.createElement('div');
keyX.className = 'key';
keyRow4.append(keyX);
keyX.textContent = 'x'

const keyC = document.createElement('div');
keyC.className = 'key';
keyRow4.append(keyC);
keyC.textContent = 'c'

const keyV = document.createElement('div');
keyV.className = 'key';
keyRow4.append(keyV);
keyV.textContent = 'v'

const keyB = document.createElement('div');
keyB.className = 'key';
keyRow4.append(keyB);
keyB.textContent = 'b'

const keyN = document.createElement('div');
keyN.className = 'key';
keyRow4.append(keyN);
keyN.textContent = 'n'

const keyM = document.createElement('div');
keyM.className = 'key';
keyRow4.append(keyM);
keyM.textContent = 'm'

const keyComma = document.createElement('div');
keyComma.className = 'key';
keyRow4.append(keyComma);
keyComma.textContent = ','

const keyDot = document.createElement('div');
keyDot.className = 'key';
keyRow4.append(keyDot);
keyDot.textContent = '.'

const keyRightSlash = document.createElement('div');
keyRightSlash.className = 'key';
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







textarea.onkeydown = function (event) {
    console.log(event.code)
    console.log(event.key)
}

let anyKey = document.querySelectorAll('.key');
// let display = document.querySelector('.textarea');
let clear = document.querySelector('.clear');

for(let i of anyKey){
i.onclick = function(){
    if(i.textContent === 'Tab') {
        textarea.textContent += '    ';
    } else if(i.textContent === 'CapsLock') {
        textarea.textContent += '';
    } else if(i.textContent === 'Enter') {
        textarea.textContent += '\n';
    } else {
        textarea.textContent += i.textContent;
        // i.classList.add('active')
    }

  }
}  
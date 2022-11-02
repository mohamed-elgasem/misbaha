let count = 0;
const word1 = document.getElementsByClassName('word') [0];
const word2 = document.getElementsByClassName('word') [1];
const word3 = document.getElementsByClassName('word') [2];
const clearBtn = document.getElementById('clear');



const screen = document.getElementsByClassName('screen')[0];
const curentWord = document.getElementById('curent-word');
const counter = document.getElementById('counter');



function vibrate (t){
    navigator.vibrate(t);
}



word1.addEventListener('click', (e) =>{
    vibrate (30);
});

word2.addEventListener('click', (e) =>{
    vibrate (30);
});

word3.addEventListener('click', (e) =>{
    vibrate (30);
});

clearBtn.addEventListener('click', (e) =>{
    vibrate (45);
});


clearBtn.addEventListener('click', (event) =>{
    curentWord.innerText = "";
    counter.innerText = '0';
    count = 0;
})


word1.addEventListener('click', (event) =>{
    curentWord.innerText = word1.innerText;
    increment();
    max34();
});
word2.addEventListener('click', (event) =>{
    curentWord.innerText = word2.innerText;
    increment();
    max34();
});
word3.addEventListener('click', (event) =>{
    curentWord.innerText = word3.innerText;
    increment();
    max34();
});

function increment (){
    count += 1
    if(count.innerText == 33) {
        counter.innerText = '0';
    }
    counter.innerText = count;
};

function max34 (){
    if(counter.innerText == 34){
        window.alert('لقد انتهيت من العد')
        vibrate(25);
        counter.innerText = '0'
        count = '0';
    }
};
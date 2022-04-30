/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const scores = {};

function OnClick(event){
    
    const risp = event.currentTarget; 
    
    if(risp.dataset.questionId === 'one'){ 
        scores.risp1= risp.dataset.choiceId;
        scores.num1 = true;
        risp.classList.add('selected'); 
        let image = risp.querySelector(".checkbox");
        image.src='images/checked.png';
        for (const a of risposte){
            if(risp.dataset.questionId === a.dataset.questionId && scores.risp1 !== a.dataset.choiceId){
                let image = a.querySelector(".checkbox");
                image.src='images/unchecked.png';
                 a.classList.add('unselected');
            }     
        } 
    }

    if(risp.dataset.questionId === 'two'){ 
        scores.risp2 = risp.dataset.choiceId;
        scores.num2 = true;
        risp.classList.add('selected'); 
        let image = risp.querySelector(".checkbox");
        image.src='images/checked.png';
        for ( const a of risposte){
            if(risp.dataset.questionId === a.dataset.questionId && scores.risp2 !== a.dataset.choiceId){
                     let image = a.querySelector(".checkbox");
                     image.src='images/unchecked.png';
                     a.classList.add('unselected');
            }    
        }       
    } 

    if(risp.dataset.questionId === 'three'){ 
        scores.risp3 = risp.dataset.choiceId;
        scores.num3 = true;
        risp.classList.add('selected'); 
        let image = risp.querySelector(".checkbox");
        image.src='images/checked.png';
        for ( const a of risposte){
            if(risp.dataset.questionId === a.dataset.questionId && scores.risp3 !== a.dataset.choiceId){
                     let image = a.querySelector(".checkbox");
                     image.src='images/unchecked.png';
                     a.classList.add('unselected');
            }      
        } 
    } 

    if(scores.num1 && scores.num2 && scores.num3){
        for (const b of risposte){
            b.removeEventListener('click', OnClick);
        }
        scores.num1= false;
        scores.num2 = false;
        scores.num3 = false;
        risultato(scores.risp1, scores.risp2, scores.risp3);
        const ris = document.querySelector('.Result');
        ris.classList.add('visibile'); 
        const er = document.querySelector('.Api1');
        er.classList.add('On');
    }
}
  
let risposte = document.querySelectorAll('.choice-grid div');
for(const risp of risposte){ 
    risp.addEventListener('click', OnClick);
}

function risultato(){
    let title = document.querySelector('#Title');
    let text = document.querySelector('#Text');
    
    if(scores.risp2 === scores.risp3){
        title.textContent = RESULTS_MAP[scores.risp2]['title'];
        text.textContent = RESULTS_MAP[scores.risp2]['contents'];
    }
    
    else{
        title.textContent = RESULTS_MAP[scores.risp1]['title'];
        text.textContent = RESULTS_MAP[scores.risp1]['contents'];
    }
}
    
function reset(event){
    const button = event.currentTarget;
    
    for(const risp of risposte){
        risp.classList.remove('unselected');
        risp.classList.remove('selected');
        risp.addEventListener('click', OnClick);
        let image = risp.querySelector('.checkbox');
        image.src = 'images/unchecked.png';
    }
    
    const ris = document.querySelector('.Result');
    ris.classList.remove('visibile');
    const er = document.querySelector('.Api1');
    er.classList.remove('On');
    const r = document.querySelector('.animen');
    r.classList.add('Off');
    window.scroll(0,0);
}
const button = document.querySelector('#ricomincia');
button.addEventListener('click', reset);


function Click1(event){
    const ascolta = event.currentTarget;
    const ris = document.querySelector('article');
    ris.classList.add('Off'); 
    const er = document.querySelector('.ApiOAuth');
    er.classList.add('On');
}

// <button id = reset> Clicca per tornare alla pagina precedente</button>
const ascolta = document.querySelector('#prova');
ascolta.addEventListener('click', Click1);

function Click2(event){
    const asc = event.currentTarget;
    const ris = document.querySelector('.animen');
    ris.classList.add('On'); 
}


const asc = document.querySelector('#submit');
ascolta.addEventListener('click', Click1);

/*
function Click3(event){
const res = event.currentTarget;
const ris = document.querySelector('article');
ris.classList.remove('Off'); 
const er = document.querySelector('.ApiOAuth');
er.classList.remove('On');
}


const res = document.querySelector('#reset');
res.addEventListener('click', Click3);*/
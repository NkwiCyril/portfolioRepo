const allSections = document.querySelector('.main-content');
const sectBtn = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');


function pageTransitions(){
    //button click active class

    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn'); //here, the current button has a class name of active-btn
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); //once I click on a different button, the class 'active-btn' is replaced with an empty string 
            this.className += 'active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
pageTransitions();

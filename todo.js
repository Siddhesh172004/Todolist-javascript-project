const input=document.querySelector('#add-text');
const addbtn=document.querySelector('#add');

addbtn.addEventListener('click',addtask);

input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addtask(e) : null);
})



    function addtask(e){
        const notcompleted=document.querySelector('.not-completed');
        const completed=document.querySelector('.completed');

        const inputli=document.createElement('li');
        const checkbtn=document.createElement('button');
        const trashbtn=document.createElement('button');
      
			checkbtn.innerHTML = '<i class="fa fa-check"></i>';
			trashbtn.innerHTML = '<i class="fa fa-trash"></i>';

        if(input.value !==''){
            inputl=input.value; // input1.textContent=input.value
		
            input.value='';
            notcompleted.appendChild(inputli);
            inputli.appendChild(checkbtn);
            inputli.appendChild(trashbtn);

        }

        /* removinig from not completed*/
        checkbtn.addEventListener("click",function(){
            const removed=this.parentNode;
                removed.remove();
        completed.appendChild(inputli);
        checkbtn.style.display="none";
        });

          /* removinig from  completed*/
          trashbtn.addEventListener("click",function(){
            const removed=this.parentNode;
                removed.remove();
      
        });

    }



const tabButtons = document.querySelectorAll('.tablinks');
Array.from(tabButtons).forEach(tabButton => {
    tabButton.addEventListener('click', ()=>{
        var tabName = tabButton.dataset.tab;
        var tabContent = document.getElementById(tabName);
       
        var alltabContent = document.querySelectorAll('.tabcontent');
        Array.from(alltabContent).forEach(tab=>{
            tab.style.display="none";
        })
        tabContent.style.display="block";
         Array.from(tabButtons).forEach(button=>{
            button.classList.remove('active');
        })
   

       
        tabButton.classList.add("active");
    })
})

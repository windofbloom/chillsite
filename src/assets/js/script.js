//Menu

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function sidebarEntrace() {
    const element = document.querySelector('.sidebar');
    element.classList.add('animate__animated', 'animate__flipInY');
}

//function hideSidebar() {
//    const sidebar = document.querySelector('.sidebar');
//    sidebar.style.display = 'none';
//}

function sidebarExit() {
    const element = document.querySelector('.sidebar');
    element.classList.add('animate__animated', 'animate__flipOutY');

    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        element.classList.remove('animate__animated', 'animate__flipOutY'); 
    }, { once: true }); 
}


function animatedSidebarEntrace() {
    showSidebar();
    sidebarEntrace();
}

function animatedSidebarExit() {
    sidebarExit();
}

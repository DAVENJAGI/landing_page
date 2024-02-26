document.addEventListener('DOMContentLoaded', function (){
    // const menuIcon = document.getElementById('menuicon');
    const menuStyling = document.getElementById('styling');
    const topBar = document.getElementById('sidebar');
    
    let breakpoint = window.innerWidth > 768;
    

    topBar.style.display = breakpoint ? 'none' : 'flex';
    menuStyling.style.display = breakpoint ? 'flex' : 'none';
    //topBar.style.display = breakpoint ? 'none' : 'flex';

    window.addEventListener('resize', () => {
        const isWideScreen = window.innerWidth > 768;
        topBar.style.display = isWideScreen ? 'none' : 'flex';
        menuStyling.style.display = isWideScreen ? 'flex' : 'none';
        breakpoint = isWideScreen;
    });

});

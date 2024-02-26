function showProjectDescription() {
    const projectdescription = document.getElementById('hbnbdescription');
    if (projectdescription.style.display === 'none') {
        projectdescription.style.display = 'block';
    } else {
        projectdescription.style.display = 'none';
    }
}
window.onload = showProjectDescription;

function hideProjectDescription() {
    const closeProjectdescription = document.getElementById('hbnbdescription');

    if (closeProjectdescription.style.display === 'block') {
        closeProjectdescription.style.display = 'none';
    } else {
        closeProjectdescription.style.display = 'block';
    }
}
window.onload = hideProjectDescription;
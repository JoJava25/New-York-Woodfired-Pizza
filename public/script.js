//Alert box display success/failure
window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search)

    if(urlParams.has('success')){
        alert('Reservation successful')
    } else if(urlParams.has('error')){
        alert('There was an error in making the reservation. Please try again.')
    }
}

//Tabbed Menu
function openMenu(event, menuName){
    let menuArray = document.getElementsByClassName("menu")
    for(i = 0; i < menuArray.length; i++){
        menuArray[i].style.display = "none"
    }
    
    let tabLinks = document.getElementsByClassName("tablink")
    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].classList.remove('active-tab')
    }

    document.getElementById(menuName).style.display ='block'
    event.currentTarget.classList.add('active-tab')
}

document.getElementById("mainLink").click()
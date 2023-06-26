const lightModeIcon = document.querySelector('.light')
const darkModeIcon = document.querySelector('.dark')
const body = document.body
const header = document.querySelector('header')
const backButton = document.querySelector('.back')

function changeTolightMode(){
    body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    body.style.color = 'hsl(209, 23%, 22%)'
    header.style.backgroundColor = 'hsl(0, 0%, 98%'
    header.style.color = 'hsl(209, 23%, 22%'
    header.style.boxShadow = '1px 2px 10px black'
    darkModeIcon.style.display = 'none'
    lightModeIcon.style.display = 'block'

    const countryContainers = document.querySelectorAll('.country-container');

    countryContainers.forEach(countryContainer => {
        countryContainer.style.backgroundColor = 'white'
    })

    backButton.style.backgroundColor = '#f5f5f5'
    backButton.style.color = 'black'
  
}


function changeToDarkMode(){
    body.style.backgroundColor = 'hsl(209, 23%, 22%)'
    body.style.color = 'hsl(0, 0%, 100%)'
    header.style.backgroundColor = 'hsl(207, 26%, 17%)'
    header.style.color = 'hsl(0, 0%, 100%)'
    darkModeIcon.style.display = 'block'
    lightModeIcon.style.display = 'none'

    const countryContainers = document.querySelectorAll('.country-container');

    countryContainers.forEach(countryContainer => {
        countryContainer.style.backgroundColor = 'hsl(207, 26%, 17%)'
    })

    backButton.style.backgroundColor = 'hsl(209, 23%, 22%)'
    backButton.style.color = 'white'

}


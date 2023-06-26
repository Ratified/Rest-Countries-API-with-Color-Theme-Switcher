fetch('data.json')
.then(response => response.json())
.then(data => {
    const container = document.querySelector('#countries-container')

    data.forEach(country => {
        const div = document.createElement('div')
        div.setAttribute('class', 'country-container')
        div.addEventListener('click', ()=>{
            showCountryInfo(country)
        })

        const flag = document.createElement('img')
        flag.setAttribute('class', 'flag')
        flag.src = country.flag
        div.appendChild(flag)

        const div2 = document.createElement('div')
        div2.setAttribute('class', 'country-information')
        div.appendChild(div2)

        const name = document.createElement('h1')
        name.setAttribute('class', 'name')
        name.textContent = country.name
        div2.appendChild(name)

        const population = document.createElement('p')
        population.setAttribute('class', 'population')
        population.textContent = `Population: + ${country.population} ` 
        div2.appendChild(population)

        const region = document.createElement('p')
        region.setAttribute('class', 'region')
        region.textContent = `Region: ${country.region}`
        div2.appendChild(region)

        const capital = document.createElement('p')
        capital.setAttribute('class', 'capital')
        capital.textContent = `Capital: ${country.capital}` 
        div2.appendChild(capital)
        
        
        container.appendChild(div)
        
    })
    
}).catch(error => {
    console.log(`Error: ${error}`)
})

function showCountryInfo(country){
    localStorage.setItem('selectedCountry', country.name);
    window.location.href = 'country.html'
}


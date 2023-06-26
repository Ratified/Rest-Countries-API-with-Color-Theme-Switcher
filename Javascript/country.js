document.addEventListener('DOMContentLoaded', () => {
    const selectedCountry = localStorage.getItem('selectedCountry')

    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        
        const section = document.getElementById('section')

        const country = data.find(country => country.name === selectedCountry)

        const div = document.createElement('div')
        div.setAttribute('class', 'country-flag')
        section.append(div)

        const flag = document.createElement('img')
        flag.setAttribute('class', 'flag-image')
        flag.src = country.flag
        div.appendChild(flag)

        const div2 = document.createElement('div')
        div2.setAttribute('class', 'info')
        section.append(div2)

        const subDiv2 = document.createElement('div')
        subDiv2.setAttribute('class', 'subDiv2')
        div2.appendChild(subDiv2)

        const name = document.createElement('h1')
        name.setAttribute('class', 'country-name')
        name.textContent = country.name
        subDiv2.appendChild(name)

        const nativeName = document.createElement('p')
        nativeName.setAttribute('class', 'country-name')
        nativeName.textContent = `Native Name: ${country.nativeName}`
        subDiv2.appendChild(nativeName)

        const population = document.createElement('p')
        population.setAttribute('class', 'population')
        population.textContent = `Population: + ${country.population} ` 
        subDiv2.appendChild(population)

        const region = document.createElement('p')
        region.setAttribute('class', 'region')
        region.textContent = `Region: ${country.region}`
        subDiv2.appendChild(region)

        const subRegion = document.createElement('p')
        subRegion.setAttribute('class', 'subRegion')
        subRegion.textContent = `Sub Region: ${country.subRegion}`
        subDiv2.appendChild(subRegion)

        const capital = document.createElement('p')
        capital.setAttribute('class', 'capital')
        capital.textContent = `Capital: ${country.capital}` 
        subDiv2.appendChild(capital)

        const subDiv3 = document.createElement('div')
        subDiv3.setAttribute('class', 'subDiv3')
        div2.appendChild(subDiv3)

        const topLevelDomain = document.createElement('p')
        topLevelDomain.setAttribute('class', 'topLevelDomain')
        topLevelDomain.textContent = `Top Level Domain: ${country.topLevelDomain}` 
        subDiv3.appendChild(topLevelDomain)

        const currencies = document.createElement('p');
        currencies.setAttribute('class', 'currencies');
        currencies.textContent = 'Currencies: ';
        country.currencies.forEach(currency => {
            currencies.textContent += `${currency.name} (${currency.code}), `;
        });
        currencies.textContent = currencies.textContent.slice(0, -2); // Removes the trailing comma and space
        subDiv3.appendChild(currencies);

        const languages = document.createElement('p');
        languages.setAttribute('class', 'languages');
        languages.textContent = 'Languages: ';
        country.languages.forEach(language => {
            languages.textContent += `${language.name}, `;
        });
        languages.textContent = languages.textContent.slice(0, -2); 
        subDiv3.appendChild(languages);

        })
        .catch(error => {
            console.error('Error occurred:', error)
        });
});


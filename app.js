let tblCountries = document.getElementById("tblCountries");

let tableBody = `<thead><tr>
            <th>Name</th>
            <th>Flag</th>
        </tr></thead>`;

fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,maps")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        tableBody+=`<tr>
                        <td><h1>${element.name.common}</h1><br>
                        Official Name : ${element.name.official}
                        <p>Capital : ${element.capital}
                        <p>Region : ${element.region}
                        <p>Population : ${element.population}<br>
                        <a href="${element.maps.googleMaps}" class="btn btn-primary">Go to map</a>
                        </td>
                        <td><img src="${element.flags.png}""></td>
                    </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML = tableBody;
})

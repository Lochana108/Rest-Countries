let tblCountries = document.getElementById("tblCountries");

let tableBody = `<thead><tr>
            <th>Name</th>
            <th>Flag</th>
        </tr></thead>`;

fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        tableBody+=`<tr>
                        <td><h1>${element.name.common}</h1><br>${element.name.official}</td>
                        <td><img src="${element.flags.png}""></td>
                    </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML = tableBody;
})

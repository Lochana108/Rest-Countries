let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr>
            <th class="text-center">Name</th>
            <th class="text-center">Flag</th>
        </tr>`;

fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        tableBody+=`<tr>
                        <td><h3>${element.name.common}</h3><br>${element.name.official}</td>
                        <td class="text-center"><img src = "${element.flags.svg}" width = "250"></td>
                    </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML = tableBody;
})

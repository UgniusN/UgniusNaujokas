function buildTable(duomenys) {
    const table = document.getElementById('lentele')
    const allTable = document.getElementById('lentelesDiv')
    let dataHtml = '';

    if (Array.isArray(duomenys) && duomenys.length) {

        for(let knyga of duomenys) {
            dataHtml += `<tr>
                            <td>${knyga.title}</td>
                            <td>${knyga.author}</td>
                            <td>${knyga.year}</td>
                            <td>${knyga.genre}</td>
                        </tr>`
        }

        table.innerHTML += dataHtml;
    }
    else {
        table.innerHTML=`<tr> <td colspan="4">Duomenų apie pateiktą užklausą nėra.</td>`
    }
}
    window.onload = () => {
        buildTable(knygos);
    }


    // masyvas tusciam rezultatui patikrint pavadintas - "tusciasMasyvas"

fetch('/csv-data')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);

        const table1 = document.querySelector('#table1 tbody');
        table1.innerHTML = '';

        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = 
                `<td>${row['Index #']}</td>
                <td>${row['Value']}</td>`;
            table1.appendChild(tr);
        });

        const table2 = document.querySelector('#table2 tbody');
        table2.innerHTML = '';
    })
    .catch(err => {
        console.log(err)
    })
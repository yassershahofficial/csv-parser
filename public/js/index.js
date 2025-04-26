fetch('/csv-data')
    .then(res => {
        return res.json()
    })
    .then(data => {
        // console.log(data);

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
        dataMap = {};
        data.forEach(row => {
            dataMap[row['Index #']] = parseFloat(row['Value']);
        });

        // console.log(dataMap);
        const table2_row = [
            {
                category : 'Alpha',
                value : dataMap['A5'] + dataMap['A20']
            },
            {
                category : 'Beta',
                value : dataMap['A15'] / dataMap['A7']
            },
            {
                category : 'Charlie',
                value : dataMap['A13'] * dataMap['A12']
            }
        ];

        table2_row.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = 
                `<td>${row.category}</td>
                <td>${row.value}</td>`;
            table2.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err)
    })
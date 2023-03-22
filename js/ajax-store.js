(async() => {
    
    
const getInventory = async () => {
        const res = await fetch('../data/inventory.json');
        const data = await res.json();
        return data;
}

let inventory = await getInventory();

const buildTable = (inventory) => {
    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.quantity}</td>
        <td>${item.categories.join(', ')}</td>
        <td>${item.price}</td>
        `;

        document.querySelector('#insertProducts').appendChild(row);
    })
}
buildTable(inventory);

document.querySelector('#refreshBtn').addEventListener('click', async function() {
    document.querySelector('#insertProducts').innerHTML = '';
    let inventory = await getInventory();
    buildTable(inventory);
})

//--      --////--    WALKTHROUGH  --////--      --//
//     async function getInventory() {
//         const res = await fetch('../data/inventory.json');
//         const data = await res.json();
//         return data;
//     }
//
//     let inventory = await getInventory();
//     const buildTable = (inventory) => {
//         inventory.forEach(item => {
//             let row = document.createElement('tr');
//             row.innerHTML = `
//             <td>${item.title}</td>
//             <td>${item.quantity}</td>
//             <td>${item.categories.join(', ')}</td>;
//             <td>${item.price}</td>
//             `;
//             document.querySelector('#insertProducts').appendChild(row);
//         })
//     }
//     buildTable(inventory);
//
//     document.querySelector('#refreshBtn').addEventListener('click', async function() {
//         document.querySelector('#insertProducts').innerHTML = '';
//         let inventory = await getInventory();
//         buildTable(inventory);
//     })

})();
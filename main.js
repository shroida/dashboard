let menuBar = document.querySelector('#menu-bars');
let sideMenu = document.querySelector('aside');
let close = document.querySelector('#c');
let themeToggler = document.querySelector('.toggle')
// .dark-theme-variables
menuBar.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
});
close.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
});

orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td class=" ${order.shipping === 'pending' ? 'success'
                : order.shipping === 'declined' ? 'danger'
                : 'primary'
        }">${order.shipping}</td>
            <td>${order.paymentStatus}</td>
            <td><a href="#">details</a></td>
    `
    tr.innerHTML =  trContent;
    document.querySelector('table tbody').appendChild(tr)

})
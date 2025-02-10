const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu  = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
// Untuk produk
document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', function() {
        // Hapus class 'active' dari semua produk
        document.querySelectorAll('.product').forEach(el => {
            el.classList.remove('active-product');
        });
        // Tambahkan class 'active-product' ke produk yang diklik
        this.classList.add('active-product');
    });
});

// Untuk pembayaran
document.querySelectorAll('.payment').forEach(item => {
    item.addEventListener('click', function() {
        // Hapus class 'active' dari semua pembayaran
        document.querySelectorAll('.payment').forEach(el => {
            el.classList.remove('active-payment');
        });
        // Tambahkan class 'active-payment' ke pembayaran yang diklik
        this.classList.add('active-payment');
    });
});


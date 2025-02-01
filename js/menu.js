document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los enlaces del menú
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Obtén el checkbox
    const openMenuCheckbox = document.getElementById('open-menu');
    
    // Añade un event listener a cada enlace
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Desmarca el checkbox para cerrar el menú
            openMenuCheckbox.checked = false;
        });
    });
});

// Base de Datos de Productos
const PRODUCTOS = [
    { id: 1, nombre: "Panino Tradicional", precio: 18000, descripcion: "Jamón serrano, queso madurado y rúcula." },
    { id: 2, nombre: "Panino Speciale", precio: 22000, descripcion: "Lomo de cerdo, cebollas caramelizadas y salsa de la casa." },
    { id: 3, nombre: "Panino Vegetariano", precio: 17000, descripcion: "Vegetales grillados con pesto de albahaca." }
];

// Configuración de Domicilios en Cajicá
const DOMICILIOS = [
    { zona: "Centro Cajicá", costo: 3000 },
    { zona: "Capellanía", costo: 4000 },
    { zona: "Chuntame", costo: 4500 },
    { zona: "Canelón", costo: 5000 },
    { zona: "Vía Zipaquirá", costo: 6000 }
];

// Lógica del Menú Móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animación simple de las barras (opcional)
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// Nota: La estructura está lista para que en el siguiente paso
// usemos PRODUCTOS.forEach() para renderizar la interfaz de pedidos.
// Array de componentes
const components = [

            { name: "Intel Core i9-13900K", category: "processors", image: "./images/Intel Core i9-13900K.jpg", description: "24 hilos, 8 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 9 7950X", category: "processors", image: "./images/AMD Ryzen 9 7950X.jpg", description: "16 núcleos, 32 hilos, arquitectura Zen 4." },
            { name: "Intel Core i7-13700K", category: "processors", image: "./images/Intel Core i7-13700K.jpg", description: "16 hilos, 8 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 7 5800X3D", category: "processors", image: "./images/AMD Ryzen 7 5800X3D.jpg", description: "8 núcleos, 16 hilos, tecnología 3D V-Cache." },
            { name: "Intel Core i5-13600K", category: "processors", image: "./images/Intel Core i5-13600K.jpg", description: "14 hilos, 6 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 5 7600X", category: "processors", image: "./images/AMD Ryzen 5 7600X.jpg", description: "6 núcleos, 12 hilos, arquitectura Zen 4." },
            { name: "Intel Core i9-12900K", category: "processors", image: "./images/Intel Core i9-12900K.jpg", description: "16 hilos, 8 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 9 5900X", category: "processors", image: "./images/AMD Ryzen 9 5900X.jpg", description: "12 núcleos, 24 hilos, arquitectura Zen 3." },
            { name: "Intel Core i7-12700K", category: "processors", image: "./images/Intel Core i7-12700K.jpg", description: "12 hilos, 8 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 7 5800X", category: "processors", image: "./images/AMD Ryzen 7 5800X.jpg", description: "8 núcleos, 16 hilos, arquitectura Zen 3." },
            { name: "Intel Core i5-12600K", category: "processors", image: "./images/Intel Core i5-12600K.jpg", description: "10 hilos, 6 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 5 5600X", category: "processors", image: "./images/AMD Ryzen 5 5600X.jpg", description: "6 núcleos, 12 hilos, arquitectura Zen 3." },
            { name: "Intel Core i5-12400F", category: "processors", image: "./images/Intel Core i5-12400F.jpg", description: "12 hilos, 6 núcleos de alto rendimiento." },
            { name: "AMD Ryzen 9 5900", category: "processors", image: "./images/AMD Ryzen 9 5900.jpg", description: "12 núcleos, 24 hilos, arquitectura Zen 3." },
            { name: "Intel Core i7-11700K", category: "processors", image: "./images/Intel Core i7-11700K.jpg", description: "16 hilos, 8 núcleos de alto rendimiento." },
            { name: "Corsair Vengeance LPX 32GB DDR4-3600", category: "ram", image: "./images/Corsair Vengeance LPX 32GB DDR4-3600.jpg", description: "32 GB, DDR4-3600, bajo perfil." },
            { name: "G.SKILL Ripjaws V 16GB DDR4-3600", category: "ram", image: "./images/G.SKILL Ripjaws V 16GB DDR4-3600.jpg", description: "16 GB, DDR4-3600, latencia CL16." },
            { name: "Crucial Ballistix 16GB DDR4-3200", category: "ram", image: "./images/Crucial Ballistix 16GB DDR4-3200.jpg", description: "16 GB, DDR4-3200, diseño compacto." },
            { name: "Kingston HyperX Fury 16GB DDR4-3200", category: "ram", image: "./images/Kingston HyperX Fury 16GB DDR4-3200.jpg", description: "16 GB, DDR4-3200, fácil de instalar." },
            { name: "Corsair Dominator Platinum 32GB DDR4-3200", category: "ram", image: "./images/Corsair Dominator Platinum 32GB DDR4-3200.jpg", description: "32 GB, DDR4-3200, refrigeración avanzada." },
            { name: "ASUS ROG Strix Z790-E", category: "motherboards", image: "./images/ASUS ROG Strix Z790-E.jpg", description: "ATX, soporte para DDR5, PCIe 5.0." },
            { name: "MSI MPG Z690 Carbon WiFi", category: "motherboards", image: "./images/MSI MPG Z690 Carbon WiFi.jpg", description: "ATX, DDR5, WiFi 6E, PCIe 5.0." },
            { name: "Gigabyte Z690 AORUS Master", category: "motherboards", image: "./images/Gigabyte Z690 AORUS Master.jpg", description: "ATX, DDR5, triple M.2." },
            { name: "ASRock Z790 Taichi", category: "motherboards", image: "./images/ASRock Z790 Taichi.jpg", description: "ATX, soporte para DDR5, WiFi 6E." },
            { name: "ASUS TUF Gaming B550-PLUS", category: "motherboards", image: "./images/ASUS TUF Gaming B550-PLUS.jpg", description: "ATX, DDR4, soporte de Ryzen 3000/5000." },
            { name: "MSI MAG B550 TOMAHAWK", category: "motherboards", image: "./images/MSI MAG B550 TOMAHAWK.jpg", description: "ATX, DDR4, robusto y confiable." },
            { name: "Gigabyte B550 AORUS Pro", category: "motherboards", image: "./images/Gigabyte B550 AORUS Pro.jpg", description: "ATX, DDR4, diseño de calidad." },
            { name: "ASRock B550 Steel Legend", category: "motherboards", image: "./images/ASRock B550 Steel Legend.jpg", description: "ATX, DDR4, gran rendimiento." },
            { name: "ASUS ROG Maximus Z790 Hero", category: "motherboards", image: "./images/ASUS ROG Maximus Z790 Hero.jpg", description: "ATX, soporte DDR5, WiFi 6E." },
            { name: "MSI MEG Z690 ACE", category: "motherboards", image: "./images/MSI MEG Z690 ACE.jpg", description: "E-ATX, DDR5, triple M.2." },
            { name: "Gigabyte X570 AORUS Elite", category: "motherboards", image: "./images/Gigabyte X570 AORUS Elite.jpg", description: "ATX, soporte DDR4, PCIe 4.0." },
            { name: "ASRock X570 Taichi", category: "motherboards", image: "./images/ASRock X570 Taichi.jpg", description: "ATX, DDR4, PCIe 4.0." },
            { name: "ASUS ROG Strix B550-F", category: "motherboards", image: "./images/ASUS ROG Strix B550-F.jpg", description: "ATX, DDR4, RGB iluminado." },
            { name: "MSI MPG X570 Gaming Edge WiFi", category: "motherboards", image: "./images/MSI MPG X570 Gaming Edge WiFi.jpg", description: "ATX, DDR4, WiFi 6." },
            { name: "Gigabyte B550M AORUS Pro", category: "motherboards", image: "./images/Gigabyte B550M AORUS Pro.jpg", description: "Micro-ATX, DDR4, compacto y potente." },
            { name: "Corsair RM850x 850W", category: "powerSupplies", image: "./images/Corsair RM850x 850W.jpg", description: "850W, 80 Plus Gold, modular." },
            { name: "Seasonic PRIME TX-850", category: "powerSupplies", image: "./images/Seasonic PRIME TX-850.jpg", description: "850W, 80 Plus Titanium, modular." },
            { name: "EVGA SuperNOVA 750 G5", category: "powerSupplies", image: "./images/EVGA SuperNOVA 750 G5.jpg", description: "750W, 80 Plus Gold, modular." },
            { name: "Cooler Master V850 850W", category: "powerSupplies", image: "./images/Cooler Master V850 850W.jpg", description: "850W, 80 Plus Gold, modular." },
            { name: "ASUS ROG Strix 850W", category: "powerSupplies", image: "./images/ASUS ROG Strix 850W.jpg", description: "850W, 80 Plus Gold, semi-modular." },
            { name: "Corsair HX1000 1000W", category: "powerSupplies", image: "./images/Corsair HX1000 1000W.jpg", description: "1000W, 80 Plus Platinum, modular." },
            { name: "Thermaltake Toughpower GF1 750W", category: "powerSupplies", image: "./images/Thermaltake Toughpower GF1 750W.jpg", description: "750W, 80 Plus Gold, modular." },
            { name: "Be Quiet! Dark Power Pro 12 1200W", category: "powerSupplies", image: "./images/Be Quiet! Dark Power Pro 12 1200W.jpg", description: "1200W, 80 Plus Titanium, modular." },
            { name: "Antec High Current Pro 850W", category: "powerSupplies", image: "./images/Antec High Current Pro 850W.jpg", description: "850W, 80 Plus Gold, modular." },
            { name: "SilverStone ST75F-GS 750W", category: "powerSupplies", image: "./images/SilverStone ST75F-GS 750W.jpg", description: "750W, 80 Plus Gold, modular." },
            { name: "XPG Core Reactor 650W", category: "powerSupplies", image: "./images/XPG Core Reactor 650W.jpg", description: "650W, 80 Plus Gold, semi-modular." },
            { name: "FSP Hydro G Pro 850W", category: "powerSupplies", image: "./images/FSP Hydro G Pro 850W.jpg", description: "850W, 80 Plus Gold, modular." },
            { name: "Corsair CV550 550W", category: "powerSupplies", image: "./images/Corsair CV550 550W.jpg", description: "550W, 80 Plus Bronze, no modular." },
            { name: "Cooler Master MWE 550W", category: "powerSupplies", image: "./images/Cooler Master MWE 550W.jpg", description: "550W, 80 Plus Bronze, compacto." },
            { name: "SeaSonic S12III 650W", category: "powerSupplies", image: "./images/SeaSonic S12III 650W.jpg", description: "650W, 80 Plus Bronze, fiable." },
            { name: "Samsung 970 EVO Plus 1TB", category: "storage", image: "./images/Samsung 970 EVO Plus 1TB.jpg", description: "NVMe M.2, 1TB, velocidad de lectura 3500 MB/s." },
            { name: "Western Digital Blue SN550 1TB", category: "storage", image: "./images/Western Digital Blue SN550 1TB.jpg", description: "NVMe M.2, 1TB, velocidad de lectura 2400 MB/s." },
            { name: "Crucial MX500 1TB", category: "storage", image: "./images/Crucial MX500 1TB.jpg", description: "SATA SSD, 1TB, velocidad de lectura 560 MB/s." },
            { name: "Seagate Barracuda 2TB", category: "storage", image: "./images/Seagate Barracuda 2TB.jpg", description: "HDD, 2TB, 7200 RPM, almacenamiento masivo." },
            { name: "Western Digital Black SN850X 2TB", category: "storage", image: "./images/Western Digital Black SN850X 2TB.jpg", description: "NVMe M.2, 2TB, velocidad de lectura 7300 MB/s." },
            { name: "Samsung 980 PRO 1TB", category: "storage", image: "./images/Samsung 980 PRO 1TB.jpg", description: "NVMe M.2, 1TB, velocidad de lectura 7000 MB/s." },
            { name: "Crucial P3 500GB", category: "storage", image: "./images/Crucial P3 500GB.jpg", description: "NVMe M.2, 500GB, velocidad de lectura 3500 MB/s." },
            { name: "SanDisk Ultra 3D 1TB", category: "storage", image: "./images/SanDisk Ultra 3D 1TB.jpg", description: "SATA SSD, 1TB, velocidad de lectura 550 MB/s." },
            { name: "Seagate IronWolf 4TB", category: "storage", image: "./images/Seagate IronWolf 4TB.jpg", description: "HDD, 4TB, 5900 RPM, optimizado para NAS." },
            { name: "Kingston A2000 1TB", category: "storage", image: "./images/Kingston A2000 1TB.jpg", description: "NVMe M.2, 1TB, velocidad de lectura 2200 MB/s." },
            { name: "NVIDIA GeForce RTX 4090", category: "graphics", image: "./images/NVIDIA GeForce RTX 4090.jpg", description: "24GB GDDR6X, 10496 núcleos CUDA, ray tracing avanzado." },
            { name: "AMD Radeon RX 7900 XTX", category: "graphics", image: "./images/AMD Radeon RX 7900 XTX.jpg", description: "24GB GDDR6, arquitectura RDNA 3, rendimiento extremo." },
            { name: "NVIDIA GeForce RTX 4080", category: "graphics", image: "./images/NVIDIA GeForce RTX 4080.jpg", description: "16GB GDDR6X, 9728 núcleos CUDA, alto rendimiento en juegos." },
            { name: "AMD Radeon RX 7800 XT", category: "graphics", image: "./images/AMD Radeon RX 7800 XT.jpg", description: "16GB GDDR6, arquitectura RDNA 3, ideal para 4K." },
            { name: "NVIDIA GeForce RTX 4070 Ti", category: "graphics", image: "./images/NVIDIA GeForce RTX 4070 Ti.jpg", description: "12GB GDDR6X, arquitectura Ada Lovelace, excelente para ray tracing." },
            { name: "MSI GeForce GTX 1660 Super", category: "graphics", image: "./images/MSI GeForce GTX 1660 Super.jpg", description: "6GB GDDR5, rendimiento equilibrado para juegos Full HD." },
            { name: "ASUS TUF Gaming RX 6750 XT", category: "graphics", image: "./images/ASUS TUF Gaming RX 6750 XT.jpg", description: "12GB GDDR6, arquitectura RDNA 2, buena opción para 1440p." },
            { name: "NVIDIA GeForce RTX 3060", category: "graphics", image: "./images/NVIDIA GeForce RTX 3060.jpg", description: "12GB GDDR6, una opción accesible para juegos modernos." },
            { name: "Gigabyte Radeon RX 5700 XT", category: "graphics", image: "./images/Gigabyte Radeon RX 5700 XT.jpg", description: "8GB GDDR6, buena relación calidad-precio, ideal para 1080p." },
            { name: "ZOTAC Gaming GeForce GTX 1650", category: "graphics", image: "./images/ZOTAC Gaming GeForce GTX 1650.jpg", description: "4GB GDDR5, opción económica para juegos básicos." }
        
        ];

// Contenedores de la interfaz
const componentsContainer = document.getElementById("components");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const categoryButtons = document.querySelectorAll(".sidebar button");
const chatButton = document.getElementById("chatButton");
const chatInput = document.getElementById("chatInput");
const chatResponseDiv = document.getElementById("chatResponse");

// Respuestas predefinidas para el chatbot
const chatbotResponses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "qué es pc-masters": "PC-Masters es una plataforma para comparar y conocer componentes de PC.",
    "procesadores": "Los procesadores son el cerebro de la computadora y determinan su rendimiento.",
    "tarjetas gráficas": "Las tarjetas gráficas permiten renderizar imágenes y videos con alta calidad.",
    "almacenamiento": "El almacenamiento se refiere a los dispositivos que guardan tus archivos y datos.",
    "memoria ram": "La memoria RAM es la memoria de acceso rápido que usan los programas para operar.",
    "placas base": "La placa base conecta todos los componentes de tu PC y permite su comunicación.",
    "instrucciones": `Para realizar las comparaciones debes ingresar los datos de la siguiente manera:
    RTX 3070 vs RTX 3090
    ryzen 9 9950x vs intel i9 12700k
    ssd kingston vs sata`,
    "rtx 3070 vs rtx 3050": "La RTX 3070 ofrece mejor rendimiento y potencia gráfica que la RTX 3050.",
    "ryzen 9 9950x vs intel i9 12700k": "El Ryzen 9 9950x tiene más núcleos e hilos, mientras que el Intel i9 12700k destaca por un buen equilibrio entre rendimiento de un solo núcleo y multi-núcleo.",
    "ssd kingston vs sata": "Los SSD Kingston NVMe son mucho más rápidos que los SSD SATA tradicionales.",
    "preguntas comunes": `Aquí hay algunas preguntas comunes:
    - ¿Cuál es el mejor procesador para gaming?
    - ¿Qué tarjeta gráfica es mejor para edición de video?
    - ¿Qué diferencias hay entre NVMe y SATA?
    - ¿Qué placa base es compatible con un Ryzen 9?`,
    "default": "Lo siento, no entiendo esa pregunta. ¿Puedes intentar de nuevo?"
};

// Función para manejar la entrada y respuesta del chatbot
chatButton.addEventListener('click', function() {
    const userInput = chatInput.value.toLowerCase();
    
    // Buscar la respuesta en la base de datos (haciendo la búsqueda insensible a mayúsculas)
    const response = chatbotResponses[userInput] || chatbotResponses['default'];

    // Mostrar la entrada y respuesta en el chat
    chatResponseDiv.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    chatResponseDiv.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;

    // Limpiar la entrada después de enviar el mensaje
    chatInput.value = '';

    // Desplazar la ventana de chat hacia abajo automáticamente
    chatResponseDiv.scrollTop = chatResponseDiv.scrollHeight;
});

// Mostrar instrucciones iniciales al cargar la página
window.addEventListener('load', function() {
    chatResponseDiv.innerHTML += `<p><strong>Chatbot:</strong> Bienvenidos a PC-Masters. Estoy aqui para ayudarte con las comparación entre componentes.</p>`;
    chatResponseDiv.innerHTML += `<p>Si tienes dudas de como proceder selecciona "instrucciones"</p>`;
    chatResponseDiv.innerHTML += `<p>Si tienes una consulta o duda mas especifica selecciona "soporte"</p>`;
});

// Evento de búsqueda en el botón de búsqueda
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    renderComponents("all", searchTerm);
});

// Evento de filtro por categorías en los botones de la barra lateral
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = button.id;
        renderComponents(category);
    });
});

function renderComponents(filter = "all", search = "") {
    componentsContainer.innerHTML = "";
    components
        .filter(component => filter === "all" || component.category === filter)
        .filter(component => component.name.toLowerCase().includes(search.toLowerCase()))
        .forEach(component => {
            componentsContainer.innerHTML += `
                <div class="component-card">
                    <img src="${component.image}" alt="${component.name}">
                    <h3>${component.name}</h3>
                    <p>${component.description}</p>
                </div>
            `;
        });
}
document.addEventListener("DOMContentLoaded", () => {
    const instructionButton = document.getElementById('instructionButton');
    const supportButton = document.getElementById('supportButton');
    const chatResponse = document.getElementById('chatResponse');
    const chatOptions = document.querySelector('.chat-options');

    instructionButton.addEventListener('click', () => {
        // Mostrar el mensaje de instrucciones
        chatResponse.innerHTML = `
            <p>Para realizar las comparaciones debes ingresar los datos de la siguiente manera:</p>
            <ul>
                <li>RTX 3070 vs RTX 3090</li>
                <li>ryzen 9 9950x vs intel i9 12700k</li>
                <li>ssd kingston vs sata</li>
            </ul>
        `;
        // Ocultar los botones después de hacer clic
        chatOptions.style.display = 'none';
    });

    supportButton.addEventListener('click', () => {
        // Generar un número aleatorio para simular el soporte
        const randomNumber = Math.floor(Math.random() * 1000);
        chatResponse.innerHTML = `
            <p>Puedes ponerte en contacto con: 75941487 </p>
        `;
        // Ocultar los botones después de hacer clic
        chatOptions.style.display = 'none';
    });
});



// Renderizar todos los componentes al cargar la página
renderComponents();


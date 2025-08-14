document.addEventListener("DOMContentLoaded", () => {
    const contacto = document.getElementById("contactoForm");
    const newsletter = document.getElementById("newsletterForm");

    if (contacto) {
        contacto.addEventListener("submit", e => {
            e.preventDefault();
            const name = contacto.nombre.value.trim();
            const email = contacto.correo.value.trim();
            const message = contacto.mensaje.value.trim();

            if (!name || !email || !message) {
                document.getElementById("mensajeContacto").textContent = "Please fill in all required fields.";
                return;
            }

            document.getElementById("mensajeContacto").textContent = "Message sent successfully. Thank you!";
            contacto.reset();
        });
    }

    if (newsletter) {
        newsletter.addEventListener("submit", e => {
            e.preventDefault();
            const name = newsletter.nombre.value.trim();
            const email = newsletter.correo.value.trim();

            if (!name || !email) {
                document.getElementById("mensajeNewsletter").textContent = "Please complete all fields.";
                return;
            }

            document.getElementById("mensajeNewsletter").textContent = "Thank you for subscribing!";
            newsletter.reset();
        });
    }
});
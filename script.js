function copyEmail() {
    const email = document.getElementById("email-contacto").innerText;
    navigator.clipboard.writeText(email).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.style.display = "inline";
        setTimeout(() => msg.style.display = "none", 2000);

        // Evento GA
        gtag('event', 'copy_email', {
            'event_category': 'Contacto',
            'event_label': email
        });
    });
}

function copyPhone() {
    const phone = document.getElementById("phone").innerText;
    navigator.clipboard.writeText(phone).then(() => {
        const msg = document.getElementById("copy-msg-phone");
        msg.style.display = "inline";
        setTimeout(() => msg.style.display = "none", 2000);

        // Evento GA
        gtag('event', 'copy_phone', {
            'event_category': 'Contacto',
            'event_label': phone
        });
    });
}
// Descarga de CV
document.querySelector('.btn-cv').addEventListener('click', () => {
    gtag('event', 'download_cv', {
        'event_category': 'CV',
        'event_label': 'PedroParadaCV.pdf'
    });
});

// Vista previa del CV
document.getElementById("btn-preview").addEventListener("click", function() {
    const preview = document.getElementById("cv-preview");
    if (preview.style.display === "none") {
        preview.style.display = "block";
        this.textContent = "Ocultar vista previa";

        gtag('event', 'preview_cv_open', {
            'event_category': 'CV',
            'event_label': 'Vista previa abierta'
        });
    } else {
        preview.style.display = "none";
        this.textContent = "Ver vista previa";

        gtag('event', 'preview_cv_close', {
            'event_category': 'CV',
            'event_label': 'Vista previa cerrada'
        });
    }
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    formStatus.textContent = '';
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
                    redirect: 'manual'
            });

            if (response.ok || response.status === 0) {
                formStatus.textContent = '¡Mensaje enviado con éxito!';
                formStatus.className = 'form-status success';
                contactForm.reset();
                setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
                }, 3000);
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            formStatus.textContent = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar mensaje';
        }
    });
}

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
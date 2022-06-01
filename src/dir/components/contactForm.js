import inputBuilder from "../tools/inputBuilder";

export default function contactForm() {

    // Create form
    const form = document.createElement('form');
    form.id = 'contact-form';
    form.method = 'POST';
    form.action = 'index.php';

    
    // Create Message Box
    const message = document.createElement('label');
    message.textContent = 'Your Message:';

    const textArea = document.createElement('textarea');
    textArea.classList.add('input-control');

    message.appendChild(textArea);

    // Create Submit Button
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'form-submit';
    submit.name = 'form-submit';
    submit.value = 'Send Message';

    // Build Form
    form.appendChild(inputBuilder('Name', 'name'));
    form.appendChild(inputBuilder('Email', 'email'));
    form.appendChild(inputBuilder('Phone number', 'phone'));
    form.appendChild(inputBuilder('What are you getting in touch about?', 'subject'));
    form.appendChild(message);
    form.appendChild(submit);

    return form;
}
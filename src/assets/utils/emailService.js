import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("mHgIKp4tUlWWKiQ3s");

const emailService = {
    sendEmail: async (formData) => {
        try {
            const response = await emailjs.send(
                'service_r9e21ck', // Your service ID
                'template_k6k0tgy', // Your template ID
                formData
            );

            return {
                success: true,
                message: 'Email sent successfully!',
                response
            };
        } catch (error) {
            console.error('Failed to send email:', error);
            return {
                success: false,
                message: 'Failed to send email',
                error
            };
        }
    }
};

export default emailService;
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendWelcomeEmail(to: string, name: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject: '¡Bienvenido a Monttreal!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #009879; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Monttreal</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333;">¡Hola ${name}!</h2>
            <p style="color: #666; line-height: 1.6;">
              Gracias por registrarte en Monttreal. Estamos emocionados de tenerte como parte de nuestra comunidad.
            </p>
            <p style="color: #666; line-height: 1.6;">
              Explora nuestra colección de vestuario y encuentra tu estilo perfecto.
            </p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="${process.env.NEXTAUTH_URL}/shop" 
                 style="background-color: #009879; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">
                Ir a la tienda
              </a>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Monttreal. Todos los derechos reservados.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}

export async function sendOrderConfirmationEmail(
  to: string,
  name: string,
  orderId: string,
  total: number
) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject: 'Confirmación de pedido - Monttreal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #009879; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Monttreal</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333;">¡Gracias por tu compra, ${name}!</h2>
            <p style="color: #666; line-height: 1.6;">
              Tu pedido ha sido confirmado exitosamente.
            </p>
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Número de orden:</strong> ${orderId}</p>
              <p style="margin: 5px 0;"><strong>Total:</strong> $${total.toFixed(2)}</p>
              <p style="margin: 5px 0;"><strong>Estado:</strong> Pendiente</p>
            </div>
            <p style="color: #666; line-height: 1.6;">
              Te notificaremos cuando tu pedido sea procesado.
            </p>
          </div>
          <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Monttreal. Todos los derechos reservados.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
  }
}

export async function sendDailyCronEmail() {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'Reporte diario - Monttreal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #009879; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Monttreal</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Reporte Diario</h2>
            <p style="color: #666; line-height: 1.6;">
              Este es el reporte diario automático de Monttreal.
            </p>
            <p style="color: #666; line-height: 1.6;">
              Fecha: ${new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Monttreal. Todos los derechos reservados.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending daily cron email:', error);
  }
}

export default transporter;


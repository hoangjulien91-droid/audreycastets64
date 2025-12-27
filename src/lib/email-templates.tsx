import * as React from 'react';

interface ContactConfirmationEmailProps {
  name: string;
}

export const ContactConfirmationEmail: React.FC<ContactConfirmationEmailProps> = ({
  name,
}) => (
  <html>
    <head>
      <style>
        {`
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            background-color: #FDF8F6;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          }
          .header {
            background: linear-gradient(135deg, #EC4899 0%, #A855F7 100%);
            padding: 40px 32px;
            text-align: center;
          }
          .header h1 {
            color: #FFFFFF;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            font-family: 'Playfair Display', serif;
          }
          .content {
            padding: 40px 32px;
          }
          .greeting {
            font-size: 18px;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 16px;
          }
          .message {
            font-size: 16px;
            color: #6B7280;
            margin-bottom: 24px;
            line-height: 1.6;
          }
          .info-box {
            background-color: #FCE7F3;
            border-left: 4px solid #EC4899;
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .info-box p {
            margin: 8px 0;
            font-size: 15px;
            color: #1F2937;
          }
          .info-box strong {
            color: #EC4899;
          }
          .footer {
            background-color: #FDF8F6;
            padding: 32px;
            text-align: center;
            border-top: 1px solid #F3F4F6;
          }
          .footer p {
            color: #6B7280;
            font-size: 14px;
            margin: 8px 0;
          }
          .contact-info {
            margin-top: 16px;
          }
          .contact-info a {
            color: #EC4899;
            text-decoration: none;
            font-weight: 500;
          }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>✨ Message bien reçu !</h1>
        </div>
        <div className="content">
          <p className="greeting">Bonjour {name},</p>
          <p className="message">
            Merci d'avoir pris contact avec moi. J'ai bien reçu votre message et je l'ai lu 
            avec attention.
          </p>
          <div className="info-box">
            <p><strong>⏰ Délai de réponse :</strong> Je m'engage à vous répondre dans les <strong>24 heures</strong></p>
            <p><strong>🎁 Premier entretien :</strong> Profitez de 15 minutes offertes pour échanger</p>
            <p><strong>🔒 Confidentialité :</strong> Vos informations restent strictement confidentielles</p>
          </div>
          <p className="message">
            En attendant ma réponse, n'hésitez pas à consulter mes services et mon approche 
            sur mon site web.
          </p>
          <p className="message">
            À très bientôt,<br />
            <strong>Audrey Castets</strong><br />
            <em>Psychologue du Travail</em>
          </p>
        </div>
        <div className="footer">
          <p className="contact-info">
            📞 <a href="tel:0743687297">07 43 68 72 97</a> | 
            ✉️ <a href="mailto:contact@audrey-castets.fr">contact@audrey-castets.fr</a>
          </p>
          <p style={{ marginTop: "16px", fontSize: "12px", color: "#9CA3AF" }}>
            © 2024 Audrey Castets - Psychologue du Travail. Tous droits réservés.
          </p>
        </div>
      </div>
    </body>
  </html>
);

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  service_type?: string;
  message: string;
  submittedAt: string;
}

export const AdminNotificationEmail: React.FC<AdminNotificationEmailProps> = ({
  name,
  email,
  phone,
  service_type,
  message,
  submittedAt,
}) => (
  <html>
    <head>
      <style>
        {`
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            background-color: #F3F4F6;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          }
          .header {
            background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
            padding: 32px;
            text-align: center;
          }
          .header h1 {
            color: #FFFFFF;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
          }
          .alert-badge {
            display: inline-block;
            background-color: #EC4899;
            color: #FFFFFF;
            padding: 6px 16px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .content {
            padding: 32px;
          }
          .field {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #F3F4F6;
          }
          .field:last-child {
            border-bottom: none;
          }
          .field-label {
            font-size: 12px;
            font-weight: 600;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .field-value {
            font-size: 16px;
            color: #1F2937;
            font-weight: 500;
          }
          .message-box {
            background-color: #F9FAFB;
            border-left: 4px solid #EC4899;
            padding: 20px;
            border-radius: 8px;
            margin-top: 8px;
          }
          .message-box p {
            margin: 0;
            color: #374151;
            font-size: 15px;
            line-height: 1.6;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #F9FAFB;
            padding: 24px 32px;
            text-align: center;
            border-top: 1px solid #E5E7EB;
          }
          .footer p {
            color: #6B7280;
            font-size: 13px;
            margin: 4px 0;
          }
          .action-button {
            display: inline-block;
            background-color: #EC4899;
            color: #FFFFFF;
            padding: 12px 24px;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 16px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <div className="alert-badge">🔔 NOUVEAU MESSAGE</div>
          <h1>Nouvelle demande de contact</h1>
        </div>
        <div className="content">
          <div className="field">
            <div className="field-label">👤 Nom</div>
            <div className="field-value">{name}</div>
          </div>
          
          <div className="field">
            <div className="field-label">📧 Email</div>
            <div className="field-value">
              <a href={`mailto:${email}`} style={{ color: "#EC4899", textDecoration: "none" }}>
                {email}
              </a>
            </div>
          </div>
          
          {phone && (
            <div className="field">
              <div className="field-label">📞 Téléphone</div>
              <div className="field-value">
                <a href={`tel:${phone}`} style={{ color: "#EC4899", textDecoration: "none" }}>
                  {phone}
                </a>
              </div>
            </div>
          )}
          
          {service_type && (
            <div className="field">
              <div className="field-label">🏷️ Type</div>
              <div className="field-value" style={{ textTransform: "capitalize" }}>
                {service_type}
              </div>
            </div>
          )}
          
          <div className="field">
            <div className="field-label">💬 Message</div>
            <div className="message-box">
              <p>{message}</p>
            </div>
          </div>
          
          <div className="field">
            <div className="field-label">⏰ Reçu le</div>
            <div className="field-value">{submittedAt}</div>
          </div>
        </div>
        <div className="footer">
          <p style={{ fontWeight: 600, color: "#1F2937" }}>
            ⚡ Pensez à répondre dans les 24 heures !
          </p>
          <p style={{ marginTop: "16px", fontSize: "12px" }}>
            Ce message a été envoyé automatiquement depuis votre formulaire de contact.
          </p>
        </div>
      </div>
    </body>
  </html>
);
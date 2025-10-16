-- Migration pour ajouter le tracking des emails dans la table contact_submissions
-- Exécutez ce script dans votre console SQL Supabase

-- Ajouter les colonnes de tracking des emails
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS email_sent_confirmation BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_notification BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at TIMESTAMPTZ;

-- Ajouter un commentaire pour la documentation
COMMENT ON COLUMN contact_submissions.email_sent_confirmation IS 'Indique si l''email de confirmation a été envoyé au visiteur';
COMMENT ON COLUMN contact_submissions.email_sent_notification IS 'Indique si l''email de notification a été envoyé à l''admin';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Date et heure d''envoi des emails';

-- Créer un index pour optimiser les requêtes de suivi
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email_sent 
ON contact_submissions(email_sent_at DESC);
-- Script de création de la table contact_submissions dans Supabase
-- Exécutez ce script dans le SQL Editor de votre dashboard Supabase

-- Créer la table contact_submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  service_type TEXT,
  read BOOLEAN NOT NULL DEFAULT false,
  email_sent_confirmation BOOLEAN DEFAULT false,
  email_sent_notification BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Créer des index pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_read 
ON contact_submissions(read);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email_sent_at 
ON contact_submissions(email_sent_at DESC);

-- Ajouter des commentaires pour la documentation
COMMENT ON TABLE contact_submissions IS 'Stocke tous les messages de contact envoyés via le formulaire du site web';
COMMENT ON COLUMN contact_submissions.email_sent_confirmation IS 'Indique si l''email de confirmation a été envoyé au visiteur';
COMMENT ON COLUMN contact_submissions.email_sent_notification IS 'Indique si l''email de notification a été envoyé à l''admin';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Date et heure d''envoi des emails';

-- Activer RLS (Row Level Security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions depuis l'API (service_role)
CREATE POLICY "Allow service role to insert contact submissions"
ON contact_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

-- Politique pour permettre les lectures depuis l'API (service_role)
CREATE POLICY "Allow service role to read contact submissions"
ON contact_submissions
FOR SELECT
TO service_role
USING (true);

-- Politique pour permettre les mises à jour depuis l'API (service_role)
CREATE POLICY "Allow service role to update contact submissions"
ON contact_submissions
FOR UPDATE
TO service_role
USING (true);

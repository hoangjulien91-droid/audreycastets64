# 📧 Configuration Resend - Guide Complet

## ✅ Ce qui a été configuré

### 1. **Installation des dépendances**

- ✅ Package `resend` installé
- ✅ Templates d'email React créés

### 2. **Templates d'emails créés**

Deux templates HTML modernes et responsive dans `src/lib/email-templates.tsx` :

#### 📩 Email de confirmation (pour le visiteur)

- Design moderne avec gradient rose/violet
- Informations sur le délai de réponse (24h)
- Rappel du premier entretien offert (15 min)
- Coordonnées de contact cliquables

#### 📨 Email de notification (pour vous)

- Design professionnel avec badge d'alerte
- Toutes les informations du formulaire
- Email et téléphone cliquables pour réponse rapide
- Horodatage précis de la soumission

### 3. **API Route améliorée** (`src/app/api/contact/route.ts`)

- ✅ Validation renforcée des données
- ✅ Enregistrement dans Supabase
- ✅ Envoi automatique de 2 emails via Resend
- ✅ Gestion d'erreurs robuste (le formulaire fonctionne même si l'email échoue)
- ✅ Logging des envois dans Supabase

### 4. **Variables d'environnement** (`.env.local`)

```env
RESEND_API_KEY=re_FTyHADma_Ngvm8NX1YzNj73NTq1EdQ5Nr
ADMIN_EMAIL=contact@audrey-castets.fr
```

---

## 🚀 Étapes de configuration requises

### Étape 1 : Migrer votre base de données Supabase

1. Allez sur [votre dashboard Supabase](https://supabase.com/dashboard/project/spvsydzaglsvuimmbeyw)
2. Cliquez sur **SQL Editor** dans le menu latéral
3. Créez une nouvelle requête
4. Copiez-collez le contenu du fichier `supabase-migration-add-email-tracking.sql`
5. Exécutez la requête (bouton **Run**)

Cela ajoutera 3 colonnes à votre table `contact_submissions` :

- `email_sent_confirmation` (boolean)
- `email_sent_notification` (boolean)
- `email_sent_at` (timestamp)

### Étape 2 : Configurer votre domaine sur Resend (IMPORTANT)

⚠️ **Par défaut, Resend utilise `onboarding@resend.dev` qui fonctionne uniquement en mode test.**

Pour envoyer des emails en production à vos vrais visiteurs :

1. **Connectez-vous à [Resend](https://resend.com/login)**
2. **Allez dans "Domains"** dans le menu
3. **Ajoutez votre domaine** (ex: `audrey-castets.fr`)
4. **Vérifiez votre domaine** en ajoutant les enregistrements DNS fournis
5. **Une fois vérifié**, modifiez les lignes suivantes dans `src/app/api/contact/route.ts` :

```typescript
// AVANT (mode test - envoie seulement aux emails autorisés)
from: "Audrey Castets <onboarding@resend.dev>";

// APRÈS (production - envoie à tout le monde)
from: "Audrey Castets <contact@audrey-castets.fr>";
```

```typescript
// AVANT (mode test)
from: "Notifications <onboarding@resend.dev>";

// APRÈS (production)
from: "Notifications <notifications@audrey-castets.fr>";
```

### Étape 3 : Tester l'intégration

#### En mode test (avec onboarding@resend.dev)

1. Remplissez le formulaire de contact sur votre site
2. Vérifiez dans [Resend Dashboard > Emails](https://resend.com/emails) que les emails sont envoyés
3. ⚠️ Les emails n'arriveront QUE si l'adresse du destinataire est autorisée dans Resend

#### En mode production (après vérification du domaine)

1. Testez avec n'importe quelle adresse email
2. Vérifiez que vous recevez bien les 2 emails
3. Vérifiez dans Supabase que les colonnes de tracking sont bien remplies

---

## 📊 Fonctionnement du système

### Flux complet d'une soumission :

```
1. Visiteur remplit le formulaire
        ↓
2. Validation des données (nom, email, message requis)
        ↓
3. Enregistrement dans Supabase (table contact_submissions)
        ↓
4. Envoi de l'email de CONFIRMATION au visiteur
        ↓
5. Envoi de l'email de NOTIFICATION à vous (admin)
        ↓
6. Mise à jour du log dans Supabase (colonnes email_sent_*)
        ↓
7. Réponse success au formulaire → Message de confirmation
```

### Gestion d'erreurs robuste :

- ✅ Si Supabase échoue → Erreur retournée, pas d'email envoyé
- ✅ Si l'email de confirmation échoue → Pas de problème, l'email de notification est quand même envoyé
- ✅ Si l'email de notification échoue → Pas de problème, le visiteur reçoit quand même sa confirmation
- ✅ Si le logging échoue → Pas de problème, les emails sont quand même envoyés

---

## 🎨 Personnalisation des templates

### Modifier les emails

Éditez le fichier `src/lib/email-templates.tsx` :

**Email de confirmation** : Lignes 9-105

- Changez les couleurs dans le `<style>`
- Modifiez les textes dans le `<body>`
- Ajoutez votre logo si nécessaire

**Email de notification** : Lignes 117-280

- Changez le design selon vos préférences
- Ajoutez/supprimez des champs affichés

### Modifier l'adresse admin

Dans `.env.local`, changez :

```env
ADMIN_EMAIL=votre-nouvelle-adresse@example.com
```

---

## 📈 Suivi et analytics

### Vérifier les emails envoyés dans Supabase

Requête SQL pour voir les statistiques :

```sql
SELECT
  COUNT(*) as total_submissions,
  SUM(CASE WHEN email_sent_confirmation THEN 1 ELSE 0 END) as confirmations_sent,
  SUM(CASE WHEN email_sent_notification THEN 1 ELSE 0 END) as notifications_sent
FROM contact_submissions
WHERE created_at > NOW() - INTERVAL '30 days';
```

### Dashboard Resend

Consultez [Resend Dashboard](https://resend.com/emails) pour :

- Voir tous les emails envoyés
- Taux de délivrabilité
- Erreurs d'envoi
- Analytics détaillés

---

## 🔧 Dépannage

### Les emails n'arrivent pas

1. **Vérifiez votre clé API** dans `.env.local`
2. **Vérifiez le domaine** configuré sur Resend
3. **Consultez les logs** dans la console du serveur
4. **Vérifiez les spams** dans votre boîte mail
5. **Consultez Resend Dashboard** pour voir les erreurs

### Les emails partent mais ne sont pas reçus

- Vérifiez que votre domaine est bien vérifié sur Resend
- Vérifiez vos enregistrements DNS (SPF, DKIM, DMARC)
- Contactez le support Resend si nécessaire

### Erreur "Invalid API Key"

- Vérifiez que `RESEND_API_KEY` est bien dans `.env.local`
- Redémarrez le serveur de développement (`npm run dev`)
- Vérifiez que la clé est valide sur [Resend API Keys](https://resend.com/api-keys)

---

## 🎯 Checklist de mise en production

- [ ] Migrer la base de données Supabase (ajouter les colonnes de tracking)
- [ ] Vérifier votre domaine sur Resend
- [ ] Mettre à jour les adresses `from` dans l'API route
- [ ] Tester l'envoi avec plusieurs adresses email
- [ ] Vérifier les emails dans les spams
- [ ] Configurer les enregistrements DNS (SPF, DKIM, DMARC)
- [ ] Surveiller le dashboard Resend pendant les premiers jours
- [ ] Tester le formulaire sur mobile et desktop

---

## 📞 Support

- **Documentation Resend** : https://resend.com/docs
- **Dashboard Resend** : https://resend.com/emails
- **API Keys Resend** : https://resend.com/api-keys
- **Support Resend** : https://resend.com/support

---

**🎉 Votre système d'envoi d'emails est maintenant professionnel, automatisé et robuste !**

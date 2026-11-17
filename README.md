# MONDO — Ton alternative gratuite à Nibble

MONDO est une application web progressive (PWA), **sans abonnement, publicité, suivi publicitaire, compte ni service payant**. Elle est pensée pour une séance quotidienne de microlearning, avec un catalogue libre.

## Ce qui fonctionne dès maintenant

- **24 leçons originales** réparties en quatre thèmes (géopolitique, histoire, économie, sciences & idées), avec trois niveaux de difficulté.
- **72 questions de quiz**, chacune avec une explication de la bonne réponse.
- **Diagnostic de 8 questions** pour estimer le niveau de départ par thème.
- **Leçon du jour** : suggestion choisie selon les centres d'intérêt, le niveau estimé et les leçons déjà réalisées.
- **Catalogue** : filtres par thème, recherche, leçons terminées.
- **Répétition espacée** : chaque question de quiz devient une carte à revoir à J+1. Une réponse juste augmente l'intervalle (3, 7, 14 puis 30 jours) ; une erreur reprogramme au lendemain.
- **Suivi personnel** : progression, points XP, série de jours, maîtrise par thème.
- **Sauvegarde locale** + export / import d'un fichier JSON depuis le profil.
- **Mode hors ligne** après une première visite sur une version hébergée en HTTPS et mise en cache.

Les leçons sont incluses *dans le code de l'application*. Elles ne sont pas générées par une API, donc la plateforme fonctionne sans coût d'IA, mais **n'ajoute pas automatiquement des cours inédits chaque jour**. Une fois les 24 cours terminés, ils restent accessibles pour révision. Les informations de géopolitique sont pédagogiques et ne se mettent pas à jour en temps réel.

## Essayer immédiatement

Ouvre le fichier `MONDO_version_autonome.html` fourni séparément dans Chrome ou un autre navigateur moderne. Cette version est contenue dans un fichier unique, utile pour découvrir l'interface. Selon les restrictions de ton téléphone, l'ouverture d'un fichier local peut limiter la sauvegarde de la progression. Pour la conserver durablement et installer MONDO, utilise plutôt la PWA.

## Installer gratuitement comme une application sur Android

1. Crée un compte GitHub gratuit, si tu n'en as pas.
2. Dans GitHub, crée un **nouveau dépôt public** (par exemple `mondo`). Le dépôt contient seulement du code pédagogique, jamais ta progression personnelle.
3. Décompresse `MONDO_application_PWA.zip` sur ton ordinateur. Dans le dépôt, utilise **Add file → Upload files** pour envoyer `index.html`, `app.js`, `lessons.js`, `manifest.webmanifest`, `sw.js`, et le dossier `icons/` avec ses trois fichiers. Puis valide l'envoi (Commit changes).
4. Ouvre **Settings → Pages**. Dans **Build and deployment**, choisis **Deploy from a branch**, puis la branche `main`, dossier `/(root)` et **Save**.
5. GitHub affichera l'URL de ton site dans la page Pages une fois publié. Ouvre **ton URL** avec Chrome sur Android.
6. Dans Chrome, touche le menu **⋮ → Ajouter à l'écran d'accueil**, puis **Installer** si cette option est proposée.
7. Lance MONDO depuis son icône. Après le premier chargement réussi, les cours sont mis en cache pour fonctionner hors ligne.

**Coût : 0 €** avec l'offre gratuite de GitHub Pages pour un dépôt public. Aucun domaine personnalisé, abonnement, serveur, base de données ni clé API n'est nécessaire.

### Sauvegarde de la progression

Le menu **Profil → Exporter** télécharge `mondo-progression-AAAA-MM-JJ.json`. Conserve ce fichier. **Profil → Importer** restaure les résultats sur une autre installation. Ne vide pas les données de Chrome sans avoir exporté ta progression.

## Fichiers

- `index.html` : interface de l'application et styles.
- `lessons.js` : contenu pédagogique et questions ; modifiable pour enrichir le catalogue.
- `app.js` : navigation, calendrier de révision, quiz, recommandations et sauvegarde.
- `manifest.webmanifest` : installation de la PWA.
- `sw.js` : mise en cache pour le mode hors ligne.
- `icons/` : icônes de l'application.

## Limites de cette première version

- Pas de notifications programmées par Android : ouvrir l'application suffit pour afficher les révisions dues.
- Pas de synchronisation entre téléphone et ordinateur : utilise Exporter / Importer.
- Pas de contenu dynamique ni de veille d'actualité intégrée ; il faut ajouter de nouveaux cours dans `lessons.js`.
- Le niveau est une **estimation simplifiée** qui évolue selon le diagnostic et les derniers quiz ; il ne s'agit pas d'une mesure psychométrique validée.
- Un site GitHub Pages d'un dépôt public peut être consulté par quiconque connaît son adresse ; les résultats personnels ne sont pas publiés, puisqu'ils restent dans le navigateur.

Version 1 — 16 novembre 2026.

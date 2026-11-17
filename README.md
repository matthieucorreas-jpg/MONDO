# MONDO v2.1 — Une carte plus lisible et un quiz plus exigeant

Cette mise à jour conserve les **24 leçons originales**, le diagnostic, le catalogue, les quiz, les révisions espacées et les données personnelles stockées sur ton appareil. Elle ajoute **3 leçons premium** de 8 écrans chacune, soit **24 écrans illustrés originaux**, et des quiz plus exigeants (79 questions au total, dont 6 sur les taux d’intérêt).

### Leçons enrichies
- **Géopolitique :** Pourquoi le détroit d’Ormuz est stratégique ; carte schématique, flux d’énergie 2025, routes, alternatives, propagation du risque.
- **Histoire :** 1453, la chute de Constantinople ; plan schématique, frise, siège, Corne d’Or, héritage et nuance historique.
- **Économie :** Comment les taux d’intérêt freinent l’inflation ; transmission monétaire, simulation de prêt à 2 % et 5 %, désinflation et délais.

Les 24 visuels sont codés directement dans `visuals.js` en SVG, sans réseau, abonnement ou API. Les chiffres de l’énergie correspondent à l’année **2025** et non au trafic en temps réel. Chaque leçon inclut des liens vers des sources de référence.

## Mise à jour de ton dépôt GitHub

1. **Avant toute manipulation**, ouvre MONDO → Mon parcours → **Exporter** afin de garder une copie de ta progression.
2. Télécharge et décompresse `MONDO_v2_1_MAJ_GitHub.zip`.
3. Dans le dépôt GitHub `matthieucorreas-jpg/MONDO`, choisis **Add file → Upload files**. Glisse les fichiers à la racine : `lessons.js`, `visuals.js`, `app.js`, `sw.js` et `README.md` (5 fichiers). Valide **Commit changes**. GitHub Pages reste actif : **aucun changement dans Settings → Pages**.
4. Consulte l’adresse `https://matthieucorreas-jpg.github.io/MONDO/`. Si l’ancienne version reste visible, ferme l’application, ouvre l’adresse dans Chrome, recharge deux fois, puis relance MONDO. Le nouveau service worker remplace son cache hors ligne à l’installation.
5. Vérifie le catalogue : les trois sujets enrichis sont visibles. Tes leçons déjà faites restent enregistrées : le stockage local `mondo_learning_v1` n’a pas été modifié.

Si tu importes les fichiers via l’interface GitHub web, **ne glisse pas le ZIP lui-même** ; extrais son contenu. Les icônes existantes ne sont pas à remplacer dans cette mise à jour.

## Fichiers

- `index.html` : style et mise en page des leçons enrichies ; charge `visuals.js`.
- `visuals.js` : illustrations vectorielles originales (24 schémas).
- `lessons.js` : contenus pédagogiques, quiz et sources.
- `app.js` : lecteur enrichi, zoom sur les visuels, quiz, révisions et sauvegarde.
- `sw.js` : cache hors ligne version 2.
- `README.md` : ce guide.

## Confidentialité et limites

Aucun compte ni connexion à un serveur n’est nécessaire pour utiliser MONDO. GitHub Pages sert uniquement les fichiers. La progression est conservée sur le **même navigateur / profil d’application** ; elle n’est pas automatiquement synchronisée entre appareils. Les anciennes révisions et les points XP sont conservés. Pour ajouter des leçons, on enrichira progressivement la bibliothèque au même format.

Sources de référence : AIE, EIA, Metropolitan Museum of Art, Banque centrale européenne.
Version : 17 novembre 2026.


## Ajustements de la v2.1
- **Ormuz** : illustration d’ouverture remplacée par une véritable lecture géographique schématique, avec les deux golfes, l’Iran, les Émirats, Oman et le passage mis en évidence ; zoom cartographique amélioré. Croquis pédagogique et non carte de navigation.
- **Taux d’intérêt** : quiz de 6 questions au lieu de 5, axé sur des raisonnements, l’inflation attendue, les emprunts à taux fixe, le cumul d’inflation, les anticipations de marché et la rentabilité des investissements. Deux paragraphes de la leçon ont été complétés pour préparer ces questions.
- Les identifiants de leçons et le format de sauvegarde ne changent pas. Si tu avais déjà fini la leçon sur les taux, refais-la pour débloquer la nouvelle question de révision ; les anciennes cartes restent programmées.
- Le service worker utilise un nouveau cache (`mondo-v2-1-20261117`) pour diffuser les modifications hors ligne.

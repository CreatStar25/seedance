---
title: "Seedance 2.0 : analyse complète des entrées multimodales"
description: "Texte, image, audio et vidéo dans Seedance 2.0, système @ et jusqu'à 12 fichiers de référence. Tutoriel Seedance pour la vidéo IA multimodale."
tags: ["Seedance 2.0","Tutoriel Seedance","Version chinoise Seedance"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "fr"
---

Si vous créez encore de la vidéo IA avec « prompts texte uniquement et rerolls sans fin », vous manquez probablement la mise à niveau centrale de **Seedance 2.0**. Construit sur une architecture audio-vidéo multimodale unifiée, Seedance 2.0 accepte texte, images, audio et vidéo dans un seul flux — jusqu'à **12 fichiers de référence** à la fois (9 images + 3 vidéos + 3 pistes audio + instructions en langage naturel). Pour les créateurs qui doivent contrôler l'apparence, le mouvement de caméra et la synchro AV, l'entrée multimodale n'est pas un bonus — elle affecte directement la qualité.

![Seedance 2.0 : analyse complète des entrées multimodales](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Ce **tutoriel Seedance** détaille les quatre modalités d'entrée, le système de références @ et les scénarios de production courants — y compris via l'interface **version chinoise Seedance**.

## 1. Pourquoi l'entrée multimodale compte maintenant

De nombreux outils antérieurs n'acceptaient que le texte. Plus la description est fine, plus le modèle devait deviner — apparence, mouvements de caméra, tempo musical. En production réelle, les équipes ont déjà des planches look, des clips de référence, du BGM ou une voix off qu'elles ne pouvaient pas injecter directement.

**Seedance 2.0** place quatre modalités sur un même chemin de génération : le modèle lit sémantique textuel, visuels image, mouvement vidéo et langage caméra, plus le rythme audio, puis produit une vidéo avec pistes audio natives. Par rapport à 1.5, les scènes d'interaction et de mouvement complexes sont plus exploitables — plus proches des flux pub, court-métrage et social.

## 2. Quatre modalités d'entrée expliquées

### 2.1 Texte : exprimer clairement l'intention

Le texte reste la base ; Seedance 2.0 gère mieux les longues instructions, listes de plans et mots-clés de style. Vous pouvez :

- rédiger des récits de scène complets (sujet, environnement, action, caméra, style) ;
- utiliser des descriptions multi-plans type storyboard ;
- associer des références **@** pour attribuer un rôle à chaque asset.

Exemple : « @Image1 pour le visage du personnage, @Video1 pour le mouvement de suivi, @Audio1 en musique de fond — le personnage traverse un marché de nuit néon, la caméra suit par l'arrière, puis se tourne vers l'objectif en souriant. »

### 2.2 Images : verrouiller personnage et style visuel

Les images sont la référence la plus courante. Après upload de planches look, scènes, VI de marque ou style plates, le modèle extrait visage, tenue, couleur et composition et les maintient relativement stables.

| Usage typique | Notes |
| :--- | :--- |
| Look personnage | Reproduire visage et tenue sur les plans |
| Référence scène | Fixer environnement, lumière et palette |
| Planche de style | Unifier visuels pub et e-commerce |
| Première image | Contrôler la composition d'ouverture |

Jusqu'à **9 images** ; JPG, PNG, WebP.

### 2.3 Audio : rythme, dialogue et ambiance

Seedance 2.0 accepte l'audio uploadé et peut produire des pistes synchronisées natives. L'audio sert pour :

- **Musique de fond** : montage et rythme calés sur le beat ;
- **Voix off / dialogue** : lip-sync (mandarin, cantonais, anglais, etc.) ;
- **SFX d'ambiance** : atmosphère renforcée.

Jusqu'à **3 pistes audio**, durée totale typiquement ≤ 15 secondes ; MP3, WAV, M4A.

### 2.4 Vidéo : référence visuelle pour caméra et mouvement

Les clips de référence fournissent mouvement de caméra, action, rythme et style VFX — sans tout traduire en texte. Cas courants :

- caméra de suivi, orbite, travelling, push-pull ;
- chorégraphie danse ou action ;
- prolonger ou compléter des scènes existantes.

Jusqu'à **3 vidéos**, limites par clip et total (typiquement ≤ 15 s) ; MP4, MOV.

## 3. Système de références @ : attribuer une tâche à chaque asset

Les **références @** rendent l'entrée multimodale pratique. Après upload, marquez `@Image1`, `@Video1`, `@Audio1` dans le prompt pour que le modèle connaisse le rôle de chaque fichier.

| Tag | Rôle courant |
| :--- | :--- |
| @Image1 | Visage / tenue / scène |
| @Video1 | Mouvement caméra / tempo action |
| @Audio1 | BGM / voix off lip-sync |
| Texte | Histoire, style, durée |

**Exemple combiné** (image + vidéo + audio) :

```
Utiliser le cadrage à la première personne de @Video1 partout.
@Audio1 en musique de fond, montage sur le beat.
Le personnage de @Image1 traverse un marché néon, caméra suit par l'arrière,
style de mouvement de @Video1 — pause, tour, sourire.
Look nocturne cinématographique, couleurs riches, faible profondeur de champ.
```

Des rôles @ clairs améliorent fortement la contrôlabilité.

## 4. Spécifications clés en un coup d'œil

| Élément | Spec |
| :--- | :--- |
| Modalités d'entrée | Texte + image + vidéo + audio |
| Plafond de fichiers | 12 au total (9 images + 3 vidéos + 3 audio) |
| Durée du clip | 4–15 secondes |
| Résolution | 480p / 720p / 1080p (Pro jusqu'à 2K) |
| Formats | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sync AV native, lip-sync multilingue |
| Images/s | 24 ips |

## 5. Trois scénarios de production courants

### 5.1 Contenu court et social

Les équipes ont souvent besoin de volume avec la même IP et le même look. Verrouiller le personnage par image, le langage caméra par vidéo de référence, varier les scripts en texte — itérer plus vite avec moins de rerolls.

### 5.2 Assets marketing de marque

Les marques exigent la cohérence VI. Logo, visuels clés et planches de style plus prompts texte pour des clips pub ou social au ton unifié — plus fiable que le texte seul.

### 5.3 Vidéo éducative et knowledge

Uploader l'audio de cours ou narration pour des visuels lip-sync ; ajouter des images de scène — contenu pédagogique multimodal à moindre coût.

## 6. Démarrage : workflow en quatre étapes

1. **Définir le livrable** : pub, court métrage, clip social ; durée et format.
2. **Préparer les références** : personnage, caméra, BGM selon besoin — pas besoin des 12 fichiers à chaque fois.
3. **Écrire prompt + @** : histoire d'abord, puis lier chaque asset ; éviter les consignes contradictoires.
4. **Itérer petit** : générer 4–6 s pour valider personnage et caméra, puis étendre à 10–15 s.

## FAQ

**Q : Dois-je utiliser les quatre modalités ?**  
R : Non. Le texte seul fonctionne ; une ou deux images suffisent. Combinez selon le besoin.

**Q : Comment les numéros @ sont-ils mappés ?**  
R : Par ordre d'upload — première image = @Image1, première vidéo = @Video1, etc. Gardez la numérotation cohérente dans le prompt.

**Q : Les images garantissent-elles 100 % de cohérence ?**  
R : La cohérence multi-plans dépasse largement le texte seul ; les scènes multi-sujets ou angles extrêmes peuvent encore dériver — utilisez un jeu de test fixe.

**Q : L'audio uploadé apparaît-il dans le clip final ?**  
R : Le modèle peut suivre le rythme audio et aussi générer dialogue, SFX et musique natifs selon le prompt et le mode.

---

Prêt à tester l'entrée multimodale ? Utilisez le bouton ci-dessous pour ouvrir **Seedance 2.0** — workflow multimodal complet, y compris l'interface **version chinoise Seedance**.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/fr/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Commencer avec Seedance 2.0</a></div>

**Recherches associées** : Seedance 2.0, tutoriel Seedance, version chinoise Seedance, vidéo IA multimodale, prompts @ référence.

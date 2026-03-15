---
title: "Guide des prompts Seedance 2.0 et manuel d'utilisation"
description: "Comment écrire les prompts Seedance 2.0 ? Manuel complet : référence multimodale, syntaxe @, caméra et mouvement, extension et montage vidéo. Bonnes pratiques des prompts Seedance 2.0."
pubDate: "2026-03-15"
heroImage: "https://img.seedance22.com/aiweb/seedance-1.mp4"
---

Seedance 2.0 est un modèle de génération vidéo IA qui accepte image, vidéo, audio et texte pour un contrôle plus riche. Ce guide explique **comment écrire les prompts Seedance 2.0** et obtenir les meilleurs résultats.

## 1. Paramètres et capacités de Seedance 2.0

| Dimension | Spécification |
|-----------|---------------|
| Entrée image | ≤ 9 images |
| Entrée vidéo | ≤ 3 clips, total ≤ 15 s |
| Entrée audio | MP3, ≤ 3 fichiers, total ≤ 15 s |
| Entrée texte | Prompts en langage naturel |
| Durée de sortie | 4–15 s sélectionnable |
| Sortie son | SFX/musique intégrés |

Les entrées mixtes sont limitées à 12 fichiers au total ; priorise les assets qui influencent le plus l’image et le rythme.

<video src="https://img.seedance22.com/aiweb/seedance-1.mp4" controls width="100%"></video>

## 2. Capacités : stable, fluide, réaliste

Seedance 2.0 améliore la physique, la fluidité du mouvement, le suivi des consignes et la cohérence de style, donc gère bien les mouvements complexes et continus.

**Exemple de prompt :**  
Une fille accroche le linge avec élégance, puis prend un autre vêtement dans le seau et le secoue fermement.

<video src="https://img.seedance22.com/aiweb/seedance-2.mp4" controls width="100%"></video>

## 3. Multimodal et rédaction des prompts Seedance 2.0

### 3.1 Référence multimodale

Tu peux envoyer du texte, des images, de la vidéo et de l’audio comme ressource principale ou de référence. Dans ton **prompt Seedance 2.0**, décris clairement quoi référencer (mouvement, effets, caméra, personnage, scène, son).

- Images de référence : composition et détail du personnage  
- Vidéo de référence : langage de caméra, rythme du mouvement, effets créatifs  
- La vidéo peut être prolongée et enchaînée (« continuer à tourner »)  
- Montage : remplacer un personnage, couper, ajouter

Avec beaucoup de ressources, utilise **@image1**, **@video1**, etc. dans le prompt pour que le modèle sache quoi est quoi.

### 3.2 Schémas de prompts courants

- **Première/dernière image + mouvement de la vidéo de référence**  
  « @image1 comme première image, référencer le mouvement de combat de @video1 »

- **Prolonger une vidéo existante**  
  « Prolonger @video1 de 5 secondes » (règle la durée de sortie sur la nouvelle partie seulement, ex. 5 s)

- **Fusionner plusieurs vidéos**  
  « Ajouter une scène entre @video1 et @video2, contenu : … »

- **Action continue**  
  « Le personnage enchaîne du saut au roulé, garder le mouvement fluide, @image1 @image2 @image3 »

### 3.3 Cohérence, caméra et réplication créative

Seedance 2.0 garde les visages, vêtements, scènes et style de caméra cohérents et peut répliquer des cadrages et mouvements complexes à partir de références. Pour des transitions créatives, des plans type pub ou des extraits de film, écris dans le prompt « référencer le rythme et la caméra de @video1, personnage de @image1 ».

## 4. Résumé

**Écrire des prompts Seedance 2.0** revient à : indiquer clairement quoi référencer et quoi faire, et utiliser @ pour lier les assets. Entrées multimodales et consignes précises rendent la création plus contrôlable et efficace.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://creat.seedance22.com/generate/video-tools/seedance2.0" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);">Commencer avec Seedance</a>
</div>

---
title: "Guía definitiva de prompts Seedance 2.0 y manual de uso"
description: "¿Cómo escribir prompts de Seedance 2.0? Manual completo: referencia multimodal, sintaxis @, cámara y movimiento, extensión y edición de video. Mejores prácticas de prompts Seedance 2.0."
pubDate: "2026-03-15"
heroImage: "https://img.seedance22.com/aiweb/seedance-1.mp4"
---

Seedance 2.0 es un modelo de generación de video IA que admite imagen, video, audio y texto para un control más rico. Esta guía explica **cómo escribir prompts de Seedance 2.0** y sacar el mejor resultado.

## 1. Parámetros y capacidades de Seedance 2.0

| Dimensión | Especificación |
|-----------|----------------|
| Entrada de imagen | ≤ 9 imágenes |
| Entrada de video | ≤ 3 clips, total ≤ 15 s |
| Entrada de audio | MP3, ≤ 3 archivos, total ≤ 15 s |
| Entrada de texto | Prompts en lenguaje natural |
| Duración de salida | 4–15 s seleccionable |
| Salida de sonido | Efectos/música integrados |

Las entradas mixtas están limitadas a 12 archivos en total; prioriza los recursos que más afecten la imagen y el ritmo.

<video src="https://img.seedance22.com/aiweb/seedance-1.mp4" controls width="100%"></video>

## 2. Capacidades principales: estable, fluido, realista

Seedance 2.0 mejora la física, la fluidez del movimiento, el seguimiento de instrucciones y la consistencia de estilo, por lo que maneja bien movimientos complejos y continuos.

**Ejemplo de prompt:**  
Una chica cuelga la ropa con elegancia, luego toma otra prenda del cubo y la sacude con fuerza.

<video src="https://img.seedance22.com/aiweb/seedance-2.mp4" controls width="100%"></video>

## 3. Multimodal y redacción de prompts Seedance 2.0

### 3.1 Referencia multimodal

Puedes subir texto, imágenes, video y audio como recurso principal o de referencia. En tu **prompt de Seedance 2.0** describe con claridad qué referenciar (movimiento, efectos, cámara, personaje, escena, sonido).

- Imágenes de referencia: composición y detalle del personaje  
- Video de referencia: lenguaje de cámara, ritmo de movimiento, efectos creativos  
- El video se puede extender y enlazar (“seguir rodando”)  
- Edición: sustituir personaje, recortar, añadir

Con muchos recursos, usa **@image1**, **@video1**, etc. en el prompt para que el modelo sepa cuál es cuál.

### 3.2 Patrones habituales de prompt

- **Primer/último fotograma + movimiento de video de referencia**  
  “@image1 como primer fotograma, referenciar movimiento de pelea de @video1”

- **Extender video existente**  
  “Extender @video1 5 segundos” (pon la duración de salida solo a la parte nueva, p. ej. 5 s)

- **Fusionar varios videos**  
  “Añadir una escena entre @video1 y @video2, contenido: …”

- **Acción continua**  
  “El personaje pasa del salto al giro de forma fluida, @image1 @image2 @image3”

### 3.3 Consistencia, cámara y replicación creativa

Seedance 2.0 mantiene caras, ropa, escenas y estilo de cámara consistentes y puede replicar planos y movimientos complejos a partir de referencias. Para transiciones creativas, planos tipo anuncio o fragmentos de película, escribe en el prompt “referenciar ritmo y cámara de @video1, personaje de @image1”.

## 4. Resumen

Escribir **prompts de Seedance 2.0** se reduce a: indicar con claridad qué referenciar y qué hacer, y usar @ para vincular recursos. Entradas multimodales e instrucciones precisas hacen la creación más controlable y eficiente.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/generate/video-tools/seedance2.0" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);">Empezar con Seedance</a>
</div>

---
title: "He Usado Seedance 2.0 Durante Veinte Días, Te Recomiendo Guardar Este Conjunto de Fórmulas de Prompts"
description: "Resumen de la experiencia real de veinte días usando Seedance 2.0, la fórmula universal de prompts más estable, tres plantillas directamente copiables, y varios consejos contraintuitivos de los errores que he cometido para ayudarte a evitar desvíos."
pubDate: "2026-04-27"
heroImage: "https://img.seedance22.com/aiweb/seedance22-260427-2.png"
---

He seguido la pista de la generación de videos durante casi tres años, empezando por Runway Gen-2, probando hasta Sora, Kling, Veo, he usado casi todas las herramientas principales del mercado. He escuchado demasiados lemas "revolucionarios" a lo largo de los años, pero la mayoría se ven increíbles en las demos y se desmoronan cuando las usas tú mismo.

Así que cuando salió Seedance 2.0, no me apresuré a escribir una reseña. Lo usé intensivamente durante dos semanas, hice unos cincuenta videos, cometí muchos errores, y hoy estoy compilando la experiencia práctica realmente útil.

Primero, la conclusión: esta herramienta es realmente buena, pero solo si sabes escribir prompts.

![Experiencia de 20 días usando Seedance 2.0](https://img.seedance22.com/aiweb/seedance22-260427-2.png)

## 1. Primero Entiende Qué Hace Especial a Seedance 2.0

Dejando de lado otras características, hay dos puntos que son los más prácticos para los creadores ordinarios:

Primero, admite cuatro tipos de entrada: imagen, video, audio y texto. Puedes referenciar cualquier contenido cargado en lenguaje natural: acciones, efectos, movimientos de cámara, personajes, escenas, incluso sonidos.

En lenguaje sencillo: antes, cuando tenías una imagen en la cabeza, tenías que traducirla a "hechizos" que el modelo pudiera entender. Ahora puedes simplemente enviar los materiales y decirle "referencia el movimiento de cámara de este video, el personaje de esta imagen", y entenderá tus necesidades con precisión.

El límite oficial es un máximo de 9 imágenes, 3 videos (duración total no superior a 15 segundos), 3 archivos de audio, sumando no más de 12 materiales. Para la mayoría de escenarios, 3-5 imágenes + 1 video de referencia son suficientes, agregar demasiados tiende a generar conflictos de señal.

Otro punto que no noté al principio pero que resultó extremadamente satisfactorio después de usarlo: las herramientas anteriores de generación de videos producen primero las imágenes y agregan el audio después, pero Seedance 2.0 genera audio y video simultáneamente a través de una arquitectura Transformer de difusión de doble rama.

¿Qué significa eso? Escribes "una chica en un café sonriendo y diciendo 'hoy hace muy buen tiempo'", y el video que obtienes tendrá los movimientos de labios coincidentes, los sonidos ambientales (máquina de café, susurros de conversación) todos incluidos, incluso la música de fondo ya estará combinada para ti. Antes, este proceso tomaba media hora en CapCut, ahora se hace de una sola vez.

## 2. La Fórmula Universal Que Uso Todos los Días Ahora

Después de probar con tantos videos, la estructura de prompts más estable que he resumido es esta:

**Sujeto + Escena + Acción + Iluminación + Lenguaje de Cámara + Estilo + Restricciones**

Suena complicado, pero es simplemente dividir una imagen en 7 elementos. Tomemos un ejemplo, lo entenderás inmediatamente:

> Una joven usando un jersey de punto beige, sentada en una mesa de madera junto a la ventana (sujeto + escena), sosteniendo un café caliente con ambas manos, soplando suavemente el vapor de la boca de la taza, luego levantando la vista para mirar por la ventana (acción), la luz del sol de la tarde filtrándose por las persianas sobre su rostro, formando luces y sombras moteadas (iluminación), la cámara avanzando lentamente desde un plano medio lateral hasta un primer plano facial (lenguaje de cámara), estilo cinematográfico fresco japonés, tonos cálidos, grano de película (estilo), imagen estable y fluida, detalles nítidos, evitar deformidades en las manos (restricciones)

Si introduces esto directamente en Seedance, el video generado básicamente estará listo para usar de inmediato.

## 3. Varios Puntos Muy Contraintuitivos, He Cometido Todos Estos Errores

### 1. No Traduzcas el Chino a Inglés

Estaba escribiendo prompts en inglés la primera semana, pensando que, al igual que Midjourney, el inglés funciona mejor. Resulta que Seedance 2.0 no tiene este problema en absoluto, no hay necesidad de traducir los prompts en chino a inglés, es una completa pérdida de tiempo.

Simplemente escribe directamente en chino, y cuanto más coloquial, más preciso: "una chica se peina el pelo elegantemente" da resultados más precisos que "a girl elegantly touches her hair", porque sus datos de entrenamiento son principalmente en chino.

### 2. Palabras Como "Bonito", "Hermoso", "Premium" Equivalen a No Decir Nada

Los prompts vagos solo producen resultados impredecibles. En lugar de escribir "ciudad de noche", escribe "escena nocturna ciberpunk, luces de neón reflejadas en calles mojadas, coches voladores en el fondo, lloviendo".

El principio es simple: tienes que escribir cosas que se puedan ver realmente visualmente, no sentimientos subjetivos de tu mente.

### 3. Las Descripciones de Acción Deben Escribirse Como Guiones Gráficos, No Como Historias

Este es el punto que más quiero enfatizar. Palabras como "bailar", "caminar", "reír" son básicamente inútiles, tienes que escribir de forma más específica:

❌ Ejemplo incorrecto: Chica bailando
✅ Ejemplo correcto: La chica saca primero el pie izquierdo, manos extendidas naturalmente, la falda ondea al girar, finalmente se detiene y posiciona de perfil

Principio fundamental: Escribe los prompts como guiones gráficos, no como historias. Cada oración debe describir contenido específico que se pueda observar en la imagen. Tengo esta frase pegada en mi monitor para leerla todos los días.

## 4. Tres Plantillas Listas Para Usar, Copia y Listo

He compilado plantillas para tres escenarios de uso de alta frecuencia. Simplemente copia directamente y ajusta el contenido según sea necesario.

### Plantilla 1: Primer Plano Emocional de Personaje (Adecuado para videos de avatar, pantallas de inicio)
> Una chica de pelo largo apoyada en una ventana de suelo a techo, vistiendo una camisa de algodón blanca, bajando ligeramente la cabeza, la mano derecha apartando suavemente un mechón de pelo caído, luego levantando lentamente la cabeza para mirar a la cámara, las comisuras de los labios se elevan naturalmente en una sonrisa suave, la luz suave de la mañana se filtra por las cortinas transparentes, formando una luz difusa delicada en su rostro, la cámara avanza suavemente desde un plano medio hasta un primer plano facial, profundidad de campo baja, estilo de retrato japonés cinematográfico, tonos cremosos, textura de piel realista, imagen fluida sin temblores, evitar distorsiones faciales.

### Plantilla 2: Paisaje con Atmósfera (Adecuado para encabezados de Vlog, materiales de fondo)
> Orilla del Lago Oeste de Hangzhou en una mañana de otoño, fina niebla cubriendo el agua, los Tres Espejos de la Luna visibles de forma tenue en la distancia, un viejo sauce llorón en la orilla colgando sobre el agua, varias hojas caídas flotando lentamente sobre el agua, creando pequeñas ondas, la cámara se eleva lentamente desde un ángulo bajo sobre el agua, pasando por las ramas de sauce, finalmente se congela en la vista del lago a lo lejos, estilo de pintura de paisaje tradicional china, tonos de tinta china, luz dorada matutina, imagen tranquila y sobria, detalles ricos, evitar temblores de cámara.

### Plantilla 3: Exhibición de Productos (Mejor para comercio electrónico, Xiaohongshu)
> Un frasco de aceite esencial de color ámbar con gotero reposando sobre una encimera de mármol oscuro, flores secas y un libro viejo abierto colocados casualmente al lado, la cámara gira lentamente 360 grados alrededor del frasco, la luz superior se filtra por las persianas formando haces de luz oblicuos, un halo cálido se refleja en el cuerpo del frasco, estilo de película publicitaria de alta gama, estilo retro de tono oscuro, colores ricos y saturados, imagen exquisita, producto claro sin distorsiones, sin marcas de agua de texto adicionales.

---

Dominando estas habilidades, básicamente evitarás el 80% de los errores, y la calidad de los videos generados mejorará significativamente. Si has usado otras herramientas de generación de videos por IA antes, creo que notarás una mejora de eficiencia significativa al usar Seedance 2.0.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/es/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(245,87,108,0.4);">Comienza a Usar Seedance 2.0</a>
</div>

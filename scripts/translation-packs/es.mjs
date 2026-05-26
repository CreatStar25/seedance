/** Translation pack: es */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const es = {
  title: "Seedance 2.0: análisis completo de entrada multimodal",
  description: "Texto, imagen, audio y vídeo en Seedance 2.0, sistema @ y hasta 12 archivos de referencia. Tutorial Seedance para vídeo IA multimodal.",
  tags: ["Seedance 2.0","Tutorial Seedance","Versión china Seedance"],
  alt: "Seedance 2.0: análisis completo de entrada multimodal",
  related: "**Búsquedas relacionadas**: Seedance 2.0, tutorial Seedance, versión china Seedance, vídeo IA multimodal, prompts @ referencia.",
  closing: "¿Listo para probar la entrada multimodal? Use el botón inferior para abrir **Seedance 2.0** — flujo multimodal completo, incluida la interfaz **versión china Seedance**.",
  main: [
    `Si aún crea vídeo IA con «prompts solo de texto y rerolls interminables», probablemente se pierde la mejora central de **Seedance 2.0**. Construido sobre una arquitectura audio-vídeo multimodal unificada, Seedance 2.0 acepta texto, imágenes, audio y vídeo en un solo flujo — hasta **12 archivos de referencia** a la vez (9 imágenes + 3 vídeos + 3 pistas de audio + instrucciones en lenguaje natural). Para creadores que deben controlar el aspecto del personaje, el movimiento de cámara y la sincronización AV, la entrada multimodal no es un extra: afecta directamente la calidad del resultado.

![Seedance 2.0: análisis completo de entrada multimodal](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Este **tutorial Seedance** explica las cuatro modalidades de entrada, el sistema de referencias @ y los escenarios de producción habituales — también a través de la interfaz **versión china Seedance**.`,
    `## 1. Por qué importa ahora la entrada multimodal

Muchas herramientas anteriores solo aceptaban texto. Cuanto más fina la descripción, más tenía que adivinar el modelo — apariencia, movimientos de cámara, tempo musical. En proyectos reales, los equipos ya tienen planches look, clips de referencia, BGM o voz en off que no podían alimentar directamente al modelo.

**Seedance 2.0** une cuatro modalidades en una ruta de generación: el modelo lee semántica de texto, visuales de imagen, movimiento de vídeo y lenguaje de cámara, más ritmo de audio, y produce vídeo con pistas de audio nativas. Frente a 1.5, las escenas de interacción y movimiento complejas son más utilizables — más cerca de flujos de publicidad, cortometraje y redes sociales.`,
    `## 2. Cuatro modalidades de entrada explicadas

### 2.1 Texto: exprese claramente la intención

El texto sigue siendo la base; Seedance 2.0 entiende mucho mejor instrucciones largas, listas de planos y palabras clave de estilo. Puede:

- escribir narrativas de escena completas (sujeto, entorno, acción, cámara, estilo);
- usar descripciones multi-plano tipo storyboard;
- asignar a cada recurso un rol con referencias **@**.

Ejemplo: «@Image1 para el rostro del personaje principal, @Video1 para movimiento de cámara en seguimiento, @Audio1 como música de fondo — el personaje recorre un mercado nocturno de neón, la cámara sigue por detrás, luego se gira sonriendo hacia la cámara.»

### 2.2 Imágenes: fijar personaje y estilo visual

Las imágenes son la referencia más habitual. Tras subir planches look, tableros de escena, VI de marca o placas de estilo, el modelo extrae rostro, vestuario, color y composición y los mantiene relativamente estables entre planos.

| Uso típico | Notas |
| :--- | :--- |
| Aspecto del personaje | Rostro y vestuario consistentes entre planos |
| Referencia de escena | Fijar entorno, iluminación y paleta |
| Placa de estilo | Unificar visuales de publicidad y e-commerce |
| Primer fotograma | Controlar composición de apertura |

Hasta **9 imágenes**; JPG, PNG, WebP.

### 2.3 Audio: ritmo, diálogo y ambiente

Seedance 2.0 acepta audio subido y puede generar pistas sincronizadas nativas. El audio se usa para:

- **Música de fondo**: montaje y ritmo alineados con el beat;
- **Voz en off/diálogo**: sincronización labial (mandarín, cantonés, inglés, etc.);
- **SFX ambientales**: mayor atmósfera.

Hasta **3 pistas de audio**, duración total normalmente dentro de 15 segundos; MP3, WAV, M4A.

### 2.4 Vídeo: referencia visual para cámara y movimiento

Los clips de referencia aportan movimiento de cámara, acción corporal, ritmo y estilo VFX — sin traducir todo al texto. Casos habituales:

- cámara de seguimiento, órbita, travelling o push-pull;
- coreografía de baile o acción;
- prolongar o completar escenas del metraje existente.

Hasta **3 vídeos**, límites por clip y total (normalmente ≤ 15 s); MP4, MOV.

En producción real, combine modalidades según el entregable: anuncios cortos suelen necesitar imagen + texto; clips musicales priorizan @Audio1; secuencias de acción benefician de @Video1. No hace falta subir los 12 archivos — empiece con lo esencial y añada referencias solo cuando el resultado se desvíe.`,
    `## 3. Sistema de referencias @: asignar una tarea a cada recurso

Las **referencias @** hacen práctica la entrada multimodal. Tras la subida, marque \`@Image1\`, \`@Video1\`, \`@Audio1\` en el prompt para que el modelo conozca el rol de cada archivo en lugar de adivinar.

| Etiqueta | Rol habitual |
| :--- | :--- |
| @Image1 | Rostro / vestuario / escena |
| @Video1 | Movimiento de cámara / ritmo de acción |
| @Audio1 | BGM / voz en off con lip-sync |
| Texto | Historia, estilo, duración |

**Ejemplo combinado** (imagen + vídeo + audio):

\`\`\`
Usar el encuadre en primera persona de @Video1 en todo el clip.
@Audio1 como música de fondo, montaje al ritmo del beat.
Personaje de @Image1 por mercado nocturno de neón, cámara sigue por detrás,
estilo de movimiento como en @Video1 — pausa, giro, sonrisa.
Look nocturno cinematográfico, color intenso, poca profundidad de campo.
\`\`\`

Roles @ claros mejoran mucho la controlabilidad.

Al construir prompts complejos, liste los roles @ antes de la narrativa para anclar referencias. En descripciones multi-plano, repita las etiquetas al cambiar de escena — p. ej. «@Image1 se mantiene en el plano 2» — para reducir deriva. Si el audio marca el ritmo, mencione «@Audio1 al beat»; para trabajo centrado en cámara, abra con el lenguaje de movimiento de @Video1 antes de la acción del sujeto. Pruebe primero clips de 4–6 s para validar que cada @ cumple su rol antes de extender a 15 s.`,
    `## 4. Especificaciones clave de un vistazo

| Elemento | Especificación |
| :--- | :--- |
| Modalidades de entrada | Texto + imagen + vídeo + audio |
| Límite de archivos de referencia | 12 en total (9 imágenes + 3 vídeos + 3 audio) |
| Duración del clip | 4–15 segundos |
| Resolución | 480p / 720p / 1080p (Pro hasta 2K) |
| Relaciones de aspecto | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sincronización AV nativa, lip-sync multilingüe |
| Cuadros por segundo | 24 fps |`,
    `## 5. Tres escenarios de producción habituales

### 5.1 Contenido corto y redes sociales

Los equipos suelen necesitar volumen con la misma IP y look. Fijar personaje con imágenes, lenguaje de cámara con referencia de vídeo, variar guiones en texto — iterar más rápido con menos rerolls.

### 5.2 Activos de marketing de marca

Las marcas exigen coherencia de VI. Logo, visuales clave y placas de estilo más prompts de texto generan clips publicitarios o sociales con tono unificado — más fiable que solo texto.

### 5.3 Vídeo educativo y de conocimiento

Subir audio de clase o narración para visuales con lip-sync; añadir imágenes de referencia de escena — contenido didáctico multimodal de bajo coste.`,
    `## 6. Primeros pasos: flujo en cuatro pasos

1. **Definir el entregable**: anuncio, corto, clip social; duración y relación de aspecto.
2. **Preparar referencias**: personaje, cámara, BGM según necesidad — no hace falta usar los 12 archivos cada vez.
3. **Escribir prompt + @**: primero la historia, luego vincular recursos; evitar instrucciones contradictorias.
4. **Iterar en pequeño**: 4–6 s para validar personaje y cámara, luego alargar a 10–15 s.`,
    `## Preguntas frecuentes

**P: ¿Debo usar las cuatro modalidades?**  
R: No. Solo texto funciona; una o dos imágenes bastan. Combine según necesidad.

**P: ¿Cómo se asignan los números @?**  
R: Por orden de subida — la primera imagen es @Image1, el primer vídeo @Video1, etc. Mantenga la numeración coherente en el prompt.

**P: ¿Las imágenes garantizan 100 % de coherencia?**  
R: La coherencia multi-plano supera con creces al solo texto; en escenas multi-sujeto o ángulos extremos puede haber desviación — use un conjunto de prueba fijo.

**P: ¿El audio subido aparece en el clip final?**  
R: El modelo puede seguir el ritmo y, según prompt y modo, también generar diálogo, SFX y música nativos.`,
  ],
};

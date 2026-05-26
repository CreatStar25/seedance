---
title: "Seedance 2.0: guia completo de entrada multimodal"
description: "Texto, imagem, áudio e vídeo no Seedance 2.0, sistema @ e até 12 ficheiros de referência. Tutorial Seedance para vídeo IA multimodal."
tags: ["Seedance 2.0","Tutorial Seedance","Versão chinesa Seedance"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "pt"
---

Se ainda cria vídeo IA com «prompts só de texto e rerolls intermináveis», provavelmente está a perder a atualização central do **Seedance 2.0**. Construído numa arquitetura áudio-vídeo multimodal unificada, o Seedance 2.0 aceita texto, imagens, áudio e vídeo num único fluxo — até **12 ficheiros de referência** de uma vez (9 imagens + 3 vídeos + 3 faixas de áudio + instruções em linguagem natural). Para criadores que precisam controlar aspeto do personagem, movimento de câmara e sync AV, a entrada multimodal não é extra — afeta diretamente a qualidade do resultado.

![Seedance 2.0: guia completo de entrada multimodal](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Este **tutorial Seedance** explica as quatro modalidades de entrada, o sistema de referências @ e cenários de produção comuns — também via interface **versão chinesa Seedance**.

## 1. Por que a entrada multimodal importa agora

Muitas ferramentas anteriores só aceitavam texto. Quanto mais fina a descrição, mais o modelo tinha de adivinhar — aspeto, movimentos de câmara, tempo musical. Em projetos reais, as equipas já têm look frames, clips de referência, BGM ou voiceover que não podiam alimentar diretamente o modelo.

**Seedance 2.0** coloca quatro modalidades num caminho de geração: o modelo lê semântica de texto, visuais de imagem, movimento de vídeo e linguagem de câmara, mais ritmo de áudio, e produz vídeo com faixas de áudio nativas. Face ao 1.5, cenas de interação e movimento complexas são mais utilizáveis — mais próximas de fluxos de publicidade, curta-metragem e social.

## 2. Quatro modalidades de entrada explicadas

### 2.1 Texto: expresse claramente a intenção

O texto continua a base; o Seedance 2.0 gere muito melhor instruções longas, listas de planos e palavras-chave de estilo. Pode:

- escrever narrativas de cena completas (sujeito, ambiente, ação, câmara, estilo);
- usar descrições multi-plano tipo storyboard;
- associar referências **@** para atribuir um papel a cada asset.

Exemplo: «@Image1 para o rosto do protagonista, @Video1 para movimento de câmara em follow, @Audio1 como música de fundo — o personagem percorre um mercado noturno de néon, a câmara segue por trás, depois vira-se a sorrir para a lente.»

### 2.2 Imagens: fixar personagem e estilo visual

As imagens são a referência mais comum. Após upload de look frames, boards de cena, VI de marca ou style plates, o modelo extrai rosto, vestuário, cor e composição e mantém-nos relativamente estáveis entre planos.

| Uso típico | Notas |
| :--- | :--- |
| Aspeto do personagem | Replicar rosto e roupa entre planos |
| Referência de cena | Fixar ambiente, luz e paleta |
| Style plate | Unificar visuais de publicidade e e-commerce |
| Primeiro frame | Controlar composição de abertura |

Até **9 imagens**; JPG, PNG, WebP.

### 2.3 Áudio: ritmo, diálogo e ambiente

O Seedance 2.0 aceita áudio carregado e pode produzir faixas sincronizadas nativas. O áudio serve para:

- **Música de fundo**: montagem e ritmo alinhados ao beat;
- **Voiceover/diálogo**: lip-sync (mandarim, cantonês, inglês, etc.);
- **SFX ambientais**: atmosfera de cena mais forte.

Até **3 faixas de áudio**, duração total normalmente dentro de 15 segundos; MP3, WAV, M4A.

### 2.4 Vídeo: referência visual para câmara e movimento

Clips de referência fornecem movimento de câmara, ação corporal, ritmo e estilo VFX — sem traduzir tudo para texto. Casos comuns:

- câmara follow, orbit, dolly ou push-pull;
- coreografia de dança ou ação;
- estender ou completar cenas de footage existente.

Até **3 vídeos**, limites por clip e total (normalmente ≤ 15 s); MP4, MOV.

Em produção real, combine modalidades conforme o deliverable: anúncios curtos costumam precisar de imagem + texto; clips musicais priorizam @Audio1; sequências de ação beneficiam de @Video1. Não precisa dos 12 ficheiros — comece pelo essencial e acrescente referências só quando o resultado desviar.

## 3. Sistema de referências @: atribuir uma tarefa a cada asset

As **referências @** tornam a entrada multimodal prática. Após upload, marque `@Image1`, `@Video1`, `@Audio1` no prompt para o modelo conhecer o papel de cada ficheiro em vez de adivinhar.

| Tag | Papel comum |
| :--- | :--- |
| @Image1 | Rosto / vestuário / cena |
| @Video1 | Movimento de câmara / tempo de ação |
| @Audio1 | BGM / voiceover lip-sync |
| Texto | História, estilo, duração |

**Exemplo combinado** (imagem + vídeo + áudio):

```
Usar enquadramento em primeira pessoa de @Video1 em todo o clip.
@Audio1 como música de fundo, montagem no beat.
Personagem de @Image1 num mercado noturno de néon, câmara segue por trás,
estilo de movimento como em @Video1 — pausa, viragem, sorriso.
Look noturno cinematográfico, cor rica, profundidade de campo reduzida.
```

Papéis @ claros melhoram muito a controlabilidade.

Em prompts complexos, liste papéis @ antes da narrativa para ancorar referências. Em descrições multi-plano, repita etiquetas ao mudar de cena — ex.: «@Image1 mantém-se no plano 2» — para reduzir deriva. Se o áudio marca o ritmo, mencione «@Audio1 no beat»; para trabalho centrado na câmara, abra com linguagem de movimento de @Video1 antes da ação do sujeito. Teste clips de 4–6 s primeiro para validar cada @ antes de estender a 15 s.

## 4. Especificações principais de relance

| Item | Especificação |
| :--- | :--- |
| Modalidades de entrada | Texto + imagem + vídeo + áudio |
| Limite de ficheiros de referência | 12 no total (9 imagens + 3 vídeos + 3 áudio) |
| Duração do clip | 4–15 segundos |
| Resolução | 480p / 720p / 1080p (Pro até 2K) |
| Proporções | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Áudio | Sync AV nativo, lip-sync multilingue |
| Taxa de frames | 24 fps |

## 5. Três cenários de produção comuns

### 5.1 Conteúdo curto e social

As equipas precisam frequentemente de volume com a mesma IP e look. Fixar personagem com imagens, linguagem de câmara com referência de vídeo, variar scripts em texto — iterar mais rápido com menos rerolls.

### 5.2 Assets de marketing de marca

As marcas exigem consistência VI. Logo, key visuals e style boards mais prompts de texto para clips de publicidade ou social com tom unificado — mais fiável que só texto.

### 5.3 Vídeo educativo e de conhecimento

Carregar áudio de aula ou narração para visuais lip-sync; adicionar imagens de referência de cena — conteúdo pedagógico multimodal de baixo custo.

## 6. Começar: fluxo em quatro passos

1. **Definir o deliverable**: anúncio, curta, clip social; duração e proporção.
2. **Preparar referências**: personagem, câmara, BGM conforme necessário — não precisa dos 12 ficheiros sempre.
3. **Escrever prompt + @**: história primeiro, depois ligar cada asset; evitar instruções contraditórias.
4. **Iterar pequeno**: 4–6 s para validar personagem e câmara, depois estender a 10–15 s.

## FAQ

**P: Preciso usar as quatro modalidades?**  
R: Não. Só texto funciona; uma ou duas imagens bastam. Combine conforme necessário.

**P: Como se mapeiam os números @?**  
R: Por ordem de upload — primeira imagem é @Image1, primeiro vídeo @Video1, etc. Mantenha numeração consistente no prompt.

**P: As imagens garantem 100% de consistência?**  
R: Consistência multi-plano supera largamente só texto; cenas multi-sujeito ou ângulos extremos ainda podem derivar — use um conjunto de teste fixo.

**P: O áudio carregado aparece no clip final?**  
R: O modelo pode seguir o ritmo de áudio e também gerar diálogo, SFX e música nativos conforme prompt e modo.

---

Pronto para testar a entrada multimodal? Use o botão abaixo para abrir **Seedance 2.0** — fluxo multimodal completo, incluindo a interface **versão chinesa Seedance**.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/pt/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Comece a usar Seedance 2.0</a></div>

**Pesquisas relacionadas**: Seedance 2.0, tutorial Seedance, versão chinesa Seedance, vídeo IA multimodal, prompts @ referência.

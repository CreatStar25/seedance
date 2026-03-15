---
title: "Guia de Prompts Seedance 2.0 e Manual de Uso"
description: "Como escrever prompts Seedance 2.0? Manual completo: referência multimodal, sintaxe @, câmera e movimento, extensão e edição de vídeo. Melhores práticas de prompts Seedance 2.0."
pubDate: "2026-03-15"
heroImage: "https://img.seedance22.com/aiweb/seedance-1.mp4"
---

O Seedance 2.0 é um modelo de geração de vídeo por IA que aceita imagem, vídeo, áudio e texto para controle mais rico. Este guia explica **como escrever prompts Seedance 2.0** e obter os melhores resultados.

## 1. Parâmetros e Capacidades do Seedance 2.0

| Dimensão | Especificação |
|----------|---------------|
| Entrada de imagem | ≤ 9 imagens |
| Entrada de vídeo | ≤ 3 clipes, total ≤ 15 s |
| Entrada de áudio | MP3, ≤ 3 ficheiros, total ≤ 15 s |
| Entrada de texto | Prompts em linguagem natural |
| Duração da saída | 4–15 s selecionável |
| Saída de som | SFX/música integrados |

Entradas mistas limitadas a 12 ficheiros no total; priorize os recursos que mais afetam o visual e o ritmo.

<video src="https://img.seedance22.com/aiweb/seedance-1.mp4" controls width="100%"></video>

## 2. Capacidades Principais: Estável, Fluido, Realista

O Seedance 2.0 melhora a física, a fluidez do movimento, o seguimento de instruções e a consistência de estilo, tratando bem movimentos complexos e contínuos.

**Exemplo de prompt:**  
Uma rapariga pendura a roupa com elegância, depois pega noutra peça no balde e sacode-a com firmeza.

<video src="https://img.seedance22.com/aiweb/seedance-2.mp4" controls width="100%"></video>

## 3. Multimodal e Escrita de Prompts Seedance 2.0

### 3.1 Referência multimodal

Pode carregar texto, imagens, vídeo e áudio como recurso principal ou de referência. Descreva claramente no seu **prompt Seedance 2.0** o que referenciar (movimento, efeitos, câmera, personagem, cena, som).

- Imagens de referência: composição e detalhe da personagem  
- Vídeo de referência: linguagem de câmera, ritmo de movimento, efeitos criativos  
- O vídeo pode ser estendido e continuado de forma suave (“continuar a gravar”)  
- Edição: trocar personagem, cortar, adicionar

Com vários recursos, use **@image1**, **@video1**, etc. no prompt para o modelo identificar cada um.

### 3.2 Padrões comuns de prompts

- **Primeiro/último frame + movimento do vídeo de referência**  
  “@image1 como primeiro frame, referenciar movimento de luta @video1”

- **Estender vídeo existente**  
  “Estender @video1 em 5 segundos” (definir duração da saída só para a parte nova, ex.: 5 s)

- **Juntar vários vídeos**  
  “Adicionar cena entre @video1 e @video2, conteúdo: …”

- **Ação contínua**  
  “Personagem passa do salto direto à cambalhota, manter movimento fluido, @image1 @image2 @image3”

### 3.3 Consistência, câmera e replicação criativa

O Seedance 2.0 mantém rostos, roupa, cenários e estilo de câmera consistentes e pode replicar planos exigentes e movimento complexo a partir de referências. Para transições criativas, planos tipo publicidade ou clipes de filme, descreva no prompt “referenciar ritmo e câmera @video1, personagem @image1”.

## 4. Resumo

**Escrever prompts Seedance 2.0** resume-se a: indicar claramente o que referenciar e o que fazer, e usar @ para ligar recursos. Entradas multimodais mais instruções precisas tornam a criação mais controlável e eficiente.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://creat.seedance22.com/generate/video-tools/seedance2.0" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);">Começar com Seedance</a>
</div>

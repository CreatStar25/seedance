---
title: "Seedance 2.0 応用：AI vlog 完全チュートリアル"
description: "Seedance 2.0 で AI vlog：表形式の絵コンテ、キャラ設定、フルリファレンスとプロンプト。脚本から書き出しまでの Seedance 教程。"
tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"]
pubDate: "2026-06-03"
heroImage: "https://img.seedance22.com/aiweb/seedance-260603-1.png"
author: "Seedance"
translationKey: "seedance-2-0-ai-vlog-advanced-tutorial"
lang: "ja"
---

顔出しなしでアニメ風 vlog を作りたいが、撮影チームは組みたくない？**Seedance 2.0** は絵コンテ画像とキャラ設定を **フルリファレンス（全能参考）** で読み取り、一貫したクリップを出力します。本 **Seedance 教程** は分鏡から編集までの全工程を解説します。

![Seedance 2.0 絵コンテとキャラ参考](https://img.seedance22.com/aiweb/seedance-260603-1.png)

以下の手順に沿って進めてください。生成ページだけ試す場合はボタンから。

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/ja/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Seedance 2.0 を始める</a>
</div>

## 1. 絵コンテ表を先に作る

絵コンテは動画の骨格です。尺・画面・カメラ・光/FX・音を表で書くと、モデルが画面を当て推量しにくくなります。

**手順：**

1. ニッチと内容方向を決める（退勤後の日常、旅行記、職場ドラマなど）。  
2. AI アシスタントに**表形式**の絵コンテを依頼：尺、画面、カメラ、光/効果、音。  
3. プロンプト例（テーマは自由に変更）：

> 一般的なアニメ vlog のリズムを参考に、【退勤後の日常 vlog】絵コンテを書いて。内容【帰宅・料理・読書・就寝】、雰囲気は温かく癒し系。表形式、合計15秒以内、列：尺、画面、カメラ、光/効果、音。

4. 表を**スクリーンショット**して保存し、Seedance 2.0 にアップロードする。

**表の構造例：**

| 尺 | 画面 | カメラ | 光/FX | 音 |
| :--- | :--- | :--- | :--- | :--- |
| 0–3s | マンション入室、玄関の暖色灯 | 固定、軽いプッシュイン | 室内の暖色 | ドア、軽いBGM |
| 3–7s | キッチン調理、コンロ点火 | 俯瞰から横跟拍 | 炎の光、湯気 | 包丁、フライパン |
| 7–12s | ソファで読書、デスクライト | スローパン | 柔らかいサイド光 | ページ、環境音 |
| 12–15s | 消灯就寝、暗転 | ワイドに引き | フェードアウト | 音楽エンディング |

## 2. 主人公の設定画を作る

AI 動画は顔が毎カット変わると破綻します。素材がなければ文生図で**固定キャラ**を1枚作ります。

**プロンプト例：**

> あなたはアニメキャラデザイナー。25歳前後の都市部OL：ショートヘア、高い鼻筋、大きな目、身長約165cm、普通の肌色、薄グレーのカジュアルスーツ、半身漫画イラスト、背景はシンプル。

PNG/JPG を絵コンテと同じフォルダに保存。

![Seedance 2.0 絵コンテとキャラ参考](https://img.seedance22.com/aiweb/seedance-260603-1.png)

## 3. Seedance 2.0 の設定

1. 動画生成を開き、**Seedance 2.0** を選択。  
2. モードは **フルリファレンス（全能参考）**—キャラと絵コンテを同時に使うには必須。  
3. 縦動画は **9:16** または **3:4**；横は **16:9**。  
4. プランに応じて 1080P を選択。

## 4. 参考素材をアップロードして生成

1. 参考エリアに **キャラ画像** + **絵コンテのスクショ**（@ 用に順番をメモ）。  
2. プロンプトは1行で指示、例：

> @Image1 の顔を厳守。@Image2 の絵コンテ順で生成。温かい癒し系、顔安定、手ブレ少なめ、1080P。

3. 生成—待ち時間はおおよそ **40〜90秒**。  
4. 1カットだけ失敗したら、その行だけ直して再生成。

**注意：** 生成ごとにクレジット消費。新規は日次無料枠あり。連打しないこと。

## 5. ポストプロダクション

CapCut、Premiere 等に読み込み、字幕・ステッカー・BGM を追加。字幕タイミングに10〜15分確保。

## 6. フローまとめ

| 段階 | 成果物 | ポイント |
| :--- | :--- | :--- |
| 企画 | テーマ | シリーズ化しやすい切り口 |
| 絵コンテ | 表のスクショ | 総尺とカメラを明記 |
| キャラ | 立ち絵 | 1枚で全カット統一 |
| 生成 | Seedance 2.0 動画 | フルリファレンス + 明確な @ |
| 編集 | 字幕とSE | 視聴完了率向上 |

**Seedance 2.0** の AI vlog フロー：**絵コンテ → キャラ → フルリファレンス → プロンプト → 生成と編集**。

---

サイトで絵コンテとキャラをアップロードして試せます。多言語 UI 対応。

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/ja/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Seedance 2.0 を始める</a>
</div>

****関連**：Seedance 2.0、Seedance 教程、AI vlog、アニメ短編、フルリファレンス。**
---
created: 2025-06-17
modified: 2025-06-17
title: A word about preventing Prompt Injection in AI Apps
description: Prompt injection attacks in AI apps are common. The safest design might be avoiding free text input altogether.
tags: [AI, security, prompt injection]
---

One of my favourite hobbies when evaluating third party AI apps is to try to break them. If an application can't survive my attempts, I know a curious teenager will find the same hole and ruin my day.

My goto attack is prompt injection. Feeding carefully crafted input that persuades the model to ignore its instructions and do mine instead. It feels as easy as trying to hypnotise a 5 year old.

Simon Willison recently argued that [we shouldn't settle for mitigations that work “99% of the time.”](https://simonwillison.net/2025/Jun/16/100-percent/) He draws an analogy with SQL injection: use parameterised queries correctly and you do get a 100% defence. Any remaining holes should be treated as bugs.

I agree with Simon. I believe the easiest way to fix those bugs may be to fix it at app design stage and avoid free text inputs altogether. Over the last 18 months every generative AI app I’ve shipped uses tightly validated form fields, structured third-party data, and user supplied photos. No open chat boxes. I dislike chat as a UX anyway; it’s slow, opaque, and hard to test.

Structured inputs dramatically shrink the attack surface, but they don’t eliminate it. While researching for this post, I found [visual prompt injection attacks are possible](https://blog.roboflow.com/gpt-4-vision-prompt-injection/), that hide instructions inside images or adversarial patches, successfully hijacking GPT‑4V, Gemini, and other vision/language models. These are still lab grade examples from researchers, but they prove the technique is possible today.

My take away here is architectural. If prompt injection poses a risk to you, redesign the interface so untrusted users can’t send arbitrary text (or images!) straight to the model. The best defence may be to give attackers nothing to inject in the first place.

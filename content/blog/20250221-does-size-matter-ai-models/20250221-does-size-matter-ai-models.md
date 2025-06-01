---
title: "Does Size Matter: The Rise of Smarter AI Models"
description: "Exploring how smaller, more efficient AI models with techniques like Recurrent Depth are challenging the 'bigger is better' paradigm in artificial intelligence."
date: 2025-02-21
tags: 
  - AI
  - machine learning
  - efficiency
  - research
---

![An elephant and an ant carrying a leaf](size-doesnt-matter.jpg)

For years now, everyone in AI has been obsessed with one thing: making models bigger. More parameters, more compute, more everything. And honestly? It's been working pretty well for companies like NVIDIA and TSMC - their stock prices certainly aren't complaining.

But here's the thing - I think we're hitting a wall.

I've been following the development of models like DeepSeek-R1, and it's kind of blowing my mind. These smaller, scrappier models are going toe-to-toe with the big boys, and they're doing it on a fraction of the budget. It's making me wonder if we've been thinking about this whole thing wrong.

So I've been digging into this paper about something called "Recurrent Depth" (yeah, I know, another buzzword), but stick with me here because I think this might actually be important. What if instead of just throwing more silicon at the problem, we could make our models... think harder?

The paper I'm talking about is [this one on arXiv](https://arxiv.org/html/2502.05171v2) - catchy title, right? "Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach." But the idea is actually pretty cool. Instead of just making models bigger (more layers, more parameters, more of everything), what if we could make them think deeper by... wait for it... using the same layers multiple times?

They call it Recurrent Depth, and it's not the same as that chain-of-thought stuff you might have seen where the model writes out its reasoning step by step. This is happening under the hood - the model basically decides "hmm, this is a tough one, let me run through my neural pathways a few more times before I answer."

What gets me excited about this is that it fits perfectly with where I think AI needs to go. I want models that can run on my laptop, maybe even my phone eventually, but still be smart enough to actually help me think through problems. Not everything needs a data center.

---

## So What Actually Is This Recurrent Depth Thing?

Okay, let me break this down without getting too technical (though I'll probably fail at that).

Normally, when you ask an LLM a question, it goes through its layers once - layer 1, layer 2, layer 3... all the way to the end, then spits out an answer. Whether you're asking "What's 2+2?" or "Explain quantum mechanics," it's the same journey through the same number of layers.

What these researchers did was basically say: "What if we could loop back?" Like, what if after going through all the layers, the model could say "Actually, let me think about this again" and run through some of those layers multiple times?

And here's where it gets different from other tricks people have tried:
- It's not like MoE (Mixture of Experts) where you're basically turning on different parts of the model for different tasks
- It's not just giving the model more context to work with
- It's literally letting the model decide how hard it needs to think about something

Of course, they ran into problems. Turns out (shocker) that training a model to work one way and then expecting it to work differently at test time... doesn't work great. They also realized that making every query go through multiple iterations was wasteful - you don't need deep philosophical contemplation to answer "What color is the sky?"

So they had to get clever about training the model to handle different levels of "thinking depth" gracefully.

The drawing analogy actually helps here. You know how when you're sketching, you might do a quick outline for simple stuff, but for complex scenes you keep going back, adding layers, refining details? That's basically what this is. The model starts with a rough "sketch" of the answer and can choose to refine it based on how complex the question is.

---

## Some Thoughts and Questions This Raises

Look, I don't build models myself (I just use them and think about them way too much), but this paper got me thinking about a bunch of stuff:

**Could we combine this with other efficiency tricks?** Like, what if you had a model that uses both this recurrent depth thing AND mixture of experts? The paper doesn't really go there, which surprises me. Seems like the obvious next step would be to throw everything at the wall and see what sticks.

**How do we teach models to figure out their own thinking depth?** Right now, you have to manually tell the model "okay, think about this 3 times" or whatever. But couldn't we train a tiny model - like those embedding models that are super fast - to look at a query and go "yeah, this needs about 5 iterations of thinking"? It'd be like sentiment analysis, but for complexity assessment.

**Are companies actually going to use this?** I mean, they kind of have to at some point, right? We can't just keep making models bigger forever. There literally isn't enough memory in the world. Some companies will probably try to squeeze out one or two more generations of mega-models, but I think the smart money is on efficiency.

**What about latency though?** This is the big one for me. Some models like Gemini Flash are all about speed - boom, instant response. But what if we could be clever about it? Imagine having a fast model that immediately goes "Great question! Let me think about that..." while a deeper-thinking model churns away in the background. It'd feel way more natural than either waiting forever OR getting an instant but potentially shallow response.

---

## Why I Think This Actually Matters

Here's my take: the future of AI isn't about who can build the biggest model. It's about who can build the smartest, most efficient one. And I'm not just saying that because I want to run models on my laptop (though I definitely do).

Think about it - if we want AI to be truly integrated into our daily lives, it can't always be phoning home to some massive data center. Your phone's AI assistant shouldn't need an internet connection to help you think through a problem. Your laptop should be able to run a model that's actually useful for coding or writing without melting through your desk.

That's why I'm putting my money where my mouth is. I'm investing in beefy local hardware not just to run existing models, but to experiment with what's possible when you have powerful, efficient AI that's always available. No API limits, no internet required, just you and your digital thinking partner.

The sustainability angle is huge too. We can't keep building bigger and bigger data centers forever. At some point (and I think we're getting close), the environmental and economic costs just won't make sense. Techniques like Recurrent Depth aren't just cool research - they're necessary for AI to have a future that doesn't involve burning through the planet's resources.

---

Look, I know there's a ton of AI hype out there, and honestly, most of it is noise. But this feels different. This feels like the kind of fundamental shift in thinking that could actually change things. Not overnight, but give it a few years and I bet we'll look back at the "just make it bigger" era and laugh.

What do you think? Am I being too optimistic about local AI? Have you played with any of the smaller models that are punching above their weight? I'd love to hear your thoughts - hit me up on [LinkedIn](https://www.linkedin.com/in/jpainio/) if you want to chat about this stuff.

P.S. - If you're from OpenAI or Anthropic and you're reading this... please consider efficiency in your next models? My electricity bill will thank you.

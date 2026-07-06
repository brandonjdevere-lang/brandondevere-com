---
title: "AI Editorial Workflow"
date: 2026-07-06
category: "systems"
summary: "Why I stopped writing longer prompts and started building a documented editorial system instead."
featured: true
---

## The Challenge

For months, every new episode of Learn For 2.0 felt like starting over.

AI wrote fine drafts. The problem was everything that had to happen before the draft.

"Don't use em dashes."

"Don't sound like a guru."

"Don't turn this into a lecture."

"That's not how I'd say it."

"I'd tell that story differently."

Same corrections, episode after episode. So the prompt got longer. And longer. Every fix got folded back into the instructions, until the instructions were doing more work than the writing.

There was no single episode that broke it. It was slower than that: month after month of the same fixes, until a longer prompt stopped looking like the answer.

## How I Thought About It

The real problem wasn't prompt quality. It was that nothing had been documented.

Every episode taught the same lesson, and the lesson evaporated the moment the episode was done. Next episode, same correction, right back at zero.

So the goal changed: stop trying to write a better prompt, start building a system that remembers.

That's what STYLE_GUIDE.md and Voice Reference.md actually are, a record of the corrections above, made permanent instead of repeated: story before lesson, specificity over abstraction, cut what sounds like a pep talk.

The system's job was never to make AI smarter. It was to stop having the same conversation over and over again.

## The Workflow

The work that matters stays mine. I find the idea, record the episode, decide what the story is actually about.

Once there's a transcript, AI writes the first structured draft, using the documented system instead of starting from nothing.

Then I edit. On one recent draft, the note I left looked like this: condense Tom's and Eric's stories, which had unspooled on the recording with a lot of "you know" and backtracking, and keep only the details that carry meaning. Reorder two ideas that came out in separate bursts on the recording but needed to sit together on the page. Cut a callback to a different episode a reader wouldn't have context for. Keep one line on purpose, "this isn't a pep talk," because it protects the piece from going motivational.

None of that changes what was said. It changes how it lands for someone reading instead of listening.

Once the long-form piece is done, the system branches: YouTube description, blog formatting, chapter markers, Shorts captions for five platforms, social posts, thumbnail concepts. Each one adapted for how people actually consume that platform, not copied from the article and reformatted.

AI doesn't decide what to say anymore. It helps me say what I already wanted to say, more clearly and with a lot less repetition.

## The Solution

The clearest proof the system was working came from something small: a thumbnail.

Early on, thumbnail selection was a list of ideas, mostly borrowed from what other creators do. A face. Bold text. A few competing concepts. A few episodes in, that had formalized into a priority order: a real story asset first, then a documentary scene, then an object, then text, my face only as a last resort.

Then came the episode about a mechanic who fixed in two hours what I'd spent an afternoon failing to diagnose myself. The thumbnail wasn't a photo of me talking about it. It was a photo of the alternator.

That was a different question, not "how do I make someone click" but "what's the one visual that captures the heart of this story." Sometimes that's an object. Sometimes a place. Sometimes a person. Almost never my face with big text over it.

I hadn't learned that yet, that's all. The system was doing exactly what it was supposed to do: evolve as I learned something better. The alternator was the same lesson the episode was about, years of experience that nobody sees, sitting right there in a photo of a used car part.

## The Outcome

The principles carried forward. The implementation didn't.

Learn For 2.0 has its own voice, its own editorial standards, its own thumbnail philosophy, because it's a storytelling project. This website is a separate system entirely. Before a single line of code existed, we spent hours documenting the purpose of the site, the audience, the design philosophy, the architecture, and why every decision got made the way it did. That documentation lives in [ARCHITECTURE.md](https://github.com/brandonjdevere-lang/brandondevere-com/blob/main/ARCHITECTURE.md). The code came out of the thinking. It didn't come before it.

## What I Learned

I don't build prompts anymore. I build systems, with documentation and shared context, that let AI become a better collaborator over time.

The documentation was never there to preserve old thinking. It's there to capture better thinking as it emerges, so I only have to learn something once.

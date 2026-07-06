---
title: "AI Editorial Workflow"
date: 2026-07-06
category: "systems"
summary: "Why I stopped writing longer prompts and started building a documented editorial system instead."
featured: true
---

## The Challenge

For months, every new episode of Learn For 2.0 felt like starting over.

Not because AI wrote badly. The drafts were fine. The problem was everything that had to happen before the draft.

"Don't use em dashes."

"Don't sound like a guru."

"Don't turn this into a lecture."

"That's not how I'd say it."

"I'd tell that story differently."

Same corrections, episode after episode. So the prompt got longer. And longer. Every fix got folded back into the instructions, until the instructions were doing more work than the writing.

It wasn't one bad episode that broke something. It was the slow realization that a longer prompt wasn't going to fix it, because a longer prompt was never the problem.

## How I Thought About It

The real problem wasn't prompt quality. It was that nothing had been documented.

Every episode was teaching the same lesson, and the lesson evaporated the moment the episode was done. Next episode, same correction, same conversation, starting from zero again.

Once that clicked, the goal changed. Not "write a better prompt." Build a system that remembers.

That's what STYLE_GUIDE.md and Voice Reference.md actually are. Not instructions for one episode. A record of decisions that shouldn't have to be made twice: no em dashes, no guru language, no lecture framing, story before lesson, specificity over abstraction.

The system's job was never to make AI smarter. It was to stop having the same conversation over and over again.

## The Workflow

The work that matters stays mine. I still find the idea, still record the episode, still decide what the story is actually about and what I want someone to walk away with.

Once there's a transcript, AI writes the first structured draft, using the documented system instead of starting from nothing.

Then I become the editor. I'm looking for where the pacing slows, where a line sounds like AI instead of me, where a better example exists, where the lesson hasn't landed yet. Sometimes I rewrite a whole section. Sometimes I add a story that wasn't even in the transcript because it makes the point better. Sometimes I just say: right point, wrong words. Then we go back and forth until it reads like something I would have written myself.

Once the long-form piece is done, the system branches. YouTube description, blog formatting, chapter markers, Shorts captions for five different platforms, social posts, thumbnail concepts, each one adapted for how people actually consume that platform, not copied from the article and reformatted.

AI doesn't decide what to say anymore. It helps me say what I already wanted to say, more clearly, more consistently, with a lot less repetition.

## The Solution

The clearest proof the system was working came from something small: a thumbnail.

Early on, thumbnail selection was a list of ideas, mostly borrowed from what other creators do. A face. Bold text. A few competing concepts to choose from. A few episodes in, that had formalized into an actual priority order: real story asset first, then a documentary scene, then an object, then text, and my face only as a last resort.

Then came the episode about a mechanic who fixed in two hours what I'd spent an afternoon failing to diagnose myself. The thumbnail wasn't a photo of me talking about it. It was a photo of the alternator.

That wasn't a bigger version of the same idea. It was a different question entirely. Not "how do I make someone click," but "what's the one visual that captures the heart of this story." Sometimes that's an object. Sometimes a place. Sometimes a person. Almost never my face with big text over it.

The system hadn't missed that lesson. I just hadn't learned it yet. And the alternator was the same lesson the episode was about... years of experience that nobody sees, sitting right there in a photo of a used car part.

## The Outcome

The principles carried forward. The implementation didn't.

Learn For 2.0 has its own voice, its own editorial standards, its own thumbnail philosophy, because it's a storytelling project. Career 2026 became a completely different system, focused on resumes, case studies, and interviewing. Same principles, completely different outputs.

This website is the clearest example yet. Before a single line of code existed, we spent hours documenting the purpose of the site, the audience, the design philosophy, the architecture, and why every decision got made the way it did. That documentation lives in [ARCHITECTURE.md](https://github.com/brandonjdevere-lang/brandondevere-com/blob/main/ARCHITECTURE.md). The code came out of the thinking. It didn't come before it.

## What I Learned

I don't build prompts anymore. I build systems, with documentation, constraints, and shared context, that let AI become a better collaborator over time.

The documentation was never there to preserve old thinking. It's there to capture better thinking as it emerges, so I only have to learn something once.

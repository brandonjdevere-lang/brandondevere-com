---
title: "AI Editorial Workflow"
date: 2026-07-06
category: "systems"
summary: "Most teams don't have a content problem. They have an operational one. Here's the system I built to fix mine, and the thinking behind it."
featured: true
---

## The Problem

Most organizations don't actually have a content problem. They have an operational one. Teams repeat manual work that should only need doing once, switch between tools that don't talk to each other, and end up with quality that depends on who happens to be doing the task that day instead of on a process everyone can follow. Fix the operational problem and the content problem mostly takes care of itself.

I ran into a version of that running Learn For 2.0. For months, every new episode felt like starting over.

AI wrote fine drafts. The problem was everything that had to happen before the draft.

"Don't sound like a guru."

"Don't turn this into a lecture."

"That's not how I'd say it."

Same corrections, episode after episode. So the prompt got longer. And longer. Every fix got folded back into the instructions, until the instructions were doing more work than the writing.

There was no single episode that broke it. It was slower than that: month after month of the same fixes, until a longer prompt stopped looking like the answer.

## How I Thought About It

The real problem wasn't prompt quality. It was that nothing had been documented.

Every episode taught the same lesson, and the lesson evaporated the moment the episode was done. Next episode, same correction, right back at zero.

So the goal changed: stop trying to write a better prompt, start building a system that remembers.

That's what STYLE_GUIDE.md and Voice Reference.md actually are, a record of the corrections above, made permanent instead of repeated: story before lesson, specificity over abstraction, cut what sounds like a pep talk.

The system's job was never to make AI smarter. It was to stop having the same conversation over and over again.

## The System

The work that matters stays mine. I find the idea, record the episode, decide what the story is actually about.

Once there's a transcript, the first structured draft gets written using the documented system instead of starting from nothing, with AI tools doing that first pass. That's the part that should be automated: repetitive, mechanical, the same every time.

Then I edit, and that's the part that isn't repetitive. On one recent draft, the note I left looked like this: condense two stories that had unspooled on the recording with a lot of backtracking, and keep only the details that carry meaning. Reorder two ideas that came out in separate bursts but needed to sit together on the page. Cut a callback a reader wouldn't have context for. Keep one line on purpose, because it protects the piece from going motivational.

None of that changes what was said. It changes how it lands for someone reading instead of listening. That judgment is the one part of the process I never handed off.

Once the long-form piece is done, the system can branch into a YouTube description, blog formatting, chapter markers, short-form clips with platform-specific captions, social posts, and thumbnail concepts. Each one adapted for how people actually consume that platform, not copied from the article and reformatted.

## The Proof

The clearest sign the system was working came from something small: a thumbnail.

Early on, thumbnail selection was a list of ideas, mostly borrowed from what other creators do. A face. Bold text. A few competing concepts. A few episodes in, that had formalized into a priority order: a real story asset first, then a documentary scene, then an object, then text, my face only as a last resort.

Then came an episode about a mechanic with 41 years of experience who replaced my alternator in about two and a half hours. The same job would have taken me weeks. The episode became a story about reps, not talent. Later, listening back to episode 173 of my old podcast made the lesson concrete: I wasn't naturally better at podcasting. I'd simply done it 173 times. The published thumbnail distilled that turn into two words: ‘173RD ATTEMPT.’

A documented system doesn't freeze the standard in place. It captures what worked well enough that the next decision starts from there instead of from scratch.

## Business Impact

- **Less repeated work.** Corrections that used to get re-explained every episode are documented once, so the same lesson never has to be taught twice.
- **More consistent output.** Every draft starts from the same written standard instead of whatever I happened to remember to mention that day.
- **A quality bar that holds even as I learn something better.** The thumbnail priority order exists because the system captured what worked and made it the new default, not a one-off decision nobody remembers next time.
- **One piece of content becomes many, without redoing the work.** A single long-form draft can branch into a YouTube description, blog formatting, chapter markers, short-form clips and captions, social posts, and thumbnail concepts, each built for how people actually use that platform.
- **Documentation that outlives any one project.** The same documented-thinking-first approach used for the podcast became the foundation for this website: ARCHITECTURE.md exists before the code does, not after.
- **A system someone else could pick up.** Because the standards live in writing instead of in my head, a collaborator, or a future version of me, could follow them without me being in the room.

## How I Solve Business Problems

My approach doesn't change much from industry to industry: find the work that's being repeated by hand, write down the parts that keep needing to be explained, automate what's actually repetitive, and keep the parts that require real judgment for myself.

That's what happened here. The corrections were repetitive, so they became documentation. The first draft was repetitive, so a tool handles that pass now. The judgment calls, what a story is actually about, which two ideas belong on the same page, which line stays because it protects the piece from turning into a pep talk, those stayed mine, because that's the part no system can do for me.

I was doing some version of this for twenty years before AI was part of the toolkit: recruiting and onboarding real estate agents, running a concierge desk, building the operational systems behind three different organizations. AI made the documentation faster to build. It didn't change the instinct.

## The Outcome

The principles carried forward. The implementation didn't.

Learn For 2.0 has its own voice, its own editorial standards, its own thumbnail philosophy, because it's a storytelling project. This website is a separate system entirely, built the same way: think and document first, build second, down to the architecture decisions in [ARCHITECTURE.md](https://github.com/brandonjdevere-lang/brandondevere-com/blob/main/ARCHITECTURE.md) written before a line of code existed.

Same operational thinking, two unrelated projects. That's the part that's actually repeatable, not the specific system, the habit of building one.

## What I Learned

I don't build prompts anymore. I build documented systems, and AI is one part of how they run.

The hardest part today isn't writing better instructions. It's deciding what belongs in permanent documentation and what just belongs in the conversation. Every project teaches me something new about where that line is.

The documentation was never there to preserve old thinking. It's there to capture better thinking as it emerges, so I only have to learn something once.

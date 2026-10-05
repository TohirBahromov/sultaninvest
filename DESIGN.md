---
name: Sultan Quick Invest
description: Opening titles for a video, SMM and web crew in Tashkent.
colors:
  forest-screen: "#051a07"
  forest-lift: "#0b2a10"
  letterbox-black: "#090b08"
  charcoal-slate: "#1d1d1d"
  champagne: "#e9dbbc"
  champagne-dim: "#c9bc9e"
  champagne-faint: "#8f866f"
  umber: "#322821"
  tan-light: "#d4a276"
  forest-ink: "#051a07"
  forest-ink-lifted: "#24452a"
  error-coral: "#f0a08a"
typography:
  display:
    fontFamily: "Playfair, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  credit:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  none: "0"
  pill: "50%"
spacing:
  bar: "4rem"
  gutter: "clamp(1rem, 3.2vw, 3rem)"
  scene: "clamp(5rem, 12vh, 9rem)"
  max: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.tan-light}"
    textColor: "{colors.forest-ink}"
  button-on-card:
    backgroundColor: "{colors.forest-screen}"
    textColor: "{colors.champagne}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.champagne}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.champagne}"
    rounded: "{rounded.none}"
    height: "3.25rem"
---

# Design System: Sultan Quick Invest

## Overview

**Creative North Star: "Opening Titles"**

Every page plays like the opening of a film. The agency is the crew, its services are the credits, and the visitor's project is the next production. Content sits on a deep forest "screen" framed by true-black letterbox bars. Between scenes the page cuts to champagne intertitle cards set in forest ink, so the experience alternates between projection and printed card instead of stacking identical dark sections.

The type pairing: Playfair, a high-contrast didone whose optical-size axis reaches the SQI monogram's hairlines, for anything that is *said*; Onest, a sturdy regular-width grotesque, in normal case and normal spacing for everything functional: labels, roles, timecodes, buttons. Film's own working objects are the system's components: the clapperboard slate stands in for every missing piece of media, the call sheet lays out the process, a running SMPTE timecode sits in the bars, and every page ends on the crew's credits.

Rejected by the owner: anything that looks like a template, anything playful or cartoonish, anything that makes a phone lag.

**Key Characteristics:**
- Forest screen inside black letterbox bars; champagne intertitle cards between scenes.
- Didone for speech, a plain grotesque for everything functional; never thin, tracked capitals.
- Square corners everywhere; hairline rules instead of boxes.
- Film grain over projected surfaces; no decorative gradients.
- One motion grammar: soft-focus fade-up, letterbox bars closing, slow vertical credit roll.

## Colors

Brand colors are fixed by the owner: champagne on deep forest, with black and charcoal as the projection booth around them.

### Primary
- **Champagne** (#e9dbbc): the logo color. Headlines and body on dark grounds, the intertitle card ground, and the primary button.
- **Forest Screen** (#051a07): the projected surface every scene plays on, and the ink on champagne cards.

### Secondary
- **Tan Light** (#d4a276): the single warm accent. The second line of the hero title, active and hover states, discipline headings in the credit roll, timecode, and focus outlines.

### Neutral
- **Letterbox Black** (#090b08): header bar, hero bars, credit-roll stage, end card. Never used as a content card.
- **Charcoal Slate** (#1d1d1d): the clapperboard body only.
- **Champagne Dim** (#c9bc9e): secondary text on dark (≈9:1 on forest).
- **Champagne Faint** (#8f866f): tertiary marks, placeholders, rules' labels. Large or decorative text only.
- **Forest Ink Lifted** (#24452a): secondary text on champagne cards.
- **Umber** (#322821): scrollbar thumb, pressed states on champagne cards.
- **Error Coral** (#f0a08a): form errors on dark grounds.

### Named Rules
**The Two-Ground Rule.** A section is either a forest screen (with black around it) or a champagne card. No third ground, no gradients between them.

**The One Warm Accent Rule.** Tan is the only accent. It marks the current, the active, and the one phrase that matters per screen. Never body text.

## Typography

**Display Font:** Playfair 2 (not Playfair Display; fallback Times New Roman, serif), variable weight with automatic optical sizing, normal and italic. Chosen because it is the closest available match to the SQI monogram's stroke contrast.
**UI Font:** Onest (fallback Segoe UI, system-ui), variable weight, used at 400–600.

**Character:** a fashion didone whose hairlines sharpen as it grows, paired with a plain, solid grotesque that stays out of its way. Both cover Latin, Latin Extended (Uzbek o‘ g‘) and Cyrillic. The owner rejected thin, widely letter-spaced type (Jost; Ysabeau in tracked caps) as generic.

### Hierarchy
- **Display** (400, clamp(2.75rem, 7.4vw, 6rem), 0.98): page titles and the hero title card. Max 6rem.
- **Headline** (400, clamp(2.25rem, 5.2vw, 4.75rem), 1.02): section headings and service names in the reel list.
- **Title** (400, clamp(1.75rem, 3.4vw, 3rem), 1.08): sub-sections, crew names (clamp(1.75rem, 3.2vw, 2.75rem)), call-sheet steps.
- **Intertitle** (400, clamp(1.75rem, 3.6vw, 3.25rem), 1.18, max 24em, centered): the positioning statement on champagne.
- **Body** (400, 1.0625rem, 1.6): lede at clamp(1.0625rem, 1.3vw, 1.25rem), max 38rem.
- **Label** (500, 0.9375rem, normal case, no tracking): nav, roles, credit lines, captions. Buttons 600, 1rem.

### Named Rules
**The Plain Label Rule.** If it's said, it's didone. Everything else is Onest in normal case with zero letter-spacing. No thin weights, no tracked capitals anywhere, including buttons and slate keys.

**The Roman Title Rule.** Hero and page titles are roman. The second line takes the tan accent, not italic. Italic is reserved for the logline card and the end-card tagline.

## Layout

A centered wrap (max 90rem, gutter clamp(1rem, 3.2vw, 3rem)). Scenes use generous vertical padding (clamp(5rem, 12vh, 9rem)), with more space above headings than below. Scene heads are a two-column grid (heading 1.3fr, lede 1fr aligned bottom-right), collapsing to one column under 860px.

The home hero is a three-row grid: header bar (4rem), screen, credit bar. On desktop the screen is height-limited toward a 2.39:1 scope frame; under 860px it becomes a 4:5 frame so the title has room. Work uses a 12-column grid: a 7-column feature frame and a 4-column side stack offset downward. Breakpoints: 1080px (desktop nav → menu), 960px (reel monitor hidden, contact single column), 860px (most two-column grids collapse), 560px (callback field stacks above its button).

## Elevation & Depth

Flat by default. Depth comes from the letterbox (black framing forest) and film grain, not from shadows. The only shadow is the slate's: a soft drop that makes the clapperboard read as an object held in front of the camera.

### Shadow Vocabulary
- **Slate drop** (`box-shadow: 0 2.5rem 4rem -2rem rgb(0 0 0 / 0.7)`): clapperboard slates only.

### Named Rules
**The Projection Rule.** Projected surfaces (hero screen, page-title screens, closing scene) carry the grain layer. Printed surfaces (champagne cards) never do.

## Shapes

Square corners throughout (0): buttons, fields, slates, frames. The only round shape is the 2.75rem circular arrow on reel rows. Structure is drawn with 1px hairlines: champagne at 18% on dark, forest at 22% on champagne. Intertitle cards carry an inset double hairline frame, like a printed title card.

## Components

### Buttons
- **Shape:** square (0), min height 3.25rem, padding 0 1.6rem.
- **Primary:** champagne ground, forest text, Onest 1rem/600 in sentence case, trailing arrow icon.
- **Hover / Focus:** ground eases to tan (0.25s, expo-out); focus is a 1px tan outline offset 4px.
- **On champagne cards:** inverts to forest ground with champagne text; hover to umber.
- **Ghost:** transparent with an 18% champagne hairline; hover brightens the border to full champagne.

### Inputs / Fields
- **Style:** bottom hairline only, transparent ground, 1.125rem text, square.
- **Focus:** the hairline turns tan; no glow.
- **Error:** hairline and message in error coral, with the message naming the fix.
- **Callback field:** a framed row ("+998" prefix, formatted national number, primary button) that always sits under a screen.

### Navigation
- **Header:** a fixed black 4rem bar: logo left, tracked-caps links (champagne-dim, champagne on hover; the current page gets a 1px tan underline), phone number, uz/ru/en switch.
- **Mobile:** under 1080px a bordered "Menu" button opens a full-screen black panel (clip-path wipe down) with didone links divided by hairlines, plus phone and Telegram buttons.

### Clapperboard Slate (signature)
The honest placeholder for missing media and the services monitor. Diagonal champagne/charcoal sticks over a charcoal body divided into hairline cells (Scene, Prod., Roll, Take, Date, Status). Keys in 0.625rem tracked caps; values in didone sized to the slate (container units); the chalk value in tan italic. Real media, when supplied, covers the body.

### Credit Roll (signature)
Real crew grouped by discipline (tan Onest 600 heading, didone names, role beneath), centered. It is always the last scene before the end card, so the site ends when the credits end. With motion allowed it pins full-screen and scrolls upward under a masked window, stopping with the last name low on screen; otherwise it is a static list.

### Finale (end card after the credits)
On pages that end with the credits, the footer shares the credits' black field with no rule, colour change or block between them. Its logo becomes the film's last title card, alone in a ~78svh first screen. Scroll-scrubbed, it fades up out of black (opacity 0 → 1, scale 1.14 → 1, blur 14px → 0), the tagline follows the same way, then the columns and legal line rise in. Without motion everything is simply visible.

### Call Sheet
A numbered schedule: step number in tracked caps, name in didone, text in secondary ink, rows divided by hairlines. Numbers are used only because the order is the information.

## Do's and Don'ts

### Do:
- **Do** keep every new section on one of the two grounds: forest screen or champagne card.
- **Do** use the clapperboard slate for any media the owner hasn't supplied yet, labeled with its real status.
- **Do** credit real people by name and role; the crew is the proof of "one crew".
- **Do** keep motion to the established grammar (soft-focus fade-up, letterbox bars, credit roll, framed-still parallax) and leave everything visible with reduced motion.
- **Do** keep tan to one accent moment per screen.

### Don't:
- **Don't** use stock photography; the old site's stock images were removed on purpose.
- **Don't** round corners or add cards with shadows; frames are hairlines and slates.
- **Don't** set the hero title in italic or use gradient text.
- **Don't** put a small label above a heading; the heading carries itself.
- **Don't** use thin weights or widely tracked capitals for any text.
- **Don't** number lists whose order carries no meaning.
- **Don't** invent clients, testimonials, results or figures; the stats in `content/site.ts` are marked for owner confirmation.

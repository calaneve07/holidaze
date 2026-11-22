# Holidaze Craze party site

- index.html: host page. Open it on the laptop connected to the TV.
- play.html: player page. Phones open it by scanning the QR code on the host page.

Deploy: from this folder run `npx vercel` (or `npx vercel --prod`), or push the folder
to a GitHub repo and import it in Vercel. No build step and no settings needed.

Phones connect to the laptop through the free PeerJS relay (0.peerjs.com). The laptop
and phones need internet. Keyboard buttons on the laptop keep working as a backup.

## Sections
- Chess Clock (working): head-to-head and all-teams modes, phone buttons, keyboard backup.
- Scoreboard (placeholder): running totals across the night. Scoring rules to decide.
- Challenges (placeholder): lineup with rules, timers, and scoring per round.

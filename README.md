# Holidaze Craze party site

- index.html: host page. Open it on the laptop connected to the TV.
- play.html: player page. Phones open it by scanning the QR code on the host page.

Deploy: from this folder run `npx vercel` (or `npx vercel --prod`), or push the folder
to a GitHub repo and import it in Vercel. No build step and no settings needed.

Phones and the laptop talk through a free public MQTT server (broker.emqx.io) over a secure
connection. No direct device-to-device link is needed. Both need internet. Keyboard buttons on
the laptop keep working as a backup.

## Sections
- Tick-Tock Tinsel Talk (working, formerly Chess Clock): head-to-head and all-teams modes, phone buttons,
  keyboard backup. Each finished all-teams game's finish order is saved for the Scoreboard.
- Hotline (working): Holiday Hotline photo round. Both partners send a photo from their phones. Photos
  auto-accept, pop up on the TV, and set the finish order. Host can reject a photo (✕), and the player
  can send another while the clock runs. Photos save in the host browser (IndexedDB) and download as a
  zip. Finish order is saved to localStorage key `hzResults.hotline` for the Scoreboard.
  Phones shrink photos to about 120 KB and send them in 40 KB pieces over the same MQTT server.
- Scoreboard (working): the 2026 rounds (Deck the Cone, Ho Ho Hole, Holiday Hotline, Santa's Beard,
  Tick-Tock Tinsel Talk, Holiday Roll-off). Tap teams in finish order to enter placements. Points default to
  team count down to 1 (6-5-4-3-2-1). Hotline and Tinsel Talk results can be imported. Shows Roll-off rolls per
  team (+1 for 3rd and 4th, +2 for the last two). Saved in localStorage key `hzScore`.
- Challenges (placeholder): lineup with rules, timers, and scoring per round.

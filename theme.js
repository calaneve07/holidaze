// Team colors and holiday icons shared by the host page and the phone page.
(function () {
  // [fill color, readable text color on that fill]
  const COLORS = [
    ["#e63946", "#ffffff"], ["#f4b400", "#1d1500"], ["#4cc9f0", "#06202b"], ["#b388ff", "#1a0f33"],
    ["#ff8c42", "#2a1200"], ["#ff6fae", "#2b0717"], ["#e8eef2", "#14202a"], ["#2ec4b6", "#04201d"],
    ["#a7e22e", "#152100"], ["#c49a6c", "#1f1206"]
  ];
  const S = 'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = [
    ["Tree", '<path d="M12 2 5.5 10.5H9L4.5 16.5H10V21h4v-4.5h5.5L15 10.5h3.5z"/>'],
    ["Star", '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>'],
    ["Snowflake", '<g ' + S + '><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/></g>'],
    ["Bell", '<path d="M12 3a1.5 1.5 0 0 1 1.5 1.5v.6A6 6 0 0 1 18 11v4l2 3H4l2-3v-4a6 6 0 0 1 4.5-5.9v-.6A1.5 1.5 0 0 1 12 3zM9.5 19.5h5a2.5 2.5 0 0 1-5 0z"/>'],
    ["Gift", '<path d="M3 9h18v4H3zM4.5 14h15v7h-15zM12 8.5C9 8.5 6.8 7.2 7.8 5.7S11 5.9 12 8.3c1-2.4 3.2-4.1 4.2-2.6s-1.2 2.8-4.2 2.8z"/>'],
    ["Ornament", '<circle cx="12" cy="14" r="7"/><rect x="10" y="3.5" width="4" height="3.5" rx="1"/>'],
    ["Candy cane", '<path d="M9 21V9a4 4 0 0 1 8 0v1.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>'],
    ["Mitten", '<path d="M8 21h9v-3c1.5-2 2-5 1.5-8.5C18 6 16 3.5 12.5 3.5 9 3.5 7 6 7 9.5v2.2L5.2 10.4C4 9.6 2.7 11 3.6 12.2L8 17.5z"/>'],
    ["Snowman", '<circle cx="12" cy="7" r="3.6"/><circle cx="12" cy="16.2" r="5.6"/>'],
    ["Stocking", '<path d="M8 2.5h7v10l-4.6 6.9a3.4 3.4 0 0 1-5.6-3.8L8 11.5z"/>']
  ];
  const color = i => COLORS[((i % COLORS.length) + COLORS.length) % COLORS.length];
  const icon = i => ICONS[((i % ICONS.length) + ICONS.length) % ICONS.length];
  window.HZ = {
    color,
    iconName: i => icon(i)[0],
    // A round badge in the team's color with its icon inside.
    badge(i, px) {
      const [bg, ink] = color(i), size = px || 28;
      return '<span class="hzb" style="background:' + bg + ';color:' + ink + ';width:' + size + 'px;height:' + size + 'px">' +
        '<svg viewBox="0 0 24 24" width="' + Math.round(size * 0.66) + '" height="' + Math.round(size * 0.66) + '" fill="currentColor" aria-hidden="true">' + icon(i)[1] + '</svg></span>';
    },
    css: '.hzb{display:inline-grid;place-items:center;border-radius:50%;flex:none;vertical-align:middle;box-shadow:0 0 0 2px rgba(0,0,0,.25)}'
  };
})();

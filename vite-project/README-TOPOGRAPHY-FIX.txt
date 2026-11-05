TOPography background fix

Changes:
- Enabled the terrain intro animation so the 3D surface rises into view.
- Enabled pointer interaction, terrain lift, cursor trail/parallax, and click pulses.
- Added shader compilation, shader-link, and WebGL2 initialization diagnostics to the browser console.

Run:
  npm install
  npm run dev

If the canvas is still blank, open browser DevTools > Console and look for messages prefixed with [Topography].
The renderer requires WebGL2. In Chromium browsers, enable hardware acceleration and restart the browser if WebGL2 is unavailable.

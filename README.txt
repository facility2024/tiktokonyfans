# React Component Export

This ZIP file contains the exported React component from your Hatch canvas.

## Files:
- component.jsx: The main React component source code
- component.js: The compiled/executable JavaScript version
- index.html: Ready-to-run HTML file with fallback inline code and data
- storedState.json: Initial state data

- assets/: Directory containing 73 image asset(s)
  - assets/b6RXiLwhpRhDzmRaoWzcw.png
  - assets/5ZffSBK2RF9l_OD7OkGQG.png
  - assets/sHF0MKmc9H5-YPHvejjyO.png
  - assets/andreininha_avatar.png
  - assets/babi_avatar.png
  - assets/fabiola_avatar.png
  - assets/fany_avatar.png
  - assets/flaga_avatar.png
  - assets/gabriela_avatar.png
  - assets/isagrey_avatar.png
  - assets/jaqueline_avatar.png
  - assets/jelma_avatar.png
  - assets/live_avatar.png
  - assets/lycollins_avatar.png
  - assets/marian_avatar.png
  - assets/mariasafadinha_avatar.png
  - assets/priscila_avatar.png
  - assets/saracine_avatar.png
  - assets/sarasafada_avatar.png
  - assets/suzi_avatar.png
  - assets/taldaloira_avatar.png
  - assets/thaissafit_avatar.png
  - assets/exclusivo_avatar.png
  - assets/whitefairy_avatar.png
  - assets/agnes_avatar.png
  - assets/agnes_1.png
  - assets/agnes_2.png
  - assets/agnes_3.png
  - assets/agnes_4.png
  - assets/agnes_5.png
  - assets/agnes_6.png
  - assets/agnes_7.png
  - assets/agnes_8.png
  - assets/agnes_9.png
  - assets/agnes_10.png
  - assets/ani_avatar.png
  - assets/bia_avatar.png
  - assets/bia_1.png
  - assets/bia_2.png
  - assets/bia_3.png
  - assets/bia_4.png
  - assets/bia_5.png
  - assets/bia_6.png
  - assets/bia_7.png
  - assets/bia_8.png
  - assets/bia_9.png
  - assets/bia_10.png
  - assets/ester_avatar.png
  - assets/ester_1.png
  - assets/ester_2.png
  - assets/ester_3.png
  - assets/ester_4.png
  - assets/ester_5.png
  - assets/ester_6.png
  - assets/ester_7.png
  - assets/ester_8.png
  - assets/ester_9.png
  - assets/ester_10.png
  - assets/gabriella_avatar.png
  - assets/hellen_avatar.png
  - assets/isadora_avatar.png
  - assets/jeodilon_avatar.png
  - assets/lavinia_avatar.png
  - assets/mari_avatar.png
  - assets/melissa_avatar.png
  - assets/polemizar_avatar.png
  - assets/thaina_avatar.png
  - assets/tuani_avatar.png
  - assets/vazado_avatar.png
  - assets/amanda_avatar.png
  - assets/dyh_avatar.png
  - assets/kerolay_avatar.png
  - assets/marina_avatar.png

## Quick Start:
1. **Immediate Preview**:
   - **File mode**: Double-click `index.html` - works locally with file:// URLs!
   - **Server mode**: Serve from a local web server for cleaner file separation:
     - `python -m http.server 8000`
     - `npx serve .`
     - `php -S localhost:8000`

2. **Development Setup**:

## Usage:
```jsx
import Component from './component';

function App() {
  return <Component />;
}
```

## Hatch Runtime Features:
The exported component includes support for Hatch's `useStoredState` hook:
- `useStoredState(key, defaultValue)` - Persistent state storage using localStorage
- Loads external files when served from a web server
- Falls back to inline data for file:// URLs
- State persists across browser sessions

The `index.html` file provides a complete Hatch-compatible runtime environment that works both when served from a web server (using external files) and when opened directly as file:// URLs (using inline fallbacks).

Generated on: 15/07/2025, 19:36:07

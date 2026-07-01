# Narration audio

Place Tibetan narration files here using two-digit item ids:

```text
01.mp3
02.mp3
...
37.mp3
```

The web player starts the matching audio when each mandala item appears.
Missing files are ignored silently so the visualization can run before all narration is ready.

Playback speed follows the configured item interval:

- If the audio duration is shorter than the current interval, it plays at normal speed.
- If the audio duration is longer than the current interval, it speeds up to fit before the next item.

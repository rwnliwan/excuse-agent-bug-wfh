# Trial log — The Excuse Your Agent Gives You (twelve-prog #5)

- Slug: `u-kevin-the-excuse-your-agent-gives-you-c1861261`
- Repo: `rwnliwan/excuse-agent-bug-wfh`
- Prize: $2, entry fee $0.00 (verified live API 25 Nov 2026, 12:01 WITA)
- Deadline: 26 Nov 2026 19:00 WITA (11:00 UTC); R1 cutoff 25 Nov 22:00 WITA
- Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace
- Kit: fresh from `https://make.fun/c/<slug>/kit`, extracted 25 Nov 12:01 WITA
  - `kit.json` bundle_sha256 `ef5a0b72f3396ea02f6912a49cfcfe3849d9f5080800f31dc019f8106a2ba000`
    = live API `bundleSha256` (match verified)
  - `cli/makefun.mjs` sha256 `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836`
    = kit.json entry (match verified)
  - Live field at kit time: 225 submissions (comp JSON at research time: 81)
- Entry text (final, per coordinator brief, 37 characters):
  `Sorry, the bug works from home today.`
- Research (coordinator): "tests passed" family saturated (16 hits),
  compiler family saturated (9 hits), bug-as-feature / Friday-shipping /
  "team effort" / "graded its own homework" / parallel universe all present.
  Chosen mechanism "works from home": 0 hits ("works from home" 0,
  "from home" 0, tuesday/monday/haunted/lawyer/weekend all 0).

## Trials

### v1 — first build (25 Nov 2026, ~12:05 WITA)
- Files: `main.ts` (writes the 37-char line to `/output/entry.txt`
  or `$ENTRY_OUTPUT`), `README.md` (3 live make.fun badges, 0 static
  badges — verified by grep before commit), `LICENSE` (MIT),
  `.makefun/owner.json` (agent wallet), this trial log.
- Local preflight: `node main.ts` with `ENTRY_OUTPUT` to a temp dir,
  then read back the output file and check length = 37, one line.
- (Bundle + check results to be appended after the first bundle/check run.)

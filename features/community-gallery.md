# Plan: Supabase-backed community pixel art gallery

## Context
Users can draw pixel art on the SketchpadHero canvas but drawings only persist locally. We want a "Share" button that saves drawings to Supabase and a new `/gallery` page to display community submissions. The site remains fully static — all Supabase calls happen client-side.

## Files to create
- `src/lib/supabase.ts` — shared Supabase client singleton
- `src/lib/validate-drawing.ts` — cell validation (colors in palette, bounds check)
- `src/pages/gallery.astro` — gallery page rendering saved drawings on canvas
- `.env.example` — documents required env vars

## Files to modify
- `src/components/SketchpadHero.astro` — add Share button + submission logic
- `src/components/Nav.astro` — add Gallery link between Projects and About

## Setup (manual, before code)
1. Create Supabase project, create `drawings` table:
   ```sql
   CREATE TABLE drawings (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     cells JSONB NOT NULL,
     created_at TIMESTAMPTZ DEFAULT now() NOT NULL
   );
   CREATE INDEX idx_drawings_created_at ON drawings (created_at DESC);
   ALTER TABLE drawings ENABLE ROW LEVEL SECURITY;
   CREATE POLICY "drawings_select" ON drawings FOR SELECT USING (true);
   CREATE POLICY "drawings_insert" ON drawings FOR INSERT WITH CHECK (
     jsonb_array_length(cells) <= 500 AND jsonb_typeof(cells) = 'array'
   );
   ```
2. Add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` to `.env` (already gitignored)
3. `bun add @supabase/supabase-js`

## Implementation steps

### 1. `src/lib/supabase.ts`
```ts
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
```

### 2. `src/lib/validate-drawing.ts`
- Export `CellTuple` type: `[number, number, string]`
- Export `validateCells(cells: unknown): cells is CellTuple[]`
- Check: is array, length 1-500, each cell has valid row (0-50), col (0-80), color in the 7-color palette set

### 3. SketchpadHero — Share button
- Add upload icon button (`id="share-btn"`) in `#pixel-ui` between clear-btn and tooltip-wrapper
- In script: import supabase + validateCells, add click handler that:
  - Checks 30s client-side cooldown
  - Builds cells array from current grid
  - Validates with `validateCells`
  - Inserts to `supabase.from("drawings")`
  - Disables button during request, shows feedback via alert

### 4. `src/pages/gallery.astro`
- Uses Layout wrapper, h1 "Community Gallery"
- Responsive CSS grid: 2 cols -> 3 -> 4
- Client script fetches latest 48 drawings from Supabase, ordered by created_at desc
- Each drawing rendered on a canvas element (fixed 16x12 cell thumbnail) with notebook background + grid lines
- Loading and empty states

### 5. Nav — add Gallery link
- Add `<li><a href="/gallery">Gallery</a></li>` between Projects and About

## Safety layers
1. **Client-side**: 30s cooldown, validateCells before insert
2. **Server-side (RLS)**: insert policy checks array length <= 500 and type = array
3. **Anon key**: intentionally public per Supabase design; security via RLS (no UPDATE/DELETE policies)

## Verification
1. `bun run dev`
2. Draw on sketchpad -> click Share -> confirm alert
3. Navigate to `/gallery` -> drawing appears
4. Refresh gallery -> drawing persists
5. Try sharing with empty canvas -> "Draw something first!" alert
6. Share twice within 30s -> cooldown alert
7. Check nav link works from all pages

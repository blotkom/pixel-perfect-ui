# WYLO bilingual reference recreation

## Scope
- Recreate the uploaded English screen at `/` and Arabic screen at `/ar`.
- Match the 768 × 1152 reference canvas, including spacing, typography, colors, decorative shapes, feature row, and authentication actions.
- Keep both pages free of extra navigation or controls so each remains faithful to its reference.

## Implementation
- Build one shared responsive screen component with language-specific copy, direction, logo ordering, and alignment.
- Recreate the mascot and branded visual details as local project assets derived from the supplied reference, while keeping text and controls as real page elements.
- Define WYLO’s palette, type, borders, and shadows as semantic design tokens in the global stylesheet.
- Add accessible labels and page-specific metadata for English and Arabic.

## Validation
- Compare both pages at the exact 768 × 1152 viewport.
- Check desktop and narrow-width behavior for overflow, alignment, and text fitting.

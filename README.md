# React + Vite

## Item previews

Import `ItemPreview` where it is used:

```jsx
import { ItemPreview } from "../components/ItemPreview";

<ItemPreview name="dragonstone" />
<ItemPreview name="iron-sword">an iron sword</ItemPreview>
```

`name` is the key in `src/config/locales/en/itemPreviews.json`; children
optionally override the displayed text. Add entries under `items`:

```json
{
  "my-weapon": {
    "title": "My Weapon",
    "type": "weapon",
    "baseDamage": 12,
    "enchantment": [
      { "id": "fire-damage", "magnitude": 10 },
      { "id": "frost-damage", "magnitude": 5 }
    ],
    "description": "A description of the weapon.",
    "img": "/previews/my-weapon.png",
    "link": "/wiki/My_Weapon"
  }
}
```

Only `title` is needed for an ordinary item; the description, image, and link
are optional. Without a link, the name opens the preview instead of navigating.
Weapons use `type: "weapon"` and an optional `baseDamage`. Armor uses
`type: "armor"`, an optional `armorRating`, and a required `slot`: `head`,
`neck`, `chest`, `hands`, `finger`, `feet`, or `shield`. Use armor slots for
clothing and jewelry too. An ordinary item can omit `type`.

Both armor and weapons can have an `enchantment` array. Each entry has an `id`
and a `magnitude`, as in the weapon example above. Define the IDs and their
description templates under `armor` or `weapon` in
`src/config/locales/en/enchantments.json`. Every `<mag>` in a description is
replaced with the item's magnitude. Armor enchantments also need a `validItems`
array listing the slots they can be applied to. For example:

```json
{
  "title": "My Helmet",
  "type": "armor",
  "slot": "head",
  "armorRating": 15,
  "enchantment": [{ "id": "fortify-alchemy", "magnitude": 24 }]
}
```

Enchantments applied to an invalid armor slot are shown in red with a warning.
Invalid slots, missing magnitudes, and unknown enchantments are reported in the
preview and the browser console. For an exceptional pre-enchanted artifact that
doesn't follow the normal slot rules, set `allowInvalidSlot` to `true` on that
specific enchantment entry. The armor still needs a valid slot.

Put images in `public/previews` and use their `/previews/...` paths. Add translated
item entries with the same keys to `da/itemPreviews.json` or
`dov/itemPreviews.json`. To translate enchantment descriptions, add entries with
the same type and ID to the corresponding `enchantments.json` file; armor slot
rules are always taken from the English catalogue. Missing entries fall back to
English. Provide appropriate attribution for any images you use.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

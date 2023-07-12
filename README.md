# Heroicons for Svelte

> A port of the [Heroicons](https://heroicons.com/) SVG icon set for Svelte.

## Installation

The package is installed via NPM:

```bash
npm install --save-dev @withpluto/heroicons-svelte
```

## Usage

Icon names are based on the Heroicon icon name, the theme and the icon size.

For example, the `academic-cap` icon with the `outline` theme and the `24px` size is named `AcademicCapOutline24`.

`Outline` theme icons only have a `24px` size, though `20px` is available for `Solid` theme icons.

To use the icons in your project

```svelte
<script>
  import { AcademicCapOutline24 } from '@withpluto/heroicons-svelte'
</script>

<AcademicCapOutline24 />
```

### Props

By default, the icons will have their default size and will inherit the text colour from their parent element.
Both of these properties can be overwritten via props.

| Prop    | Type     | Default                                | Description                                               |
| ------- | -------- | -------------------------------------- | --------------------------------------------------------- |
| `size`  | `number` | `24` or `20` depending on icon variant | The size of the icon in pixels.                           |
| `color` | `string` | `currentColor`                         | The colour of the icon. This can be any valid CSS colour. |

### SVGs

If you wish to use the SVGs directly, they are available in the `icons` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

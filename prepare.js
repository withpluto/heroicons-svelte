import fs from 'fs'
import chalk from 'chalk'

function sveltify(filename) {
  const base = filename.replace('.svg', '.svelte')
  const parts = base.split('-')
  return parts
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

const ICONS_DIR = './src/lib/icons'
const COMPONENTS_DIR = './src/lib/components'
const INDEX_FILE = './src/lib/index.js'

const buildIcons = async (iconsDir, size) => {
  fs.readdirSync(iconsDir).forEach((file) => {
    const src = `${iconsDir}/${file}`
    const sveltifiedFilename = sveltify(file)
    let dest = iconsDir.replace('icons', 'components')
    dest = dest.split('/').join('/') + '/' + sveltifiedFilename
    fs.copyFileSync(src, dest)
    console.debug(`Processing ${chalk.green(dest)}`)
    fs.readFile(dest, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }
      // Modify the files so that we can pass props if desired.
      const modified =
        `<script>\n  export let color = 'currentColor'\n  export let size = ${size}\n</script>\n\n` +
        data
          .replace(/"#(\w{6})"/g, '{color}')
          .replace(/width="\d{2}"/, 'width={size}')
          .replace(/height="\d{2}"/, 'height={size}')
      fs.writeFile(dest, modified, 'utf8', function (err) {
        if (err) return console.log('Error processing file: ', dest)
      })
    })
  })
}

const generateExportPaths = (iconsDir, suffix) => {
  const paths = []
  fs.readdirSync(iconsDir).forEach((file) => {
    paths.push(
      `export { default as ${file.replace('.svelte', '')}${suffix} } from '${iconsDir.replace(
        './src/lib',
        '$lib'
      )}/${file}'`
    )
  })
  return paths.join('\n')
}

const main = async () => {
  console.debug('Preparing Heroicons...')
  await Promise.all([
    buildIcons(`${ICONS_DIR}/20/solid`, 20),
    buildIcons(`${ICONS_DIR}/24/outline`, 24),
    buildIcons(`${ICONS_DIR}/24/solid`, 24)
  ])
  const paths =
    generateExportPaths(`${COMPONENTS_DIR}/20/solid`, 'Solid20') +
    '\n' +
    generateExportPaths(`${COMPONENTS_DIR}/24/outline`, 'Outline24') +
    '\n' +
    generateExportPaths(`${COMPONENTS_DIR}/24/solid`, 'Solid24')
  fs.writeFileSync(INDEX_FILE, paths)
  console.debug('Done!')
}

main()

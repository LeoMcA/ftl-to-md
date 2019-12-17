import Fluent from '@fluent/bundle'
const { FluentBundle, FluentResource } = Fluent
import { promises as fs } from 'fs'
import Syntax from "@fluent/syntax"
const { parse, Resource } = Syntax

async function main () {
  try {
    const strings = await fs.readFile(process.argv[2], 'utf8')
    const parsed = parse(strings)
    const resource = new FluentResource(strings)
    const bundle = new FluentBundle()
    const errors = bundle.addResource(resource)
    if (errors.length) {
      console.error(errors)
    }

    let output = ''

    for (const item of parsed.body) {
      switch (item.type) {
        case 'GroupComment':
          output += `\n\n## ${item.content}\n\n`
          break
        case 'Message':
          const { id, value, attributes } = bundle.getMessage(item.id.name)
          output += `* \`${id}\`: ${bundle.formatPattern(value)}\n`
          for (const [attr_id, attr_value] of Object.entries(attributes)) {
            output += `  * \`${attr_id}\`: ${bundle.formatPattern(attr_value)}\n`
          }
          break
        default:
          break
      }
    }

    await fs.writeFile('./output.md', output, 'utf8')
  } catch (e) {
    console.error(e)
  }
}

main()

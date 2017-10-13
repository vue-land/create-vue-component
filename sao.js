const superb = require('superb')
const pascalCase = require('pascal-case')

module.exports = {
  prompts: {
    name: {
      message: 'Type the package name',
      default: ':folderName:'
    },
    description: {
      message: 'Describe this component',
      default() {
        return `My ${superb()} Vue component.`
      }
    },
    componentName: {
      message: 'Type the component name in kebab-case',
      default: 'foo-bar'
    },
    author: {
      message: 'Type your name',
      default: ':gitUser:',
      store: true
    },
    gitUser: {
      message: 'Type your GitHub username',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'Type your email address',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'Type the url of your personal website',
      default({ gitUser }) {
        return `https://github.com/${gitUser}`
      },
      store: true
    }
  },
  data({ componentName }) {
    return {
      pascalCasedComponentName: pascalCase(componentName)
    }
  },
  post({ yarnInstall, gitInit, chalk, pm, isNewFolder, folderName }) {
    gitInit()

    yarnInstall()

    const cd = () => {
      if (isNewFolder) {
        console.log(`    ${chalk.cyan('cd')} ${folderName}`)
      }
    }

    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run dev\n`)
    console.log(chalk.bold(`  To build for production:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run build`)
    console.log(`    ${chalk.cyan(pm)} start`)
    console.log()
  }
}

const fse = require('fs-extra')
const path = require('path')

const rootPath = path.join(__dirname, '..')
const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')
const envFilePath = path.join(rootPath, '.env')

require('dotenv').config({ path: envFilePath })
const createPackageFile = async () => {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  )
  const { scripts, dependencies, devDependencies, workspaces, ...others } =
    JSON.parse(packageData)

  
  let newPackageData = {
    ...others,
    private: false,
  }

  if(dependencies) {
    const targetDependencies = Object.entries(dependencies).reduce((obj, [depsName, depsValue]) => {
      if (depsName.includes('@psycholog')) {
        obj[depsName] = depsValue.replace('workspace:', '')
      } else {
        obj[depsName] = depsValue
      }

      return obj
    }, {})

    newPackageData = {
      ...newPackageData,
      dependencies: targetDependencies,
    }
  }

  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  )
  console.log(`Created package.json in ${targetPath}`)

  await fse
    .copy(
      path.resolve(__dirname, '../LICENSE'),
      path.resolve(buildPath, './LICENSE')
    )
    .then(() => console.log('success!'))
    .catch((err) => console.error(err))

  return newPackageData
}

createPackageFile()

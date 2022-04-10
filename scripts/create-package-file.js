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
  const { scripts, devDependencies, workspaces, ...others } =
    JSON.parse(packageData)

  const newPackageData = {
    ...others,
    private: false,
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

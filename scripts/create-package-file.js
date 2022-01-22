require('../.pnp.cjs')

const fse = require('fs-extra')
const path = require('path')

const rootPath = path.join(__dirname, '..')
const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')
const envFilePath = path.join(rootPath, '.env')

require('dotenv').config({ path: envFilePath })

const PACKAGE_ORG_NAME = process.env.PACKAGE_ORG_NAME
const getTargetName = (name) => {
  const [orgName, packageName] = name.split('/')
  const targetOrgName = orgName.replace('@psycholog', `@${PACKAGE_ORG_NAME}`)

  return `${targetOrgName}/psycholog-${packageName}`
}

const createPackageFile = async () => {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  )
  const { scripts, devDependencies, workspaces, dependencies, ...others } =
    JSON.parse(packageData)

  let targetDependencies = dependencies
  if (targetDependencies) {
    targetDependencies = [...Object.entries(dependencies)].reduce(
      (acc, [key, value]) => {
        if (/@psycholog\/./.test(key)) {
          console.log(key)
          const nextKey = getTargetName(key)
          acc[nextKey] = value
        } else {
          acc[key] = value
        }
        return acc
      },
      {}
    )
  }

  const newPackageData = {
    ...others,
    private: false,
    name: PACKAGE_ORG_NAME ? getTargetName(others.name) : others.name,
    dependencies: targetDependencies,
  }

  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  )
  console.log(`Created package.json in ${targetPath}`)

  return newPackageData
}

createPackageFile()

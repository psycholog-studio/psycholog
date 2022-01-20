const fse = require('fs-extra')
const path = require('path')

const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')

const PACKAGE_ORG_NAME = process.env.PACKAGE_ORG_NAME

const createPackageFile = async () => {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  )
  const { scripts, devDependencies, workspaces, ...others } =
    JSON.parse(packageData)

  const [orgName, packageName] = others.name.split('/')
  const targetOrgName = orgName.replace('@psycholog', `@${PACKAGE_ORG_NAME}`)

  const newPackageData = {
    ...others,
    private: false,
    name: PACKAGE_ORG_NAME
      ? `${targetOrgName}/psycholog-${packageName}`
      : others.name,
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

const fs = require("fs")
const path = require("path")
const childProcess = require("child_process")

const root = path.resolve(__dirname, "..")
const outputDir = path.join(root, "artifacts")
const requestedDesignWidth = Number(process.env.VARIANT_DESIGN_WIDTH || 0)

function run(command, cwd) {
  console.log("\n> " + command)
  childProcess.execSync(command, {cwd, stdio: "inherit", shell: "/bin/bash"})
}

function resetDirectory(target) {
  fs.rmSync(target, {recursive: true, force: true})
  fs.mkdirSync(target, {recursive: true})
}

function applyDesignWidth() {
  if (!Number.isFinite(requestedDesignWidth) || requestedDesignWidth <= 0) return
  const manifestPath = path.join(root, "src", "manifest.json")
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  manifest.config = manifest.config || {}
  manifest.config.designWidth = requestedDesignWidth
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
  console.log("已应用 designWidth =", requestedDesignWidth)
}

function findRpk(directory) {
  const matches = []
  function visit(current) {
    fs.readdirSync(current, {withFileTypes: true}).forEach((entry) => {
      const next = path.join(current, entry.name)
      if (entry.isDirectory()) visit(next)
      else if (entry.isFile() && entry.name.endsWith(".rpk")) matches.push(next)
    })
  }
  visit(directory)
  if (matches.length !== 1)
    throw new Error("预期在 " + directory + " 找到一个 RPK，实际找到 " + matches.length + " 个。")
  return matches[0]
}

function build(outputName) {
  // 直接调用本地 aiot 二进制，避免依赖全局 yarn 版本
  const aiotBin = path.join(root, "node_modules", ".bin", "aiot")
  const aiotCmd = process.platform === "win32" ? `"${aiotBin}.cmd"` : `"${aiotBin}"`
  run(aiotCmd + " build --enable-jsc", root)
  const distPath = path.join(root, "dist")
  if (!fs.existsSync(distPath)) throw new Error("构建未生成 dist 目录：" + distPath)
  const rpk = findRpk(distPath)
  const destination = path.join(outputDir, outputName)
  fs.copyFileSync(rpk, destination)
  console.log("已生成: " + destination)
}

resetDirectory(outputDir)
applyDesignWidth()
build("Box-Vela.rpk")

console.log("\n构建完成：")
fs.readdirSync(outputDir).forEach((fileName) => console.log(path.join(outputDir, fileName)))

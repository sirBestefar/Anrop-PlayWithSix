module.exports = function (operation, mods) {
  mods = mods.map(function (mod) {
    return '- "' + mod.name + '"'
  }).sort().join('\n')

  return `---
:name: "${operation.title}"
:ip: "arma3.anrop.se"
:port: 2302
:info: "https://www.anrop.se/operations/operation.php?id=${operation.id}"
:motd: []
:rules: []
:force_server_name: true
:image: "${operation.image}"
:image_large: "${operation.image}"
:game: "9DE199E3-7342-4495-AD18-195CF264BA5B"
:open: true
:password: "hejsna"
:hidden: false
:required_mods:
${mods}
:apps: []
:missions: []
:mpmissions: []
  `
}

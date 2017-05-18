module.exports = function (operations) {
  const servers = operations.map(function (operation) {
    return '- "' + operation.id + '"'
  }).join('\n')

  return `---
:homepage: "https://www.anrop.se"
:image: "http://anrop.se/squad.png"
:image_large: "http://anrop.se/squad.png"
:archive_format: ".gz"
:game: "9DE199E3-7342-4495-AD18-195CF264BA5B"
:hosts: []
:servers:
${servers}
:apps:
  TS3:
    :type: "Teamspeak3"
    :ip: "ts.anrop.se"
    :port: 9987
:mods: {}
:missions: {}
:mpmissions: {}
:max_threads: 8
:server_mods_path: false
  `
}

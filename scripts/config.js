module.exports = {
  log: 'info',
  shape: {
    id: {
      separator: '-',
      generator: 'zd-svg-icon-%s'
    },
    transform: [
      {
        svgo: {
          plugins: [
            { removeXMLNS: true }
          ]
        }
      }
    ]
  },
  svg: {
    rootAttributes: {
      xmlns: 'http://www.w3.org/2000/svg'
    }
  },
  mode: {
    symbol: {
      dest: '',
      sprite: 'index.svg',
      inline: true
    }
  }
};

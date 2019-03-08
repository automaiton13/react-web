module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
              "useBuiltIns": "entry"
          }
      ],
      "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
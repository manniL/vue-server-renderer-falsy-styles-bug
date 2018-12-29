// Step 1: Create a Vue instance
const Vue = require('vue')
const app = new Vue({
  template: `<h1 :style="{ height: null, color: 'red' }">Welcome!!</h1>`
})
// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer()

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // Expected
  // <h1 style="color: 'red'">Welcome!!</h1>
})

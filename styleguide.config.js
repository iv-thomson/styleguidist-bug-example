const path = require('path');

module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	usageMode: 'expand',
  exampleMode: 'expand',
  styleguideComponents: {
    LinkRenderer: path.join(__dirname, 'src/rsg-components/LinkRenderer.jsx'),
    PropsRenderer: path.join(__dirname, 'src/rsg-components/PropsRenderer.js'),
  },
}

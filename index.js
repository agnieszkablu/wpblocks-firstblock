var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType('blocks-course/firstblock', {
  edit: function() {
    return createElement("p", {
      className: "my-custom-class"
    }, "Hello from the editor!");
  },
  save: function() {
    return createElement("p", {
      className: "my-custom-class"
    }, "Hello from the saved content!");
  }
});
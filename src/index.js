import { registerBlockType } from '@wordpress/blocks';

registerBlockType('blocks-course/firstblock', {
  edit: function() {
    return <p className="my-custom-class">Hello from the editor!</p>;
  },
  save: function() {
    return <p className="my-custom-class">Hello from the saved content!</p>;
  }
});

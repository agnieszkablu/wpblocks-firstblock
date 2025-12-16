import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import './editor.scss';

registerBlockType('blocks-course/firstblock', {
  edit: function() {
    const blockProps = useBlockProps();
    return <p {...blockProps}>Hello from the editor!</p>;
  },
  save: function() {
    const blockProps = useBlockProps.save();
    return <p {...blockProps}>Hello from the saved content!</p>;
  }
});

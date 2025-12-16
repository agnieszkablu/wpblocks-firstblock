import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

function edit() {
    const blockProps = useBlockProps();
    return <p {...blockProps}>Hello from the editor!</p>;
  }

  export default edit;  
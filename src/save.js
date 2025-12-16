import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

function save() {
  const blockProps = useBlockProps.save();
  return <p {...blockProps}>Hello from the saved content!</p>;
}

export default save;
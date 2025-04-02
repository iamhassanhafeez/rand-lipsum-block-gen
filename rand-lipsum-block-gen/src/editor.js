import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";

import "./editor.css";

const generateLoremIpsum = () => {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
};

export default function Edit({ attributes, setAttributes }) {
  const [text, setText] = useState(attributes.content || generateLoremIpsum());

  const handleGenerateText = () => {
    const newText = generateLoremIpsum();
    setText(newText);
    setAttributes({ content: newText });
  };

  return (
    <div {...useBlockProps()}>
      <p>{text}</p>
      <Button onClick={handleGenerateText} isPrimary>
        {__("Generate Lorem Ipsum", "rand-lipsum-block-gen")}
      </Button>
    </div>
  );
}

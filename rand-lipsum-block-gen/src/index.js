import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

registerBlockType("rand-lipsum-block-gen/lipsum", {
  edit: () => {
    return (
      <p {...useBlockProps()}>Random Lorem Ipsum Generator (Editor View)</p>
    );
  },
  save: () => {
    return (
      <p {...useBlockProps.save()}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
      </p>
    );
  },
});

"use client";

import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorProps as EditorWysiwygProps } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML } from "draft-js";

const EditorWysiwyg = dynamic<EditorWysiwygProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const toolbarOpts = {
  options: ["textAlign", "inline", "list", "history"],
  inline: {
    inDropdown: false,
    options: ["bold"],
    bold: true,
  },
  textAlign: {
    inDropdown: false,
    options: ["left", "center", "right", "justify"],
    left: true,
    center: true,
    right: true,
    justify: true,
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["unordered", "ordered", "indent", "outdent"],
    unordered: true,
    ordered: true,
    indent: true,
    outdent: true,
  },
};

type EditorProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  editorStyle?: React.CSSProperties;
};

export function Editor({
  defaultValue = "",
  onChange = () => {},
  editorStyle,
}: EditorProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    onChange(editorState.getCurrentContent().getPlainText());
    setEditorState(editorState);
  };

  useEffect(() => {
    setIsLoaded(true);
    const contentState = EditorState.createWithContent(
      defaultValue.indexOf("html") > 0
        ? ContentState.createFromBlockArray(
            convertFromHTML(defaultValue).contentBlocks
          )
        : ContentState.createFromText(defaultValue)
    );
    setEditorState(contentState);
  }, [defaultValue]);

  return (
    <div>
      {isLoaded && (
        <EditorWysiwyg
          editorStyle={editorStyle}
          editorState={editorState}
          wrapperClassName="wysiwyg-wrapper"
          editorClassName="wysiwyg-editor"
          onEditorStateChange={onEditorStateChange}
          toolbar={toolbarOpts}
        />
      )}
    </div>
  );
}

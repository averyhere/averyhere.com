'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

// Define the ref type for the RichTextEditor component
export type RichTextEditorHandle = {
  getContent: () => string;
  setContent: (arg0: string) => void;
};

const RichTextEditor = forwardRef<RichTextEditorHandle>((_, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': 2 }, { 'header': 3 }, { 'header': 4 }, { 'header': 5 }, { 'header': 6 }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'],
          ],
        },
        placeholder: 'Write something...',
      });
    }

    return () => {
      quillRef.current = null; // Cleanup to avoid memory leaks
    };
  }, []);

  // Expose the getContent function to the parent component
  useImperativeHandle(ref, () => ({
    getContent: () => {
      if (quillRef.current) {
        return quillRef.current.root.innerHTML; // Return the HTML content
      }
      return '';
    },
    setContent: (value) => {
      if (quillRef.current) {
        if (typeof value === 'string') {
          const deltaVal = quillRef.current.clipboard.convert({html: value});
          quillRef.current.setContents(deltaVal);
        } else {
          quillRef.current.setContents(value);
        }
      }
    }
  }));

  return (
    <div ref={editorRef} style={{ minHeight: '300px'}} className='bg-purple/20' />
  );
});

export default RichTextEditor;
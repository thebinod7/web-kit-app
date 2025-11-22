'use client';

import { useEffect, useState } from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'draft-js/dist/Draft.css';
import { Bold, Italic, List, ListOrdered } from 'lucide-react';

type Props = {
    value?: string; // input HTML
    onChange?: (html: string) => void; // output HTML
};

export const RichTextEditor = ({ value, onChange }: Props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // Convert HTML -> Draft.js
    useEffect(() => {
        if (!value) return;

        const blocks = htmlToDraft(value);
        const content = ContentState.createFromBlockArray(
            blocks.contentBlocks,
            blocks.entityMap
        );
        setEditorState(EditorState.createWithContent(content));
    }, []); // ❗ Load only once

    // Handle editor changes
    const handleChange = (state: EditorState) => {
        setEditorState(state);
        const html = draftToHtml(convertToRaw(state.getCurrentContent()));
        onChange?.(html);
    };

    // Toggle inline styles
    const toggleInline = (style: string) =>
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));

    // Toggle block types
    const toggleBlock = (block: string) =>
        setEditorState(RichUtils.toggleBlockType(editorState, block));

    return (
        <div className="bg-white">
            {/* Minimal Toolbar */}
            <div className="flex gap-2 mb-3 rounded-lg p-2 bg-gray-50">
                <button
                    onClick={() => toggleInline('BOLD')}
                    className="p-1.5 rounded hover:bg-gray-200 transition"
                    type="button"
                >
                    <Bold size={16} />
                </button>

                <button
                    onClick={() => toggleInline('ITALIC')}
                    className="p-1.5 rounded hover:bg-gray-200 transition"
                    type="button"
                >
                    <Italic size={16} />
                </button>

                <button
                    onClick={() => toggleBlock('unordered-list-item')}
                    className="p-1.5 rounded hover:bg-gray-200 transition"
                    type="button"
                >
                    <List size={16} />
                </button>

                <button
                    onClick={() => toggleBlock('ordered-list-item')}
                    className="p-1.5 rounded hover:bg-gray-200 transition"
                    type="button"
                >
                    <ListOrdered size={16} />
                </button>
            </div>

            {/* Editor Area */}
            <div
                className="min-h-[150px] p-2 border border-gray-200 rounded-md"
                dir="ltr"
            >
                <Editor
                    editorState={editorState}
                    onChange={handleChange}
                    placeholder="Start typing..."
                />
            </div>
        </div>
    );
};

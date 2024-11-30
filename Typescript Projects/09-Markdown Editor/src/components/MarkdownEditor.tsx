import { marked } from 'marked';
import React, { useState } from 'react';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(`
# Markdown Editor

## Features
- Live preview
- Syntax highlighting
- Dark mode
- Export to HTML and PDF
- Customizable themes

## Usage
Write your Markdown text in the editor on the left. You can see the rendered HTML on the right.

**Enjoy writing your Markdown!**
    `);
    const [showHtml, setShowHtml] = useState<boolean>(false);

    const toggleHtmlPreview = () => {
        setShowHtml(!showHtml);
    }

    return (
        <div className="relative flex flex-grow overflow-x-hidden">
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-1/2 p-2 border-r border-gray-300 resize-none"
                placeholder="Write your markdown here..."
                style={{ height: 'calc(100vh - 8rem)', overflowY: 'auto' }} // Adjusted height and added vertical scroll
            />
            <div className="w-1/2 p-2 border-l border-gray-300 bg-gray-100 relative overflow-auto">
                <button
                    onClick={toggleHtmlPreview}
                    className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded"
                >
                    {showHtml ? 'Hide HTML' : 'Show HTML'}
                </button>
                {!showHtml && (
                    <div
                        className="markdown-preview"
                        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                        style={{ height: 'calc(100vh - 8rem)', overflowY: 'auto' }} // Adjusted height and added vertical scroll
                    />
                )}
                {showHtml && (
                    <pre className="html-preview whitespace-pre-wrap break-words"
                         style={{ height: 'calc(100vh - 8rem)', overflowY: 'auto' }} // Adjusted height and added vertical scroll
                    >
                        {marked(markdown)}
                    </pre>
                )}
            </div>
        </div>
    );
}

export default MarkdownEditor;

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function CodeBlock({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <SyntaxHighlighter showLineNumbers language="javascript" style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

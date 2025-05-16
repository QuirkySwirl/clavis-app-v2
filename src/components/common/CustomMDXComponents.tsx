import Link from 'next/link';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

// This file is for customizing MDX components
// For a full list of available components, see:
// https://mdxjs.com/table-of-components/

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard HTML elements
    h1: ({ children }) => <h1 className="text-4xl font-bold font-heading mt-8 mb-4 text-primary">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold font-heading mt-6 mb-3 text-secondary">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold font-heading mt-5 mb-2 text-accent-1">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold font-heading mt-4 mb-1 text-accent-2">{children}</h4>,
    p: ({ children }) => <p className="my-4 leading-relaxed text-text-primary">{children}</p>,
    a: ({ href, children }) => {
      if (href?.startsWith('/')) {
        return <Link href={href} className="text-accent-blue-light hover:underline hover:text-accent-blue-deep">{children}</Link>;
      }
      if (href?.startsWith('#')) {
        return <a href={href} className="text-accent-blue-light hover:underline hover:text-accent-blue-deep">{children}</a>;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-blue-light hover:underline hover:text-accent-blue-deep">{children} <span className="text-xs">↗</span></a>;
    },
    ul: ({ children }) => <ul className="list-disc list-inside my-4 pl-4 text-text-primary space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside my-4 pl-4 text-text-primary space-y-1">{children}</ol>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-accent-3 pl-4 italic my-6 text-text-secondary">{children}</blockquote>,
    img: (props) => (
      <div className="my-6 rounded-lg overflow-hidden shadow-lg">
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is passed via props */}
        <Image {...(props as any)} layout="responsive" width={700} height={400} objectFit="cover" />
      </div>
    ),
    hr: () => <hr className="my-8 border-border" />,
    code: ({ children }) => <code className="bg-card/80 text-accent-pink-vivid px-1 py-0.5 rounded-sm text-sm font-mono">{children}</code>,
    pre: ({ children }) => <pre className="bg-card/80 p-4 rounded-md overflow-x-auto my-6 text-sm">{children}</pre>,
    
    // You can add custom components here as well
    // MyCustomComponent: (props) => <div className="my-custom-style">{props.children}</div>,

    // Spread the rest of the components given to the hook
    ...components,
  };
}

// Default export for simpler import in MDXRemote if not using the hook directly
// const CustomMDXComponents = useMDXComponents({});
// export default CustomMDXComponents;

// Note: The `useMDXComponents` hook is the recommended way for Next.js App Router.
// The MDXRemote component will internally call this hook if it's provided in its scope
// or if you pass the components directly: <MDXRemote source={...} components={useMDXComponents({})} />

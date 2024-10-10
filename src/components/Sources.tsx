import Link from 'next/link';
import React from 'react';

const Sources = ({ sources }: { sources: string[] }) => {
  return (
    <div className="max-w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg p-8 lg:p-12 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4"> 🔗 Sources:</h1>
      <ol className="space-y-1.5 list-decimal list-inside ml-0.5 marker:text-secondary marker:font-semibold">
        {sources.map((source, i) => {
          return (
            <li key={i}>
              <Link
                style={{
                  overflowWrap: 'break-word',
                }}
                className={
                  'border-b border-white/40 hover:border-secondary/80 hover:text-secondary transition'
                }
                href={source}
              >
                {source}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Sources;

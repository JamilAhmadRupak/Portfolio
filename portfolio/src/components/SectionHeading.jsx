import React from 'react';

// Consistent section header: numbered mono label, sans title with a serif-italic accent word,
// optional intro text, and an optional action (link) aligned to the right.
const SectionHeading = ({ index, label, title, accent, children, action, center = false }) => (
    <div className={`mb-12 md:mb-16 flex flex-col gap-4 ${center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
        <div className={center ? 'max-w-2xl' : 'max-w-3xl'}>
            <p className="eyebrow mb-4 text-accent-300">
                <span className="text-zinc-500">{index}</span>
                <span className="mx-2 text-zinc-600">/</span>
                {label}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
                {title} <span className="accent text-accent-400">{accent}</span>
            </h2>
            {children && <p className="mt-4 text-zinc-400 leading-relaxed">{children}</p>}
        </div>
        {action}
    </div>
);

export default SectionHeading;

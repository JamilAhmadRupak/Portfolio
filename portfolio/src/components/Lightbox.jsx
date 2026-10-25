import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';

// Full-screen image viewer for certificates and photos. Closes on Escape, backdrop click or the X button.
const Lightbox = ({ item, onClose }) => {
    useEffect(() => {
        if (!item) return undefined;

        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [item, onClose]);

    if (!item) return null;

    // Portal to <body> so the fixed overlay isn't trapped under main's stacking context (header is z-50)
    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            onClick={onClose}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in md:p-10"
        >
            <figure className="relative max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <img
                    src={item.full || item.image}
                    alt={item.title}
                    className="max-h-[78vh] w-auto rounded-lg border border-white/10 shadow-2xl"
                />
                <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        {item.issuer && <p className="text-zinc-400">{item.issuer}</p>}
                    </div>
                    {item.link?.endsWith('.pdf') && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-accent-300 hover:text-accent-200"
                        >
                            Open original PDF <ExternalLink size={14} />
                        </a>
                    )}
                </figcaption>
                <button
                    type="button"
                    autoFocus
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute -right-3 -top-3 rounded-full border border-white/10 bg-zinc-900 p-2 text-zinc-300 transition-colors hover:text-white"
                >
                    <X size={18} />
                </button>
            </figure>
        </div>,
        document.body
    );
};

export default Lightbox;

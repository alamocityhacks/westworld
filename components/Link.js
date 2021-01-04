export default function Link({
    href,
    children,
}) {
    return (
        <a href={href} className="link">
            <div className="pointer-events-none">
                {children}
            </div>
        </a>
    )
}
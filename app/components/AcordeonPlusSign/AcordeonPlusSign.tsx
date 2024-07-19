interface AcordeonProps {
    title: string;
    content: string;
    defaultChecked?: boolean;
    className?: string;
}

function AcordeonPlusSign({ title, content, defaultChecked, className }: AcordeonProps) {
    return (


        <div className={`collapse collapse-plus ${className}`}>
            <input type="radio" name="my-accordion-3" {... (defaultChecked ? { defaultChecked: true } : {})} />
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>

        
    )
}

export default AcordeonPlusSign
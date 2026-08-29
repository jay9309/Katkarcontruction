const SectionTitle = ({
    subtitle,
    title,
    description
}) => {

    return (

        <div className="section-title">

            {subtitle && (
                <p className="section-subtitle">
                    {subtitle}
                </p>
            )}


            <h2>
                {title}
            </h2>


            {description && (
                <p className="section-description">
                    {description}
                </p>
            )}

        </div>
    );
};


export default SectionTitle;
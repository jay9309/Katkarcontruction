const ProjectGallery = ({ project }) => {

    return (

        <div className="project-gallery">


            {/* PLANS */}

            {project.plans &&
                project.plans.length > 0 && (

                    <section className="gallery-section">

                        <h2>
                            Plans
                        </h2>


                        <div className="gallery-grid">

                            {project.plans.map(
                                (image, index) => (

                                    <div
                                        className="gallery-item"
                                        key={index}
                                    >

                                        <img
                                            src={image}
                                            alt={`Plan ${index + 1}`}
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>
                )}



            {/* 3D DESIGNS */}

            {project.threeD &&
                project.threeD.length > 0 && (

                    <section className="gallery-section">

                        <h2>
                            3D Designs
                        </h2>


                        <div className="gallery-grid">

                            {project.threeD.map(
                                (image, index) => (

                                    <div
                                        className="gallery-item"
                                        key={index}
                                    >

                                        <img
                                            src={image}
                                            alt={`3D Design ${index + 1}`}
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>
                )}



            {/* ELEVATION */}

            {project.elevation &&
                project.elevation.length > 0 && (

                    <section className="gallery-section">

                        <h2>
                            Elevation
                        </h2>


                        <div className="gallery-grid">

                            {project.elevation.map(
                                (image, index) => (

                                    <div
                                        className="gallery-item"
                                        key={index}
                                    >

                                        <img
                                            src={image}
                                            alt={`Elevation ${index + 1}`}
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>
                )}



            {/* SITE IMAGES */}

            {project.siteImages &&
                project.siteImages.length > 0 && (

                    <section className="gallery-section">

                        <h2>
                            Construction Site
                        </h2>


                        <div className="gallery-grid">

                            {project.siteImages.map(
                                (image, index) => (

                                    <div
                                        className="gallery-item"
                                        key={index}
                                    >

                                        <img
                                            src={image}
                                            alt={`Site Image ${index + 1}`}
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>
                )}

        </div>
    );
};


export default ProjectGallery;
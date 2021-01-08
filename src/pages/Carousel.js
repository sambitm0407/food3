import React from 'react'

export default function Carousel() {
    return (
        <>
        <div>
            <section>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://magazine.xpert.tv/wp-content/uploads/2020/12/bangers-lace-chicago-food-bread-interior-ebkphoto-eric-kleinberg-photography-12-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.squarespace-cdn.com/content/555aabc2e4b04d1c654be14d/1481760055635-48LUTFVUZJ6JW0UPQLNM/7166_Rootstock_Wine_Bar_Cupertino_Commercial_Food_Photography.jpg?format=1500w&content-type=image%2Fjpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2019/09/junk-food-turns-kid-blind.jpg?quality=80&strip=all&ssl=1" className="d-block w-100" alt="..." />
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </section>
            <section className="search-sec">
                <div className="container">
                <form action="#" method="post" noValidate="novalidate">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="Date" />
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="Person" />
                        </div>
                        
                        <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                            <button type="button" className="btn btn-danger wrn-btn">Book Table</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </section>
            </div>
            </>
    )
}

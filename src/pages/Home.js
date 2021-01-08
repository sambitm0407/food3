import React, { Component } from 'react';
import Carousel from '../pages/Carousel'

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel />

                <section className="about-us py-5 " id="about-us">
                    <div className="container mt-5">
                        <div className="row">
                        <div className="col-md-6">
                            <h1 className="text-success">Welcome!</h1>
                            <h2>Know More About Us</h2>
                            <hr />
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etae magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button type="button" className="btn btn-success">Let's Know More</button>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/04/04/Pictures/_ac5ac2aa-7679-11ea-a349-a18bc5ff339a.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                </section>

                <section className="menu_list mt-60 mb-60">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-60">
                        <p>Famous for good food</p>
                        <h4>our menu</h4>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <ul className="nav nav-tabs menu_tab" id="myTab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab" aria-selected="false">Breakfast</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab" aria-selected="false">Lunch</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active show" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab" aria-selected="true">Dinner</a>
                        </li>
                    </ul>
                    </div>
                    <div className="row">
                    <div className="tab-content col-xl-12" id="myTabContent">
                        <div className="tab-pane fade" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-6.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade active show" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            <div className="single_menu_list">
                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                <div className="menu_content">
                                <h4>Chicken Fried Salad  <span>$45</span></h4>
                                <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="box_btn">
                        <a href="#">view more</a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            
                
            </>
        )
    }
}

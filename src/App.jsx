
import './App.css'

function App() {
  

  return (
    <>
    <div className="app-admin-wrap layout-horizontal-bar">
        <div className="main-header">
            <div className="logo"><img src="./assets/images/madarsa_logo.jpg" /></div>
            <div className="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="d-flex align-items-center">
                
                <div className="dropdown mega-menu d-none d-md-block"><a className="btn text-muted dropdown-toggle me-3" id="dropdownMegaMenuButton" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu</a>
                    <div className="dropdown-menu text-start" aria-labelledby="dropdownMenuButton">
                        <div className="row m-0">
                            <div className="col-md-4 p-4 bg-img">
                                <h2 className="title">Mega Menu <br /> Sidebar</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur.</p>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.</p>
                                <button className="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>
                            </div>
                            <div className="col-md-4 p-4">
                                <p className="text-primary text--cap border-bottom-primary d-inline-block">Features</p>
                                <div className="menu-icon-grid w-auto p-0"><a href="#"><i className="i-Shop-4"></i> Home</a><a href="#"><i className="i-Library"></i> UI Kits</a><a href="#"><i className="i-Drop"></i> Apps</a><a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a><a href="#"><i className="i-Checked-User"></i> Sessions</a><a href="#"><i className="i-Ambulance"></i> Support</a></div>
                            </div>
                            <div className="col-md-4 p-4">
                                <p className="text-primary text--cap border-bottom-primary d-inline-block">Components</p>
                                <ul className="links">
                                    <li><a href="accordion.html">Accordion</a></li>
                                    <li><a href="alerts.html">Alerts</a></li>
                                    <li><a href="buttons.html">Buttons</a></li>
                                    <li><a href="badges.html">Badges</a></li>
                                    <li><a href="carousel.html">Carousels</a></li>
                                    <li><a href="lists.html">Lists</a></li>
                                    <li><a href="popover.html">Popover</a></li>
                                    <li><a href="tables.html">Tables</a></li>
                                    <li><a href="datatables.html">Datatables</a></li>
                                    <li><a href="modals.html">Modals</a></li>
                                    <li><a href="nouislider.html">Sliders</a></li>
                                    <li><a href="tabs.html">Tabs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="search-bar">
                    <input type="text" placeholder="Search" /><i className="search-icon text-muted i-Magnifi-Glass1"></i>
                </div>
            </div>
            <div></div>
            <div className="header-part-right">
               <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen=""></i>
                
                <div className="dropdown"><i className="i-Safe-Box text-muted header-icon" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="menu-icon-grid"><a href="#"><i className="i-Shop-4"></i> Home</a><a href="#"><i className="i-Library"></i> UI Kits</a><a href="#"><i className="i-Drop"></i> Apps</a><a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a><a href="#"><i className="i-Checked-User"></i> Sessions</a><a href="#"><i className="i-Ambulance"></i> Support</a></div>
                    </div>
                </div>
                
                <div className="dropdown">
                    <div className="badge-top-container" id="dropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="badge bg-primary">3</span><i className="i-Bell text-muted header-icon"></i></div>
                    
                    <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Speach-Bubble-6 text-primary me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>New message</span><span className="badge rounded-pill text-bg-primary ms-1 me-1">new</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">10 sec ago</span></p>
                                <p className="text-small text-muted m-0">James: Hey! are you busy?</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Receipt-3 text-success me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>New order received</span><span className="badge rounded-pill text-bg-success ms-1 me-1">new</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">2 hours ago</span></p>
                                <p className="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Empty-Box text-danger me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>Product out of stock</span><span className="badge rounded-pill text-bg-danger ms-1 me-1">3</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">10 hours ago</span></p>
                                <p className="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Data-Power text-success me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>Server Up!</span><span className="badge rounded-pill text-bg-success ms-1 me-1">3</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">14 hours ago</span></p>
                                <p className="text-small text-muted m-0">Server rebooted successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dropdown">
                    <div className="user col align-self-end"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div className="dropdown-header"><i className="i-Lock-User me-1"></i> Timothy Carlson</div><a className="dropdown-item">Account settings</a><a className="dropdown-item">Billing history</a><a className="dropdown-item" href="signin.html">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="horizontal-bar-wrap">
            <div className="header-topnav">
                <div className="container-fluid">
                  <div className="topnav rtl-ps-none" id="">
                        <ul className="menu float-start">
                          <li>
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" >Dashboard</label><a href="#"><i className="nav-icon me-2 i-Bar-Chart"></i> Dashboard</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                          <li><a href="dashboard2.html"><i className="nav-icon me-2 i-Clock-4"></i><span className="item-name">Version 2</span></a></li>  
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">UI kits</label><a href="#"><i className="nav-icon me-2 i-Suitcase"></i> UI kits</a>
                                    </div>
                                </div>
                            </li>
                           
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Extra UI kits</label><a href="#"><i className="nav-icon i-Library me-2"></i> Extra UI kits</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li><a href="cards.html"><i className="nav-icon me-2 i-Line-Chart-2"></i><span className="item-name">Cards</span></a></li>
                                            <li><a href="card.metrics.html"><i className="nav-icon me-2 i-ID-Card"></i><span className="item-name">Card Metrics</span></a></li>
                                            <li><a href="carousel.html"><i className="nav-icon me-2 i-Video-Photographer"></i><span className="item-name">Carousels</span></a></li>
                                            <li><a href="nouislider.html"><i className="nav-icon me-2 i-Width-Window"></i><span className="item-name">Sliders</span></a></li>
                                            <li><a href="image.cropper.html"><i className="nav-icon me-2 i-Crop-2"></i><span className="item-name">Image Cropper</span></a></li>
                                            <li><a href="loaders.html"><i className="nav-icon me-2 i-Loading-3"></i><span className="item-name">Loaders</span></a></li>
                                            <li><a href="ladda.button.html"><i className="nav-icon me-2 i-Loading-2"></i><span className="item-name">Ladda Buttons</span></a></li>
                                            <li><a href="toastr.html"><i className="nav-icon me-2 i-Bell"></i><span className="item-name">Toastr</span></a></li>
                                            <li><a href="sweet.alerts.html"><i className="nav-icon me-2 i-Approved-Window"></i><span className="item-name">Sweet Alerts</span></a></li>
                                            <li><a href="tour.html"><i className="nav-icon me-2 i-Plane"></i><span className="item-name">User Tour</span></a></li>
                                            <li><a href="upload.html"><i className="nav-icon me-2 i-Data-Upload"></i><span className="item-name">Upload</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Apps</label><a href="#"><i className="nav-icon me-2 i-Computer-Secure"></i> Apps</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li><a href="invoice.html"><i className="nav-icon me-2 i-Add-File"></i><span className="item-name">Invoice</span></a></li>
                                            <li><a href="inbox.html"><i className="nav-icon me-2 i-Email"></i><span className="item-name">Inbox</span></a></li>
                                            <li><a href="chat.html"><i className="nav-icon me-2 i-Speach-Bubble-3"></i><span className="item-name">Chat</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                           
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Forms</label><a href="#"><i className="nav-icon me-2 i-File-Clipboard-File--Text"></i> Forms</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li><a href="form.basic.html"><i className="nav-icon me-2 i-File-Clipboard-Text--Image"></i><span className="item-name">Basic Elements</span></a></li>
                                            <li><a href="form.layouts.html"><i className="nav-icon me-2 i-Split-Vertical"></i><span className="item-name">Form Layouts</span></a></li>
                                            <li><a href="form.input.group.html"><i className="nav-icon me-2 i-Receipt-4"></i><span className="item-name">Input Groups</span></a></li>
                                            <li><a href="form.validation.html"><i className="nav-icon me-2 i-Close-Window"></i><span className="item-name">Form Validation</span></a></li>
                                            <li><a href="smart.wizard.html"><i className="nav-icon me-2 i-Width-Window"></i><span className="item-name">Smart Wizard</span></a></li>
                                            <li><a href="tag.input.html"><i className="nav-icon me-2 i-Tag-2"></i><span className="item-name">Tag Input</span></a></li>
                                            <li><a href="editor.html"><i className="nav-icon me-2 i-Pen-2"></i><span className="item-name">Rich Editor</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                           
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Charts</label><a href="#"><i className="nav-icon me-2 i-Bar-Chart-5"></i> Charts</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li className="nav-item"><a href="charts.echarts.html" title="charts"><i className="nav-icon me-2 i-Bar-Chart-2"></i><span className="item-name">echarts</span></a></li>
                                            <li className="nav-item"><a href="charts.chartsjs.html"><i className="nav-icon me-2 i-File-Clipboard-Text--Image"></i><span className="item-name">ChartJs</span></a></li>
                                            <li><a href="charts.apexAreaCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Area</a></li>
                                            <li><a href="charts.apexBarCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Bar</a></li>
                                            <li><a href="charts.apexBubbleCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Bubble</a></li>
                                            <li><a href="charts.apexColumnCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Column</a></li>
                                            <li><a href="charts.apexCandleStickCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>CandleStick</a></li>
                                            <li><a href="charts.apexLineCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Line</a></li>
                                            <li><a href="charts.apexMixCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Mix</a></li>
                                            <li><a href="charts.apexPieDonutCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>PieDonut</a></li>
                                            <li><a href="charts.apexRadarCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Radar</a></li>
                                            <li><a href="charts.apexRadialBarCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>RadialBar</a></li>
                                            <li><a href="charts.apexScatterCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Scatter</a></li>
                                            <li><a href="charts.apexSparklineCharts.html"><i className="nav-icon me-2 i-Bar-Chart-2"></i>Sparkline</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Widgets</label><a href="#"><i className="nav-icon me-2 i-Windows-2"></i> Widgets</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li className="nav-item"><a href="widget-card.html" title="charts"><i className="nav-icon me-2 i-Receipt-4"></i><span className="item-name">Widget card</span></a></li>
                                            <li className="nav-item"><a href="widget-statistics.html"><i className="nav-icon me-2 i-Receipt-4"></i><span className="item-name">widget statistics</span></a></li>
                                            <li><a href="widget-list.html"><i className="nav-icon me-2 i-Receipt-4"></i>Widget List</a></li>
                                            <li><a href="widget-app.html"><i className="nav-icon me-2 i-Receipt-4"></i>Widget App </a></li>
                                            <li><a href="weather-card.html"><i className="nav-icon me-2 i-Receipt-4"></i>Weather App </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                           
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Widgets</label><a href="datatables.html"><i className="nav-icon me-2 i-File-Horizontal-Text"></i> Datatables</a>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Sessions</label><a href="#"><i className="nav-icon me-2 i-Administrator"></i> Sessions</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li className="nav-item"><a href="../sessions/signin.html" title="charts"><i className="nav-icon me-2 i-Checked-User"></i><span className="item-name">Signin</span></a></li>
                                            <li className="nav-item"><a href="../sessions/signup.html"><i className="nav-icon me-2 i-Add-User"></i><span className="item-name">Sign Up</span></a></li>
                                            <li><a href="../sessions/forgot.html"><i className="nav-icon me-2 i-Add-User"></i>Forgot</a></li>
                                        </ul>
                                    </div>
                                </div>
                              </li> 
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Others</label><a href="#"><i className="nav-icon me-2 i-Double-Tap"></i>Others</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li className="nav-item"><a href="../sessions/not-found.html" title="charts"><i className="nav-icon me-2 i-Error-404-Window"></i><span className="item-name">Not Found</span></a></li>
                                            <li className="nav-item"><a href="user.profile.html"><i className="nav-icon me-2 i-Male"></i><span className="item-name">User Profile</span></a></li>
                                            <li><a href="blank.html"><i className="nav-icon me-2 i-File-Horizontal"></i>Blank Page</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                    <div>
                                        <label className="toggle" htmlFor="drop-2">Doc</label><a href="http://demos.ui-lib.com/gull-htms-doc/"><i className="nav-icon me-2 i-Safe-Box1"></i>Doc</a>
                                    </div>
                                </div>
                            </li>
                            
                          </li>
                        </ul>
                  </div>
                </div>
            </div>
        </div>
        
        <div className="main-content-wrap d-flex flex-column">
           
            <div className="main-content">
                <div className="breadcrumb">
                    <h1 className="me-2">Version 2</h1>
                    <ul>
                        <li><a href="">Dashboard</a></li>
                        <li>Version 2</li>
                    </ul>
                </div>
                <div className="separator-breadcrumb border-top"></div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Data-Upload"></i>
                                        <p className="text-muted mt-2 mb-2">Today&apos;s Upload</p>
                                        <p className="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                        <p className="text-muted mt-2 mb-2">New Users</p>
                                        <p className="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Money-2"></i>
                                        <p className="text-muted mt-2 mb-2">Total sales</p>
                                        <p className="text-primary text-24 line-height-1 m-0">4021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Money-2"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Gear"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Bell"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card mb-4">
                            <div className="card-body p-0">
                                <h5 className="card-title m-0 p-3">Sales</h5>
                                <div id="echart4" style={{height: 300}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-title">Last Month Summary</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <table className="table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Portable Speaker</td>
                                                    <td className="fw-bold text-success">+ $1200</td>
                                                </tr>
                                                <tr>
                                                    <td>Portable Headphone</td>
                                                    <td className="fw-bold">In Stock</td>
                                                </tr>
                                                <tr>
                                                    <td>Speaker</td>
                                                    <td className="text-danger">Out of stock</td>
                                                </tr>
                                                <tr>
                                                    <td>Watch</td>
                                                    <td className="text-warning fw-bold">Low stock</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="echart5" style={{ height: 200}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-title">Top Authors</div>
                                <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">David Hopkins</h6>
                                        <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">James Mitchell</h6>
                                        <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">Jessica Mitchell</h6>
                                        <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-6">
                        <div className="card o-hidden mb-4">
                            <div className="card-header d-flex align-items-center">
                                <h3 className="w-50 float-start card-title m-0">New Users</h3>
                                <div className="dropdown dropleft text-end w-50 float-end">
                                    <button className="btn bg-gray-100" id="dropdownMenuButton_table1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="nav-icon i-Gear-2"></i></button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_table1"><a className="dropdown-item" href="#">Add new user</a><a className="dropdown-item" href="#">View All users</a><a className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table dataTable-collapse text-center" id="user_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Smith</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Smith@gmail.com</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jhon Doe</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Jhon@gmail.com</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Alex</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Otto@gmail.com</td>
                                                <td><span className="badge bg-warning">Not Active</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="card o-hidden mb-4">
                            <div className="card-header d-flex align-items-center">
                                <h3 className="w-50 float-start card-title m-0">Total Sales</h3>
                                <div className="dropdown dropleft text-end w-50 float-end">
                                    <button className="btn bg-gray-100" id="dropdownMenuButton_table2" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="nav-icon i-Gear-2"></i></button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_table2"><a className="dropdown-item" href="#">Add new user</a><a className="dropdown-item" href="#">View All users</a><a className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table dataTable-collapse text-center" id="sales_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Watch</td>
                                                <td>12-10-2019</td>
                                                <td>$30</td>
                                                <td><span className="badge bg-success">Delivered</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Iphone</td>
                                                <td>23-10-2019</td>
                                                <td>$300</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Watch</td>
                                                <td>12-10-2019</td>
                                                <td>$30</td>
                                                <td><span className="badge bg-warning">Not Delivered</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Travel Different Countries</div>
                                <div className="ul-widget-app__poll-list mb-4">
                                    <h3 className="heading me-2">2589</h3>
                                    <div className="d-flex"><span className="text-muted text-12">From Uganda</span><span className="t-font-boldest ms-auto">33%<i className="i-Turn-Up-2 text-14 text-success font-weight-700"></i></span></div>
                                    <div className="progress progress--height-2 mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ul-widget-app__poll-list mb-4">
                                    <h3 className="heading me-2">4589</h3>
                                    <div className="d-flex"><span className="text-muted text-12">From U.S.A</span><span className="t-font-boldest ms-auto">63%<i className="i-Turn-Down-2 text-14 text-danger font-weight-700"></i></span></div>
                                    <div className="progress progress--height-2 mb-3">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: 55}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ul-widget-app__poll-list mb-4">
                                    <h3 className="heading me-2">7589</h3>
                                    <div className="d-flex"><span className="text-muted text-12">From Canada</span><span className="t-font-boldest ms-auto">73%<i className="i-Turn-Up-2 text-14 text-success font-weight-700"></i></span></div>
                                    <div className="progress progress--height-2 mb-3">
                                        <div className="progress-bar bg-dark" role="progressbar" style={{width: 33}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ul-widget-app__poll-list mb-4">
                                    <h3 className="heading me-2">3589</h3>
                                    <div className="d-flex"><span className="text-muted">From France</span><span className="t-font-boldest ms-auto">13%<i className="i-Turn-Down-2 text-14 text-danger font-weight-700"></i></span></div>
                                    <div className="progress progress--height-2 mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: 13}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card">
                            <div className="card-header purple-500 text-purple-500 p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="card-title text-white mb-0">Mutual Friends</div>
                                    <div className="ul-widget-app__bar ms-auto">asd</div>
                                </div>
                                <div className="input-group input-group-lg">
                                    <input className="form-control" type="text" placeholder="search by username or email..." aria-label="Large" aria-describedby="inputGroup-sizing-sm" /><span className="ul-widget-app__find-font"><i className="i-Search-People font-weight-500"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="ul-widget-app__social-site mt-4 mb-4">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <div className="ul-widget-app__social-friends"><img className="profile-picture avatar-lg mb-2" src="#" alt="" />
                                                <div className="ul-widget-app__small-title"><span className="t-font-bolder">Elizabeth Olsen</span><span className="text-primary"><a href="">Invite</a></span></div>
                                            </div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="ul-widget-app__social-friends"><img className="profile-picture avatar-lg mb-2" src="#" alt="" />
                                                <div className="ul-widget-app__small-title"><span className="t-font-bolder">Jack Olsen</span><span className="text-primary"><a href="">Invite</a></span></div>
                                            </div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="ul-widget-app__social-friends"><img className="profile-picture avatar-lg mb-2" src="#" alt="" />
                                                <div className="ul-widget-app__small-title"><span className="t-font-bolder">DAn Olsen</span><span className="text-primary"><a href="">Invite</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ul-widget-app__social-button mt-5">
                                    <button className="btn w-100 btn-facebook btn-icon m-1" type="button"><span className="ul-btn__text">Invite Facebook</span><span className="ul-btn__icon"><i className="i-Facebook-2"></i></span></button>
                                    <button className="btn w-100 btn-twitter btn-icon m-1" type="button"><span className="ul-btn__text">Invite Twitter</span><span className="ul-btn__icon"><i className="i-Twitter"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Notification</div>
                                <div className="ul-widget-app__browser-list">
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Bell1 text-white bg-warning rounded-circle p-2 me-3"></i><span className="text-15">You have 9 pending Tasks</span><span className="text-mute">in a sec</span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Internet text-white green-500 rounded-circle p-2 me-3"></i><span className="text-15">Traffic Overloaded</span><span className="text-mute">4 Hours ago</span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Shopping-Cart text-white cyan-500 rounded-circle p-2 me-3"></i><span className="text-15">New Order Received</span><span className="text-mute">yesterday </span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Add-UserStar text-white teal-500 rounded-circle p-2 me-3"></i><span className="text-15">New User </span><span className="text-mute">2 April </span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Bell text-white purple-500 rounded-circle p-2 me-3"></i><span className="text-15">New Update </span><span className="text-mute">2 April </span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Shopping-Cart text-white bg-danger rounded-circle p-2 me-3"></i><span className="text-15">New Order Received</span><span className="text-mute">yesterday </span></div>
                                    <div className="ul-widget-app__browser-list-1 mb-4"><i className="i-Internet text-white green-500 rounded-circle p-2 me-3"></i><span className="text-15">Traffic Overloaded</span><span className="text-mute">4 Hours ago</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-8 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="ul-widget__head">
                                    <div className="ul-widget__head-label">
                                        <h3 className="ul-widget__head-title">Best Sellers</h3>
                                    </div>
                                    <div className="ul-widget__head-toolbar">
                                        <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                                            <li className="nav-item"><a className="nav-link active show" data-bs-toggle="tab" href="#ul-widget5-tab1-content" role="tab" aria-selected="true">Latest</a></li>
                                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget5-tab2-content" role="tab" aria-selected="false">Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ul-widget__body">
                                    <div className="tab-content">
                                        <div className="tab-pane active show" id="ul-widget5-tab1-content">
                                            <div className="ul-widget5">
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="#" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">19,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">1046</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">29,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">4500</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="#" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">23,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">2046</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="ul-widget5-tab2-content">
                                            <div className="ul-widget5">
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="#" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">19,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">1046</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="#" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">29,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">4500</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div className="ul-widget5__item">
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__pic"><img src="#" alt="Third slide" /></div>
                                                        <div className="ul-widget5__section"><a className="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p className="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div className="ul-widget5__info"><span>Author:</span><span className="text-primary">Jon Snow</span><span>Released:</span><span className="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ul-widget5__content">
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">23,200</span><span className="ul-widget5__sales text-mute">sales</span></div>
                                                        <div className="ul-widget5__stats"><span className="ul-widget5__number">2046</span><span className="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-xl-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="ul-widget__head">
                                    <div className="ul-widget__head-label">
                                        <h3 className="ul-widget__head-title">Latest Log</h3>
                                    </div>
                                    <div className="ul-widget__head-toolbar">
                                        <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                                            <li className="nav-item"><a className="nav-link active show" data-bs-toggle="tab" href="#__g-widget-s6-tab1-content" role="tab" aria-selected="true">Today</a></li>
                                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#__g-widget-s6-tab2-content" role="tab" aria-selected="false">Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ul-widget__body">
                                    <div className="tab-content">
                                        <div className="tab-pane active show" id="__g-widget-s6-tab1-content">
                                            <div className="ul-widget-s6__items">
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-primary ul-widget6__dot"></p>
                                                    </span><span className="ul-widget-s6__text">12 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-success ul-widget6__dot"></p>
                                                    </span>
                                                    <p className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-primary m-2">Primary</span></p><span className="ul-widget-s6__time">14 mins</span>
                                                </div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-warning ul-widget6__dot"></p>
                                                    </span><span className="ul-widget-s6__text">System error -<a className="typo_link text-danger" href="">Danger state text</a></span><span className="ul-widget-s6__time">2 hrs </span></div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-danger ul-widget6__dot"></p>
                                                    </span><span className="ul-widget-s6__text">12 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-info ul-widget6__dot"></p>
                                                    </span>
                                                    <p className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-success m-2">Primary</span></p><span className="ul-widget-s6__time">14 mins</span>
                                                </div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-dark ul-widget6__dot"></p>
                                                    </span><span className="ul-widget-s6__text">System error -<a className="typo_link text-danger" href="">Danger state text</a></span><span className="ul-widget-s6__time">2 hrs </span></div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-primary ul-widget6__dot"></p>
                                                    </span><span className="ul-widget-s6__text">12 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                        <p className="badge-dot-success ul-widget6__dot"></p>
                                                    </span>
                                                    <p className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-danger m-2">Primary</span></p><span className="ul-widget-s6__time">14 mins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="__g-widget-s6-tab2-content">
                                            <div className="ul-widget2">
                                                <div className="ul-widget-s6__items">
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-danger ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">44 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-warning ul-widget6__dot"></p>
                                                        </span>
                                                        <p className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-primary m-2">Primary</span></p><span className="ul-widget-s6__time">14 mins</span>
                                                    </div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-primary ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">System error -<a className="typo_link text-danger" href="">Danger state text</a></span><span className="ul-widget-s6__time">2 hrs </span></div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-danger ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">12 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-info ul-widget6__dot"></p>
                                                        </span>
                                                        <p className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-success m-2">Primary</span></p><span className="ul-widget-s6__time">14 mins</span>
                                                    </div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-dark ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">System error -<a className="typo_link text-danger" href="">Danger state text</a></span><span className="ul-widget-s6__time">2 hrs </span></div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-primary ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">12 new users registered</span><span className="ul-widget-s6__time">Just Now</span></div>
                                                    <div className="ul-widget-s6__item"><span className="ul-widget-s6__badge">
                                                            <p className="badge-dot-success ul-widget6__dot"></p>
                                                        </span><span className="ul-widget-s6__text">System shutdown<span className="badge rounded-pill text-bg-danger m-2">Primary</span></span><span className="ul-widget-s6__time">14 mins</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="flex-grow-1"></div>
            <div className="app-footer">
                <div className="row">
                    <div className="col-md-9">
                        <p><strong>Gull - Laravel + Bootstrap 4 admin template</strong></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam</p>
                    </div>
                </div>
                <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                    <a className="btn btn-primary text-white btn-rounded" href="https://themeforest.net/item/gull-bootstrap-laravel-admin-dashboard-template/23101970" target="_blank">Buy Gull HTML</a>
                    <span className="flex-grow-1"></span>
                    <div className="d-flex align-items-center">
                        <img className="logo" src="#" alt=""/>
                        <div>
                            <p className="m-0">&copy; 2018 Gull HTML</p>
                            <p className="m-0">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    <div className="search-ui">
        <div className="search-header">
            <img src="#" alt="" className="logo"/>
            <button className="search-close btn btn-icon bg-transparent float-end mt-2">
                <i className="i-Close-Window text-22 text-muted"></i>
            </button>
        </div>
        <input type="text" placeholder="Type here" className="search-input" />
        <div className="search-title">
            <span className="text-muted">Search results</span>
        </div>
        <div className="search-results list-horizontal">
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                           
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-danger">Sale</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                       
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                       
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="col-md-12 mt-5 text-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination d-inline-flex">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>


      
    </>
  )
}

export default App

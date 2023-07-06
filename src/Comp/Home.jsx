import React, { useEffect, useState } from "react";
import './Home.css'
import './Sidebar.css'
import './Coin.css'

import Aos from "aos";
import 'aos/dist/aos.css'

import dollar from '../assets/dollar.png'
import phone from '../assets/phone.png';
import solution from '../assets/solution.png';
import shape1 from '../assets/shape1.png';
import bg4 from '../assets/bg4.jpg'
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';
import allocation from '../assets/allocation.png'
import token1 from '../assets/token1.png';
import token2 from '../assets/token2.png';
import token3 from '../assets/token3.png';
import token4 from '../assets/token4.png';
import Clock from "./Clock";
import pdf from '../assets/pdf.png';
import dede2 from '../assets/dede.gif';

import coin from '../assets/coin.png';
import coin1 from '../assets/coin1.png'
import mine from '../assets/mine.gif';
import Certificate from '../assets/AMC Corp Cert.pdf'
import whitepaper from '../assets/Combined White Pages June 2023.pdf'
import reliance from '../assets/Reliance on Other Experts1.pdf'
import relphotos from '../assets/Photos 71-AL-100.pdf'
import Metstudy from '../assets/Metallurgical Studies.pdf'
import enginreports from '../assets/Engineering-Reports.pdf'
import auroconcept from '../assets/Auro Coin Concept.pdf';
import whitepaperm from '../assets/AuroCoin White-Papers-m.pdf'



const Home = () => {
    useEffect(()=> {
       Aos.init({});
    }, [])
    return(
        <>
            <div className="coin-main">
                <div className="coin-main1">
                        <div className="sidebar">
                            <div><i class="fa-brands fa-telegram"></i></div>
                            <div><i class="fa-brands fa-facebook-f"></i></div>
                            <div><i class="fa-brands fa-twitter"></i></div>
                            <div><i class="fa-brands fa-github"></i></div>
                            <div><i class="fa-brands fa-instagram"></i></div>
                            <div><i class="fa-brands fa-linkedin"></i></div>
                        </div>
                </div>
                <div className="coin-mian2">
                 
                 {/* HOME */}
                 
                    <div className="head-main" id="home">
                        <div className="head-col1">
                                <div className="head-col1-div1">
                                    <img src={dollar}/>
                                    <h5> Discover new ways to enjoy your world</h5>
                                </div>
                                <h1> The very 1<sup>st</sup> Token with Gold
                                            </h1>
                                <p style={{ marginTop: '-.5rem', fontSize: '18px'}}>
                                The 1<sup>st</sup>  ever Bullet Coin cryptocurrency secured by Silver and Gold.
                                </p>
                                <div className="head-col1-btn" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                                    <a 
                                        href={auroconcept}
                                        target="_blank"
                                        rel="noreferrer"
                                    > <button className="incorp">Investor Opportunities</button>  </a>
                                    
                                  
                                    <a
                                        href={whitepaperm}
                                        // download="Example-PDF-document"
                                        target="_blank"
                                        rel="noreferrer"

                                    > <button className="incorp2">White Papers</button>  </a>

                                    <a href="http://presale.aurocoin.net/"><button className="incorp1">Presale</button></a>
                                    <a
                                        href={Certificate}
                                        // download="Example-PDF-document"
                                        target="_blank"
                                        rel="noreferrer"

                                    > <button className="incorp2">Cert. of Corporation</button>  </a>
                                
                                </div>
                        </div>
                        <div className="head-col2">
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                    <img src={coin} alt="Paris"/>
                                    </div>
                                    <div class="flip-box-back">
                                    <img src={coin1}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="colors">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="red"></div>
                        <div className="pink"></div>
                        <div className="purple"></div>
                    </div>

                    <div className="head-row">
                        <h2>How it works</h2>
                        <div className="head-row-div-p">Purchase Tokens and hold just as you would buy and hold Gold.</div>
                        <div className="head-row-main">
                            <div className="head-row-col1">
                                <img src={phone} alt='photo of a phone'/>
                            </div>
                            <div className="head-row-col2">
                                <div className="head-row-col2-div1">
                                    <div>1</div>
                                    <div className="head-row-col2-div2">
                                        <h4>Powerfull Mobile And Online App</h4>
                                        <div>The online brokers with the best stock market apps in 2023 (1) TD Ameritrade (2) Interactive Brokers  (3) E*TRADE (4) Fidelity (5) Merrill Edge</div>
                                    </div>
                                </div>
                                <div className="head-row-col2-div1">
                                    <div className="head-row-col2-div3">2</div>
                                    <div className="head-row-col2-div2">
                                        <h4>Physical and Digital Exchange</h4>
                                        <div>Transactions involving digital currencies are made using computers or electronic wallets connected to the internet or designated networks.</div>
                                    </div>
                                </div>
                                <div className="head-row-col2-div1">
                                    <div>3</div>
                                    <div className="head-row-col2-div2">
                                        <h4>Exchange Token with BTC, USDT, Gold & Silver</h4>
                                        <div>Auro Coin is a secure online platform for buying, selling, trade BTC transferring, cryptocurrency,  and Exchange Token with BTC, USDT, Gold & Silver</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="colors">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="pink"></div>
                        <div className="red"></div>
                        <div className="purple"></div>
                    </div>
                    
                    {/* About */}
                    <div id="about">
                    <div className="coin-col3" >
                        <div className="coin-col3-div1">
                            <div>
                                <h2 data-wow-delay="0.3s" >We complete every project with extra care to meet our customer's needs.</h2>
                                <p data-wow-delay="0.4s">Just purchase Auro Coin Tokens and Hold them as you would purchase and Hold Gold. If you decide to exchange your Tokens with Gold, AMC will provide you with the physical and digital exchange for your Tokens, utilizing; BTC, USDT, ETH, BNB, TRX, Gold, Silver, and many more physical products.</p>
                                {/* <p data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.4s", animation: "fadeInUp"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has dummy text of the printing and typesetting industry been the industry's standard.</p> */}
                            </div>
                                <div className="head-col1-btn" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                                    <a  
                                        href={reliance}
                                        target="_blank"
                                        rel="noreferrer"
                                    > <button>Property Overview 71-Al-100</button> </a>
                                    <a  
                                        href={relphotos}
                                        target="_blank"
                                        rel="noreferrer"
                                    > <button>Photos</button> </a>
                                </div>
                        </div>
                        <div className="coin-col3-img">
                            <img src={mine} style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div></div>

                    <div className="colors">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="pink"></div>
                        <div className="red"></div>
                        <div className="purple"></div>
                    </div>

                    <div className="coin-col4" style={{position: 'relative'}}>
                        <div className="coin-col3-div1">
                            <div>
                                <h2 data-wow-delay="0.3s">Why are Auro Coin Tokens better than Bitcoin ?</h2>
                                <p data-wow-delay="0.4s">Auro Coin is a highly secure token that offers investors a unique opportunity to invest in a cryptocurrency which is backed by Real World Assets. The Auro Coin Token is designed to be immune to hacking attempts, ensuring that our investors funds are always safe and secure.</p>
                                <p data-wow-delay="0.5s">Auro Coin Tokens have advanced security architecture, which includes a complex encryption algorithm coupled with multi-layered security protocols. The Auro Coin Token is designed to be immune to instant pumps, which is a common problem with many other cryptocurrencies. The Auro Coin Token, being backed by Gold and Silver reserves, adds an additional layer of security and stability to the Token.</p>
                            </div>
                                <div className="head-col1-btn" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                                    <a 
                                        href='https://www.bhsb.biz/'
                                        target="_blank"
                                        rel="noreferrer"
                                    ><button>Further Information</button></a>
                                     
                                </div>
                        </div>
                        <div className="coin-col3-img">
                            <img src={solution} style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>

                    <div className="coin-col5">
                        <img src={shape1} style={{width: '9.2rem', height: '9.2rem'}}/>
                    </div>

                    
                    <div className="colors2">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="pink"></div>
                        <div className="red"></div>
                        <div className="purple"></div>
                    </div>

                   {/* services section */}
                    <div className="coin-col7" id='service' data-aos='fade-right 15s'>
                        <div className="coin-col6-div1">
                            <h2>Our Core Services</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                        </div>
                        <div className="coin-col7-main">
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service1}/>
                                <h5>Smart Trading Modules</h5>
                                <p>smartTrade Technologies is a leading global provider of multi-asset electronic trading platforms, helping banks, brokers, buy side institutions, and corporates worldwide to achieve business growth through our cost-efficient, technologically advanced secure private SaaS end-to-end solution.</p>
                            </div>
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service2}/>
                                <h5>Adaptive Social Assistant</h5>
                                <p>Social assistance is undergoing an upgrade. Traditional practices are being replaced by a more secure and cost-effective system: Blockchain. However, with virtually no proven track record in the public or humanitarian sphere, the success of this technology is far from guaranteed</p>
                            </div>
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service3}/>
                                <h5>Analyzer of the News</h5>
                                <p>News trading is a technique that uses breaking news about equities, currencies and other markets as the basis for a strategy. Price analysis techniques vary and are often used in unison to provide as detailed a perspective of market conditions as possible. Traders may analyze a cryptocurrency</p>
                            </div>
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service4}/>
                                <h5>Exchange Order Management</h5>
                                <p>An order management system (OMS) is an electronic system developed to execute securities orders in an efficient and cost-effective manner. Brokers and dealers use an OMS when filling orders for various types of securities and can track the progress of each order throughout the system.</p>
                            </div>
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service5}/>
                                <h5>Module of Price Notification</h5>
                                <p>Price alerts help you stay in touch with the markets by notifying you when a specified buy or sell price is reached. This is a system that allows you to keep a close monitoring of the price of a cryptocurrencies in different exchanges. So, that you can operate with advantage and set the necessary course of action for your trading strategy.</p>
                            </div>
                            <div className="coin-col7-main-row1 wow fadeInUp">
                                <img src={service6}/>
                                <h5>Crypto Trading Platform</h5>
                                <p>Auro Coin is a secure online platform for buying, selling, trade BTC transferring, cryptocurrency,  and Exchange Token with BTC, USDT, Gold & Silver.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="coin-width">
                    <div className="coin-col8">
                         <div className="coin-col8-data">
                            <h2 style={{marginTop: '-.6rem'}}>Don't Miss ICO News And Updates</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                         </div>
                         <div className="coin-col8-div1">
                            <input type='text' placeholder="enter your email"/>
                            <button className="coin-col8-btn"><i class="fa-brands fa-telegram"></i></button>
                        </div>
                        <div className="coin-col8-div2">
                            <div className="coin-col8-div2-row1">
                                <div  className="coin-col8-div2-row1-data">Join our chat : <button><i class="fa-brands fa-telegram"></i> Telegram</button></div>
                            </div>
                            <div className="coin-col8-div2-row2">
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-square-twitter"></i>
                                <i class="fa-brands fa-telegram"></i>
                            </div>
                        </div>
                    </div></div>

                    <div className="colors1">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="pink"></div>
                        <div className="red"></div>
                        <div className="purple"></div>
                    </div>

                    {/* faq */}
                    <div className="coin-col12" id="token">
                        <div className="coin-col12-main1">
                            <img src={dede2}/>
                            {/* <div className="coin-col12-main1-row1">
                                <h2>Frequently Asked Questions</h2>
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
                            </div>
                            <div className="coin-col12-main1-row2">
                                <h4 onClick={Ques1}>What are the objectives of this tooken ?</h4>
                                { faq1 ? <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div> : null}
                            </div>
                            <div className="coin-col12-main1-row2">
                                <h4 onClick={Ques2}>What is Token Sale and pre-sale ?</h4>
                                { faq2 ? <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div> : null }
                            </div>
                            <div className="coin-col12-main1-row2">
                                <h4 onClick={Ques3}>What is the pre-sale start date ?</h4>
                                { faq3 ? <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div> : null}
                            </div>
                            <div className="coin-col12-main1-row2">
                                <h4 onClick={Ques4}>How may i take part in pre-sale ?</h4>
                                { faq4 ? <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div> : null}
                            </div> */}
                        </div>
                        <div className="coin-col12-main2">
                            <div className="coin-col12-main2-div1">
                                <h2>TOKEN SALES ENDS IN</h2>
                                <Clock/>
                                <button className="coin-col12-main2-div1-btn">Buy More Tokens</button>
                            </div>
                            <div className="coin-col12-main2-div2">
                                <a 
                                        href={whitepaper}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                <div className="coin-col12-main2-div3">
                                    <div>WhitePaper</div>
                                    <img src={pdf} alt='pdf'/>
                                </div></a>
                                <a 
                                        href={enginreports}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    ><div className="coin-col12-main2-div3">
                                    <div>Engineering Reports</div>
                                    <img src={pdf} alt='pdf'/>
                                </div></a>
                                <a 
                                        href={Metstudy}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    ><div className="coin-col12-main2-div3">
                                    <div>Metallurgical Studies</div>
                                    <img src={pdf} alt='pdf'/>
                                </div></a>
                                <a 
                                        href={Certificate}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    > <div className="coin-col12-main2-div3">
                                    <div>Cert. of Incorporation</div>
                                    <img src={pdf} alt='pdf'/>
                                </div></a>
                            </div>
                        </div>
                    </div>

                    {/* ICO Distribution part */}
                    <div className="coin-col9">
                        <div className="coin-col9-main2">
                            <h2>Our ICO Distribution</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                        </div>
                        <div className="coin-col9-main3">
                            <div className="coin-col9-div1">
                                <h2>Token Allocation</h2>
                                <img src={allocation} alt='token allocation'/>
                            </div>
                            <div className="coin-col9-div2">
                                <h2>More Token Info</h2>
                                <div className="coin-col9-div2-row1">
                                    <img src={token1}/>
                                    <div>60% Public Sale</div>
                                </div>
                                <div className="coin-col9-div2-row1">
                                    <img src={token2}/>
                                    <div>22% Pre Sale</div>
                                </div>
                                <div className="coin-col9-div2-row1">
                                    <img src={token3}/>
                                    <div>20% Team</div>
                                </div>
                                <div className="coin-col9-div2-row1">
                                    <img src={token4}/>
                                    <div>10% Reverse</div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="colors1">
                        <div className="blue"></div>
                        <div className="purple"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="pink"></div>
                        <div className="red"></div>
                        <div className="purple"></div>
                    </div>
                    
                    {/* Contact Section */}
                    <div className="coin-col10" id="contact" style={{position: 'relative'}}>
                        <div className="coin-col9-main2">
                            <h2>Contact With US</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                        </div>
                        <div className="coin-col10-contact">
                            <div className="coin-col10-contact-row1">
                                <div className="coin-col10-contact-row12">
                                    <div><i>Name</i></div>
                                    <input type='text' style={{width: '90%'}}/>
                                </div>
                                <div className="coin-col10-contact-row12">
                                    <div><i>Email</i></div>
                                    <input type='email' style={{width: '90%'}}/>
                                </div>
                            </div>
                            <div className="coin-col10-contact-row2">
                                <div><i>Subject</i></div>
                                <input type='text' style={{width: '95.4%'}}/>
                            </div>
                            <div className="coin-col10-contact-row3">
                                <div><i>Message</i></div>
                                <textarea style={{width: '94.4%'}}></textarea>
                            </div>
                            <div className="head-col1-btn" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="coin-col11">
                        <div className="coin-col11-col1">
                            <div className="coin-col11-col12">
                            <img src={coin} alt='Coinland.' style={{width: '64px', height: '64px'}}/>
                                <h2>Auro Coin.</h2>
                            </div>
                            <div className="coin-col11-col11">The 1<sup>st</sup> ever cryptocurrency secured by Silver and Gold.</div>
                            <div className="coin-col11-col13">
                                <i class="fa-brands fa-telegram"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="dev">Developed by Bitbrick Solutions</div>
                        </div>
                    </div>

                    
                </div>

               
            </div>
        </>
    );
}

export default Home;    


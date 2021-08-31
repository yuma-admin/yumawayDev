import "./homeStyle.css"

function Home() {

    return (

    // HTML START: EVERYTHING IN THESE RETURN PARENTGESIS IS HTML-ISH
    // A FEW EXCEPTIONS; FOR EXAMPLE: 'class' SHOULD BE 'className'
    <div className="container-fluid">
        <section className="hero" id="desktopHeroView">
        
        
            <div className="heroCol yumaBorder" id="desktopHeroView">

                <div className="col-6" id="logoCol">
                    
                    <div className="logo">
                        
                            <a href="/locations"><img class="displayLogo" src="/images/homeImages/yumawayLogoHome.png" alt="YumaWay Logo" />
                            </a>
                            <a className="storeFinderButton" href="/locations">Find Store</a>
        
                    </div>
                </div>
                <div class="col-6" id="imageCol">
                    <img className="displayImage" src="/images/homeImages/homeHero.png" alt="YumaWay Shopping Bag" />
                </div>                      
            </div>
            
        </section>

        <section class="QuoteBanner left">
            <div class="row">
        
                <div class="col-6 non-mobile-only">
                <img src="/images/homeImages/MassiveSelectionSection.png" alt="Marijuana Grow House" />
                </div>
        
                <div class="col-sm-6">
                    <article>
        
                    <h2>A Massive Product Selection </h2>
                    <p>Our vast selection includes products lovingly cultivated in-house along with other top brands and lesser known quality labels.</p>
                    
                    <p>Need help making a selection? Our  budtenders are highly trained and friendly cannabis experts who can educate you on the best strands, brands, and products for your specific needs. Stop by your nearest Yuma Way location for a memorable and fun shopping experience.</p>
        
                </article>
                </div>
            </div>
        </section>

        <section class="ShopNow">
            <div class="yumaBorder">
            <div class="row">

                <div class="image-col">
                <img alt="Cannabis Products on Display - Left" class="non-mobile-only lazyloaded" role="presentation" src="/images/homeImages/newProductsSection-Left-TINY.png" />
                </div>
            
                <div class="col">
                <article>
                    <h2>THC Products? </h2>
                    <h2>We Have it All </h2>
                    <p class="non-mobile-only">Our shelves are stocked with products from Lucky Turtle, Double Black Extracts, Shift Cannabis, Harmony Extracts, Pyramid, Viola, Smokiez, The Flower Collective and so much more! Visit your nearest Yuma Way location for access to the largest selection of cannabis products. </p>
                    <p class="mobile-only">Our shelves are stocked with products from Lucky Turtle, Double Black Extracts, Shift Cannabis, Harmony Extracts, Pyramid, Viola, Smokiez, The Flower Collective and so much more! Visit your nearest Yuma Way location for access to the largest selection of cannabis products. 
                    </p>
            
                    <a class="storeFinderButton" href="/locations">Find Store</a>
                </article>
                </div>
    
                <div class="image-col" id="hideOnMobile">
                <img alt="Cannabis Products on Display - Right" id="hideOnMobile" class="non-mobile-only lazyloaded" role="presentation" src="/images/homeImages/newProductsSection-Right-TINY.png" />
                </div>     

            </div>
            </div>   
        </section>

        <section class="threeMainProducts">
            <div class="row">                          
                    <div class="col-sm-4 productSquareColumn">
                        <div class="flowerBox">
                            <img id="flowerImage" class="threeProductCategoryImages" src="/images/homeImages/flower-pattern.png" alt="Cannabis Flowers" />
                                <a href="/locations/">
                                    <div class="overlay">
                                        <img id="flowerImageHover" class="threeProductCategoryImages" src="/images/homeImages/flower-flip.png" alt="Marijuana Flower" />
                                    </div>
                                </a>
                            
                            <a href="/locations/">
                                <div class="threeProductCategoryHeadline">
                                    Flower
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-4 productSquareColumn">
                        <div class="edibleBox">
                            <img id="edibleImage" class="threeProductCategoryImages" src="/images/homeImages/edible-pattern.png" alt="Cannabis Edibles" />
                            <a href="/locations/">
                                <div class="overlay">
                                    <img id="edibleImageHover" class="threeProductCategoryImages" src="/images/homeImages/edible-flip.png" alt="Marijuana Edibles" />
                                </div>
                            </a>
                            <a href="/locations/">
                                <div class="threeProductCategoryHeadline">
                                    Edibles
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-4 productSquareColumn">
                        <div class="concentrateBox">
                            <img id="concentrateImage" class="threeProductCategoryImages" src="/images/homeImages/concentrate-pattern.png" alt="Cannabis Concentrates" />
                                <a href="/locations/">
                                    <div class="overlay">
                                        <img id="concentrateImageHover" class="threeProductCategoryImages" src="/images/homeImages/concentrate-flip.png" alt="Marijuana Concentrates" />
                                    </div>
                                </a>
                            <a href="/locations/">
                                <div class="threeProductCategoryHeadline">
                                    Concentrates
                                </div>
                            </a>
                        </div>
                    </div>
            </div>      
        </section>

        <section class="Categories" aria-label="Categories of products to search for">
  
            <div class="yumaBorder">
            <div class="article-container">
                <article id="list-items"> 
                    <input aria-label="expand category menu" class="mobile-only" type="checkbox"/>
                    <header aria-label="Flower category.">
                    <span class="yellowText">Flower</span>
                    <i role="presentation"></i>
                    </header>
            
                    <ul class="lightText">
                        <li>
                        <a aria-label="Platinum." href="/locations">
                            Yuma Way 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Top-Shelf." href="/locations">
                            Veritas 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Select." href="/locations">
                            Natty Rems 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Shake." href="/locations">
                            Cookies 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Discount." href="/locations">
                            Locol Love
                        </a>
                        </li>
                    </ul>
            
                </article>
                <div id="svgCategorySeparator">
                <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                        <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                        <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                        <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                        <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                </svg>
                </div>
                <article id="list-items"> 
                <input aria-label="expand category menu" class="mobile-only" type="checkbox"/>
                <header aria-label="Topical category.">
                    <span class="yellowText">Topicals</span>
                    <i role="presentation"></i>
                </header>
                    <ul class="lightText">
                    <li>
                        <a aria-label="White Wine." href="/locations">
                        Escape Artists
                        </a>
                    </li>
                    <li>
                        <a aria-label="Red Wine." href="/locations">
                            Sirona Cultivated
                        </a>
                    </li>
                    <li>
                        <a aria-label="Champagne." href="/locations">
                            Mary Jane’s Medicinals 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Rosé Wine." href="/locations">
                        Coda Signature
                        </a>
                    </li>
                    <li>
                        <a aria-label="Sake." href="/locations">
                            Incredible Wellness 
                        </a>
                    </li>
                    </ul>
        
                </article>
                <div id="svgCategorySeparator">
                <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                    <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                </svg>
                </div>
                <article id="list-items">
                <input aria-label="expand category menu" class="mobile-only" type="checkbox"/>
                <header aria-label="Edibles category.">
                    <span class="yellowText">Edibles</span>
                    <i role="presentation"></i>
                </header>
        
                    <ul class="lightText">
                    <li>
                        <a aria-label="Vodka." href="/locations">
                            Wana
                        </a>
                    </li>
                    <li>
                        <a aria-label="Bourbon Whiskey." href="/locations">
                            BlueKudu 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Tequila." href="/locations">
                            NFuzed
                        </a>
                    </li>
                    <li>
                        <a aria-label="Gin." href="/locations">
                            Wyld
                        </a>
                    </li>
                    <li>
                        <a aria-label="Rum." href="/locations">
                            Keef
                        </a>
                    </li>
                    </ul>
        
                </article>
                <div id="svgCategorySeparator">
                <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                    <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                </svg>
                </div>
                <article id="list-items">
                <input aria-label="expand category menu" class="mobile-only" type="checkbox"/>
                <header aria-label="Extract category.">
                    <span class="yellowText">Extract</span>
                    <i role="presentation"></i>
                </header>
        
                    <ul class="lightText">
                    <li>
                        <a aria-label="Mixers." href="/locations">
                            Eureka Vapor 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Soda." href="/locations">
                            Kush Masters 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Ice &amp; Party Supplies." href="/locations">
                            AiroPro
                        </a>
                    </li>
                    <li>
                        <a aria-label="Fruit &amp; Garnishes." href="/locations">
                        The Clear 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Bitters &amp; Syrups." href="/locations">
                            Binske 
                        </a>
                    </li>
                    </ul>
        
                </article>
            </div>
            </div>
  </section>
  
  <section class="app-download">
      <div class="content">
        <h2 class="desktop-only">Join Our Rewards </h2>
        <h2 class="non-desktop-only">Join Our Rewards</h2>
  
          <p>Come join our awesome rewards program. Access exclusive deals and earn points with your purchases to get free products.</p>
  
          <a class="get-app-link" role="button" rel="noopener noreferrer" href="https://enrollnow.vip/login/2966">Join Now</a>
  
      </div>
  
      <svg class="rotated non-mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#181818" opacity="100%" points="0,100 0,0 100,0, 100,10, 39.5,100"></polygon>
        <line stroke="#d9ab73" x1="39" y1="100" x2="100" y2="9"></line>
        <line stroke="#d9ab73" x1="38" y1="100" x2="100" y2="8"></line>
      </svg>
       
      <svg class="rotated mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#181818" opacity="100%" points="0,0 0,92 100,59, 100,0 0,0"></polygon>
        <polyline stroke="#d9ab73" fill="none" points="5,1 5,88 95,59, 95,1 5,1 "></polyline>
        <polyline stroke="#d9ab73" fill="none" points="3,2.5 3,87 97,57 97,2.5 3,2.5"></polyline>
   
      </svg>
  
    </section>
    </div>
    )
    
}
    
    
export default Home;
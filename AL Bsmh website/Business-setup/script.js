const button1 = document.querySelector(".btn-1");
console.log(button1);
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const button4 = document.querySelector(".btn-4");
const button5 = document.querySelector(".btn-5");

const content = document.querySelector(".content");

button1.addEventListener("click", () => {
  content.innerHTML = `<div class = "col-12 py-3 px-5  content-child">
        <h5 class="px-5 ms-lg-4">Dubai Mainland</h5>
        <ul class="px-5 ms-lg-4">
            <li class="list-unstyled py-1"><a class="text-decoration-none" href="#">DUBAI MAINLAND COWORKING LICENSE</a></li>
            <li class="list-unstyled py-1"><a class="text-decoration-none" href="#">Department of Economic Development – Dubai (DED)</a></li>
        </ul>
        <div class="col-12 py-3">
        <h3 class="px-5 ms-lg-4">Dubai Mainland Coworking License</h3>
      </div>
      <p class="px-5 ms-lg-4">
        The Dubai Mainland Coworking License issued by the Dubai Department of
        Economic Development (DED) is the most affordable Dubai Mainland setup
        in the UAE today. Setting up your business with a Dubai Mainland License
        enables you to tap the broader marketplace of the UAE.<br /><br />

        It is uniquely designed to provide you with the benefit of a Dubai
        Mainland setup and a Coworking Facilities in Dubai, allowing you the
        flexibility to conduct business throughout the UAE and the accessibility
        to a vibrant coworking community in Dubai. Through Creative Zone, you
        can now launch your business starting from AED 23,000.
      </p>
      <div class="col px-5">
        <h4 class="ms-lg-4" style="color: #FFD700;"><b>BENEFITS</b></h4>
        <div>
          <p class="mt-2 ms-lg-4">Access to UNLIMITED employment visas</p>
          <p class="ms-lg-4">
            Package includes Dubai Mainland license, Corporate Sponsorship and
            Office Space
          </p>
          <p class="ms-lg-4">100% ownership – depending on business activity</p>
          <p class="ms-lg-4">Flexibility to conduct business throughout the UAE</p>
          <p class="ms-lg-4">Dedicated Account Management Team</p>
          <p class="ms-lg-4">Wide array of business activities from all industries</p>
          <p class="ms-lg-4">
            Interest free monthly installment plan of AED 3,250 through selected
            banks (RAKBANK, Dubai Islamic Bank, Mashreq, and Emirates NBD)
          </p>
        </div>
      </div>
    </div>
    `;
});
button2.addEventListener("click", () => {
  content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5 ms-lg-4">Abu Dhabi</h5>
        <ul class="px-5 ms-lg-4">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">DEPARTMENT OF ECONOMIC DEVELOPMENT – ABU DHABI (AD DED)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">ABU DHABI GLOBAL MARKET FREE ZONE (ADGM)</a>
            </li>
        </ul>
        <div class="col-12 py-3">
        <h3 class="px-5 ms-lg-4">Department of Economic Development – Abu Dhabi (AD DED)</h3>
      </div>
      <p class="px-5 ms-lg-4">
      The Department of Economic Development in Abu Dhabi (AD DED) has the vision to achieve a sustainable, balanced, and diversified knowledge-based economy as part of the Emirate’s economic agenda. Its mission is to be a stakeholders-focused organisation that is capable of enabling sustainable economic development in Abu Dhabi, encouraging competitiveness and ensuring the welfare of Abu Dhabi’s community.<br /><br />

      Creative Zone makes business setup in Abu Dhabi straightforward and easy by simplifying the incorporation processes. By setting up your DED company in Abu Dhabi, you can take advantage of being located in the UAE capital with ultimate access to major seaports and international airports.
      </p>
     
      <div class="col px-5">
      <h4 class="ms-lg-4" style="color: #FFD700;"><b>BENEFITS</b></h4>
      <div>
          <p class="mt-2 ms-lg-4">Flexibility to do business in any part of the UAE with local and government authorities</p>
          <p class="ms-lg-4">
          No limit on number of visas (depending on the size of the office space)
          </p>
          <p class="ms-lg-4">Office premises anywhere in Abu Dhabi (excluding Free Zones)</p>
          <p class="ms-lg-4">More options on business activities</p>
          <p class="ms-lg-4">Fewer nationality restrictions in ownership and visas compared to other jurisdictions</p>
          
        </div>
      </div>
    </div>`;
});
button3.addEventListener("click", () => {
  content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5 ms-lg-4">Free Zones</h5>
        <ul class="px-5  ms-lg-4">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
            <li class="list-unstyled">
                <a class="text-decoration-none" href="#">Ras Al Khaimah Economic Zone (RAKEZ)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">RAK INTERNATIONAL CORPORATE CENTRE (RAKICC)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
        </ul>
        <div class="col-12 py-3">
        <h3 class="px-5  ms-lg-4">FUJAIRAH CREATIVE CITY FREE ZONE</h3>
      </div>
      <p class="px-5  ms-lg-4">
      Fujairah Creative City Free Zone was established in 2005 under the chairmanship of His Highness Sheikh Rashid Bin Hamad Al Sharqi. Creative City widely caters to the creative fields such as media, events, consulting, education, communication and marketing, music and entertainment, design, and technology. It boasts a long-standing reputation as one of the most established free zones in the United Arab Emirates (UAE).<br /><br />

      Fujairah Creative City Free Zone’s diverse ecosystem of different nationalities and background make it an ideal starting point for budding entrepreneurs who are yet to find their niche in the entrepreneurial landscape of the UAE. Setting up your business in the Free Zone through Creative Zone ensures that your startup receives the necessary support and added value.
      </p>
      
      <div class="col px-5">
      <h4 class="ms-lg-4" style="color: #FFD700;"><b>BENEFITS</b></h4>
      <div>
    
          <p class="mt-2  ms-lg-4">Free Zone Company setup options starting from AED 15,625 per year (inclusive of VAT)</p>
          <p class="ms-lg-4">
          Physical presence in the UAE not required to incorporate your new company
          </p>
          <p class="ms-lg-4">No paid-up share capital or annual audit</p>
          <p class="ms-lg-4">100% repatriation of Capital and Profits</p>
          <p class="ms-lg-4">All company documentation issued within days</p>
          <p class="ms-lg-4">Allocation of 6 UAE residency visas

          
        </div>
      </div>
    </div>`;
});
button4.addEventListener("click", () => {
  content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5 ms-lg-4">Offshore</h5>
        <ul class="px-5 ms-lg-4">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">BRITISH VIRGIN ISLANDS (BVI)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">JEBEL ALI FREE ZONE AUTHORITY (JAFZA)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">AJMAN FREE ZONE OFFSHORE COMPANY SETUP</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">SEYCHELLES(JAFZA)</a>
            </li>
        </ul>
        <div class="col-12 py-3 ">
        <h3 class="px-5 ms-lg-4">British Virgin Islands (BVI)</h3>
      </div>
      <p class="px-5 ms-lg-4">
      The (BVI) is the world’s leading and most popular offshore centre registering more companies per year than any other offshore jurisdiction – since 2004 some 750,000 companies have been registered in the BVI. Furthermore, the jurisdiction appears on the OECD “white list” reflecting its stable political environment and high level of regulatory and compliance standards. A wide range of business activities are permitted under the BVI offshore company; from a simple holding company to all types of consultancy and trading activities.<br /><br />
      By choosing Creative Zone as your registered agent, we will provide you with the use of a prestigious address in Dubai’s premier business district, located in the shadow of Burj Khalifa for your correspondence, business cards, and where you will be able to make use of the impressive meeting rooms and work facilities.


      </p>
      <div class="col px-5">
      <h4 class="ms-lg-4" style="color: #FFD700;"><b>BENEFITS</b></h4>
      <div>
          <p class="mt-2 ms-lg-4">Low Startup Cost</p>
          <p class="ms-lg-4">
          Prestigious Dubai address
          </p>
          <p class="ms-lg-4"> Speedy Incorporation Process</p>
          <p class="ms-lg-4">100% repatriation of Capital and Profits</p>
          <p class="ms-lg-4">100% Tax Free</p>
          <p class="ms-lg-4"> Globally Respected Jurisdiction</p>
          <p class="ms-lg-4"> Confidentiality</p>
          <p class="ms-lg-4">Flexible Share Structure</p>
          <p class="ms-lg-4">Succession Planning</p>
          <p class="ms-lg-4">Favorable Legal Framework</p>

          
        </div>
      </div>
    </div>`;
});
button5.addEventListener("click", () => {
  content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5 ms-lg-4">Dubai Mainland</h5>
        <ul class="px-5 ms-lg-4">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Saudi Arabia</a>
            </li>
        </ul>
        <div class="col-12 py-3">
        <h3 class="px-5 ms-lg-4">Saudi Arabia Mainland</h3>
      </div>
      <p class="px-5 ms-lg-4">
      Saudi Arabia has emerged as a vibrant destination to do business. The country’s enormous natural resources combined with recent policies aimed at opening up the economy to foreign investment makes it the ideal place for investors looking to do business in the Middle East. KSA possesses approximately 20% of the world’s proven petroleum reserves. The kingdom is one of the largest exporters of petroleum globally and plays a leading role in determining the OPEC’s policies. The Saudi economy has experienced an annual average growth rate of 4% over the past seven years, supported by a pro-business environment that quickly moves the investors to the heart of the Arabic market.


      </p>
      <div class="col px-5">
      <h4 class="ms-lg-4" style="color: #FFD700;"><b>BENEFITS</b></h4>
      <div>
          <p class="mt-2 ms-lg-4">
          100% foreign ownership of property and companies in certain industries</p>
          <p class="ms-lg-4">
          Lower minimum capital requirements
          </p>
          <p class="ms-lg-4">No restriction on repatriation of capital</p>
          <p class="ms-lg-4">The ability for foreign investors to sponsor foreign employees</p>
          <p class="ms-lg-4">Tax incentives if the company is registered in certain “economic cities”.</p>
        

          
        </div>
      </div>
        
    </div>`;
});

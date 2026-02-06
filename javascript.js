        let springDropdownMenu = false;
        let hortDropdownMenu = false;
        let hortDownloadMenu = false;
        let phoneMenu = false;


        function closeDropdown(menu)
        {
            document.querySelector(`.${menu}-dropdown-content`).style.height="0";
            document.querySelector(`.${menu}-show`).classList.remove("link-selected");
            document.querySelector(`.${menu}-show`).classList.add("link");

            if(menu == "hort")
                {
                    document.querySelector(".hort-downloads-dropdown").style.height="0";
                    document.querySelector(".hort-downloads").classList.remove("sub-link-selected");
                    document.querySelector(".hort-downloads").classList.add("sub-link");
                }
            if(window.innerWidth <= 1100)
                {
                    navHeight();
                    
                }
        }

        function openDropdown(menu)
        {
            if(window.innerWidth <= 1100)
                {
                    document.querySelector(`.${menu}-dropdown-content`).style.transition="none";
                }
            document.querySelector(`.${menu}-dropdown-content`).style.height="138px";
            document.querySelector(`.${menu}-show`).classList.add("link-selected");
            document.querySelector(`.${menu}-show`).classList.remove("link");
            if(window.innerWidth <= 1100)
                {
                    
                    
                    openNav(menu);
                        
                }
            
        }

      

      

        function closeDownloads(menu)
        {
            document.querySelector(".hort-downloads-dropdown").style.height="0";
            document.querySelector(`.${menu}-dropdown-content`).style.height="138px";  
            document.querySelector(".hort-downloads").classList.remove("sub-link-selected");
            document.querySelector(".hort-downloads").classList.add("sub-link");
            if(window.innerWidth <= 1100)
                {
                    
                    navHeight();
                        
                }
        }

        function openDownloads(menu)
        {
            if(window.innerWidth <= 1100)
                {
                    document.querySelector(`.${menu}-dropdown-content`).style.transition="none";
                }
            document.querySelector(".hort-downloads-dropdown").style.height="92px";
            document.querySelector(`.${menu}-dropdown-content`).style.height="230px";               
            document.querySelector(".hort-downloads").classList.add("sub-link-selected");
            document.querySelector(".hort-downloads").classList.remove("sub-link");
            if(window.innerWidth <= 1100)
                {
                    
                    openNav(menu);
                        
                }
        }

       



        function dropdown(menu)
        {
            if (menu == "spring")
                {
                    if (springDropdownMenu)
                        {
                            springDropdownMenu = false;
                            closeDropdown(menu)
                        }

                    else
                        {
                            springDropdownMenu = true;
                            openDropdown(menu)
                        }
                }

            else if (menu == "hort")
                {
                    if (hortDropdownMenu)
                        {
                            hortDropdownMenu = false;
                            hortDownloadMenu = false;
                            closeDropdown(menu)
                        }

                    else
                        {
                            hortDropdownMenu = true;
                            openDropdown(menu)
                        }
                }

        }

      
        function downloadsDropdown(menu)
        {

            if (hortDownloadMenu)
                {
                    hortDownloadMenu = false;
                    closeDownloads(menu)
                }

            else
                {
                    hortDownloadMenu = true;
                    openDownloads(menu)
                }
        }

        

        function menuDropdown()
        {
            if(phoneMenu)
            {
                phoneMenu = false;
                document.querySelector("nav").style.height="0";
                document.querySelector(".trigram").style.fillOpacity="100%";
               
            }
            else
            {
                phoneMenu = true;
                openNav();
                document.querySelector(".trigram").style.fillOpacity="30%";
                
              
            }
        }

        function openNav(menu)
        {
            phoneMenu = true;            
            navHeight();
            document.querySelector(".spring-dropdown-content").style.transition="height 0.5s";
            document.querySelector(".hort-dropdown-content").style.transition="height 0.5s";
            document.querySelector(".hort-downloads-dropdown").style.transition="height 0.5s";
            
        }

        function navHeight()
        {
            
            if(hortDownloadMenu && springDropdownMenu)
            {
                document.querySelector("nav").style.height="690px";  
            }
            else if(hortDropdownMenu && springDropdownMenu)
            {
                document.querySelector("nav").style.height="552px";  
            }
            else if(hortDropdownMenu && hortDownloadMenu)
            {
                document.querySelector("nav").style.height="506px";
            }
            else if(hortDropdownMenu || springDropdownMenu)
            {
                document.querySelector("nav").style.height="414px";  
            }
            else if(phoneMenu)
            {
                document.querySelector("nav").style.height="276px";  
            }
            else
            {
                document.querySelector("nav").style.height="";
            }

        }


        window.addEventListener("resize", ()=>{
            if(window.innerWidth >= 1100)
            {
                document.querySelector("nav").style.height="";
                document.querySelector(".trigram").style.fillOpacity="100%";
                phoneMenu = false;
            }
        })


        
// add spring show sub menu navigation by extending nav x and toggling display on the unwanted buttons to none. 
// if press triagram then height and display change back to normal
// make svg for trigram
// change colour of small-screen-menu to differentiate it
// can i make this javascript more programmatic? eg can i have just an open and a close function?
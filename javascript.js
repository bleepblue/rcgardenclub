        let dropdownMenu = false;
        let entryMenu = false;
        let phoneMenu = false;

        function closeDropdown()
        {
            document.querySelector(".dropdown-content").style.height="0";
            dropdownMenu = false;
            entryMenu = false;
            document.querySelector(".entry-dropdown").style.height="0";
            document.querySelector("#show").classList.remove("link-selected");
            document.querySelector("#show").classList.add("link");
            document.querySelector(".entry").classList.remove("sub-link-selected");
            document.querySelector(".entry").classList.add("sub-link");
            if(window.innerWidth <= 1100)
                {
                    navHeight();
                    
                }
        }

        function openDropdown()
        {
            if(window.innerWidth <= 1100)
                {
                    document.querySelector(".dropdown-content").style.transition="none";
                }
            document.querySelector(".dropdown-content").style.height="138px";
            dropdownMenu = true;
            document.querySelector("#show").classList.add("link-selected");
            document.querySelector("#show").classList.remove("link");
            if(window.innerWidth <= 1100)
                {
                    
                    
                    openNav();
                        
                }
            
        }

      

      

        function closeEntry()
        {
            entryMenu = false;
            document.querySelector(".entry-dropdown").style.height="0";
            document.querySelector(".dropdown-content").style.height="138px";  
            document.querySelector(".entry").classList.remove("sub-link-selected");
            document.querySelector(".entry").classList.add("sub-link");
            if(window.innerWidth <= 1100)
                {
                    
                    navHeight();
                        
                }
        }

        function openEntry()
        {
            if(window.innerWidth <= 1100)
                {
                    document.querySelector(".dropdown-content").style.transition="none";
                }
            entryMenu = true;
            document.querySelector(".entry-dropdown").style.height="92px";
            document.querySelector(".dropdown-content").style.height="230px";               
            document.querySelector(".entry").classList.add("sub-link-selected");
            document.querySelector(".entry").classList.remove("sub-link");
            if(window.innerWidth <= 1100)
                {
                    
                    openNav();
                        
                }
        }

       



        function dropdown()
        {
            if (dropdownMenu)
                {
                   closeDropdown()
                }
            else
                {
                    openDropdown()
                }

        }

      
        function entryDropdown()
        {

            if (entryMenu)
                {
                    closeEntry()
                }
            else
                {
                   openEntry()
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

        function openNav()
        {
            phoneMenu = true;            
            navHeight();
            document.querySelector(".dropdown-content").style.transition="height 0.5s";
            document.querySelector(".entry-dropdown").style.transition="height 0.5s";
            
        }

        function navHeight()
        {
            if(entryMenu)
            {
                document.querySelector("nav").style.height="460px";
            }
            else if(dropdownMenu)
            {
                document.querySelector("nav").style.height="368px";
            }
            else if(phoneMenu)
            {
                document.querySelector("nav").style.height="230px";  
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
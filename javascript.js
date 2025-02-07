        let dropdownMenu = false;
        let scheduleMenu = false;
        let entryMenu = false;
        let phoneMenu = false;


        
        

        function closeDropdown()
        {
            document.querySelector(".dropdown-content").style.height="0";
            dropdownMenu = false;
            scheduleMenu = false;
            entryMenu = false;
            document.querySelector(".schedule-dropdown").style.height="0";
            document.querySelector(".entry-dropdown").style.height="0";
            document.querySelector(".show").classList.remove("link-selected");
            document.querySelector(".show").classList.add("link");
            document.querySelector(".schedule").classList.remove("sub-link-selected");
            document.querySelector(".schedule").classList.add("sub-link");
            document.querySelector(".entry").classList.remove("sub-link-selected");
            document.querySelector(".entry").classList.add("sub-link");
            if(window.innerWidth <= 900)
                {
                    navHeight();
                    
                }
            document.cookie = "entry=false; path=/;";
            document.cookie = "schedule=false; path=/;";
        }

        function openDropdown()
        {
            if(window.innerWidth <= 900)
                {
                    document.querySelector(".dropdown-content").style.transition="none";
                }
            document.querySelector(".dropdown-content").style.height="138px";
            dropdownMenu = true;
            document.querySelector(".show").classList.add("link-selected");
            document.querySelector(".show").classList.remove("link");
            if(window.innerWidth <= 900)
                {
                    
                    
                    openNav();
                        
                }
            
        }

        function closeSchedule()
        {
            scheduleMenu = false;
            document.querySelector(".schedule-dropdown").style.height="0";
            if (entryMenu)
                {
                    document.querySelector(".dropdown-content").style.height="230px";
                }
            else
                {
                    document.querySelector(".dropdown-content").style.height="138px";
                }
            document.querySelector(".schedule").classList.remove("sub-link-selected");
            document.querySelector(".schedule").classList.add("sub-link");
            if(window.innerWidth <= 900)
                {
                    navHeight();
                }
            document.cookie = "schedule=false; path=/;";
        }

        function openSchedule()
        {
            if(window.innerWidth <= 900)
                {
                    document.querySelector(".dropdown-content").style.transition="none";
                }
            scheduleMenu = true;
            document.querySelector(".schedule-dropdown").style.height="92px";
            if (entryMenu)
                {
                    document.querySelector(".dropdown-content").style.height="322px";
                }
            else
                {
                    document.querySelector(".dropdown-content").style.height="230px";
                }
            document.querySelector(".schedule").classList.add("sub-link-selected");
            document.querySelector(".schedule").classList.remove("sub-link");
            if(window.innerWidth <= 900)
                {
                    
                    openNav();
                        
                }
            document.cookie = "schedule=true; path=/;";
        }

        function closeEntry()
        {
            entryMenu = false;
            document.querySelector(".entry-dropdown").style.height="0";
            if (scheduleMenu)
                {
                    document.querySelector(".dropdown-content").style.height="230px";
                }
            else
                {
                    document.querySelector(".dropdown-content").style.height="138px";
                }
            document.querySelector(".entry").classList.remove("sub-link-selected");
            document.querySelector(".entry").classList.add("sub-link");
            if(window.innerWidth <= 900)
                {
                    
                    navHeight();
                        
                }
            document.cookie = "entry=false; path=/;";
        }

        function openEntry()
        {
            if(window.innerWidth <= 900)
                {
                    document.querySelector(".dropdown-content").style.transition="none";
                }
            entryMenu = true;
            document.querySelector(".entry-dropdown").style.height="92px";
            if (scheduleMenu)
                {
                    document.querySelector(".dropdown-content").style.height="322px";
                }
            else
                {
                    document.querySelector(".dropdown-content").style.height="230px";
                }
            document.querySelector(".entry").classList.add("sub-link-selected");
            document.querySelector(".entry").classList.remove("sub-link");
            if(window.innerWidth <= 900)
                {
                    
                    openNav();
                        
                }
            document.cookie = "entry=true; path=/;";   
        }

        function checkMenu ()
        {
            let cookies = document.cookie;
            let cookieList = cookies.split(";");
            let i = 0;
            let menuList =[];
            cookieList.forEach(cookie=>{
                menuList[i] = cookie.split("=");
                i++;
            });
            menuList.forEach(menu=>{
                if(menu[0].match("entry"))
                {
                    if(menu[1] == "true")
                    {
                        if(!entryMenu)
                        {
                          
                            document.querySelector(".entry-dropdown").style.transition="none";
                            openEntry();
                            document.querySelector(".entry-dropdown").style.transition="height 0.5s";
                           

                        }
                    }
                }
                else if(menu[0].match("schedule"))
                {
                    if(menu[1] == "true")
                    {
                        if(!scheduleMenu)
                        {
                            
                            document.querySelector(".schedule-dropdown").style.transition="none";
                            openSchedule();
                            document.querySelector(".schedule-dropdown").style.transition="height 0.5s";
                            

                        }
                    }
                }
            })
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

        function scheduleDropdown()
        {
    
            if (scheduleMenu)
                {
                   closeSchedule()
                }
            else
                {
                   openSchedule()
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
            checkMenu();
            document.querySelector(".dropdown-content").style.transition="height 0.5s";
            document.querySelector(".schedule-dropdown").style.transition="height 0.5s";
            document.querySelector(".entry-dropdown").style.transition="height 0.5s";
            
        }

        function navHeight()
        {
            if(scheduleMenu && entryMenu)
            {
                document.querySelector("nav").style.height="552px";
            }
            else if(scheduleMenu || entryMenu)
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
            if(window.innerWidth >= 900)
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
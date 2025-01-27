        let dropdownMenu = false;
        let scheduleMenu = false;
        let entryMenu = false;


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
            document.cookie = "entry=false; path=/;";
            document.cookie = "schedule=false; path=/;";
        }

        function openDropdown()
        {
            document.querySelector(".dropdown-content").style.height="138px";
            dropdownMenu = true;
            document.querySelector(".show").classList.add("link-selected");
            document.querySelector(".show").classList.remove("link");
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
            document.cookie = "schedule=false; path=/;";
        }

        function openSchedule()
        {
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
                    document.cookie = "entry=false; path=/;";
        }

        function openEntry()
        {
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
                            document.querySelector(".entry-dropdown").style.transition="";
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
                            document.querySelector(".schedule-dropdown").style.transition="";
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



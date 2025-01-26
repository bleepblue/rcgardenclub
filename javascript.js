        let dropdownMenu = false;
        let scheduleMenu = false;
        let entryMenu = false;

        function dropdown()
        {
            if (dropdownMenu)
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
                }
            else
                {
                    document.querySelector(".dropdown-content").style.height="138px";
                    dropdownMenu = true;
                    document.querySelector(".show").classList.add("link-selected");
                    document.querySelector(".show").classList.remove("link");
                }

        }

        function scheduleDropdown()
        {
    
            if (scheduleMenu)
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
                }
            else
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
                }
        }

        function entryDropdown()
        {

            if (entryMenu)
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
                }
            else
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
                }

        }
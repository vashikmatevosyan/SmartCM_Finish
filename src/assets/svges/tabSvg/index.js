import React from "react";

import ProfileSvg from "./ProfileSvg";
import HomeSvg from "./HomeSvg";
import NoteSvg from "./NoteSvg";
import ActivitySvg from "./ActivitySvg";

function Index({path , color}) {
    if (path === "Home") {
        return <HomeSvg color={color}  />;
    }
    if (path === "Note") {
        return <NoteSvg color={color}/>
    }
    if (path === "Activity") {
        return <ActivitySvg color={color}/>
    }
    if (path === "Profile") {
        return <ProfileSvg color={color}/>
    }
}

export default Index;

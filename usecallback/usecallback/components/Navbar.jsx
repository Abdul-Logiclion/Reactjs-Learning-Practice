import { memo } from "react";
import React from 'react';

function Navbar({adjective, cont})
{

console.log("nav bar is rendered")
return <div>
<p>this is nav bar {adjective} {cont}</p>
</div>
}

export default memo(Navbar);
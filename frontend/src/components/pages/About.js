import React from 'react'

 const About = () => {
    return (
        <div className="container-aboutus">
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/PNbxziMMnMmAiB4?x=2560&y=947&a=true&file=tl.png`} align="left" alt="Thomas L" width="148px" height="144px"/>
                <p>Thomas [Frontend mastermind, Backend general support] Why JavaDevs wear glasses? Because they don’t C#.</p>
            </div>
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/sqeCBcedM9XDdsg?x=1920&y=587&a=true&file=dd.png`} align="left" alt="Dominic D" width="145px" height="137px"/>
                <p a >Dominic [Main Logic, Backend mastermind] Why are Assembly programmers always soaking wet? They work below C-level.</p>
            </div>
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/cNLYmXwZbCXfX33?x=1920&y=587&a=true&file=tg.png`} align="left" alt="Thomas G" width="153px" height="141px"/>
                <p>Thomas [Frontend support, Backend support] Don't use "beef stew" as a computer password. It's not stroganoff.</p>
            </div>
        </div>
    )
}

export default About
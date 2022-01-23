import React from 'react'

const About = () => {
    return (
        <div className="container-about">
            <div className="about-us-person">
                <div className="item-aboutus-img">
                    <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/PNbxziMMnMmAiB4?x=2560&y=947&a=true&file=tl.png`} align="left" alt="Thomas L" width="148px" height="144px" />
                </div>
                <div className="item-aboutus-text">
                    <ul className="item-aboutus-ul">
                        <li className="item-aboutus-li-bold">Thomas Lerchbaumer</li>
                        <li>[Frontend mastermind, Backend general support]</li>
                        <li className="item-aboutus-li-italic">Why JavaDevs wear glasses? Because they don’t C#.</li>
                    </ul>
                </div>
            </div>
            <div className="about-us-person">
                <div className="item-aboutus-img">
                    <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/sqeCBcedM9XDdsg?x=1920&y=587&a=true&file=dd.png`} align="left" alt="Dominic D" width="145px" height="137px" />

                </div>
                <div className="item-aboutus-text">
                    <ul className="item-aboutus-ul">
                        <li className="item-aboutus-li-bold">Dominic Duda</li>
                        <li>[Main Logic, Backend mastermind]</li>
                        <li className="item-aboutus-li-italic">Why are Assembly programmers always soaking wet? They work below C-level.</li>
                    </ul>
                </div>
            </div>
            <div className="about-us-person">
                <div className="item-aboutus-img">
                    <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/74xmTNNxfmXrgif?x=1920&y=587&a=true&file=tg.png`} align="left" alt="Thomas G" width="153px" height="145px" />
                </div>
                <div className="item-aboutus-text">
                    <ul className="item-aboutus-ul">
                        <li className="item-aboutus-li-bold">Thomas Gutjahr</li>
                        <li>[Frontend support, Backend support]</li>
                        <li className="item-aboutus-li-italic">Don't use "beef stew" as a computer password. It's not stroganoff.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
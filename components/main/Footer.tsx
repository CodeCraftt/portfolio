import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import SimpleCard from "./SimpleCard";

import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="activity">
<h1 className="text-white font-bold text-4xl w-[92%] mx-auto mt-[100px] text-center">Activities</h1>
    <div className="flex flex-wrap justify-center gap-6 p-10">
    
    <SimpleCard
      href="https://github.com/CodeCraftt/"
      imgSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      title="GitHub"
      borderColor="linear-gradient(180deg,#50D8D7 , #923993)"
      />

      <SimpleCard
        href="https://leetcode.com/u/code_conquerr/"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        title="LeetCode"
        borderColor="linear-gradient(180deg,#50D8D7 , #923993)"
        />

    <SimpleCard
      href="www.linkedin.com/in/bhargav-rathod-67108a235"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      title="LinkedIn"
      borderColor="linear-gradient(180deg,#50D8D7 , #923993)"
      />

    <SimpleCard
      href="https://www.youtube.com/channel/UCkA2XNDK5JC_s9Ib6Vx2eBw"
      imgSrc="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png"
      title="YouTube"
      borderColor="linear-gradient(180deg,#50D8D7 , #923993)"
      />

      
  </div>

      </div>
    
  )
}

export default Footer
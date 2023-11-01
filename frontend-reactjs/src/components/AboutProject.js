import React from "react";
import githubLogo from "../logo/githublogo.png";
import skypeLogo from "../logo/skypeLogo.svg";
import email from "../logo/email.png";
function AboutProject() {
  return (
    <>
      <div className="font-sans text-center h-full flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">
          Thank you for visiting my project.
        </div>
        <div className="pt-2 text-lg">
          <div>This project aims to improve my development skills.</div>
          <div>
            All data used for the project has been fetched from the{" "}
            <a href="https://www.oxfordlearnersdictionaries.com/">
              Oxford Dictionary
            </a>
            .
          </div>
          <div>
            The purpose of the project is to learn. It is not used for
            commercial purposes.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full pt-2">
          <div className="flex justify-center items-center">
            <img className="w-5" src={githubLogo}></img>
            <a className="pl-2" href="https://github.com/vietvanba/dictionary">
              vietvanba/dictionary
            </a>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-5" src={skypeLogo}></img>
            <a
              className="pl-2"
              href="https://join.skype.com/invite/kKGGgpjdlwg2"
            >
              live:baviet19
            </a>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-5" src={email}></img>
            <a className="pl-2" href="mailto::baviet19@gmail.com">
              baviet19@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutProject;

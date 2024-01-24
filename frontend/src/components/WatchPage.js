import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice.js";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer.js";
import Livechat from "./Livechat.js";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="flex flex-col">
      <div className="px-5 flex">
        <div>
        <iframe
        className="rounded-xl"
          width="914"
          height="514"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
        <div>
          <Livechat/>
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

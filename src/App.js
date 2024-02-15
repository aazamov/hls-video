/* eslint-disable react-hooks/exhaustive-deps */
import Hls from "hls.js";
import React, { useState, useEffect, useRef } from "react";

function MyVideoPlayer() {
  const [masterPlaylistUrl, setMasterPlaylistUrl] = useState("");

  fetch("http://192.168.0.133:8000/media/nf_grow_up_2/enc_iv.key")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch IV key");
      }
      return response.text();
    })
    .then((data) => {
      console.log("IV key content:", data);
      // Convert the IV key content to hexadecimal
      const hexString = Array.from(data, (byte) => {
        return ("0" + (byte.charCodeAt(0) & 0xff).toString(16)).slice(-2);
      }).join("");
      console.log("IV key content (hex):", hexString);
      // Process the hexadecimal IV key content here
    })
    .catch((error) => {
      console.error("Error fetching IV key:", error);
    });

  useEffect(() => {
    async function fetchMasterPlaylistUrl() {
      try {
        const response = await fetch(
          "http://192.168.0.133:8000/ru/api/v1/test-hls/1"
        );
        const data = await response.json();
        // Assuming the master playlist URL is stored in the 'master' key of the response data
        setMasterPlaylistUrl(data.master);
      } catch (error) {
        console.error("Failed to fetch master playlist URL:", error);
      }
    }

    fetchMasterPlaylistUrl();
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    let hls;

    async function setupHls() {
      if (Hls.isSupported()) {
        const video = videoRef.current;
        hls = new Hls();
        hls.on(Hls.Events.FRAG_LOADING, function (event, data) {
          if (
            data.frag.url.includes(
              "http://192.168.0.133:8000/media/nf_grow_up_2/audio/Uzbek/stream.m3u8"
            )
          ) {
            console.log("Fetching:", data.frag.url);
            // Modify the response data here
            // For example, adding a new line to the response
            // You can modify the response as needed
            data.response +=
              '\n#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535';
          }
        });
        hls.loadSource(masterPlaylistUrl);
        hls.attachMedia(video);
        await hls.startLoad(-1);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = masterPlaylistUrl;
      }
    }

    if (masterPlaylistUrl) {
      setupHls();
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [masterPlaylistUrl]);

  return (
    <div>
      <video ref={videoRef} controls />
    </div>
  );
}

export default MyVideoPlayer;

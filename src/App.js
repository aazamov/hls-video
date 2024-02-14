// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const hls = new Hls();
//     hlsRef.current = hls;

//     hls.loadSource(url);
//     hls.attachMedia(video);

//     // Event listener for when the player requests a new playlist entry
//     hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
//       console.log("Manifest parsed, available levels:", data.levels);
//     });

//     // Event listener for when the player changes to a new quality level
//     hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
//       console.log("Switched to quality level:", data.level);
//     });

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const App = () => {
//   const url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>

//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const hls = new Hls();
//     hlsRef.current = hls;

//     hls.loadSource(url);
//     hls.attachMedia(video);

//     // Event listener for when a segment is being loaded
//     hls.on(Hls.Events.FRAG_LOADING, (event, data) => {
//       console.log("Loading segment:", data.frag);
//     });

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const App = () => {
//   const url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const fetchPlaylist = async () => {
//       try {
//         const response = await fetch(url);
//         const playlistText = await response.text();

//         // Modify the playlist content to add the new line
//         const newLine =
//           '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535';
//         const modifiedPlaylist = playlistText.replace(
//           "#EXTM3U",
//           `#EXTM3U\n${newLine}`
//         );

//         const blob = new Blob([modifiedPlaylist], {
//           type: "application/vnd.apple.mpegurl",
//         });
//         const modifiedUrl = URL.createObjectURL(blob);

//         const video = videoRef.current;

//         const hls = new Hls();
//         hlsRef.current = hls;

//         hls.loadSource(modifiedUrl);
//         hls.attachMedia(video);

//         return () => {
//           if (hls) {
//             hls.destroy();
//           }
//         };
//       } catch (error) {
//         console.error("Error fetching or modifying playlist:", error);
//       }
//     };

//     fetchPlaylist();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const App = () => {
//   const url =
//     "https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const fetchPlaylist = async () => {
//       try {
//         const response = await fetch(url);
//         let playlistText = await response.text();

//         // Modify the playlist content to add the new line
//         const newLine =
//           '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/master.m3u8.key",IV=0x65653262353237323238616562303535';
//         playlistText = playlistText.replace("#EXTM3U", `#EXTM3U\n${newLine}`);

//         const video = videoRef.current;

//         const hls = new Hls();
//         hlsRef.current = hls;

//         hls.loadSource("data:text/plain," + encodeURIComponent(playlistText));
//         hls.attachMedia(video);

//         return () => {
//           if (hls) {
//             hls.destroy();
//           }
//         };
//       } catch (error) {
//         console.error("Error fetching or modifying playlist:", error);
//       }
//     };

//     fetchPlaylist();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const App = () => {
//   const url =
//     "https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const hls = new Hls();
//     hlsRef.current = hls;

//     hls.loadSource(url);
//     hls.attachMedia(video);

//     // Intercept the segment requests
//     hls.on(Hls.Events.FRAG_LOADING, (event, data) => {
//       const frag = data.frag;

//       // Fetch the segment
//       fetch(frag.url)
//         .then((response) => response.arrayBuffer())
//         .then((arrayBuffer) => {
//           // Modify the segment
//           const segment = new Uint8Array(arrayBuffer);
//           const newText = "HelloWorld";
//           const textBytes = new TextEncoder().encode(newText);

//           const modifiedSegment = new Uint8Array(
//             segment.length + textBytes.length
//           );
//           modifiedSegment.set(segment);
//           modifiedSegment.set(textBytes, segment.length);

//           // Provide the modified segment to the player
//           const modifiedBlob = new Blob([modifiedSegment], {
//             type: "video/mp2t",
//           });
//           const modifiedUrl = URL.createObjectURL(modifiedBlob);

//           frag.url = modifiedUrl;
//           hls.trigger(Hls.Events.FRAG_LOADED, {
//             frag: frag,
//             payload: modifiedSegment,
//           });
//         })
//         .catch((error) => {
//           console.error("Error fetching segment:", error);
//         });
//     });

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const App = () => {
//   const url =
//     "https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const hls = new Hls();
//     hlsRef.current = hls;

//     hls.on(Hls.Events.FRAG_LOADING, (event, data) => {
//       const frag = data.frag;

//       fetch(frag.url)
//         .then((response) => response.arrayBuffer())
//         .then((arrayBuffer) => {
//           const segment = new Uint8Array(arrayBuffer);

//           // Check if the line is missing
//           if (!segment.includes(EXT_X_KEY_LINE)) {
//             const newText =
//               '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535\n';
//             const newTextBytes = new TextEncoder().encode(newText);

//             // Create a new Uint8Array with enough space for the segment and the text
//             const modifiedSegment = new Uint8Array(
//               segment.length + newTextBytes.length
//             );

//             // Copy the text into the new Uint8Array
//             modifiedSegment.set(newTextBytes);

//             // Copy the segment into the new Uint8Array
//             modifiedSegment.set(segment, newTextBytes.length);

//             const modifiedBlob = new Blob([modifiedSegment], {
//               type: "video/mp2t",
//             });
//             const modifiedUrl = URL.createObjectURL(modifiedBlob);

//             frag.url = modifiedUrl;
//             hls.trigger(Hls.Events.FRAG_LOADED, {
//               frag: frag,
//               payload: modifiedSegment,
//             });
//           } else {
//             const modifiedBlob = new Blob([segment], { type: "video/mp2t" });
//             const modifiedUrl = URL.createObjectURL(modifiedBlob);

//             frag.url = modifiedUrl;
//             hls.trigger(Hls.Events.FRAG_LOADED, {
//               frag: frag,
//               payload: segment,
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching segment:", error);
//         });
//     });

//     hls.loadSource(url);
//     hls.attachMedia(video);

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const EXT_X_KEY_LINE =
//   '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535';

// const App = () => {
//   const url = "http://192.168.0.133:8000/media/nf_grow_up_2/master.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useEffect } from "react";
// import Hls from "hls.js";

// const HLSVideoPlayer = ({ url }) => {
//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const hls = new Hls();
//     hlsRef.current = hls;

//     hls.on(Hls.Events.FRAG_LOADING, (event, data) => {
//       const frag = data.frag;

//       fetch(frag.url)
//         .then((response) => response.arrayBuffer())
//         .then((arrayBuffer) => {
//           const segment = new Uint8Array(arrayBuffer);

//           // Check if the line is missing
//           if (!segment.includes(EXT_X_KEY_LINE)) {
//             const newText =
//               '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535\n';
//             const newTextBytes = new TextEncoder().encode(newText);

//             // Create a new Uint8Array with enough space for the segment and the text
//             const modifiedSegment = new Uint8Array(
//               segment.length + newTextBytes.length
//             );

//             // Copy the text into the new Uint8Array
//             modifiedSegment.set(newTextBytes);

//             // Copy the segment into the new Uint8Array
//             modifiedSegment.set(segment, newTextBytes.length);

//             const modifiedBlob = new Blob([modifiedSegment], {
//               type: "video/mp2t",
//             });
//             const modifiedUrl = URL.createObjectURL(modifiedBlob);

//             frag.url = modifiedUrl;
//             hls.trigger(Hls.Events.FRAG_LOADED, {
//               frag: frag,
//               payload: modifiedSegment,
//             });
//           } else {
//             const modifiedBlob = new Blob([segment], { type: "video/mp2t" });
//             const modifiedUrl = URL.createObjectURL(modifiedBlob);

//             frag.url = modifiedUrl;
//             hls.trigger(Hls.Events.FRAG_LOADED, {
//               frag: frag,
//               payload: segment,
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching segment:", error);
//         });
//     });

//     hls.loadSource(url);
//     hls.attachMedia(video);

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);

//   return <video ref={videoRef} controls />;
// };

// const EXT_X_KEY_LINE =
//   '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535';

// const App = () => {
//   const url = "http://192.168.0.133:8000/media/nf_grow_up_2/master.m3u8";

//   return (
//     <div>
//       <h1>HLS.js Video Player</h1>
//       <HLSVideoPlayer url={url} />
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

const HLSVideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const hls = new Hls();
    hlsRef.current = hls;

    hls.on(Hls.Events.FRAG_LOADING, (event, data) => {
      const frag = data.frag;

      fetch(frag.url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          const segment = new Uint8Array(arrayBuffer);

          // Check if the line is missing
          if (!segment.includes(EXT_X_KEY_LINE)) {
            const newText =
              '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535\n';
            const newTextBytes = new TextEncoder().encode(newText);

            // Create a new Uint8Array with enough space for the segment and the text
            const modifiedSegment = new Uint8Array(
              segment.length + newTextBytes.length
            );

            // Copy the text into the new Uint8Array
            modifiedSegment.set(newTextBytes);

            // Copy the segment into the new Uint8Array
            modifiedSegment.set(segment, newTextBytes.length);

            console.log("Modified Segment:", modifiedSegment); // Log the modified segment

            const modifiedBlob = new Blob([modifiedSegment], {
              type: "video/mp2t",
            });
            const modifiedUrl = URL.createObjectURL(modifiedBlob);

            frag.url = modifiedUrl;
            hls.trigger(Hls.Events.FRAG_LOADED, {
              frag: frag,
              payload: modifiedSegment,
            });
          } else {
            const modifiedBlob = new Blob([segment], { type: "video/mp2t" });
            const modifiedUrl = URL.createObjectURL(modifiedBlob);

            frag.url = modifiedUrl;
            hls.trigger(Hls.Events.FRAG_LOADED, {
              frag: frag,
              payload: segment,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching segment:", error);
        });
    });

    hls.loadSource(url);
    hls.attachMedia(video);

    return () => {
      if (hls) {
        hls.destroy();
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return <video ref={videoRef} controls />;
};

const EXT_X_KEY_LINE =
  '#EXT-X-KEY:METHOD=AES-128,URI="http://192.168.0.133:8000/media/nf_grow_up_2/enc.key",IV=0x65653262353237323238616562303535';

const App = () => {
  const url = "http://192.168.0.133:8000/media/nf_grow_up_2/master.m3u8";

  return (
    <div>
      <h1>HLS.js Video Player</h1>
      <HLSVideoPlayer url={url} />
    </div>
  );
};

export default App;

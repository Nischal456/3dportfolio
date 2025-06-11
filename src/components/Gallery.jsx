import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { X } from "react-feather"; // Make sure you have react-feather installed or replace X with any cross icon

const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
];

const Gallery = () => {
    return (
        <section id="gallery" className={`${styles.padding} min-h-screen bg-black`}>
            <div className="text-center mb-10">
                <h2 className={`${styles.sectionHeadText} text-white`}>
                    My Photography & Videography
                </h2>
                <p className={`${styles.sectionSubText} text-secondary`}>
                    A glimpse through my lens and motion
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((src, index) => (
                    <motion.div
                        key={`video-${index}`}
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="rounded-lg overflow-hidden shadow-lg relative group bg-black"
                    >
                        <FullscreenVideoPlayer src={src} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const FullscreenVideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Enter fullscreen & play video
    const enterFullscreen = async () => {
        const video = videoRef.current;
        const container = containerRef.current;

        if (container.requestFullscreen) {
            await container.requestFullscreen();
        }
        setIsFullscreen(true);
        video.muted = false;
        video.currentTime = 0;
        video.play();
        setIsPlaying(true);
    };

    // Exit fullscreen & pause video
    const exitFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        setIsFullscreen(false);
        setIsPlaying(false);
        const video = videoRef.current;
        video.pause();
    };

    // Play/Pause toggle
    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    // When fullscreen changes (exit by ESC or other means)
    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setIsFullscreen(false);
                setIsPlaying(false);
                videoRef.current.pause();
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    // Loop video from beginning on end
    useEffect(() => {
        const video = videoRef.current;
        const handleEnded = () => {
            video.currentTime = 0;
            video.play();
            setIsPlaying(true);
        };
        video.addEventListener("ended", handleEnded);
        return () => {
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative bg-black w-full ${isFullscreen ? "min-h-screen" : ""}`}
            style={isFullscreen ? { height: "100vh" } : {}}
        >
            <video
                ref={videoRef}
                src={src}
                className={`w-full h-auto max-h-[600px] object-contain bg-black ${isFullscreen ? "min-h-screen" : ""
                    }`}
                playsInline
                preload="metadata"
                controls={false}
                muted={false}  // sound enabled all the time
            />


            {!isFullscreen && (
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center space-y-2">
                    <button
                        onClick={enterFullscreen}
                        className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                    >
                        Play Fullscreen
                    </button>

                    <div className="flex space-x-2">
                        <button
                            onClick={() => {
                                const video = videoRef.current;
                                video.play();
                                setIsPlaying(true);
                            }}
                            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                        >
                            Play
                        </button>
                        <button
                            onClick={() => {
                                const video = videoRef.current;
                                video.pause();
                                setIsPlaying(false);
                            }}
                            className="text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded"
                        >
                            Pause
                        </button>
                    </div>
                </div>
            )}

            {isFullscreen && (
                <>
                    <button
                        onClick={exitFullscreen}
                        className="absolute top-4 right-4 z-50 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
                        aria-label="Close fullscreen"
                    >
                        <X size={24} />
                    </button>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
                        <button
                            onClick={togglePlayPause}
                            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                        >
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SectionWrapper(Gallery, "gallery");

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("weddingAudio");

  // Try to autoplay
  audio.play().catch(() => {
    // If blocked (like on mobile), show manual play button
    const playBtn = document.createElement("button");
    playBtn.innerText = "Play Wedding Theme";
    playBtn.className = "play-audio-btn";
    document.body.prepend(playBtn);

    playBtn.addEventListener("click", () => {
      audio.play();
      playBtn.remove();
    });
  });
});
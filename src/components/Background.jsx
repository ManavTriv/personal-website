import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const TOTAL = 20;
    const iconArray = [];

    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e0e7ff" viewBox="0 0 24 24">
        <path d="M12 2C7.58 2 4 5.58 4 10v9c0 .55.45 1 1 1 .25 0 .49-.09.68-.26L8 18.41l2.32 2.33a1.003 1.003 0 001.36 0L14 18.41l2.32 2.33c.19.17.43.26.68.26.55 0 1-.45 1-1v-9c0-4.42-3.58-8-8-8zm-2 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
    </svg>
    `;

    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const iconURL = URL.createObjectURL(svgBlob);
    const iconImg = new Image();
    iconImg.src = iconURL;

    let mouseX = 0;

    const handleMove = (e) => {
      mouseX = (e.clientX || e.touches?.[0]?.clientX || 0) / window.innerWidth;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Icon {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.size = 20 + Math.random() * 10;
        this.opacity = this.size / 30;
        this.xSpeed = 1 + Math.random() * 1;
        this.ySpeed = 1 + Math.random() * 1;
        this.rotate = Math.random() * 360;
        this.rotateSpeed = Math.random();
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotate * Math.PI) / 180);
        ctx.drawImage(
          iconImg,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }

      animate() {
        this.x += this.xSpeed + mouseX * 2;
        this.y += this.ySpeed + mouseX * 1.5;
        this.rotate += this.rotateSpeed;
        this.draw();
      }
    }

    iconImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        iconArray.push(new Icon());
      }

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        iconArray.forEach((icon) => icon.animate());
        requestAnimationFrame(render);
      }

      render();
    };

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
    />
  );
};

export default Background;

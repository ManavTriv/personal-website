import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isMobile = window.innerWidth < 768;
    const TOTAL = isMobile ? 6 : 12;
    const blobSizeMultiplier = isMobile ? 0.6 : 1;

    const blobs = [];

    class Blob {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = (60 + Math.random() * 40) * blobSizeMultiplier;
        this.points = [];
        this.numPoints = 12;

        this.opacity = 0.18 + Math.random() * 0.06;
        this.rotation = Math.random() * Math.PI * 2;

        this.vx = (Math.random() - 0.5) * 1.1;
        this.vy = (Math.random() - 0.5) * 1.1;

        this.rotationSpeed = (Math.random() - 0.5) * 0.0011;

        for (let i = 0; i < this.numPoints; i++) {
          const angle =
            (Math.PI * 2 * i) / this.numPoints + (Math.random() - 0.5) * 0.1;
          this.points.push({
            angle,
            distance: this.radius + Math.random() * 30 - 15,
            speed: (Math.random() - 0.5) * 0.5,
          });
        }
      }

      update() {
        this.points.forEach((p) => {
          p.distance += p.speed;
          if (p.distance > this.radius + 30 || p.distance < this.radius - 30) {
            p.speed *= -1;
          }
        });

        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < this.radius || this.x > canvas.width - this.radius) {
          this.vx *= -1;
        }
        if (this.y < this.radius || this.y > canvas.height - this.radius) {
          this.vy *= -1;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();

        for (let i = 0; i < this.numPoints; i++) {
          const p1 = this.points[i];
          const p2 = this.points[(i + 1) % this.numPoints];

          const x1 = Math.cos(p1.angle) * p1.distance;
          const y1 = Math.sin(p1.angle) * p1.distance;
          const x2 = Math.cos(p2.angle) * p2.distance;
          const y2 = Math.sin(p2.angle) * p2.distance;

          const cpX = (x1 + x2) / 2;
          const cpY = (y1 + y2) / 2;

          if (i === 0) {
            ctx.moveTo(x1, y1);
          }

          ctx.quadraticCurveTo(x1, y1, cpX, cpY);
        }

        ctx.closePath();

        ctx.shadowBlur = isMobile ? 15 : 30;
        ctx.shadowColor = `rgba(224, 231, 255, ${this.opacity})`;
        ctx.fillStyle = `rgba(224, 231, 255, ${this.opacity})`;
        ctx.fill();

        ctx.restore();
      }
    }

    for (let i = 0; i < TOTAL; i++) {
      blobs.push(new Blob());
    }

    let lastTime = 0;
    const fps = 45;
    const frameInterval = 1000 / fps;
    let animationFrameId;

    const animate = (time) => {
      if (time - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blobs.forEach((blob) => {
          blob.update();
          blob.draw();
        });
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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

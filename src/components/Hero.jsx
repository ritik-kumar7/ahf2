import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const generateSmoothData = (points, startValue, endValue) => {
    const data = [];
    for (let i = 0; i < points; i++) {
        const progress = i / points;
        const baseValue = startValue + (progress * progress * (endValue - startValue));
        const noise = Math.sin(i * 0.5) * 2 + Math.cos(i * 0.3) * 1.5;
        const random = (Math.random() - 0.5) * 1;
        data.push(baseValue + noise + random);
    }
    return data;
};

const Hero = () => {
    const chartRef = useRef(null);

    const snapshotData = generateSmoothData(50, 0, 100);

    const data = {
        labels: snapshotData.map((_, i) => i),
        datasets: [{
            data: snapshotData,
            borderColor: '#d4af37',
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.45,
            fill: false
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: { top: 5, right: 5, bottom: 25, left: 5 }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: { display: false, grid: { display: false } },
            y: {
                display: true,
                min: 0,
                max: 100,
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false,
                    drawTicks: false
                },
                ticks: { display: false, stepSize: 25 },
                border: { display: false }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart'
        }
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const originalDraw = chart.draw;
        let animationFrameId;
        let startTimestamp = null;

        chart.draw = function () {
            const ctx = this.ctx;
            ctx.save();
            ctx.shadowColor = 'rgba(212, 175, 55, 0.7)';
            ctx.shadowBlur = 18;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            originalDraw.call(this);
            ctx.restore();

            // Animated glow point logic
            const meta = this.getDatasetMeta(0);
            if (!meta.data || meta.data.length === 0) return;

            const totalPoints = meta.data.length;
            const duration = 2500; // 2.5 seconds loop
            const now = Date.now();
            if (!startTimestamp) startTimestamp = now;

            const elapsed = now - startTimestamp;
            const progress = (elapsed % duration) / duration;

            // Calculate continuous index
            const continuousIndex = progress * (totalPoints - 1);
            const index = Math.floor(continuousIndex);
            const nextIndex = Math.min(index + 1, totalPoints - 1);
            const subProgress = continuousIndex - index;

            const p1 = meta.data[index];
            const p2 = meta.data[nextIndex];

            if (p1 && p2) {
                // Interpolate
                const currentX = p1.x + (p2.x - p1.x) * subProgress;
                const currentY = p1.y + (p2.y - p1.y) * subProgress;

                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 60);
                gradient.addColorStop(0, 'rgba(255, 230, 180, 0.5)');
                gradient.addColorStop(0.4, 'rgba(214, 179, 106, 0.15)');
                gradient.addColorStop(1, 'rgba(214, 179, 106, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(currentX, currentY, 60, 0, Math.PI * 2);
                ctx.fill();

                const innerGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 15);
                innerGradient.addColorStop(0, 'rgba(255, 255, 220, 0.4)');
                innerGradient.addColorStop(1, 'rgba(255, 255, 220, 0)');
                ctx.fillStyle = innerGradient;
                ctx.beginPath();
                ctx.arc(currentX, currentY, 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        };

        const animate = () => {
            if (chart && chart.ctx) {
                // Force a re-render. chart.update('none') updates animation but keeps state.
                // However, we need to clear previous frame.
                // chart.draw() does not clear. 
                // chart.render() clears and draws.
                chart.render();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation loop
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            chart.draw = originalDraw;
        };
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    <span className="gradient-text">Institutional AI‑Driven</span><br />
                    <span className="gradient-text">Trading Intelligence</span>
                </h1>
                <p className="hero-subtitle">Discreet, systematic, risk‑first<br />approach to capital growth.</p>
                <div className="hero-actions">
                    <button className="btn btn-primary">Request Access</button>
                    <button className="btn btn-outline">Download Factsheet</button>
                </div>
            </div>

            <div className="snapshot-card">
                <h3 className="snapshot-title">Performance Snapshot</h3>

                <div className="metrics-grid">
                    <div className="metric-row">
                        <span className="metric-label">YTD</span>
                        <span className="metric-value positive">+32.5%</span>
                        <span className="metric-value secondary">+58.2%</span>
                    </div>
                    <div className="metric-row">
                        <span className="metric-label">12M</span>
                        <span className="metric-value positive">+58.2%</span>
                    </div>
                    <div className="metric-row">
                        <span className="metric-label">Volatility</span>
                        <span className="metric-value neutral">6.1%</span>
                    </div>
                </div>

                <div className="metrics-bottom">
                    <div className="metric-item">
                        <span className="metric-label">Max Drawdown</span>
                        <span className="metric-value" style={{ color: '#c9a855' }}>-8.3%</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-label">Sharpe</span>
                        <span className="metric-value neutral">2.14</span>
                    </div>
                </div>

                <div className="snapshot-chart-wrapper">
                    <div className="snapshot-chart-inner">
                        <div className="snapshot-chart-flex">
                            <div className="snapshot-y-axis">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>
                            <div className="snapshot-chart">
                                <Line ref={chartRef} data={data} options={options} />
                            </div>
                        </div>
                        <div className="chart-labels">
                            <span>Jan</span><span>23</span><span>Feb</span><span>Mar</span>
                            <span>App</span><span>May</span><span>Jun</span><span>Jul</span>
                            <span>Aug</span><span>Sep</span><span>Oct</span><span>Dec</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;

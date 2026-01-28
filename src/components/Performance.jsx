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

const Performance = () => {
    const chartRef = useRef(null);
    const perfData = generateSmoothData(80, 0, 100);

    const data = {
        labels: perfData.map((_, i) => i),
        datasets: [{
            data: perfData,
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
        layout: { padding: { top: 5, right: 5, bottom: 25, left: 5 } },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                titleColor: '#f0d38a',
                bodyColor: '#d6b36a',
                borderColor: 'rgba(214, 179, 106, 0.4)',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return '+' + Math.round(context.parsed.y) + '%';
                    }
                }
            }
        },
        scales: {
            x: { display: false, grid: { display: false } },
            y: {
                display: true, min: 0, max: 100,
                grid: {
                    display: true, color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false, drawTicks: false
                },
                ticks: { display: false, stepSize: 25 },
                border: { display: false }
            }
        },
        animation: { duration: 2000, easing: 'easeInOutQuart' }
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
            ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            originalDraw.call(this);
            ctx.restore();

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
                chart.render();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            chart.draw = originalDraw;
        };
    }, []);

    return (
        <section id="performance">
            <h2 className="section-title gradient-text scroll-reveal">Performance</h2>
            <div className="performance-grid">
                <div className="performance-chart-card scroll-reveal-left">
                    <div className="performance-chart-container">
                        <div className="chart-y-axis">
                            <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
                        </div>
                        <Line ref={chartRef} data={data} options={options} />
                    </div>
                    <div className="chart-x-axis">
                        <span>Jan 22</span><span>Q1</span><span>Apr</span><span>Q2</span>
                        <span>Jul</span><span>Sep</span><span>Q4</span><span>Dec</span>
                    </div>
                </div>

                <div className="performance-stats-card scroll-reveal-right">
                    <h3 className="stats-title">Monthly Returns</h3>
                    <div className="stat-row">
                        <span className="stat-name">YTD</span>
                        <div className="stat-values">
                            <span className="stat-value" style={{ color: '#7dd097' }}>+33.5%</span>
                            <span className="stat-change positive">+3.2%</span>
                        </div>
                    </div>
                    <div className="stat-row">
                        <span className="stat-name">Sharpe Ratio</span>
                        <div className="stat-values">
                            <span className="stat-value">2.14</span>
                            <span className="stat-change positive">+1.4%</span>
                        </div>
                    </div>
                    <div className="stat-row">
                        <span className="stat-name">Volatility</span>
                        <div className="stat-values">
                            <span className="stat-value">6.1%</span>
                            <span className="stat-change positive">+0.7%</span>
                        </div>
                    </div>
                    <div className="stat-row">
                        <span className="stat-name">Max Drawdown</span>
                        <div className="stat-values">
                            <span className="stat-value" style={{ color: '#e57373' }}>-8.5%</span>
                            <span className="stat-change positive">+8.9%</span>
                        </div>
                    </div>
                    <div className="performance-note">
                        Note: Past performance is no indication of future results.<br />
                        Performance measured net of the Fund portfolio performance only; excludes<br />
                        performance of discretionary, in total generation, portfolio structure.
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Performance;

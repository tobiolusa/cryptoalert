(function () {
    "use strict";
    // A modern approach to create chart with JSON data
    const request = new XMLHttpRequest();
    const url = 'https://balocreation.github.io/jaranetwork/users/data.json';
    request.open('GET', url, true);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const element = JSON.parse(this.responseText);
            const labelDay = element.treasuryday.map(function (el) {
                return el.label;
            });
            const dataDay = element.treasuryday.map(function (el) {
                return el.data;
            });
            const labelWeek = element.treasuryweek.map(function (el) {
                return el.label;
            });
            const dataWeek = element.treasuryweek.map(function (el) {
                return el.data;
            });
            const labelMonth = element.treasurymonth.map(function (el) {
                return el.label;
            });
            const dataMonth = element.treasurymonth.map(function (el) {
                return el.data;
            });
            const labelYear = element.treasuryyear.map(function (el) {
                return el.label;
            });
            const dataYear = element.treasuryyear.map(function (el) {
                return el.data;
            });
            // Treasury daily chart data
            const contextDay = document.getElementById('treasuryChartDay').getContext('2d');
            const gradientDay = contextDay.createLinearGradient(0, 0, 0, 400);
            gradientDay.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            gradientDay.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const chartDay = new Chart(contextDay, {
                type: 'line',
                data: {
                    labels: labelDay,
                    datasets: [{
                        label: 'Total Assets',
                        data: dataDay,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: gradientDay,
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBorderWidth: 2,
                        spanGaps: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value;
                                }
                            },
                            grid: {
                                display: true,
                                borderDash: [4, 4],
                                borderColor: 'rgba(239, 239, 239, 1)',
                                color: 'rgba(239, 239, 239, 1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                borderWidth: 0,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            // Treasury weekly chart data
            const contextWeek = document.getElementById('treasuryChartWeek').getContext('2d');
            const gradientWeek = contextWeek.createLinearGradient(0, 0, 0, 400);
            gradientWeek.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            gradientWeek.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const chartWeek = new Chart(contextWeek, {
                type: 'line',
                data: {
                    labels: labelWeek,
                    datasets: [{
                        label: 'Total Assets',
                        data: dataWeek,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: gradientWeek,
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBorderWidth: 2,
                        spanGaps: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value;
                                }
                            },
                            grid: {
                                display: true,
                                borderDash: [4, 4],
                                borderColor: 'rgba(239, 239, 239, 1)',
                                color: 'rgba(239, 239, 239, 1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                borderWidth: 0,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            // Treasury monthly chart data
            const contextMonth = document.getElementById('treasuryChartMonth').getContext('2d');
            const gradientMonth = contextMonth.createLinearGradient(0, 0, 0, 400);
            gradientMonth.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            gradientMonth.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const chartMonth = new Chart(contextMonth, {
                type: 'line',
                data: {
                    labels: labelMonth,
                    datasets: [{
                        label: 'Total Assets',
                        data: dataMonth,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: gradientMonth,
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBorderWidth: 2,
                        spanGaps: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value;
                                }
                            },
                            grid: {
                                display: true,
                                borderDash: [4, 4],
                                borderColor: 'rgba(239, 239, 239, 1)',
                                color: 'rgba(239, 239, 239, 1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                borderWidth: 0,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            // Treasury yearly chart data
            const contextYear = document.getElementById('treasuryChartYear').getContext('2d');
            const gradientYear = contextYear.createLinearGradient(0, 0, 0, 400);
            gradientYear.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            gradientYear.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const chartYear = new Chart(contextYear, {
                type: 'line',
                data: {
                    labels: labelYear,
                    datasets: [{
                        label: 'Total Assets',
                        data: dataYear,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: gradientYear,
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(0, 83, 186, 1)',
                        pointHoverBorderWidth: 2,
                        spanGaps: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value;
                                }
                            },
                            grid: {
                                display: true,
                                borderDash: [4, 4],
                                borderColor: 'rgba(239, 239, 239, 1)',
                                color: 'rgba(239, 239, 239, 1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                borderWidth: 0,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }
}());
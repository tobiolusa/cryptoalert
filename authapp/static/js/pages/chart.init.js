(function () {
    "use strict";
    // A modern approach to create chart with JSON data
    const request = new XMLHttpRequest();
    const url = 'https://jaranetwork.vercel.app/admin/data.json';
    request.open('GET', url, true);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const element = JSON.parse(this.responseText);
            // Transaction variables
            const transLabelDay = element.transactionday.map(function (el) {
                return el.label;
            });
            const transDataDay = element.transactionday.map(function (el) {
                return el.data;
            });
            const transLabelWeek = element.transactionweek.map(function (el) {
                return el.label;
            });
            const transDataWeek = element.transactionweek.map(function (el) {
                return el.data;
            });
            const transLabelMonth = element.transactionmonth.map(function (el) {
                return el.label;
            });
            const transDataMonth = element.transactionmonth.map(function (el) {
                return el.data;
            });
            const transLabelYear = element.transactionyear.map(function (el) {
                return el.label;
            });
            const transDataYear = element.transactionyear.map(function (el) {
                return el.data;
            });
            // Liquidity variables
            const liqLabelDay = element.liquidityday.map(function (el) {
                return el.label;
            });
            const liqDataDay = element.liquidityday.map(function (el) {
                return el.data;
            });
            const liqLabelWeek = element.liquidityweek.map(function (el) {
                return el.label;
            });
            const liqDataWeek = element.liquidityweek.map(function (el) {
                return el.data;
            });
            const liqLabelMonth = element.liquiditymonth.map(function (el) {
                return el.label;
            });
            const liqDataMonth = element.liquiditymonth.map(function (el) {
                return el.data;
            });
            const liqLabelYear = element.liquidityyear.map(function (el) {
                return el.label;
            });
            const liqDataYear = element.liquidityyear.map(function (el) {
                return el.data;
            });
            // Growth variables
            const growthLabelDay = element.growthday.map(function (el) {
                return el.label;
            });
            const growthDataDay = element.growthday.map(function (el) {
                return el.data;
            });
            const growthLabelWeek = element.growthweek.map(function (el) {
                return el.label;
            });
            const growthDataWeek = element.growthweek.map(function (el) {
                return el.data;
            });
            const growthLabelMonth = element.growthmonth.map(function (el) {
                return el.label;
            });
            const growthDataMonth = element.growthmonth.map(function (el) {
                return el.data;
            });
            const growthLabelYear = element.growthyear.map(function (el) {
                return el.label;
            });
            const growthDataYear = element.growthyear.map(function (el) {
                return el.data;
            });
            // Transaction daily chart data
            const transContextDay = document.getElementById('transactionChartDay').getContext('2d');
            const transGradientDay = transContextDay.createLinearGradient(0, 0, 0, 400);
            transGradientDay.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            transGradientDay.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const transChartDay = new Chart(transContextDay, {
                type: 'bar',
                data: {
                    labels: transLabelDay,
                    datasets: [{
                        label: 'Transaction',
                        data: transDataDay,
                        backgroundColor: transGradientDay,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderRadius: 5,
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
            // Transaction weekly chart data
            const transContextWeek = document.getElementById('transactionChartWeek').getContext('2d');
            const transGradientWeek = transContextWeek.createLinearGradient(0, 0, 0, 400);
            transGradientWeek.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            transGradientWeek.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const transChartWeek = new Chart(transContextWeek, {
                type: 'bar',
                data: {
                    labels: transLabelWeek,
                    datasets: [{
                        label: 'Transaction',
                        data: transDataWeek,
                        backgroundColor: transGradientWeek,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Transaction monthly chart data
            const transContextMonth = document.getElementById('transactionChartMonth').getContext('2d');
            const transGradientMonth = transContextMonth.createLinearGradient(0, 0, 0, 400);
            transGradientMonth.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            transGradientMonth.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const transChartMonth = new Chart(transContextMonth, {
                type: 'bar',
                data: {
                    labels: transLabelMonth,
                    datasets: [{
                        label: 'Transaction',
                        data: transDataMonth,
                        backgroundColor: transGradientMonth,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Transaction yearly chart data
            const transContextYear = document.getElementById('transactionChartYear').getContext('2d');
            const transGradientYear = transContextYear.createLinearGradient(0, 0, 0, 400);
            transGradientYear.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            transGradientYear.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const transChartYear = new Chart(transContextYear, {
                type: 'bar',
                data: {
                    labels: transLabelYear,
                    datasets: [{
                        label: 'Transaction',
                        data: transDataYear,
                        backgroundColor: transGradientYear,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Liquidity daily chart data
            const liqContextDay = document.getElementById('liquidityChartDay').getContext('2d');
            const liqGradientDay = liqContextDay.createLinearGradient(0, 0, 0, 400);
            liqGradientDay.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            liqGradientDay.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const liqChartDay = new Chart(liqContextDay, {
                type: 'bar',
                data: {
                    labels: liqLabelDay,
                    datasets: [{
                        label: 'Liquidity',
                        data: liqDataDay,
                        backgroundColor: liqGradientDay,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Liquidity weekly chart data
            const liqContextWeek = document.getElementById('liquidityChartWeek').getContext('2d');
            const liqGradientWeek = liqContextWeek.createLinearGradient(0, 0, 0, 400);
            liqGradientWeek.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            liqGradientWeek.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const liqChartWeek = new Chart(liqContextWeek, {
                type: 'bar',
                data: {
                    labels: liqLabelWeek,
                    datasets: [{
                        label: 'Liquidity',
                        data: liqDataWeek,
                        backgroundColor: liqGradientWeek,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Liquidity monthly chart data
            const liqContextMonth = document.getElementById('liquidityChartMonth').getContext('2d');
            const liqGradientMonth = liqContextMonth.createLinearGradient(0, 0, 0, 400);
            liqGradientMonth.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            liqGradientMonth.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const liqChartMonth = new Chart(liqContextMonth, {
                type: 'bar',
                data: {
                    labels: liqLabelMonth,
                    datasets: [{
                        label: 'Liquidity',
                        data: liqDataMonth,
                        backgroundColor: liqGradientMonth,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Liquidity yearly chart data
            const liqContextYear = document.getElementById('liquidityChartYear').getContext('2d');
            const liqGradientYear = liqContextYear.createLinearGradient(0, 0, 0, 400);
            liqGradientYear.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            liqGradientYear.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const liqChartYear = new Chart(liqContextYear, {
                type: 'bar',
                data: {
                    labels: liqLabelYear,
                    datasets: [{
                        label: 'Liquidity',
                        data: liqDataYear,
                        backgroundColor: liqGradientYear,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Growth daily chart data
            const growthContextDay = document.getElementById('growthChartDay').getContext('2d');
            const growthGradientDay = growthContextDay.createLinearGradient(0, 0, 0, 400);
            growthGradientDay.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            growthGradientDay.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const growthChartDay = new Chart(growthContextDay, {
                type: 'bar',
                data: {
                    labels: growthLabelDay,
                    datasets: [{
                        label: 'Growth',
                        data: growthDataDay,
                        backgroundColor: growthGradientDay,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Growth weekly chart data
            const growthContextWeek = document.getElementById('growthChartWeek').getContext('2d');
            const growthGradientWeek = growthContextWeek.createLinearGradient(0, 0, 0, 400);
            growthGradientWeek.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            growthGradientWeek.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const growthChartWeek = new Chart(growthContextWeek, {
                type: 'bar',
                data: {
                    labels: growthLabelWeek,
                    datasets: [{
                        label: 'Growth',
                        data: growthDataWeek,
                        backgroundColor: growthGradientWeek,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Growth monthly chart data
            const growthContextMonth = document.getElementById('growthChartMonth').getContext('2d');
            const growthGradientMonth = growthContextMonth.createLinearGradient(0, 0, 0, 400);
            growthGradientMonth.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            growthGradientMonth.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const growthChartMonth = new Chart(growthContextMonth, {
                type: 'bar',
                data: {
                    labels: growthLabelMonth,
                    datasets: [{
                        label: 'Growth',
                        data: growthDataMonth,
                        backgroundColor: growthGradientMonth,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
            // Growth yearly chart data
            const growthContextYear = document.getElementById('growthChartYear').getContext('2d');
            const growthGradientYear = growthContextYear.createLinearGradient(0, 0, 0, 400);
            growthGradientYear.addColorStop(0, 'rgba(0, 83, 186, 0.5)');
            growthGradientYear.addColorStop(1, 'rgba(255, 245, 245, 0.2)');
            const growthChartYear = new Chart(growthContextYear, {
                type: 'bar',
                data: {
                    labels: growthLabelYear,
                    datasets: [{
                        label: 'Growth',
                        data: growthDataYear,
                        backgroundColor: growthGradientYear,
                        hoverBackgroundColor: 'rgba(0, 83, 186, 1)',
                        borderColor: 'rgba(0, 83, 186, 1)',
                        borderWidth: 1,
                        borderRadius: 5,
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
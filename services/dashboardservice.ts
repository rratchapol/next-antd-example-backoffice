// /service/dashboardservice.ts
export const dashboardMockData = {
  summary: {
    donationWeight: 112893,
    mealServed: 112893,
    co2e: 112893,
    ytdDonationWeight: 112893,
    ytdMealServed: 112893,
    ytdCO2e: 112893,
  },
  pieData: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        data: [10, 20, 30, 25, 15],
        backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#4bc0c0', '#9966ff'],
      },
    ],
  },
  barData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: '#f472b6',
        data: [500, 600, 300, 200, 900, 800, 100],
      },
      {
        label: 'Dataset 2',
        backgroundColor: '#93c5fd',
        data: [800, 400, 200, 600, 850, 700, 300],
      },
    ],
  },
};

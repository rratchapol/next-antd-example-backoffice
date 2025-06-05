'use client';

import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { dashboardMockData } from '@/services/dashboardservice';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { summary, pieData, barData } = dashboardMockData;


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">แดชบอร์ด</h1>
      {/* <p className="text-gray-600 mb-6">Display all the team members and essential details.</p> */}
      <p className="text-gray-600 mb-6">แสดงข้อมูลสรุปและกราฟต่างๆ</p>

      {/* Summary Section */}
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Monthly Donation Weight (kg)" value={summary.donationWeight} subtitle="YTD Donation Weight (kg)" subtitleValue={summary.ytdDonationWeight} />
        <SummaryCard title="Monthly Meal Served Eq. (meals)" value={summary.mealServed} subtitle="YTD Meal Served Eq. (meals)" subtitleValue={summary.ytdMealServed} />
        <SummaryCard title="Monthly CO2e (kg)" value={summary.co2e} subtitle="YTD CO2e (kg)" subtitleValue={summary.ytdCO2e} />
        <div className="bg-white rounded-xl p-4">
          <h3 className="text-sm font-semibold mb-2">Beneficiary Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>

      

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4">
        <ChartCard title="Daily Donation Weight">
          <Bar data={barData} />
        </ChartCard>
        <ChartCard title="Monthly Donation/Average Daily Weight">
          <Bar data={barData} />
        </ChartCard>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, subtitle, subtitleValue }: any) {
  return (
    <div className="bg-white rounded-xl p-4 text-center">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value.toLocaleString()}</p>
      <div className="mt-2 text-sm border-t pt-2">
        <p className="text-gray-600">{subtitle}</p>
        <p className="text-gray-800">{subtitleValue.toLocaleString()}</p>
      </div>
    </div>
  );
}

function ChartCard({ title, children }: any) {
  return (
    // <div className="bg-green-100 rounded-xl p-4">
    <div className="bg-white rounded-xl p-4">
    <div className=" rounded-xl p-4">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      {children}
    </div>
    </div>
  );
}

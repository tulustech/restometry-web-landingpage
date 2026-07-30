import { 
  Calendar, 
  Clock, 
  Calculator, 
  BarChart3, 
  DollarSign,
  CheckCircle 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">Restometry</h1>
              <span className="ml-2 text-sm text-slate-600 bg-blue-100 px-2 py-1 rounded-full">Phase 1</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Stop Overstaffing.<br />
            <span className="text-blue-600">Start Saving.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Restometry helps restaurant owners track the #1 KPI that matters: <strong>labor cost as % of sales</strong>. 
            Get immediate benefits with smart scheduling that prevents costly overstaffing.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
              Get Started Today
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-medium text-lg">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-slate-600">Target Labor Cost Threshold</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">5min</div>
              <div className="text-slate-600">Daily Setup Time</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">Instant</div>
              <div className="text-slate-600">Overstaffing Alerts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Phase 1 Features - Everything You Need to Start</h3>
            <p className="text-xl text-slate-600">Five essential tools that deliver immediate benefits and prevent costly overstaffing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Smart Scheduling */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Smart Scheduling (Basic Version)</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Create shifts manually by role (waiter, cook, barista) with time-in/time-out. 
                The system suggests recommended staff count per hour based on historical sales and warns when labor costs exceed thresholds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Manual shift creation by role
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Staff count recommendations based on sales history
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Labor cost threshold warnings
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Why:</strong> Immediate benefit—saves time and prevents costly overstaffing.
                </p>
              </div>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Attendance Tracking (Basic)</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Manual attendance log with time-in/time-out tracking, overtime hours calculation, 
                and exportable reports for payroll reference.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Manual time-in/time-out logging
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Overtime hours calculation
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Exportable payroll reports
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Why:</strong> Connects schedule planning to real-life attendance and costs.
                </p>
              </div>
            </div>

            {/* Labor Cost Calculator */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Labor Cost Calculator</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Simple dashboard showing total labor cost for day/week, labor cost as % of sales, 
                and alerts if labor % exceeds target threshold (e.g. 30%).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Total labor cost (daily/weekly)
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Labor cost as % of sales
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Alert if exceeding target threshold
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Why:</strong> The #1 KPI restaurant owners care about is labor % vs sales.
                </p>
              </div>
            </div>

            {/* Simple Dashboard */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Simple Dashboard Home</h4>
              </div>
              <p className="text-slate-600 mb-6">
                High-level summary with today&apos;s sales (from imported POS data), today&apos;s scheduled labor cost, 
                labor % vs sales, and notifications (e.g. &ldquo;Tomorrow looks under-staffed&rdquo;).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Today&apos;s sales from POS data
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Today&apos;s scheduled labor cost
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Labor % vs sales overview
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Smart notifications and alerts
                </li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Why:</strong> Restaurant owners want a quick snapshot, not endless screens.
                </p>
              </div>
            </div>
          </div>

          {/* Daily Sales Entry */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Daily Sales Entry &amp; Update</h4>
            </div>
            <p className="text-slate-600 mb-6">
              Manually post daily sales figures, edit/update sales for any previous day, 
              with validation to prevent duplicate entries. Changes reflected instantly in dashboards and labor calculations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Manual daily sales posting
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Edit/update any previous day
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Validation prevents duplicates
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Instant dashboard updates
                </li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-teal-50 rounded-lg">
              <p className="text-sm text-teal-800">
                <strong>Why:</strong> Enables accurate tracking even if POS data import is unavailable or delayed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Track Your #1 KPI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join restaurant owners who are preventing costly overstaffing and monitoring labor % vs sales with Restometry.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold mb-4">Restometry</h4>
              <p className="text-slate-400 mb-4">
                Smart labor management for restaurants. Optimize costs, improve efficiency, 
                and focus on what matters most - your customers.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-slate-400">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Restometry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

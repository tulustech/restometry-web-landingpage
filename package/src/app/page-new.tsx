import { 
  Calendar, 
  Clock, 
  Calculator, 
  BarChart3, 
  DollarSign,
  Users,
  TrendingUp,
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
            Smart Labor Management<br />
            <span className="text-blue-600">for Restaurants</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Optimize your restaurant's labor costs with intelligent scheduling, real-time tracking, 
            and actionable insights that help you maintain profitability while ensuring adequate staffing.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
              Start Free Trial
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-medium text-lg">
              Watch Demo
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
              <div className="text-slate-600">Average Labor Cost Reduction</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">5hrs</div>
              <div className="text-slate-600">Time Saved Per Week</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Schedule Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Phase 1 Features</h3>
            <p className="text-xl text-slate-600">Essential tools to get started with labor optimization</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Smart Scheduling */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Smart Scheduling</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Create shifts manually with intelligent recommendations based on historical sales data. 
                Get warnings when labor costs exceed your target thresholds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Role-based shift creation
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  AI-powered staff recommendations
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Labor cost threshold alerts
                </li>
              </ul>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Attendance Tracking</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Track actual attendance with time-in/time-out logs, monitor overtime hours, 
                and generate exportable reports for payroll processing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Manual attendance logging
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Overtime hour tracking
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Exportable payroll reports
                </li>
              </ul>
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
                Monitor your most important KPI - labor cost as a percentage of sales. 
                Get instant alerts when you exceed your target threshold.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Daily/weekly labor cost totals
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Labor % vs sales tracking
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Customizable threshold alerts
                </li>
              </ul>
            </div>

            {/* Simple Dashboard */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Simple Dashboard</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Get a quick snapshot of your restaurant's performance with today's sales, 
                scheduled labor costs, and important notifications in one view.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  High-level daily summary
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Sales vs labor cost overview
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Smart notifications
                </li>
              </ul>
            </div>
          </div>

          {/* Daily Sales Entry */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Daily Sales Entry & Update</h4>
            </div>
            <p className="text-slate-600 mb-6">
              Manually enter and update daily sales figures to ensure accurate labor cost calculations, 
              even when POS data integration isn't available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Manual daily sales posting
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Edit historical sales data
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Duplicate entry prevention
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Real-time dashboard updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Labor Costs?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join restaurant owners who are already saving 30% on labor costs with Restometry.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg">
            Start Your Free Trial
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

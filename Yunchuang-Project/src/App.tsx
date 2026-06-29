import { useState, useEffect } from 'react';
import {
  Package,
  Clock,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  ChevronDown,
  Star,
  Shield,
  TrendingUp,
  Calendar,
  DollarSign,
  Laptop,
  GraduationCap,
  HeartHandshake,
  Menu,
  X,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LINE_ID = '@yourlineid'; // Replace with actual LINE ID

  const openLine = () => {
    window.open(`https://line.me/ti/p/~${LINE_ID}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Yunchuang</span>
                <span className="hidden sm:inline text-sm text-gray-500 ml-1">Trading</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                ค่าตอบแทน
              </a>
              <a href="#requirements" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                คุณสมบัติ
              </a>
              <a href="#workflow" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                หน้าที่งาน
              </a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                คำถาม-คำตอบ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={openLine}
                className="px-6 py-2.5 bg-[#00B900] text-white font-semibold rounded-full hover:bg-[#009900] transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ติดต่อ LINE
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#benefits" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">
              ค่าตอบแทน
            </a>
            <a href="#requirements" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">
              คุณสมบัติ
            </a>
            <a href="#workflow" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">
              หน้าที่งาน
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">
              คำถาม-คำตอบ
            </a>
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={openLine}
                className="w-full py-3 bg-[#00B900] text-white font-semibold rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ติดต่อ LINE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-emerald-500" />
              <span>รับสมัครงานพาร์ทไทม์ · จัดการคำสั่งซื้อสินค้าประเทศไทย</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              รับสมัคร<span className="text-emerald-600">ผู้จัดการร้านค้า</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600">บริษัท Yunchuang Warehouse Trading</span>
            </h1>

            {/* Salary Highlight */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6 sm:p-8 mb-8 inline-block shadow-xl">
              <div className="text-lg sm:text-xl opacity-90 mb-2">รายได้ต่อวัน</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                1,000 - 7,000
                <span className="text-2xl sm:text-3xl ml-2">บาท/วัน</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              ไม่ต้องมีประสบการณ์ ฝึกอบรมฟรี ทำงานที่บ้านได้ง่ายๆ
              <br />
              เวลายืดหยุ่น เลือกรับเงินรายวัน/รายสัปดาห์/รายเดือนได้
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={openLine}
                className="group px-8 py-4 bg-[#00B900] text-white font-semibold rounded-2xl hover:bg-[#009900] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">ติดต่อเราผ่าน LINE</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span>บริษัทที่ไว้วางใจได้</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <span>ฝึกอบรมฟรี</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <DollarSign className="w-5 h-5 text-amber-500" />
                <span>จ่ายรายวัน</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">อายุที่รับ</h3>
              <p className="text-gray-600 text-sm">22-55 ปี</p>
              <p className="text-emerald-600 text-xs mt-1">ใช้คอมพิวเตอร์/โทรศัพท์เก่ง รับถึง 65 ปี</p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">รายได้</h3>
              <p className="text-gray-600 text-sm">1,000-7,000 บาท/วัน</p>
              <p className="text-emerald-600 text-xs mt-1">คำนวณตามปริมาณงาน</p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">เวลาทำงาน</h3>
              <p className="text-gray-600 text-sm">2-3 ชั่วโมง/วัน</p>
              <p className="text-emerald-600 text-xs mt-1">นัดเวลาอิสระ</p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">อุปกรณ์</h3>
              <p className="text-gray-600 text-sm">โทรศัพท์หรือคอมพิวเตอร์</p>
              <p className="text-emerald-600 text-xs mt-1">ทำงานที่บ้านได้</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              ค่าตอบแทน
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              สวัสดิการ<span className="text-emerald-600">ดีเยี่ยม</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เลือกรูปแบบการรับเงินได้หลายแบบตามความต้องการของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Daily Settlement */}
            <div className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Calendar className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">รับเงินรายวัน</h3>
              <p className="opacity-90 leading-relaxed">
                ทำงานเสร็จแล้วรับเงินได้ทันทีในวันเดียวกัน ให้คุณมีรายได้ทุกวัน
              </p>
              <div className="mt-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>เลือกที่ยืดหยุ่นที่สุด</span>
              </div>
            </div>

            {/* Weekly Settlement */}
            <div className="group relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <TrendingUp className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">รับเงินรายสัปดาห์</h3>
              <p className="opacity-90 leading-relaxed">
                รับเงินทุกสัปดาห์ เหมาะสำหรับการวางแผนงานพาร์ทไทม์ที่สม่ำเสมอ
              </p>
              <div className="mt-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>รายได้คงที่</span>
              </div>
            </div>

            {/* Monthly Settlement */}
            <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Award className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">รับเงินรายเดือน</h3>
              <p className="opacity-90 leading-relaxed">
                รับเงินรวมทุกสิ้นเดือน เหมาะสำหรับการออมหรือใช้จ่ายก้อนใหญ่
              </p>
              <div className="mt-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>รายได้ก้อนใหญ่</span>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">สวัสดิการเพิ่มเติม</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-gray-700">ฝึกอบรมฟรี</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">ทำงานที่บ้านได้</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-gray-700">เวลาอิสระ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-gray-700">ไม่ต้องมีประสบการณ์</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              คุณสมบัติ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              สมัครง่าย <span className="text-emerald-600">เข้าทำงานได้เลย</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Age Requirement */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">อายุ</h3>
                  <p className="text-gray-600 mb-3">22 - 55 ปี</p>
                  <div className="bg-emerald-50 rounded-lg p-3 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    ใช้คอมพิวเตอร์หรือโทรศัพท์เก่ง รับถึง 65 ปี
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment Requirement */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">อุปกรณ์</h3>
                  <p className="text-gray-600 mb-3">ใช้โทรศัพท์หรือคอมพิวเตอร์ได้คล่อง</p>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-700">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    สมาร์ทโฟนหรือคอมพิวเตอร์ ทำงานที่บ้านได้
                  </div>
                </div>
              </div>
            </div>

            {/* Time Requirement */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">เวลา</h3>
                  <p className="text-gray-600 mb-3">มีเวลาว่าง 2-3 ชั่วโมง/วัน</p>
                  <div className="bg-amber-50 rounded-lg p-3 text-sm text-amber-700">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    นัดเวลาอิสระ ไม่กระทบงานอื่น
                  </div>
                </div>
              </div>
            </div>

            {/* Attitude Requirement */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">เจตคติ</h3>
                  <p className="text-gray-600 mb-3">มีความรับผิดชอบ ทำงานละเอียด</p>
                  <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-700">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    ไม่ต้องมีประสบการณ์ มีฝึกอบรมฟรี
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              หน้าที่งาน
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              งานง่าย <span className="text-emerald-600">ทำได้ทุกคน</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ฝึกอบรมฟรีตลอด ผู้ที่ไม่มีพื้นฐานก็เรียนรู้ได้เร็ว
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Task 1 */}
            <div className="group bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-emerald-200">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ลงทะเบียนสินค้าเข้าคลัง</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                บันทึกข้อมูลสินค้าที่มาใหม่ รวมถึงชื่อ จำนวน ขนาด เพื่อให้ข้อมูลถูกต้อง
              </p>
            </div>

            {/* Task 2 */}
            <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">จัดการสต็อกสินค้า</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ติดตามสถานะสต็อกสินค้า อัปเดตจำนวนสินค้าแบบเรียลไทม์
              </p>
            </div>

            {/* Task 3 */}
            <div className="group bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-teal-200">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">บันทึกข้อมูลสินค้า</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                กรอกข้อมูลสินค้าในระบบ รวมถึงรูปภาพ คำอธิบาย ราคา
              </p>
            </div>

            {/* Task 4 */}
            <div className="group bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-amber-200">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">จัดอันดับสินค้า</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                เผยแพร่สินค้าบนแพลตฟอร์มอีคอมเมิร์ซ เพิ่มยอดขายและการมองเห็น
              </p>
            </div>

            {/* Task 5 */}
            <div className="group bg-gradient-to-br from-gray-50 to-rose-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-rose-200">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ประมวลผลคำสั่งซื้อ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                จัดการคำสั่งซื้อของลูกค้า ตรวจสอบข้อมูล จัดส่ง และติดตามการขนส่ง
              </p>
            </div>

            {/* Task 6 */}
            <div className="group bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-indigo-200">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">จัดหมวดหมู่สินค้า</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                จัดหมวดหมู่สินค้าและแท็ก เพื่อให้ลูกค้าค้นหาและเรียกดูได้ง่าย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              คำถาม-คำตอบ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ยังสงสัย? <span className="text-emerald-600">ดูที่นี่</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'ไม่มีประสบการณ์ สมัครได้ไหม?',
                a: 'ได้แน่นอน! เรามีการฝึกอบรมฟรีก่อนเริ่มงาน ง่ายต่อการเรียนรู้ คนที่ไม่เคยทำมาก่อนก็ทำได้ ขอแค่คุณพร้อมเรียนรู้ เราจะสอนอย่างอดทน',
              },
              {
                q: 'อายุเกิน 55 ปี สมัครได้ไหม?',
                a: 'ถ้าคุณใช้โทรศัพท์หรือคอมพิวเตอร์ได้คล่อง รับถึง 65 ปี เราดูความสามารถและความรับผิดชอบ ไม่ใช่อายุ',
              },
              {
                q: 'ต้องทำงานกี่ชั่วโมงต่อวัน?',
                a: 'ต้องมีเวลาว่างอย่างน้อย 2-3 ชั่วโมง/วัน สามารถนัดเวลาได้อิสระ ไม่กระทบงานหรือการเรียนอื่นๆ ของคุณ',
              },
              {
                q: 'คำนวณค่าจ้างอย่างไร?',
                a: 'ค่าจ้างคำนวณตามปริมาณงาน 1,000-7,000 บาท/วัน ทำยิ่งมาก ยิ่งได้มาก สามารถเลือกรับรายวัน รายสัปดาห์ หรือรายเดือนได้',
              },
              {
                q: 'ต้องเตรียมอุปกรณ์เองไหม?',
                a: 'ใช่ คุณต้องมีสมาร์ทโฟนหรือคอมพิวเตอร์ที่เชื่อมต่ออินเทอร์เน็ตได้ ทำงานได้จากทุกที่ ที่บ้านก็สะดวก',
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            สนใจติดต่อเราเลยตอนนี้
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            ติดต่อเราผ่าน LINE และส่งสิ่งที่คุณอยากรู้
            <br />
            ทีมงานของเราพร้อมตอบทุกคำถาม
          </p>

          <button
            onClick={openLine}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00B900] text-white font-bold text-xl rounded-2xl hover:bg-[#009900] transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="w-8 h-8" />
            คุยกับเราผ่าน LINE
          </button>

          <p className="mt-8 opacity-80 text-sm">
            เรารับอายุขั้นต่ำ 22 ปี รอคุณอยู่!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold">Yunchuang Warehouse Trading</span>
                <p className="text-sm text-gray-400">ผู้เชี่ยวชาญด้านการจัดการคำสั่งซื้อสินค้าประเทศไทย</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                เกี่ยวกับเรา
              </a>
              <a href="#" className="hover:text-white transition-colors">
                ติดต่อ
              </a>
              <a href="#" className="hover:text-white transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
            </div>

            <button
              onClick={openLine}
              className="flex items-center gap-2 px-6 py-2 bg-[#00B900] rounded-full hover:bg-[#009900] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              ติดต่อ LINE
            </button>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            2024 Yunchuang Warehouse Trading - สงวนลิขสิทธิ์
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

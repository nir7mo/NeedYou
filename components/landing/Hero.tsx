import Button from '../shared/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          NeedYou
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          منصة ذكية تساعدك على إنشاء سيرة ذاتية احترافية مخصصة لكل وظيفة
          وتحليل فرصك في القبول باستخدام الذكاء الاصطناعي.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            ابدأ الآن
          </Button>
          <Button variant="outline" size="lg">
            تعرف المزيد
          </Button>
        </div>
      </div>
    </section>
  );
}
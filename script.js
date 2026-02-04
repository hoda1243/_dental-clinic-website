document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.getElementById('html-root');
    
    const translations = {
        en: {
            'topbar.phone': '+1 (234) 567-8900',
            'topbar.hours': 'Mon-Fri: 9AM-7PM, Sat: 10AM-4PM',
            'header.tagline': 'Dental Excellence',
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.services': 'Services',
            'nav.contact': 'Contact',
            'nav.appointment': 'Book Appointment',
            'nav.emergency': 'Emergency Care',
            'home.heroTitle': 'Your Smile Deserves The Best Care',
            'home.heroText': 'Experience modern dentistry with a gentle touch. Our team of specialists is committed to providing you with the highest quality dental care in a comfortable environment.',
            'home.bookNow': 'Book Appointment',
            'home.ourServices': 'Our Services',
            'home.whyChoose': 'Why Choose SmileCare?',
            'home.feature1Title': 'Expert Dentists',
            'home.feature1Desc': 'Our team consists of highly qualified dental professionals with years of experience.',
            'home.feature2Title': 'Modern Technology',
            'home.feature2Desc': 'We use the latest dental equipment and techniques for precise treatments.',
            'home.feature3Title': 'Gentle Care',
            'home.feature3Desc': 'We prioritize your comfort with pain-free treatments and a relaxing atmosphere.',
            'home.feature4Title': 'Easy Scheduling',
            'home.feature4Desc': 'Flexible appointment times including evenings and weekends for your convenience.',
            'home.ourServicesTitle': 'Our Dental Services',
            'home.service1Title': 'General Dentistry',
            'home.service1Desc': 'Regular checkups, cleanings, fillings, and preventive care for all ages.',
            'home.service2Title': 'Cosmetic Dentistry',
            'home.service2Desc': 'Teeth whitening, veneers, and smile makeovers to enhance your appearance.',
            'home.service3Title': 'Orthodontics',
            'home.service3Desc': 'Braces and aligners for teeth straightening and bite correction.',
            'home.service4Title': 'Dental Implants',
            'home.service4Desc': 'Permanent tooth replacement solutions that look and feel natural.',
            'home.learnMore': 'Learn More',
            'home.viewAllServices': 'View All Services',
            'home.emergencyTitle': 'Dental Emergency?',
            'home.emergencyText': 'We\'re here for you when you need urgent dental care. Our emergency services are available during and after business hours.',
            'home.emergencyCall': 'Emergency Call:',
            'home.callNow': 'Call Now',
            'home.testimonialsTitle': 'What Our Patients Say',
            'home.testimonial1': '"The team at SmileCare made me feel comfortable from the moment I walked in. My dental implants look amazing!"',
            'home.patient1': 'Sarah Johnson',
            'home.treatment1': 'Dental Implants',
            'home.testimonial2': '"I used to dread dentist visits, but Dr. Miller and her team are so gentle and caring. Highly recommended!"',
            'home.patient2': 'Michael Chen',
            'home.treatment2': 'General Dentistry',
            'home.testimonial3': '"My Invisalign treatment was seamless. The results are beyond my expectations. Thank you SmileCare!"',
            'home.patient3': 'Emily Rodriguez',
            'home.treatment3': 'Invisalign',
            'footer.tagline': 'Your Partner in Dental Health',
            'footer.description': 'We provide comprehensive dental care with a focus on patient comfort and the latest treatment technologies.',
            'footer.quickLinks': 'Quick Links',
            'footer.ourServices': 'Our Services',
            'footer.contactInfo': 'Contact Info',
            'footer.address': '123 Health Street, Dental City, DC 10001',
            'footer.phone': '+1 (234) 567-8900',
            'footer.hours': 'Mon-Fri: 9AM-7PM, Sat: 10AM-4PM',
            'footer.privacy': 'Privacy Policy',
            'footer.rights': 'All rights reserved.',
            'about.pageTitle': 'About SmileCare Dental Clinic',
            'about.pageSubtitle': 'Committed to excellence in dental care since 2010',
            'about.ourStory': 'Our Story',
            'about.story1': 'Founded in 2010 by Dr. James Miller, SmileCare Dental Clinic began with a simple vision: to provide exceptional dental care in a warm, welcoming environment where patients feel like family.',
            'about.story2': 'Over the past decade, we\'ve grown into a comprehensive dental practice serving thousands of patients, but we\'ve never lost sight of our founding principles. We believe that everyone deserves a healthy, beautiful smile.',
            'about.story3': 'Today, under the leadership of Dr. Sarah Johnson, we continue to innovate while maintaining our commitment to personalized, compassionate care.',
            'about.missionTitle': 'Our Mission',
            'about.missionText': 'To provide exceptional, comprehensive dental care through advanced technology, continuous education, and a patient-centered approach that prioritizes comfort and health.',
            'about.visionTitle': 'Our Vision',
            'about.visionText': 'To be the leading dental clinic in our community, recognized for excellence in patient care, innovation in dentistry, and commitment to improving oral health for all.',
            'about.ourTeam': 'Meet Our Dental Team',
            'about.doctor1': 'Dr. Sarah Johnson',
            'about.specialty1': 'General & Cosmetic Dentistry',
            'about.bio1': 'With over 15 years of experience, Dr. Johnson specializes in cosmetic dentistry and smile makeovers.',
            'about.doctor2': 'Dr. Michael Chen',
            'about.specialty2': 'Orthodontics & Dental Implants',
            'about.bio2': 'Dr. Chen is a leading expert in orthodontics and implantology with 12 years of specialized practice.',
            'about.doctor3': 'Dr. Emily Rodriguez',
            'about.specialty3': 'Pediatric & Family Dentistry',
            'about.bio3': 'Dr. Rodriguez has a special passion for treating children and making dental visits fun and stress-free.',
            'about.technology': 'Advanced Dental Technology',
            'about.tech1Title': 'Digital X-Rays',
            'about.tech1Desc': 'Reduced radiation exposure and instant imaging for accurate diagnosis.',
            'about.tech2Title': 'Intraoral Cameras',
            'about.tech2Desc': 'High-resolution imaging that allows you to see exactly what we see.',
            'about.tech3Title': 'CAD/CAM Technology',
            'about.tech3Desc': 'Same-day crowns and restorations with precision digital design.',
            'about.tech4Title': 'Dental Microscopes',
            'about.tech4Desc': 'Enhanced visualization for precision during complex procedures.',
            'services.pageTitle': 'Our Dental Services',
            'services.pageSubtitle': 'Comprehensive dental care for your entire family',
            'services.navGeneral': 'General Dentistry',
            'services.navCosmetic': 'Cosmetic Dentistry',
            'services.navOrtho': 'Orthodontics',
            'services.navImplants': 'Dental Implants',
            'services.navEmergency': 'Emergency Care',
            'services.generalTitle': 'General Dentistry',
            'services.generalDesc': 'Our general dentistry services focus on maintaining your oral health through preventive care and treatment of common dental issues. We believe prevention is the key to a healthy smile.',
            'services.procedures': 'Procedures Include:',
            'services.general1': 'Comprehensive dental exams',
            'services.general2': 'Professional teeth cleaning',
            'services.general3': 'Dental fillings',
            'services.general4': 'Root canal therapy',
            'services.general5': 'Periodontal (gum) treatment',
            'services.general6': 'Dental crowns and bridges',
            'services.general7': 'Oral cancer screenings',
            'services.bookConsultation': 'Book a Consultation',
            'services.cosmeticTitle': 'Cosmetic Dentistry',
            'services.cosmeticDesc': 'Transform your smile with our cosmetic dentistry services. We offer a range of treatments to improve the appearance of your teeth, giving you the confidence to show off your smile.',
            'services.cosmetic1': 'Teeth whitening',
            'services.cosmetic2': 'Porcelain veneers',
            'services.cosmetic3': 'Dental bonding',
            'services.cosmetic4': 'Invisalign clear aligners',
            'services.cosmetic5': 'Gum contouring',
            'services.cosmetic6': 'Smile makeovers',
            'services.cosmetic7': 'Dental contouring',
            'services.orthoTitle': 'Orthodontics',
            'services.orthoDesc': 'Straighten your teeth and correct your bite with our orthodontic treatments. We offer traditional braces and modern clear aligners to suit your lifestyle and aesthetic preferences.',
            'services.ortho1': 'Traditional metal braces',
            'services.ortho2': 'Ceramic braces',
            'services.ortho3': 'Invisalign clear aligners',
            'services.ortho4': 'Retainers',
            'services.ortho5': 'Space maintainers',
            'services.ortho6': 'Palatal expanders',
            'services.ortho7': 'Early orthodontic treatment',
            'services.implantsTitle': 'Dental Implants',
            'services.implantsDesc': 'Replace missing teeth with permanent, natural-looking dental implants. Our implant solutions restore both function and aesthetics, giving you back your confident smile.',
            'services.implant1': 'Single tooth implants',
            'services.implant2': 'Implant-supported bridges',
            'services.implant3': 'All-on-4 dental implants',
            'services.implant4': 'Bone grafting',
            'services.implant5': 'Sinus lifts',
            'services.implant6': 'Implant crowns',
            'services.implant7': 'Full mouth reconstruction',
            'services.emergencyTitle': 'Emergency Dental Care',
            'services.emergencyDesc': 'Dental emergencies can happen at any time. We provide prompt, effective treatment for urgent dental issues to alleviate pain and prevent further complications.',
            'services.emergencyServices': 'Emergency Services Include:',
            'services.emergency1': 'Toothache relief',
            'services.emergency2': 'Knocked-out teeth',
            'services.emergency3': 'Broken or chipped teeth',
            'services.emergency4': 'Lost fillings or crowns',
            'services.emergency5': 'Dental abscess treatment',
            'services.emergency6': 'Broken braces or wires',
            'services.emergency7': 'Soft tissue injuries',
            'services.emergencyContact': 'Emergency Contact',
            'services.emergencyPhone': 'Emergency Line:',
            'services.emergencyHours': 'Available 24/7 for dental emergencies',
            'services.callNow': 'Call Now',
            'services.insuranceTitle': 'Dental Insurance & Financing',
            'services.insuranceDesc': 'We accept most major dental insurance plans and offer flexible financing options to make quality dental care accessible for everyone.',
            'services.verifyInsurance': 'Verify Your Insurance',
            'contact.pageTitle': 'Contact SmileCare Dental Clinic',
            'contact.pageSubtitle': 'We\'re here to answer your questions and schedule your appointment',
            'contact.getInTouch': 'Get in Touch',
            'contact.infoText': 'Our friendly team is ready to assist you with appointment scheduling, treatment inquiries, or any questions about our services.',
            'contact.visitUs': 'Visit Our Clinic',
            'contact.address': '123 Health Street, Dental City, DC 10001',
            'contact.callUs': 'Call Us',
            'contact.emergency': 'Emergency:',
            'contact.emailUs': 'Email Us',
            'contact.hours': 'Opening Hours',
            'contact.weekdays': 'Monday - Friday:',
            'contact.saturday': 'Saturday:',
            'contact.sunday': 'Sunday:',
            'contact.closed': 'Closed',
            'contact.emergencyHours': 'Emergency services available 24/7',
            'contact.followUs': 'Follow Us',
            'contact.bookAppointment': 'Book an Appointment',
            'contact.formDesc': 'Fill out the form below and we\'ll contact you to schedule your visit.',
            'contact.name': 'Full Name *',
            'contact.phone': 'Phone Number *',
            'contact.email': 'Email Address *',
            'contact.dob': 'Date of Birth',
            'contact.service': 'Service Interested In',
            'contact.selectService': 'Select a service',
            'contact.consultation': 'Consultation',
            'contact.preferredDate': 'Preferred Date',
            'contact.preferredTime': 'Preferred Time',
            'contact.selectTime': 'Select time',
            'contact.morning': 'Morning (9AM-12PM)',
            'contact.afternoon': 'Afternoon (12PM-4PM)',
            'contact.evening': 'Evening (4PM-7PM)',
            'contact.message': 'Message / Additional Notes',
            'contact.insurance': 'I have dental insurance',
            'contact.newPatient': 'I am a new patient',
            'contact.submitRequest': 'Submit Appointment Request',
            'contact.findUs': 'Find Our Clinic',
            'contact.clinicLocation': 'SmileCare Dental Clinic',
            'contact.getDirections': 'Get Directions',
            'contact.faqTitle': 'Frequently Asked Questions',
            'contact.faq1Question': 'How do I schedule an appointment?',
            'contact.faq1Answer': 'You can schedule an appointment by calling us at +1 (234) 567-8900, using the online form, or visiting our clinic during business hours.',
            'contact.faq2Question': 'What should I bring to my first appointment?',
            'contact.faq2Answer': 'Please bring your ID, insurance card (if applicable), list of medications, and any previous dental records or X-rays.',
            'contact.faq3Question': 'Do you accept dental insurance?',
            'contact.faq3Answer': 'Yes, we accept most major dental insurance plans. Please contact us to verify your coverage before your appointment.',
            'contact.faq4Question': 'What if I have a dental emergency after hours?',
            'contact.faq4Answer': 'Call our emergency line at +1 (234) 567-8910. Our on-call dentist is available 24/7 for urgent dental issues.'
        },
        ar: {
            'topbar.phone': '+1 (234) 567-8900',
            'topbar.hours': 'الإثنين-الجمعة: 9 صباحًا-7 مساءً، السبت: 10 صباحًا-4 مساءً',
            'header.tagline': 'التميز في طب الأسنان',
            'nav.home': 'الرئيسية',
            'nav.about': 'من نحن',
            'nav.services': 'الخدمات',
            'nav.contact': 'اتصل بنا',
            'nav.appointment': 'احجز موعد',
            'nav.emergency': 'الرعاية الطارئة',
            'home.heroTitle': 'ابتسامتك تستحق أفضل رعاية',
            'home.heroText': 'جرب طب الأسنان الحديث بلمسة لطيفة. فريقنا من المتخصصين ملتزم بتقديم أعلى جودة من العناية بالأسنان في بيئة مريحة.',
            'home.bookNow': 'احجز موعد',
            'home.ourServices': 'خدماتنا',
            'home.whyChoose': 'لماذا تختار سمايل كير؟',
            'home.feature1Title': 'أطباء أسنان خبراء',
            'home.feature1Desc': 'يتكون فريقنا من محترفين مؤهلين تأهيلاً عالياً في طب الأسنان مع سنوات من الخبرة.',
            'home.feature2Title': 'تكنولوجيا حديثة',
            'home.feature2Desc': 'نستخدم أحدث معدات وتقنيات طب الأسنان للعلاجات الدقيقة.',
            'home.feature3Title': 'رعاية لطيفة',
            'home.feature3Desc': 'نولي أولوية لراحتك مع علاجات خالية من الألم وجو مريح.',
            'home.feature4Title': 'جدولة سهلة',
            'home.feature4Desc': 'أوقات مواعيد مرنة تشمل المساءات وعطلات نهاية الأسبوع لراحتك.',
            'home.ourServicesTitle': 'خدماتنا في طب الأسنان',
            'home.service1Title': 'طب الأسنان العام',
            'home.service1Desc': 'فحوصات منتظمة، تنظيف، حشوات، ورعاية وقائية لجميع الأعمار.',
            'home.service2Title': 'طب الأسنان التجميلي',
            'home.service2Desc': 'تبييض الأسنان، القشور الخزفية، وتجديد الابتسامة لتعزيز مظهرك.',
            'home.service3Title': 'تقويم الأسنان',
            'home.service3Desc': 'تقويم الأسنان والمحاذيات الشفافة لتصحيح إطباق الأسنان.',
            'home.service4Title': 'زراعة الأسنان',
            'home.service4Desc': 'حلول استبدال الأسنان الدائمة التي تبدو وتشعر طبيعية.',
            'home.learnMore': 'اعرف المزيد',
            'home.viewAllServices': 'عرض جميع الخدمات',
            'home.emergencyTitle': 'طوارئ الأسنان؟',
            'home.emergencyText': 'نحن هنا من أجلك عندما تحتاج إلى رعاية أسنان طارئة. خدماتنا الطارئة متاحة خلال وبعد ساعات العمل.',
            'home.emergencyCall': 'الاتصال في حالات الطوارئ:',
            'home.callNow': 'اتصل الآن',
            'home.testimonialsTitle': 'ما يقوله مرضانا',
            'home.testimonial1': '"جعلني فريق سمايل كير أشعر بالراحة من اللحظة التي دخلت فيها. تبدو زراعات أسناني مذهلة!"',
            'home.patient1': 'سارة جونسون',
            'home.treatment1': 'زراعة الأسنان',
            'home.testimonial2': '"كنت أخاف من زيارة طبيب الأسنان، لكن الدكتورة ميلر وفريقها لطيفون ومهتمون. موصى به بشدة!"',
            'home.patient2': 'مايكل تشين',
            'home.treatment2': 'طب الأسنان العام',
            'home.testimonial3': '"كان علاج الإنفزلاين الخاص بي سلسًا. النتائج تتجاوز توقعاتي. شكرًا سمايل كير!"',
            'home.patient3': 'إيميلي رودريغيز',
            'home.treatment3': 'إنفزلاين',
            'footer.tagline': 'شريكك في صحة الأسنان',
            'footer.description': 'نقدم رعاية أسنان شاملة مع التركيز على راحة المريض وأحدث تقنيات العلاج.',
            'footer.quickLinks': 'روابط سريعة',
            'footer.ourServices': 'خدماتنا',
            'footer.contactInfo': 'معلومات الاتصال',
            'footer.address': 'شارع الصحة 123، مدينة الأسنان، دي سي 10001',
            'footer.phone': '+1 (234) 567-8900',
            'footer.hours': 'الإثنين-الجمعة: 9 صباحًا-7 مساءً، السبت: 10 صباحًا-4 مساءً',
            'footer.privacy': 'سياسة الخصوصية',
            'footer.rights': 'جميع الحقوق محفوظة.',
            'about.pageTitle': 'عن عيادة سمايل كير للأسنان',
            'about.pageSubtitle': 'ملتزمون بالتميز في رعاية الأسنان منذ 2010',
            'about.ourStory': 'قصتنا',
            'about.story1': 'تأسست عيادة سمايل كير للأسنان في عام 2010 على يد الدكتور جيمس ميلر، بدأت برؤية بسيطة: تقديم رعاية أسنان استثنائية في بيئة دافئة وترحيبية حيث يشعر المرضى كأنهم عائلة.',
            'about.story2': 'على مدى العقد الماضي، تطورنا إلى ممارسة أسنان شاملة تخدم آلاف المرضى، لكننا لم نفقد أبدًا بصيرة مبادئنا التأسيسية. نحن نؤمن بأن الجميع يستحق ابتسامة صحية وجميلة.',
            'about.story3': 'اليوم، تحت قيادة الدكتورة سارة جونسون، نواصل الابتكار مع الحفاظ على التزامنا بالرعاية المخصصة والشفوقة.',
            'about.missionTitle': 'مهمتنا',
            'about.missionText': 'توفير رعاية أسنان استثنائية وشاملة من خلال التكنولوجيا المتقدمة، التعليم المستمر، ونهج يركز على المريض يولي الأولوية للراحة والصحة.',
            'about.visionTitle': 'رؤيتنا',
            'about.visionText': 'أن نكون عيادة الأسنان الرائدة في مجتمعنا، معترف بنا للتميز في رعاية المرضى، الابتكار في طب الأسنان، والالتزام بتحسين صحة الفم للجميع.',
            'about.ourTeam': 'التق بفريق أسناننا',
            'about.doctor1': 'الدكتورة سارة جونسون',
            'about.specialty1': 'طب الأسنان العام والتجميلي',
            'about.bio1': 'مع أكثر من 15 عامًا من الخبرة، تتخصص الدكتورة جونسون في طب الأسنان التجميلي وتجديد الابتسامة.',
            'about.doctor2': 'الدكتور مايكل تشين',
            'about.specialty2': 'تقويم الأسنان وزراعة الأسنان',
            'about.bio2': 'الدكتور تشين خبير رائد في تقويم الأسنان وزراعة الأسنان مع 12 عامًا من الممارسة المتخصصة.',
            'about.doctor3': 'الدكتورة إيميلي رودريغيز',
            'about.specialty3': 'طب أسنان الأطفال والأسرة',
            'about.bio3': 'لدى الدكتورة رودريغيز شغف خاص لعلاج الأطفال وجعل زيارات طبيب الأسنان ممتعة وخالية من التوتر.',
            'about.technology': 'تكنولوجيا الأسنان المتقدمة',
            'about.tech1Title': 'الأشعة السينية الرقمية',
            'about.tech1Desc': 'تقليل التعرض للإشعاع والتصوير الفوري للتشخيص الدقيق.',
            'about.tech2Title': 'الكاميرات داخل الفم',
            'about.tech2Desc': 'تصوير عالي الدقة يسمح لك برؤية ما نراه بالضبط.',
            'about.tech3Title': 'تكنولوجيا CAD/CAM',
            'about.tech3Desc': 'تيجان وترميمات في نفس اليوم مع تصميم رقمي دقيق.',
            'about.tech4Title': 'مجاهر الأسنان',
            'about.tech4Desc': 'تصور معزز للدقة أثناء الإجراءات المعقدة.',
            'services.pageTitle': 'خدماتنا في طب الأسنان',
            'services.pageSubtitle': 'رعاية أسنان شاملة لعائلتك بأكملها',
            'services.navGeneral': 'طب الأسنان العام',
            'services.navCosmetic': 'طب الأسنان التجميلي',
            'services.navOrtho': 'تقويم الأسنان',
            'services.navImplants': 'زراعة الأسنان',
            'services.navEmergency': 'الرعاية الطارئة',
            'services.generalTitle': 'طب الأسنان العام',
            'services.generalDesc': 'تركز خدمات طب الأسنان العام لدينا على الحفاظ على صحة فمك من خلال الرعاية الوقائية وعلاج مشاكل الأسنان الشائعة. نؤمن أن الوقاية هي مفتاح الابتسامة الصحية.',
            'services.procedures': 'تشمل الإجراءات:',
            'services.general1': 'فحوصات أسنان شاملة',
            'services.general2': 'تنظيف أسنان احترافي',
            'services.general3': 'حشوات الأسنان',
            'services.general4': 'علاج قناة الجذر',
            'services.general5': 'علاج اللثة',
            'services.general6': 'تيجان وجسور الأسنان',
            'services.general7': 'فحوصات سرطان الفم',
            'services.bookConsultation': 'احجز استشارة',
            'services.cosmeticTitle': 'طب الأسنان التجميلي',
            'services.cosmeticDesc': 'حوّل ابتسامتك مع خدمات طب الأسنان التجميلي لدينا. نقدم مجموعة من العلاجات لتحسين مظهر أسنانك، مما يمنحك الثقة لعرض ابتسامتك.',
            'services.cosmetic1': 'تبييض الأسنان',
            'services.cosmetic2': 'القشور الخزفية',
            'services.cosmetic3': 'ربط الأسنان',
            'services.cosmetic4': 'محاذيات إنفزلاين الشفافة',
            'services.cosmetic5': 'تشكيل اللثة',
            'services.cosmetic6': 'تجديد الابتسامة',
            'services.cosmetic7': 'تشكيل الأسنان',
            'services.orthoTitle': 'تقويم الأسنان',
            'services.orthoDesc': 'قوم أسنانك وصحح إطباقك مع علاجات تقويم الأسنان لدينا. نقدم تقويم الأسنان التقليدي والمحاذيات الشفافة الحديثة لتناسب نمط حياتك وتفضيلاتك الجمالية.',
            'services.ortho1': 'تقويم الأسنان المعدني التقليدي',
            'services.ortho2': 'تقويم الأسنان السيراميك',
            'services.ortho3': 'محاذيات إنفزلاين الشفافة',
            'services.ortho4': 'مثبتات التقويم',
            'services.ortho5': 'حافظات المساحة',
            'services.ortho6': 'موسعات الحنك',
            'services.ortho7': 'علاج تقويم الأسنان المبكر',
            'services.implantsTitle': 'زراعة الأسنان',
            'services.implantsDesc': 'استبدل الأسنان المفقودة بزراعات أسنان دائمة وطبيعية المظهر. حلول الزراعة لدينا تعيد كلًا من الوظيفة والجماليات، مما يعيد لك ابتسامتك الواثقة.',
            'services.implant1': 'زرعات الأسنان الفردية',
            'services.implant2': 'جسور مدعومة بالزرعات',
            'services.implant3': 'زرعات الأسنان الشاملة',
            'services.implant4': 'ترقيع العظام',
            'services.implant5': 'رفع الجيوب الأنفية',
            'services.implant6': 'تيجان الزرعات',
            'services.implant7': 'إعادة بناء الفم بالكامل',
            'services.emergencyTitle': 'الرعاية الطارئة للأسنان',
            'services.emergencyDesc': 'يمكن أن تحدث حالات طوارئ الأسنان في أي وقت. نقدم علاجًا سريعًا وفعالًا لمشاكل الأسنان العاجلة لتخفيف الألم ومنع المزيد من المضاعفات.',
            'services.emergencyServices': 'تشمل خدمات الطوارئ:',
            'services.emergency1': 'تخفيف آلام الأسنان',
            'services.emergency2': 'الأسنان المخلوعة',
            'services.emergency3': 'الأسنان المكسورة أو المتشققة',
            'services.emergency4': 'الحشوات أو التيجان المفقودة',
            'services.emergency5': 'علاج خراج الأسنان',
            'services.emergency6': 'تقويم الأسنان أو الأسلاك المكسورة',
            'services.emergency7': 'إصابات الأنسجة الرخوة',
            'services.emergencyContact': 'الاتصال في حالات الطوارئ',
            'services.emergencyPhone': 'خط الطوارئ:',
            'services.emergencyHours': 'متاح على مدار 24/7 لحالات طوارئ الأسنان',
            'services.callNow': 'اتصل الآن',
            'services.insuranceTitle': 'تأمين الأسنان والتمويل',
            'services.insuranceDesc': 'نقبل معظم خطط تأمين الأسنان الرئيسية ونقدم خيارات تمويل مرنة لجعل رعاية الأسنان عالية الجودة في متناول الجميع.',
            'services.verifyInsurance': 'تحقق من تأمينك',
            'contact.pageTitle': 'اتصل بعيادة سمايل كير للأسنان',
            'contact.pageSubtitle': 'نحن هنا للإجابة على أسئلتك وجدولة موعدك',
            'contact.getInTouch': 'ابق على تواصل',
            'contact.infoText': 'فريقنا الودود جاهز لمساعدتك في جدولة المواعيد، استفسارات العلاج، أو أي أسئلة حول خدماتنا.',
            'contact.visitUs': 'زر عيادتنا',
            'contact.address': 'شارع الصحة 123، مدينة الأسنان، دي سي 10001',
            'contact.callUs': 'اتصل بنا',
            'contact.emergency': 'الطوارئ:',
            'contact.emailUs': 'راسلنا',
            'contact.hours': 'ساعات العمل',
            'contact.weekdays': 'الإثنين - الجمعة:',
            'contact.saturday': 'السبت:',
            'contact.sunday': 'الأحد:',
            'contact.closed': 'مغلق',
            'contact.emergencyHours': 'خدمات الطوارئ متاحة على مدار 24/7',
            'contact.followUs': 'تابعنا',
            'contact.bookAppointment': 'احجز موعد',
            'contact.formDesc': 'املأ النموذج أدناه وسنتصل بك لجدولة زيارتك.',
            'contact.name': 'الاسم الكامل *',
            'contact.phone': 'رقم الهاتف *',
            'contact.email': 'عنوان البريد الإلكتروني *',
            'contact.dob': 'تاريخ الميلاد',
            'contact.service': 'الخدمة المهتم بها',
            'contact.selectService': 'اختر خدمة',
            'contact.consultation': 'استشارة',
            'contact.preferredDate': 'التاريخ المفضل',
            'contact.preferredTime': 'الوقت المفضل',
            'contact.selectTime': 'اختر وقت',
            'contact.morning': 'الصباح (9 صباحًا-12 ظهرًا)',
            'contact.afternoon': 'بعد الظهر (12 ظهرًا-4 مساءً)',
            'contact.evening': 'المساء (4 مساءً-7 مساءً)',
            'contact.message': 'الرسالة / ملاحظات إضافية',
            'contact.insurance': 'لدي تأمين أسنان',
            'contact.newPatient': 'أنا مريض جديد',
            'contact.submitRequest': 'إرسال طلب الموعد',
            'contact.findUs': 'اعثر على عيادتنا',
            'contact.clinicLocation': 'عيادة سمايل كير للأسنان',
            'contact.getDirections': 'احصل على الاتجاهات',
            'contact.faqTitle': 'الأسئلة الشائعة',
            'contact.faq1Question': 'كيف يمكنني تحديد موعد؟',
            'contact.faq1Answer': 'يمكنك تحديد موعد بالاتصال بنا على +1 (234) 567-8900، أو باستخدام النموذج عبر الإنترنت، أو زيارة عيادتنا خلال ساعات العمل.',
            'contact.faq2Question': 'ماذا يجب أن أحضر إلى موعدي الأول؟',
            'contact.faq2Answer': 'يرجى إحضار هويتك، بطاقة التأمين (إذا كانت تنطبق)، قائمة الأدوية، وأي سجلات أسنان سابقة أو صور أشعة.',
            'contact.faq3Question': 'هل تقبلون تأمين الأسنان؟',
            'contact.faq3Answer': 'نعم، نقبل معظم خطط تأمين الأسنان الرئيسية. يرجى الاتصال بنا للتحقق من تغطيتك قبل موعدك.',
            'contact.faq4Question': 'ماذا لو كانت لدي حالة طوارئ أسنان بعد ساعات العمل؟',
            'contact.faq4Answer': 'اتصل بخط الطوارئ الخاص بنا على +1 (234) 567-8910. طبيب الأسنان المناوب متاح على مدار 24/7 لقضايا الأسنان العاجلة.'
        }
    };
    
    function changeLanguage(lang) {
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        langButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.getElementById(`lang-${lang}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        localStorage.setItem('preferred-language', lang);
    }
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id.split('-')[1];
            changeLanguage(lang);
        });
    });
    
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    changeLanguage(savedLang);
    
    const serviceNavItems = document.querySelectorAll('.service-nav-item');
    const serviceContents = document.querySelectorAll('.service-content');
    
    if (serviceNavItems.length > 0) {
        serviceNavItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const service = this.getAttribute('data-service');
                
                serviceNavItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                serviceContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === service) {
                        content.classList.add('active');
                    }
                });
                
                window.location.hash = service;
            });
        });
        
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetItem = document.querySelector(`.service-nav-item[data-service="${hash}"]`);
            const targetContent = document.getElementById(hash);
            
            if (targetItem && targetContent) {
                serviceNavItems.forEach(nav => nav.classList.remove('active'));
                serviceContents.forEach(content => content.classList.remove('active'));
                
                targetItem.classList.add('active');
                targetContent.classList.add('active');
            }
        }
    }
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            
            alert(`Thank you ${name}! Your appointment request has been submitted. We will call you at ${phone} to confirm your appointment.`);
            
            this.reset();
        });
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
        }
    });
});
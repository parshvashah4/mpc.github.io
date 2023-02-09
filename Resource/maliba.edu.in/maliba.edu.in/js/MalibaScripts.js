 function slideSwitch() {
     var $active = $('#slideshow IMG.active');
     if ($active.length == 0) $active = $('#slideshow IMG:last');
     var $next = $active.next().length ? $active.next() :
         $('#slideshow IMG:first');
     $active.addClass('last-active');
     $next.css({
             opacity: 0.0
         })
         .addClass('active')
         .animate({
             opacity: 1.0
         }, 1000, function() {
             $active.removeClass('active last-active');
         });
 }

 $(function() {
     setInterval("slideSwitch()", 5000);
 });

 var main_menu = [
     ['Home', 'index.html', []],
     ['About Us', '#', [

         ['Mission,Vision & Objective', 'MVO.html', []],
         ['Message', 'Messages.html', []],
         //['Mandatory Disclosure', 'Mandatory_Discloser.html', []],
         ['Mandatory Disclosure', 'download/document/Mandatory MPC.pdf', []],
         ['CODE OF ETHICS', 'CODEOFETHICS.html', []]
     ], ],

     ['Departments', 'departments.html', [
         ['Pharmaceutics', 'deptPharmaceutics.html', []],
         ['Pharmaceutical Chemistry', 'deptPC.html', []],
         ['Pharmacology', 'deptPharmacology.html', []],
         ['Pharmacognosy', 'deptPharmacognosy.html', []],
         ['Quality Assurance', 'deptQA.html', []]
     ], ],

     ['Programme', '#', [
         ['B. Pharm', 'http://utu.ac.in/CurriculumBPharm.html', []],
         ['M. Pharm', 'ProgrammeM.Pharm.html', []],
         ['Pharm.D', 'http://utu.ac.in/CurriculumPharmD.html', []],
         ['M. Pharm. (Pharmaceutical Chemistry)', 'M.Pharm Chemistry.html', []],
         ['Pharm.D (Post Baccalaureate)', 'Pharm.D (Post Baccalaureate).html', []],
         ['Ph.D', 'http://utu.ac.in/PhdPharmacy.html', []]
     ], ],

     ['Student Corner', 'StudentCorner.html', [
             //['Question Paper', 'QuestionPapers.html', []],
             ['Campus Life', 'CampusLife.html', []],
             ['Student Achievements', 'StudentAchievements.html', []],
             ['Placement', 'Placement.html', []],
             ['Useful Links', 'Links.html', []],
             ['LOR application', 'LOR.html', []]
         ],

         //['Student Information Hand Book', 'download/document/STUDENT Handbook 2013.pdf', []]],
         //	      ['B. Pharm', 'StudentCornerB.Pharm.html', []],
         //	      ['M.Pharm ', 'StudentCorner.html', []]],
     ],


     ['Staff', 'staff.html', []],
     ['News & Events', 'newsnevents.html', []],
     ['R&D', '#', [
         ['Projects', 'RnDC.html', []],
         ['Sophisticated Instrumentation Center', 'download/Sophisticated Instrumentation Centre.pdf', []],
         //['Sophisticated Instrumentation Center', 'http://utu.ac.in/download/NewsEvent/Sophisticated_instrumentation.pdf', []],
         //['Collaboration & MOUs', 'http://utu.ac.in/Industry.html', []],
         ['Faculty Achievement', 'FacultyAchievement.html', []],
         ['Journals', 'https://app.utu.ac.in/JPAS/', []],
         ['Publications', 'Publications.html', []],
         ['PhD Guided by faculty', 'download/PhD Guided by faculty.pdf', []],
         ['PG Dissertation Guided by faculty', 'download/PG Dissertation Guided by faculty.pdf', []],

     ], ],

     ['Circular', 'Circular.html', []],
     ['Alumni', 'alumni.html', []],
     ['Club', 'Club.html', []],
     ['Downloads', 'download.html', []]
 ];


 var SlideImages = [
     ['SlideShowImage/5.jpg', '', 4],
     ['SlideShowImage/4.jpg', '', 3],
     ['SlideShowImage/3.jpg', '', 2],
     ['SlideShowImage/2.jpg', '', 1],
     ['SlideShowImage/1.jpg', '', 0]
 ];

 var left_menu = [
     //['Pharm D admission', 'download/Pharm.D. admission norms..pdf'],
     //['SIF-D', 'download/SIF - D.pdf'],
     //	['SIF-B', 'download/SIF - B.pdf'],
     //	['PCI', 'http://www.pci.nic.in/'],
     ['Nirf Reports', 'NirfReport.html'],
     ['Committees', 'Committee.html'],
     ['Anti-ragging committee', 'download/Anti-ragging committee 2022-23.pdf'],
     ['Students Expression', 'studentsexpression.html'],
     ['Placement', 'Placement.html'],
     ['Scholarship', 'Scholorship.html', []],
     ['Academic Year Calendar', 'AcademicYearCalender.html', []],
     //['NewsLetter', 'NewsLatter.html', []],
     //	['Service Rule', 'ServiceRule.html', []],
     ['Herbs', 'Herbs/2017/Herbs.pdf', []],
     ['SIS', 'https://app.utu.ac.in/PharmaSIS/Login.aspx', []],
     ['Photo Gallery', 'PhotoGallery.html', ],
     ['Parents Feedback', 'ParentsFeedback.html', ],
     ['PCI Registration', 'https://dgpm.nic.in/1306/stud_registration.do', ],
     ['Free vaccination camp', 'Freecamp.html'],
     ['SIF', 'SIF.html', ],
     ['Anti-discrimination Cell 2022-23', 'download/Anti-discrimination Cell 2022-23.pdf'],
     ['Gender Sensitization Committee 22-23', 'download/Gender Sensitization Committee 2022-23.pdf'],
     ['Internal Complaint Committee (ICC) 2022-23', 'download/ICC internal complaint committee 22-23.pdf scanned.pdf'],
     ['Grievance Redressal Committee 2022-23', 'download/Grievance Redressal Committee 2022-23.pdf'],
     ['AICTE - EOA 1999 TO 22-23', 'download/AICTE EOA 1999 TO 22-23.pdf'],
     ['Library details', 'download/MPC-LIB_STATISTICAL_DATA-01072022.pdf']
     //    ['M.Pharm Admission 2013-15', 'download/document/M.Pharm Admission_2013.jpg']
 ];

 var left_rc = [
     //['Brochure', 'download/document/Ad Maliba Pharmacy College.jpg'],
     ['Brochure', 'download/Brochure, Maliba Pharmacy college 2020.pdf', []],
     ['B.Pharm  FAQ', 'http://utu.ac.in/FAQBPharm.html'],
     ['Pharm. D  FAQ', 'http://utu.ac.in/FAQPharmD.html'],
     ['M.Pharm  FAQ', 'http://utu.ac.in/FAQM.Pharm.html']
 ];

 var header_menu = [
     ['Web Mail', 'https://mail.google.com/a/utu.ac.in'],
     ['SIS', 'https://app.utu.ac.in/PharmaSIS/'],
     ['Site Map', 'SiteMap.html'],
     ['Contact Us', 'ContactUs.html'],
     ['Uka Tarsadia University', 'http://utu.ac.in'],
     ['facebook', 'https://www.facebook.com/malibapharmacy/']
 ];

 function GenerateMainMenuItems(main_menu) {
     // browser check
     if (!document.body || !document.body.style)
         return;

     var HTMLMenu = '<ul id="coolMenu">';
     for (var idx = 0; idx < main_menu.length; idx++) {

         if (main_menu[idx][2].length == 0)
             HTMLMenu = HTMLMenu + ('<li><a href="' + main_menu[idx][1].toString() + '">' + main_menu[idx][0].toString() + '</a></li>');
         else {
             HTMLMenu = HTMLMenu + ('<li><a href="' + main_menu[idx][1].toString() + '">' + main_menu[idx][0].toString() + '</a>');
             HTMLMenu = HTMLMenu + AddChildItems(main_menu[idx][2]);
             HTMLMenu = HTMLMenu + '</li>';
         }
     }
     HTMLMenu = HTMLMenu + '</ul>';
     document.write(HTMLMenu);
 }

 function AddChildItems(main_menu) {
     var HTMLMenu = '<ul class="noJS">';
     for (var idx = 0; idx < main_menu.length; idx++) {

         if (main_menu[idx][2].length == 0)
             HTMLMenu = HTMLMenu + ('<li><a href="' + main_menu[idx][1].toString() + '">' + main_menu[idx][0].toString() + '</a></li>');
         else {
             HTMLMenu = HTMLMenu + ('<li><a href="' + main_menu[idx][1].toString() + '">' + main_menu[idx][0].toString() + '</a>');
             HTMLMenu = HTMLMenu + AddChildItems(main_menu[idx][2]);
             HTMLMenu = HTMLMenu + '</li>';
         }
     }
     HTMLMenu = HTMLMenu + '</ul>';
     return HTMLMenu
 }

 function SlideShowImages() {
     // browser check
     if (!document.body || !document.body.style)
         return;
     var Slide = '<div id="slideshow">';
     for (var idx = 0; idx < SlideImages.length; idx++) {
         Slide = Slide + ('<img src="' + SlideImages[idx][0].toString() + '" alt="' + SlideImages[idx][1].toString() + '" ' + (SlideImages[idx][2].toString() == 1 ? 'class="active"' : '') + '/>');
     }
     Slide = Slide + '</div>';
     document.write(Slide);
 }

 function GenerateLeftMenuItems(left_menu) {

     // browser check
     if (!document.body || !document.body.style)
         return;

     var HTMLMenu = '<div class="service"><ul>';
     for (idx = 0; idx < left_menu.length; idx++) {
         HTMLMenu = HTMLMenu + ('<li><a target="_blank" href="' + left_menu[idx][1].toString() + '">' + left_menu[idx][0].toString() + '</a></li>');
     }
     HTMLMenu = HTMLMenu + '</ul></div>';
     document.write(HTMLMenu);
 }

 function GenerateLeftRc(left_rc) {

     // browser check
     if (!document.body || !document.body.style)
         return;

     var HTMLMenu = '<div class="service"><ul>';
     for (idx = 0; idx < left_rc.length; idx++) {
         HTMLMenu = HTMLMenu + ('<li><a target="_blank" href="' + left_rc[idx][1].toString() + '">' + left_rc[idx][0].toString() + '</a></li>');
     }
     HTMLMenu = HTMLMenu + '</ul></div>';
     document.write(HTMLMenu);
 }



 function GenerateHeaderMenuItems(header_menu) {

     // browser check
     if (!document.body || !document.body.style)
         return;

     var HTMLMenu = '<div class="headerlink"><ul>';
     for (idx = 0; idx < header_menu.length; idx++) {
         HTMLMenu = HTMLMenu + ('<li><a href="' + header_menu[idx][1].toString() + '">' + header_menu[idx][0].toString() + '</a></li>');
     }
     HTMLMenu = HTMLMenu + '</ul></div>';
     document.write(HTMLMenu);
 }
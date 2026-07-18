document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATION LOGIC ---

    const translations = {
        en: {
            title: "Ottawa Chinese Soccer Club",
            club_name: "Ottawa Chinese Soccer Club",
            club_title: "About the Club",
            club_text: "We're a group of Chinese Ottawa soccer enthusiasts. We first started playing in 1998 on the playground at Sir Robert Borden High School in Greenbank. In the winter, we gather at the Superdome at the Greenbank/Hunt Club intersection. As Ottawa expands, more and more soccer fans join us, and we've expanded to include various areas (Kanata, Barrhaven, and Gatinuea). If you're a soccer enthusiast, join us.",
            club_purpose: "'Win or lose is not important, as long as you can play, you can earn money' is our principle. Happy football is our goal. Regular exercise and physical fitness are our plans.",
            club_mission: "The club is a non-profit organization. We organize events to enhance friendships among players and promote the unity and development of Chinese football in Ottawa.",
            club_vision: "We are committed to building a community platform centered around football, a strong sense of cohesion, and a platform filled with passion and dreams. We hope to promote the development of local football, advocate for health and happiness, foster a united and progressive team culture, and cultivate a passion for football in the next generation.",            
            nav_home: "Home",
            nav_club: "Club",
            nav_indoor: "Indoor",
            nav_outdoor: "Outdoor",
            nav_bbq: "BBQ",
            nav_community: "Community",
            community_title: "Community",
            community_text: "The following Chinese communities look forward to your attention:",
            welcome_title: "Welcome to Our Club!",
            welcome_text: "This is the official website for our soccer club. Here you can find information about our teams, schedules for indoor and outdoor seasons, and details about our special events like the annual BBQ.",
            nav_contact: "Contact",
            contact_title: "Contact Us",
            contact_text: "Please reach out to us by email: ottawachinesesoccer@gmail.com",
            bbq_title: "Annual BBQ",
            bbq_text: "Welcome to join us for our annual club BBQ!",
            bbq_intro1: "Starting in 2023, we began using our extra funds to host an annual BBQ event, bringing together members and players from Ottawa. This event has quickly become a fantastic opportunity for socializing and building community.",
            bbq_intro2: "During the event, players compete for the 'Friendship Cup,' followed by a relaxed BBQ where we enjoy cooking and sharing lamb skewers, hamburgers, and hot dogs.",
            bbq_intro3: "It's always a fun and memorable occasion!",
            bbq_2026_title: "Annual BBQ 2026",
            bbq_2026_text: "On May 30, we hosted 2026 BBQ event.",
            bbq_2025_title: "Annual BBQ 2025",
            bbq_2025_text: "On July 12, we hosted 2025 BBQ event.",
            bbq_2024_title: "Annual BBQ 2024",
            bbq_2024_text: "A look back at our successful 2024 BBQ event. It was hosted on June 15, 2024",
            bbq_2023_title: "Annual BBQ 2023",
            bbq_2023_text: "A look back at our successful 2023 BBQ event. It was hosted on May 27, 2023.",
            media_gallery_title: "Our Moments",
            nav_awards: "Awards",
            nav_meal: "Meal",
            nav_games: "Games",
            nav_sponsor: "Sponsors",
            nav_individual: "Individual Competition",
            nav_teams: "Teams",
            nav_drone: "Drone",
            nav_friendshipcup: "Friendship Cup",
            indoor_title: "Indoor Season",
            indoor_text: "Winter indoor soccer runs from early November to the end of April. We rent courts at the Superdome at Ben Franklin Park. The 2025 venue reservations are as follows:",
            outdoor_title: "Outdoor Season",
            outdoor_text: "Starting in May every year, we move to outdoor activities. The outdoor venues are city public parks and admission is free. The following is the information about outdoor football activities organized by Chinese organizations in Ottawa:",
            greenbank_video: "Greenbank Reunion Video",
            greenbank_slideshow: "Reunion Photo Gallery",
            greenbank_button: "Greenbank Reunion",
            greenbank_title: "Greenbank Reunion",
            memory_button: "Memorable Photo",
            memory_title: "Memorable Photo",
        },
        zh: {
            title: "渥太华华人足球俱乐部",
            club_name: "渥太华华人足球俱乐部",
            club_title: "关于渥太华华人足球俱乐部",
            club_text: "我们是一群热爱足球的渥太华华人。最早（1998年）我们在Greenbank上的Sir Robert Borden High School操场踢球。冬天我们则聚集在Greenbank/Hunt Club路口的Superdome。随着渥太华的扩大，有了越来越多的足球爱好者，发展成以各个区域（Kanata，Gatinuea，Barrhaven）组织。如果你是一个足球爱好者，欢迎加入我们。",
            club_purpose: "'输赢看淡，能踢就赚'是我们的原则。快乐足球是我们的目标。定期运动，强身健体，是我们的规划。",
            club_mission: "俱乐部是非盈利组织。我们举办活动，增进球员之间的友谊，以及促进渥太华华人足球的团结和发展。",
            club_vision: "我们致力于建设一个以足球为核心、凝聚力强、充满激情与梦想的社区平台。我们希望推动本地足球的发展，倡导健康与快乐, 打造团结进取的团队文化以及培养热爱足球的下一代。",
            nav_home: "首页",
            nav_club: "俱乐部",
            nav_indoor: "室内",
            nav_outdoor: "室外",
            nav_bbq: "烧烤",
            nav_community: "社区",
            community_title: "社区",
            community_text: "如下华人社区期待您的关注：",
            welcome_title: "欢迎来到我们的俱乐部！",
            welcome_text: "这是我们足球俱乐部的官方网站。在这里，您可以找到关于我们球队的信息、室内和室外赛季的赛程安排，以及年度烧烤等特别活动的详细信息。",
            nav_contact: "联系我们",
            contact_title: "联系我们",
            contact_text: "请通过电子邮件:ottawachinesesoccer@gmail.com 联系我们。",
            bbq_title: "年度烧烤",
            bbq_text: "欢迎加入我们，参加我们俱乐部的年度烧烤活动!",
            bbq_intro1: "从2023年开始, 我们利用多余的资金举办一年一度的烧烤活动，将渥太华的球员们聚集在一起。这项活动很快就成为了社交和建立社区的绝佳机会。",
            bbq_intro2: "活动中，球员们争夺“友谊杯”，之后是轻松的烧烤时光，我们尽情烹饪和分享羊肉串、汉堡和热狗。",
            bbq_intro3: "这总是一个充满乐趣和难忘的时刻！",
            bbq_2026_title: "2026年度烧烤",
            bbq_2026_text: "2026年5月30日, 年度烧烤如期举行。",
            bbq_2025_title: "2025年度烧烤",
            bbq_2025_text: "2025年7月12日, 年度烧烤如期举行。",
            bbq_2024_title: "2024年度烧烤",
            bbq_2024_text: "回顾我们2024年成功的烧烤活动, 如期在六月15日举行。",
            bbq_2023_title: "2023年度烧烤",
            bbq_2023_text: "回顾我们2023年成功的烧烤活动, 如期在五月27日举行。",
            media_gallery_title: "欢乐时刻",
            nav_awards: "颁奖",
            nav_meal: "用餐",
            nav_games: "比赛",
            nav_sponsor: "赞助商",
            nav_individual: "单项",
            nav_teams: "队伍",
            nav_drone: "航拍",
            nav_friendshipcup: "友谊杯",
            indoor_title: "室内足球",
            indoor_text: "每年的冬季室内足球从11月初开始，到次年4月底结束。我们在Superdome at Ben Franklin Park租场。2025年场地预定如下：",
            outdoor_title: "室外足球",
            outdoor_text: "每年5月开始，我们转到室外活动。室外场地为城市公共公园场地，加入免费。以下是渥太华华人组织的室外踢球信息：",
            greenbank_video: "绿岸聚会视频",
            greenbank_slideshow: "聚会照片集",
            greenbank_button: "绿岸聚会",
            greenbank_title: "绿岸聚会",
            memory_button: "难忘瞬间",
            memory_title: "难忘瞬间",
        }
    };

    const langEnButton = document.getElementById('lang-en');
    const langZhButton = document.getElementById('lang-zh');

    const setLanguage = (lang) => {
        // Set the lang attribute on the HTML element for accessibility and CSS
        document.documentElement.lang = lang;

        // Update all elements with a data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Update active button style
        langEnButton.classList.toggle('active', lang === 'en');
        langZhButton.classList.toggle('active', lang === 'zh');

        // Save the user's preference in local storage
        localStorage.setItem('language', lang);

        // Add a class to the body so CSS can hide/show language-specific blocks
        document.body.classList.toggle('lang-en', lang === 'en');
        document.body.classList.toggle('lang-zh', lang === 'zh');
    };

    langEnButton.addEventListener('click', () => setLanguage('en'));
    langZhButton.addEventListener('click', () => setLanguage('zh'));

    // On page load, check for a saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);


    // --- HAMBURGER MENU LOGIC ---

    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close the mobile menu when a link is clicked
    navLinks.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // --- LIGHTBOX (click a photo in a slideshow to view it at full size) ---
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <span class="lightbox-close" aria-label="Close">&times;</span>
        <img class="lightbox-img" src="" alt="">
    `;
    document.body.appendChild(lightboxOverlay);
    const lightboxImg = lightboxOverlay.querySelector('.lightbox-img');

    const openLightbox = (src, alt) => {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightboxOverlay.classList.add('active');
    };

    const closeLightbox = () => {
        lightboxOverlay.classList.remove('active');
        lightboxImg.src = '';
    };

    // Clicking anywhere on the overlay (backdrop, image, or the X) closes it
    lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // --- Reusable auto-advancing slideshow with a pause/play button and
    //     click-to-enlarge on photos. Used by the homepage "Moments" gallery,
    //     memory.html, and each BBQ year's Awards/Meal/Games/Sponsor galleries. ---
    const initSlideshow = (container) => {
        const mediaItems = container.querySelectorAll('.slide-item');
        if (mediaItems.length === 0) return null;

        const slideDuration = 4000; // 4 seconds
        let currentItemIndex = 0;
        let intervalId = null;
        let isPaused = false;

        const pauseBtn = document.createElement('button');
        pauseBtn.type = 'button';
        pauseBtn.className = 'slideshow-pause-btn';
        pauseBtn.textContent = '⏸'; // pause icon
        pauseBtn.setAttribute('aria-label', 'Pause slideshow');
        container.appendChild(pauseBtn);

        // Prev/Next buttons only become usable once the slideshow is paused,
        // so the user can manually step through photos.
        const prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'slideshow-nav-btn slideshow-prev-btn';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.setAttribute('aria-label', 'Previous photo');
        container.appendChild(prevBtn);

        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'slideshow-nav-btn slideshow-next-btn';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.setAttribute('aria-label', 'Next photo');
        container.appendChild(nextBtn);

        mediaItems.forEach((item) => {
            if (item.tagName === 'IMG') {
                item.addEventListener('click', () => openLightbox(item.src, item.alt));
            }
        });

        const playIfVideo = (item) => {
            if (item.tagName === 'VIDEO') {
                item.play().catch(error => {
                    console.warn('Video autoplay was prevented by the browser:', error);
                });
            }
        };

        // Moves to the slide at currentItemIndex + step (step can be +1 or -1),
        // wrapping around in either direction.
        const goToItem = (step) => {
            const currentItem = mediaItems[currentItemIndex];
            if (currentItem.tagName === 'VIDEO') {
                currentItem.pause();
                currentItem.currentTime = 0;
            }
            currentItem.classList.remove('active');

            currentItemIndex = (currentItemIndex + step + mediaItems.length) % mediaItems.length;

            const nextItem = mediaItems[currentItemIndex];
            nextItem.classList.add('active');
            playIfVideo(nextItem);
        };

        const showNextItem = () => goToItem(1);

        const start = () => {
            if (mediaItems.length > 1 && !intervalId) {
                intervalId = setInterval(showNextItem, slideDuration);
            }
        };

        const stop = () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        };

        mediaItems[0].classList.add('active');
        playIfVideo(mediaItems[0]);
        start();

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            container.classList.toggle('paused', isPaused);
            if (isPaused) {
                stop();
                pauseBtn.textContent = '▶'; // play icon
                pauseBtn.setAttribute('aria-label', 'Play slideshow');
            } else {
                start();
                pauseBtn.textContent = '⏸';
                pauseBtn.setAttribute('aria-label', 'Pause slideshow');
            }
        });

        prevBtn.addEventListener('click', () => {
            if (isPaused) goToItem(-1);
        });

        nextBtn.addEventListener('click', () => {
            if (isPaused) goToItem(1);
        });

        return { stop };
    };

    // --- SLIDESHOW / VIDEO SUPPORT ---
    const greenbankSlides = document.querySelectorAll('#greenbank img');
    let gbIndex = 0;
    if (greenbankSlides.length) {
        // hide all except first
        greenbankSlides.forEach((img, i) => {
            if (i !== 0) img.style.display = 'none';
        });
        setInterval(() => {
            greenbankSlides[gbIndex].style.display = 'none';
            gbIndex = (gbIndex + 1) % greenbankSlides.length;
            greenbankSlides[gbIndex].style.display = 'block';
        }, 3000);
    }

    // --- BBQ 2025 Page Content Loader ---
    const bbqNavContainer = document.querySelector('.bbq-nav');
    if (bbqNavContainer) {
        const contentContainer = document.getElementById('bbq-event-content');
        const bbqContainer = document.querySelector('.bbq-container');
        const year = bbqContainer.dataset.year;

        // --- Data for each BBQ event section, organized by year ---
        const bbqDataByYear = {
            '2026': {
                'awards': {
                    title: 'Awards',
                    subtitle: 'Recognizing our outstanding players.',
                    files: [ 'images/bbq2026/awards/award1.jpg', 'images/bbq2026/awards/award2.jpg', 'images/bbq2026/awards/award3.jpg', 'images/bbq2026/awards/award4.jpg', 'images/bbq2026/awards/award5.jpg', 'images/bbq2026/awards/award6.jpg', 'images/bbq2026/awards/award7.jpg', 'images/bbq2026/awards/award8.jpg', 'images/bbq2026/awards/award9.jpg', 'images/bbq2026/awards/award10.jpg', 'images/bbq2026/awards/award11.jpg', 'images/bbq2026/awards/award12.jpg', 'images/bbq2026/awards/award13.jpg', 'images/bbq2026/awards/award14.jpg', 'images/bbq2026/awards/award15.jpg', 'images/bbq2026/awards/award16.jpg', 'images/bbq2026/awards/award17.jpg', 'images/bbq2026/awards/award18.jpg', 'images/bbq2026/awards/award19.jpg', 'images/bbq2026/awards/award20.jpg', 'images/bbq2026/awards/award21.jpg', 'images/bbq2026/awards/award22.jpg', 'images/bbq2026/awards/award23.jpg', 'images/bbq2026/awards/award24.jpg', 'images/bbq2026/awards/award25.jpg', 'images/bbq2026/awards/award26.jpg', 'images/bbq2026/awards/award27.jpg', 'images/bbq2026/awards/award28.jpg', 'images/bbq2026/awards/award29.jpg', 'images/bbq2026/awards/award30.jpg', 'images/bbq2026/awards/award31.jpg', 'images/bbq2026/awards/award32.jpg', 'images/bbq2026/awards/award33.jpg', 'images/bbq2026/awards/award34.jpg', 'images/bbq2026/awards/award35.jpg', 'images/bbq2026/awards/award36.jpg', 'images/bbq2026/awards/award37.jpg', 'images/bbq2026/awards/award38.jpg', 'images/bbq2026/awards/award39.jpg', 'images/bbq2026/awards/award40.jpg', 'images/bbq2026/awards/award41.jpg', 'images/bbq2026/awards/award42.jpg', 'images/bbq2026/awards/award43.jpg', 'images/bbq2026/awards/award44.jpg', 'images/bbq2026/awards/award45.jpg', 'images/bbq2026/awards/award46.jpg', 'images/bbq2026/awards/award47.jpg', 'images/bbq2026/awards/award48.jpg', 'images/bbq2026/awards/award49.jpg', 'images/bbq2026/awards/award50.jpg', 'images/bbq2026/awards/award51.jpg', 'images/bbq2026/awards/award52.jpg', 'images/bbq2026/awards/award53.jpg', 'images/bbq2026/awards/award54.jpg', 'images/bbq2026/awards/award55.jpg', 'images/bbq2026/awards/award56.jpg' ]
                },
                'meal': {
                    title: 'Meal Time',
                    subtitle: 'Enjoying the delicious food together.',
                    files: [ 'images/bbq2026/meal/meal1.jpg', 'images/bbq2026/meal/meal2.jpg', 'images/bbq2026/meal/meal3.jpg', 'images/bbq2026/meal/meal4.jpg', 'images/bbq2026/meal/meal5.jpg', 'images/bbq2026/meal/meal6.jpg', 'images/bbq2026/meal/meal7.jpg', 'images/bbq2026/meal/meal8.jpg', 'images/bbq2026/meal/meal9.jpg', 'images/bbq2026/meal/meal10.jpg', 'images/bbq2026/meal/meal11.jpg', 'images/bbq2026/meal/meal12.jpg', 'images/bbq2026/meal/meal13.jpg', 'images/bbq2026/meal/meal14.jpg', 'images/bbq2026/meal/meal15.jpg', 'images/bbq2026/meal/meal16.jpg', 'images/bbq2026/meal/meal17.jpg', 'images/bbq2026/meal/meal18.jpg', 'images/bbq2026/meal/meal19.jpg', 'images/bbq2026/meal/meal20.jpg', 'images/bbq2026/meal/meal21.jpg', 'images/bbq2026/meal/meal22.jpg', 'images/bbq2026/meal/meal23.jpg', 'images/bbq2026/meal/meal24.jpg', 'images/bbq2026/meal/meal25.jpg', 'images/bbq2026/meal/meal26.jpg', 'images/bbq2026/meal/meal27.jpg', 'images/bbq2026/meal/meal28.jpg', 'images/bbq2026/meal/meal29.jpg', 'images/bbq2026/meal/meal30.jpg', 'images/bbq2026/meal/meal31.jpg', 'images/bbq2026/meal/meal32.jpg', 'images/bbq2026/meal/meal33.jpg', 'images/bbq2026/meal/meal34.jpg', 'images/bbq2026/meal/meal35.jpg', 'images/bbq2026/meal/meal36.jpg', 'images/bbq2026/meal/meal37.jpg', 'images/bbq2026/meal/meal38.jpg', 'images/bbq2026/meal/meal39.jpg', 'images/bbq2026/meal/meal40.jpg', 'images/bbq2026/meal/meal41.jpg', 'images/bbq2026/meal/meal42.jpg', 'images/bbq2026/meal/meal43.jpg', 'images/bbq2026/meal/meal44.jpg', 'images/bbq2026/meal/meal45.jpg', 'images/bbq2026/meal/meal46.jpg', 'images/bbq2026/meal/meal47.jpg', 'images/bbq2026/meal/meal48.jpg', 'images/bbq2026/meal/meal49.jpg', 'images/bbq2026/meal/meal50.jpg', 'images/bbq2026/meal/meal51.jpg', 'images/bbq2026/meal/meal52.jpg', 'images/bbq2026/meal/meal53.jpg', 'images/bbq2026/meal/meal54.jpg', 'images/bbq2026/meal/meal55.jpg', 'images/bbq2026/meal/meal56.jpg', 'images/bbq2026/meal/meal57.jpg', 'images/bbq2026/meal/meal58.jpg', 'images/bbq2026/meal/meal59.jpg', 'images/bbq2026/meal/meal60.jpg', 'images/bbq2026/meal/meal61.jpg' ]
                },
                'games': {
                    title: 'Fun and Games',
                    subtitle: 'Team building activities and fun for all ages.',
                    files: [ 'images/bbq2026/games/game1.jpg', 'images/bbq2026/games/game2.jpg', 'images/bbq2026/games/game3.jpg', 'images/bbq2026/games/game4.jpg', 'images/bbq2026/games/game5.jpg', 'images/bbq2026/games/game6.jpg', 'images/bbq2026/games/game7.jpg', 'images/bbq2026/games/game8.jpg', 'images/bbq2026/games/game9.jpg', 'images/bbq2026/games/game10.jpg', 'images/bbq2026/games/game11.jpg', 'images/bbq2026/games/game12.jpg', 'images/bbq2026/games/game13.jpg', 'images/bbq2026/games/game14.jpg', 'images/bbq2026/games/game15.jpg', 'images/bbq2026/games/game16.jpg', 'images/bbq2026/games/game17.jpg', 'images/bbq2026/games/game18.jpg', 'images/bbq2026/games/game19.jpg', 'images/bbq2026/games/game20.jpg', 'images/bbq2026/games/game21.jpg', 'images/bbq2026/games/game22.jpg', 'images/bbq2026/games/game23.jpg', 'images/bbq2026/games/game24.jpg', 'images/bbq2026/games/game25.jpg', 'images/bbq2026/games/game26.jpg', 'images/bbq2026/games/game27.jpg', 'images/bbq2026/games/game28.jpg', 'images/bbq2026/games/game29.jpg', 'images/bbq2026/games/game30.jpg', 'images/bbq2026/games/game31.jpg', 'images/bbq2026/games/game32.jpg', 'images/bbq2026/games/game33.jpg', 'images/bbq2026/games/game34.jpg', 'images/bbq2026/games/game35.jpg', 'images/bbq2026/games/game36.jpg', 'images/bbq2026/games/game37.jpg', 'images/bbq2026/games/game38.jpg', 'images/bbq2026/games/game39.jpg', 'images/bbq2026/games/game40.jpg', 'images/bbq2026/games/game41.jpg', 'images/bbq2026/games/game42.jpg', 'images/bbq2026/games/game43.jpg', 'images/bbq2026/games/game44.jpg', 'images/bbq2026/games/game45.jpg', 'images/bbq2026/games/game46.jpg', 'images/bbq2026/games/game47.jpg', 'images/bbq2026/games/game48.jpg', 'images/bbq2026/games/game49.jpg', 'images/bbq2026/games/game50.jpg', 'images/bbq2026/games/game51.jpg', 'images/bbq2026/games/game52.jpg', 'images/bbq2026/games/game53.jpg', 'images/bbq2026/games/game54.jpg', 'images/bbq2026/games/game55.jpg', 'images/bbq2026/games/game56.jpg', 'images/bbq2026/games/game57.jpg', 'images/bbq2026/games/game58.jpg', 'images/bbq2026/games/game59.jpg', 'images/bbq2026/games/game60.jpg', 'images/bbq2026/games/game61.jpg', 'images/bbq2026/games/game62.jpg', 'images/bbq2026/games/game63.jpg', 'images/bbq2026/games/game64.jpg', 'images/bbq2026/games/game65.jpg', 'images/bbq2026/games/game66.jpg', 'images/bbq2026/games/game67.jpg', 'images/bbq2026/games/game68.jpg', 'images/bbq2026/games/game69.jpg', 'images/bbq2026/games/game70.jpg', 'images/bbq2026/games/game71.jpg', 'images/bbq2026/games/game72.jpg', 'images/bbq2026/games/game73.jpg', 'images/bbq2026/games/game74.jpg', 'images/bbq2026/games/game75.jpg', 'images/bbq2026/games/game76.jpg', 'images/bbq2026/games/game77.jpg', 'images/bbq2026/games/game78.jpg', 'images/bbq2026/games/game79.jpg', 'images/bbq2026/games/game80.jpg', 'images/bbq2026/games/game81.jpg', 'images/bbq2026/games/game82.jpg', 'images/bbq2026/games/game83.jpg', 'images/bbq2026/games/game84.jpg', 'images/bbq2026/games/game85.jpg', 'images/bbq2026/games/game86.jpg', 'images/bbq2026/games/game87.jpg', 'images/bbq2026/games/game88.jpg', 'images/bbq2026/games/game89.jpg', 'images/bbq2026/games/game90.jpg', 'images/bbq2026/games/game91.jpg', 'images/bbq2026/games/game92.jpg', 'images/bbq2026/games/game93.jpg', 'images/bbq2026/games/game94.jpg', 'images/bbq2026/games/game95.jpg', 'images/bbq2026/games/game96.jpg', 'images/bbq2026/games/game97.jpg', 'images/bbq2026/games/game98.jpg', 'images/bbq2026/games/game99.jpg', 'images/bbq2026/games/game100.jpg', 'images/bbq2026/games/game101.jpg', 'images/bbq2026/games/game102.jpg', 'images/bbq2026/games/game103.jpg', 'images/bbq2026/games/game104.jpg', 'images/bbq2026/games/game105.jpg', 'images/bbq2026/games/game106.jpg', 'images/bbq2026/games/game107.jpg' ]
                },
                'sponsor': {
                    title: 'Our Sponsors',
                    subtitle: 'A big thank you to our generous sponsors!',
                    files: [ 'images/bbq2026/sponsor/wangjia.png', 'images/bbq2026/sponsor/jackylawyer.jpg', 'images/bbq2026/sponsor/Lyon-building.jpg', 'images/bbq2026/sponsor/mary-ice-wine.png', 'images/bbq2026/sponsor/mary.jpg', 'images/bbq2026/sponsor/jeff.jpg','images/bbq2026/sponsor/mobilenet1.jpg', 'images/bbq2026/sponsor/mobilenet2.png', 'images/bbq2026/sponsor/mobilenet3.JPG', 'images/bbq2026/sponsor/zhudao.jpg', 'images/bbq2026/sponsor/bluewhale.jpg' ]
                }
            },
            '2025': {
                'friendship-cup': {
                    title: 'Friendship Cup',
                    subtitle: 'Bruce team won 2025 Friendship Cup',
                    files: [ 
                        'images/bbq2025/friendshipcup/cup1.jpg', 
                        'images/bbq2025/friendshipcup/cup2.jpg', 
                        'images/bbq2025/friendshipcup/cup3.jpg' 
                    ]
                },
                'awards': {
                    title: 'Awards',
                    subtitle: 'Recognizing our outstanding players.',
                    files: [ 
                        'images/bbq2025/awards/award1.jpg', 
                        'images/bbq2025/awards/award2.jpg', 
                        'images/bbq2025/awards/award3.jpg', 
                        'images/bbq2025/awards/award4.jpg', 
                        'images/bbq2025/awards/award5.jpg', 
                        'images/bbq2025/awards/award6.jpg', 
                        'images/bbq2025/awards/award7.jpg', 
                        'images/bbq2025/awards/award8.jpg', 
                        'images/bbq2025/awards/award9.jpg', 
                        'images/bbq2025/awards/award10.jpg', 
                        'images/bbq2025/awards/award11.jpg', 
                        'images/bbq2025/awards/award12.jpg', 
                        'images/bbq2025/awards/award13.jpg', 
                        'images/bbq2025/awards/award14.jpg', 
                        'images/bbq2025/awards/award15.jpg', 
                        'images/bbq2025/awards/award16.jpg', 
                        'images/bbq2025/awards/award17.jpg', 
                        'images/bbq2025/awards/award18.jpg', 
                        'images/bbq2025/awards/award19.jpg', 
                        'images/bbq2025/awards/award20.jpg', 
                        'images/bbq2025/awards/award21.jpg', 
                        'images/bbq2025/awards/award22.jpg', 
                        'images/bbq2025/awards/award23.jpg' 
                    ]
                },
                'meal': {
                    title: 'Meal Time',
                    subtitle: 'Enjoying the delicious food together.',
                    files: [ 'images/bbq2025/meal/meal1.jpg', 'images/bbq2025/meal/meal2.jpg', 'images/bbq2025/meal/meal3.jpg', 'images/bbq2025/meal/meal4.jpg', 'images/bbq2025/meal/meal5.jpg', 'images/bbq2025/meal/meal6.jpg', 'images/bbq2025/meal/meal7.jpg', 'images/bbq2025/meal/meal8.jpg', 'images/bbq2025/meal/meal9.jpg', 'images/bbq2025/meal/meal10.jpg', 'images/bbq2025/meal/meal11.jpg', 'images/bbq2025/meal/meal12.jpg', 'images/bbq2025/meal/meal13.jpg', 'images/bbq2025/meal/meal14.jpg', 'images/bbq2025/meal/meal15.jpg', 'images/bbq2025/meal/meal16.jpg', 'images/bbq2025/meal/meal17.jpg', 'images/bbq2025/meal/meal18.jpg', 'images/bbq2025/meal/meal19.jpg', 'images/bbq2025/meal/meal20.jpg', 'images/bbq2025/meal/meal21.jpg', 'images/bbq2025/meal/meal22.jpg', 'images/bbq2025/meal/meal23.jpg', 'images/bbq2025/meal/meal24.jpg', 'images/bbq2025/meal/meal25.jpg' ]
                },
                'games': {
                    title: 'Fun and Games',
                    subtitle: 'Team building activities and fun for all ages.',
                    files: [ 'images/bbq2025/games/game1.jpg', 'images/bbq2025/games/game2.jpg', 'images/bbq2025/games/game3.mp4', 'images/bbq2025/games/game4.mp4', 'images/bbq2025/games/game5.mp4', 'images/bbq2025/games/game6.mp4', 'images/bbq2025/games/game7.mp4', 'images/bbq2025/games/game8.mp4', 'images/bbq2025/games/game9.mp4', 'images/bbq2025/games/game10.jpg', 'images/bbq2025/games/game11.jpg' ]
                },
                'sponsor': {
                    title: 'Our Sponsors',
                    subtitle: 'A big thank you to our generous sponsors!',
                    files: [ 'images/bbq2025/sponsor/jackylawyer.jpg', 'images/bbq2025/sponsor/mary.jpg', 'images/bbq2025/sponsor/wangjia.jpg', 'images/bbq2025/sponsor/mobilenet1.jpg', 'images/bbq2025/sponsor/mobilenet2.png', 'images/bbq2025/sponsor/xu.jpg', 'images/bbq2025/sponsor/bluewhale.jpg', 'images/bbq2025/sponsor/fanghuo.jpg', 'images/bbq2025/sponsor/colin1.jpg', 'images/bbq2025/sponsor/colin2.jpg', 'images/bbq2025/sponsor/minispace.jpg' ]
                },
                'drone': {
                    title: 'Drone Shots',
                    subtitle: "A bird's-eye view of the event.",
                    files: [ 'images/bbq2025/drone/bbq-drone1.mp4', 'images/bbq2025/drone/bbq-drone2.mp4' ]
                }
            },
            '2024': {
                // NOTE: The file names below are examples. You will need to update this list
                // with the actual file names from your 'images/bbq2024' folder.
                'friendship-cup': {
                    title: 'Friendship Cup',
                    subtitle: 'Celebrating the spirit of competition in 2024.',
                    files: [ 
                        'images/bbq2024/friendshipcup/cup1.jpg', 
                        'images/bbq2024/friendshipcup/cup2.jpg', 
                        'images/bbq2024/friendshipcup/cup3.jpg' 
                    ]
                },
                'awards': {
                    title: 'Awards',
                    subtitle: 'Recognizing our outstanding players in 2024.',
                    files: [ 
                        'images/bbq2024/awards/award1.jpg', 
                        'images/bbq2024/awards/award2.jpg', 
                        'images/bbq2024/awards/award3.jpg', 
                        'images/bbq2024/awards/award4.jpg', 
                        'images/bbq2024/awards/award5.jpg', 
                        'images/bbq2024/awards/award6.jpg', 
                        'images/bbq2024/awards/award7.jpg', 
                        'images/bbq2024/awards/award8.jpg', 
                        'images/bbq2024/awards/award9.mp4'
                    ]
                },
                'meal': {
                    title: 'Meal Time',
                    subtitle: 'Enjoying the delicious food together in 2024.',
                    files: [ 
                        'images/bbq2024/meal/meal1.jpg', 
                        'images/bbq2024/meal/meal2.jpg', 
                        'images/bbq2024/meal/meal3.jpg', 
                        'images/bbq2024/meal/meal4.jpg', 
                        'images/bbq2024/meal/meal5.jpg', 
                        'images/bbq2024/meal/meal6.mp4', 
                        'images/bbq2024/meal/meal7.jpg', 
                        'images/bbq2024/meal/meal8.jpg', 
                        'images/bbq2024/meal/meal9.jpg'
                    ]
                },
                'games': {
                    title: 'Fun and Games',
                    subtitle: 'Team building activities and fun for all ages in 2024.',
                    files: [ 
                        'images/bbq2024/games/game1.jpg', 
                        'images/bbq2024/games/game2.jpg', 
                        'images/bbq2024/games/game3.jpg', 
                        'images/bbq2024/games/game4.jpg', 
                        'images/bbq2024/games/game5.jpg', 
                        'images/bbq2024/games/game6.jpg', 
                        'images/bbq2024/games/game7.jpg', 
                        'images/bbq2024/games/game8.jpg', 
                        'images/bbq2024/games/game9.jpg', 
                        'images/bbq2024/games/game10.jpg', 
                        'images/bbq2024/games/game11.jpg', 
                        'images/bbq2024/games/game12.jpg', 
                        'images/bbq2024/games/game13.jpg', 
                        'images/bbq2024/games/game14.jpg', 
                        'images/bbq2024/games/game15.jpg', 
                        'images/bbq2024/games/game16.jpg', 
                        'images/bbq2024/games/game17.jpg', 
                        'images/bbq2024/games/game18.jpg', 
                        'images/bbq2024/games/game19.jpg', 
                        'images/bbq2024/games/game20.jpg', 
                        'images/bbq2024/games/game21.jpg', 
                        'images/bbq2024/games/game22.mp4', 
                        'images/bbq2024/games/game23.mp4', 
                        'images/bbq2024/games/game24.mp4', 
                        'images/bbq2024/games/game25.mp4', 
                        'images/bbq2024/games/game26.mp4', 
                        'images/bbq2024/games/game27.mp4', 
                        'images/bbq2024/games/game28.mp4', 
                        'images/bbq2024/games/game29.mp4', 
                        'images/bbq2024/games/game30.mp4', 
                        'images/bbq2024/games/game31.mp4', 
                        'images/bbq2024/games/game32.mp4', 
                        'images/bbq2024/games/game33.mp4', 
                        'images/bbq2024/games/game34.mp4', 
                        'images/bbq2024/games/game35.mp4', 
                        'images/bbq2024/games/game36.mp4', 
                        'images/bbq2024/games/game37.mp4', 
                        'images/bbq2024/games/game38.mp4', 
                        'images/bbq2024/games/game39.mp4', 
                        'images/bbq2024/games/game40.mp4', 
                        'images/bbq2024/games/game41.mp4', 
                        'images/bbq2024/games/game42.mp4', 
                        'images/bbq2024/games/game43.mp4', 
                        'images/bbq2024/games/game44.mp4', 
                        'images/bbq2024/games/game45.mp4', 
                        'images/bbq2024/games/game46.mp4', 
                        'images/bbq2024/games/game47.jpg', 
                        'images/bbq2024/games/game48.jpg', 
                        'images/bbq2024/games/game49.jpg', 
                        'images/bbq2024/games/game50.jpg', 
                        'images/bbq2024/games/game51.jpg', 
                        'images/bbq2024/games/game52.jpg', 
                        'images/bbq2024/games/game53.jpg', 
                        'images/bbq2024/games/game54.jpg', 
                        'images/bbq2024/games/game55.jpg', 
                        'images/bbq2024/games/game56.jpg', 
                        'images/bbq2024/games/game57.jpg', 
                        'images/bbq2024/games/game58.jpg', 
                        'images/bbq2024/games/game59.jpg', 
                        'images/bbq2024/games/game60.jpg', 
                        'images/bbq2024/games/game61.jpg', 
                        'images/bbq2024/games/game62.jpg', 
                        'images/bbq2024/games/game63.jpg', 
                        'images/bbq2024/games/game64.jpg', 
                        'images/bbq2024/games/game65.jpg', 
                        'images/bbq2024/games/game66.jpg', 
                        'images/bbq2024/games/game67.jpg', 
                        'images/bbq2024/games/game68.jpg', 
                        'images/bbq2024/games/game69.jpg', 
                        'images/bbq2024/games/game70.jpg', 
                        'images/bbq2024/games/game71.jpg'
                    ]
                },
                'sponsor': {
                    title: 'Our 2024 Sponsors',
                    subtitle: 'A big thank you to our generous sponsors!',
                    files: [ 
                        'images/bbq2024/sponsor/mary.jpg', 
                        'images/bbq2024/sponsor/jeff.jpg'
                    ]
                },
                'individual': {
                    title: 'Individual competition',
                    subtitle: "Individuals compete for penaty shoot, long distance, ...",
                    files: [ 
                        'images/bbq2024/individual/s1.mp4', 
                        'images/bbq2024/individual/s2.mp4', 
                        'images/bbq2024/individual/s3.mp4', 
                        'images/bbq2024/individual/s4.mp4', 
                        'images/bbq2024/individual/s5.mp4', 
                        'images/bbq2024/individual/s6.mp4', 
                        'images/bbq2024/individual/s7.mp4', 
                        'images/bbq2024/individual/s8.mp4', 
                        'images/bbq2024/individual/s9.mp4', 
                        'images/bbq2024/individual/s10.mp4', 
                        'images/bbq2024/individual/s11.mp4', 
                        'images/bbq2024/individual/s12.mp4', 
                        'images/bbq2024/individual/s13.mp4', 
                        'images/bbq2024/individual/s14.mp4', 
                        'images/bbq2024/individual/s15.mp4', 
                        'images/bbq2024/individual/s16.mp4', 
                        'images/bbq2024/individual/s17.mp4', 
                        'images/bbq2024/individual/s18.mp4', 
                        'images/bbq2024/individual/s19.mp4', 
                        'images/bbq2024/individual/s20.mp4', 
                        'images/bbq2024/individual/s21.mp4', 
                        'images/bbq2024/individual/s22.mp4', 
                        'images/bbq2024/individual/s23.mp4', 
                        'images/bbq2024/individual/s24.mp4', 
                        'images/bbq2024/individual/s25.mp4', 
                        'images/bbq2024/individual/s26.mp4', 
                        'images/bbq2024/individual/s27.mp4', 
                        'images/bbq2024/individual/s28.mp4', 
                        'images/bbq2024/individual/s29.mp4', 
                        'images/bbq2024/individual/s30.mp4', 
                        'images/bbq2024/individual/s31.mp4', 
                        'images/bbq2024/individual/s32.mp4', 
                        'images/bbq2024/individual/s33.mp4', 
                        'images/bbq2024/individual/s34.mp4', 
                        'images/bbq2024/individual/s35.mp4', 
                        'images/bbq2024/individual/s36.mp4', 
                        'images/bbq2024/individual/s37.mp4', 
                        'images/bbq2024/individual/s38.mp4', 
                        'images/bbq2024/individual/s39.mp4', 
                        'images/bbq2024/individual/s40.mp4', 
                        'images/bbq2024/individual/s41.mp4', 
                        'images/bbq2024/individual/s42.mp4', 
                        'images/bbq2024/individual/s43.mp4', 
                        'images/bbq2024/individual/s44.mp4', 
                        'images/bbq2024/individual/s45.mp4', 
                        'images/bbq2024/individual/s46.mp4', 
                        'images/bbq2024/individual/s47.mp4', 
                        'images/bbq2024/individual/s48.mp4', 
                        'images/bbq2024/individual/s49.mp4', 
                        'images/bbq2024/individual/s50.mp4', 
                        'images/bbq2024/individual/s51.mp4', 
                        'images/bbq2024/individual/s52.mp4', 
                        'images/bbq2024/individual/s53.mp4', 
                        'images/bbq2024/individual/s54.mp4', 
                        'images/bbq2024/individual/s55.mp4', 
                        'images/bbq2024/individual/s56.mp4', 
                        'images/bbq2024/individual/s57.mp4', 
                        'images/bbq2024/individual/s58.mp4', 
                        'images/bbq2024/individual/s59.mp4', 
                        'images/bbq2024/individual/s60.mp4',
                        'images/bbq2024/individual/s61.mp4', 
                        'images/bbq2024/individual/s62.mp4', 
                        'images/bbq2024/individual/s63.mp4', 
                        'images/bbq2024/individual/s64.mp4', 
                        'images/bbq2024/individual/s65.mp4', 
                        'images/bbq2024/individual/s66.mp4', 
                        'images/bbq2024/individual/s67.mp4', 
                        'images/bbq2024/individual/s68.mp4', 
                        'images/bbq2024/individual/s69.mp4', 
                        'images/bbq2024/individual/s70.mp4', 
                        'images/bbq2024/individual/s71.mp4', 
                        'images/bbq2024/individual/s72.mp4'
                    ]
                },
                'teams': {
                    title: 'Our 2024 teams',
                    subtitle: 'team pictures and photos!',
                    files: [ 
                        'images/bbq2024/teams/team1.jpg', 
                        'images/bbq2024/teams/team2.jpg', 
                        'images/bbq2024/teams/team3.jpg', 
                        'images/bbq2024/teams/team4.jpg', 
                        'images/bbq2024/teams/team5.jpg', 
                        'images/bbq2024/teams/team6.jpg', 
                        'images/bbq2024/teams/team7.jpg', 
                        'images/bbq2024/teams/team8.jpg', 
                        'images/bbq2024/teams/team9.jpg', 
                        'images/bbq2024/teams/team10.jpg'
                    ]
                }                
            },
            '2023': {
                // NOTE: The file names below are examples. You will need to update this list
                // with the actual file names from your 'images/bbq2024' folder.
                'awards': {
                    title: 'Awards',
                    subtitle: 'Recognizing our outstanding players in 2023.',
                    files: [ 
                        'images/bbq2023/awards/award1.jpg', 
                        'images/bbq2023/awards/award2.jpg', 
                        'images/bbq2023/awards/award3.jpg', 
                        'images/bbq2023/awards/award4.jpg', 
                        'images/bbq2023/awards/award5.jpg', 
                        'images/bbq2023/awards/award6.mp4'
                    ]
                },
                'meal': {
                    title: 'Meal Time',
                    subtitle: 'Enjoying the delicious food together in 2023.',
                    files: [ 
                        'images/bbq2023/meal/meal1.jpg'
                    ]
                },
                'sponsor': {
                    title: 'Our 2023 Sponsors',
                    subtitle: 'A big thank you to our generous sponsors!',
                    files: [ 
                        'images/bbq2023/sponsor/jeff.jpg',
                        'images/bbq2023/sponsor/mary.jpg'
                    ]
                },
                'individual': {
                    title: 'Individual competition',
                    subtitle: "Individuals compete for penaty shoot, long distance, ...",
                    files: [ 
                        'images/bbq2023/individual/s1.mp4', 
                        'images/bbq2023/individual/s2.mp4', 
                        'images/bbq2023/individual/s3.mp4', 
                        'images/bbq2023/individual/s4.mp4', 
                        'images/bbq2023/individual/s5.mp4', 
                        'images/bbq2023/individual/s6.mp4', 
                        'images/bbq2023/individual/s7.mp4', 
                        'images/bbq2023/individual/s8.mp4', 
                        'images/bbq2023/individual/s9.mp4', 
                        'images/bbq2023/individual/s10.mp4', 
                        'images/bbq2023/individual/s11.mp4', 
                        'images/bbq2023/individual/s12.mp4', 
                        'images/bbq2023/individual/s13.mp4', 
                        'images/bbq2023/individual/s14.mp4', 
                        'images/bbq2023/individual/s15.mp4', 
                        'images/bbq2023/individual/s16.mp4', 
                        'images/bbq2023/individual/s17.mp4', 
                        'images/bbq2023/individual/s18.mp4', 
                        'images/bbq2023/individual/s19.mp4', 
                        'images/bbq2023/individual/s20.mp4', 
                        'images/bbq2023/individual/s21.mp4', 
                        'images/bbq2023/individual/s22.mp4', 
                        'images/bbq2023/individual/s23.mp4', 
                        'images/bbq2023/individual/s24.mp4', 
                        'images/bbq2023/individual/s25.mp4', 
                        'images/bbq2023/individual/s26.mp4', 
                        'images/bbq2023/individual/s27.mp4', 
                        'images/bbq2023/individual/s28.jpg', 
                        'images/bbq2023/individual/s29.jpg'
                    ]
                }
            }
        };

        const bbqContentData = bbqDataByYear[year];

        // Tracks the currently running gallery slideshow so it can be stopped
        // when the user clicks a different menu item (Awards, Meal, Games, ...).
        let activeSlideshowController = null;

        const renderSlideshow = (data) => {
            if (activeSlideshowController) {
                activeSlideshowController.stop();
                activeSlideshowController = null;
            }

            if (!data || !data.files || data.files.length === 0) {
                contentContainer.innerHTML = `<h2>${data.title || 'Content'}</h2><p>Coming soon!</p>`;
                return;
            }

            let galleryHtml = `
                <h2>${data.title}</h2>
                ${data.subtitle ? `<h4>${data.subtitle}</h4>` : ''}
                <div class="slideshow">
            `;

            data.files.forEach((file, index) => {
                if (file.toLowerCase().endsWith('.mp4')) {
                    galleryHtml += `<video src="${file}" class="slide-item" controls muted playsinline loop></video>`;
                } else {
                    galleryHtml += `<img src="${file}" alt="${data.title} photo ${index + 1}" class="slide-item">`;
                }
            });

            galleryHtml += `</div>`;

            contentContainer.innerHTML = galleryHtml;

            const slideshowEl = contentContainer.querySelector('.slideshow');
            if (slideshowEl) {
                activeSlideshowController = initSlideshow(slideshowEl);
            }
        };

        bbqNavContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.dataset.content) {
                e.preventDefault();
                const contentType = e.target.dataset.content;
                if (bbqContentData && bbqContentData[contentType]) {
                    const contentData = bbqContentData[contentType];
                    renderSlideshow(contentData);
                }
            }
        });
    };

    // --- Automatic Media Slideshow (homepage "Moments" gallery / memory.html) ---
    const staticSlideshow = document.querySelector('.slideshow');
    if (staticSlideshow) {
        initSlideshow(staticSlideshow);
    }

});

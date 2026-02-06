// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Conference data
const conferences = {
    'healthcare': {
        category: 'Healthcare',
        title: 'Healthcare Insights 2026',
        subtitle: '5th Global Summit on Healthcare & Patient Safety',
        date: 'November 9-11, 2026',
        location: 'Hong Kong',
        mode: 'Hybrid Event',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920',
        description: 'The 5th Global Summit on Healthcare & Patient Safety brings together leading healthcare professionals, researchers, clinicians, academicians, policymakers, and industry experts from around the world. This hybrid conference creates a global platform to share experiences, discuss research findings, and acquire knowledge in healthcare and patient safety.',
        objectives: [
            'Exchange research findings on healthcare and patient safety',
            'Foster collaboration among healthcare professionals globally',
            'Present innovations, trends, and practical solutions',
            'Address challenges in healthcare delivery and patient care'
        ],
        topics: [
            'Patient Safety & Quality Improvement',
            'Clinical Medicine & Evidence-Based Practices',
            'Medical Research & Clinical Trials',
            'Healthcare Management & Administration',
            'Public Health & Epidemiology',
            'Digital Health & Telemedicine',
            'Healthcare Technology & Innovation',
            'Nursing & Patient Care'
        ],
        audience: [
            'Healthcare Professionals & Physicians',
            'Medical Researchers & Scientists',
            'Clinicians & Practitioners',
            'Nurses & Healthcare Workers',
            'Hospital Administrators',
            'Healthcare Policymakers',
            'Medical Students & Residents',
            'Pharmaceutical Industry Representatives'
        ],
        deadlines: {
            abstract: 'July 15, 2026',
            notification: 'August 20, 2026',
            early: 'September 30, 2026',
            conference: 'November 9-11, 2026'
        },
        venue: 'Hong Kong Convention Center, 1 Expo Drive, Wan Chai, Hong Kong SAR + Virtual via Zoom'
    },
    'renewable-energy': {
        category: 'Energy',
        title: 'Renewable Energy 2026',
        subtitle: '4th International Conference on Renewable & Non-Renewable Energy',
        date: 'March 9, 2026',
        location: 'Virtual Event',
        mode: 'Virtual',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920',
        description: 'The 4th International Conference on Renewable and Non-Renewable Energy brings together leading researchers, industry professionals, academicians, and policy-makers to share pioneering research, explore emerging technologies, and discuss the future of global energy systems.',
        objectives: [
            'Promote research in renewable energy technologies',
            'Discuss sustainable energy solutions',
            'Share innovations in energy systems',
            'Address global energy challenges'
        ],
        topics: [
            'Solar & Wind Energy',
            'Hydroelectric Power',
            'Biomass & Biofuels',
            'Energy Storage Solutions',
            'Smart Grid Technologies',
            'Energy Policy & Economics',
            'Renewable Energy Integration',
            'Energy Efficiency & Conservation'
        ],
        audience: [
            'Energy Researchers',
            'Industry Professionals',
            'Policy Makers',
            'Environmental Scientists',
            'Engineers & Technologists',
            'Students & Academics',
            'Energy Consultants',
            'Government Officials'
        ],
        deadlines: {
            abstract: 'January 20, 2026',
            notification: 'February 10, 2026',
            early: 'February 25, 2026',
            conference: 'March 9, 2026'
        },
        venue: 'Virtual Event via Zoom Platform'
    },
    'green-energy': {
        category: 'Energy',
        title: 'Green Energy Summit 2026',
        subtitle: 'International Conference on Sustainable Energy Solutions',
        date: 'June 15-17, 2026',
        location: 'Amsterdam, Netherlands',
        mode: 'Hybrid Event',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920',
        description: 'The Green Energy Summit 2026 focuses on clean energy technologies, sustainability, and environmental impact. Join global experts to explore innovative solutions for a greener future.',
        objectives: [
            'Explore clean energy technologies',
            'Promote sustainability practices',
            'Discuss environmental impact reduction',
            'Foster green innovation'
        ],
        topics: [
            'Clean Energy Technologies',
            'Sustainability & Environment',
            'Carbon Reduction Strategies',
            'Green Building & Architecture',
            'Sustainable Transportation',
            'Circular Economy',
            'Climate Change Mitigation',
            'Green Finance & Investment'
        ],
        audience: [
            'Environmental Scientists',
            'Sustainability Professionals',
            'Green Technology Developers',
            'Policy Makers',
            'Corporate Sustainability Officers',
            'Researchers & Academics',
            'NGO Representatives',
            'Green Investors'
        ],
        deadlines: {
            abstract: 'April 30, 2026',
            notification: 'May 20, 2026',
            early: 'June 1, 2026',
            conference: 'June 15-17, 2026'
        },
        venue: 'Amsterdam Convention Center, Amsterdam, Netherlands + Virtual via Zoom'
    },
    'food-agri': {
        category: 'Agriculture',
        title: 'Global Food & Agri Summit 2026',
        subtitle: '2nd Edition - Food Science & Agricultural Innovation',
        date: 'January 20-22, 2026',
        location: 'Amsterdam, Netherlands',
        mode: 'In-Person',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920',
        description: 'The Global Food & Agri Summit brings together experts in food science, agriculture, and nutrition to address food security, sustainable agriculture, and agricultural technology innovations.',
        objectives: [
            'Address global food security challenges',
            'Promote sustainable agriculture practices',
            'Share innovations in food science',
            'Foster collaboration in agricultural research'
        ],
        topics: [
            'Food Security & Safety',
            'Sustainable Agriculture',
            'Crop Technology & Innovation',
            'Nutrition & Public Health',
            'Agricultural Biotechnology',
            'Food Processing & Preservation',
            'Urban Farming',
            'Agricultural Policy & Economics'
        ],
        audience: [
            'Agricultural Scientists',
            'Food Technologists',
            'Farmers & Agribusiness Professionals',
            'Nutritionists',
            'Policy Makers',
            'Agricultural Engineers',
            'Food Industry Representatives',
            'Research Scholars'
        ],
        deadlines: {
            abstract: 'November 30, 2025',
            notification: 'December 20, 2025',
            early: 'January 5, 2026',
            conference: 'January 20-22, 2026'
        },
        venue: 'Amsterdam RAI Convention Center, Amsterdam, Netherlands'
    },
    'semiconductors': {
        category: 'Technology',
        title: 'Semiconductors Summit 2026',
        subtitle: 'International Conference on Semiconductor Technology',
        date: 'August 10-12, 2026',
        location: 'Silicon Valley, USA',
        mode: 'Hybrid Event',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920',
        description: 'The Semiconductors Summit 2026 brings together industry leaders, researchers, and innovators to discuss chip design, manufacturing innovations, and next-generation semiconductor technologies.',
        objectives: [
            'Showcase latest semiconductor innovations',
            'Discuss manufacturing challenges and solutions',
            'Explore next-generation chip technologies',
            'Foster industry-academia collaboration'
        ],
        topics: [
            'Chip Design & Architecture',
            'Semiconductor Manufacturing',
            'Nanotechnology & Materials',
            'AI & Machine Learning Chips',
            'Quantum Computing',
            '5G & 6G Technologies',
            'Power Electronics',
            'Semiconductor Testing & Reliability'
        ],
        audience: [
            'Semiconductor Engineers',
            'Chip Designers',
            'Manufacturing Professionals',
            'Materials Scientists',
            'Industry Executives',
            'Research Scientists',
            'Technology Investors',
            'Graduate Students'
        ],
        deadlines: {
            abstract: 'June 15, 2026',
            notification: 'July 10, 2026',
            early: 'July 25, 2026',
            conference: 'August 10-12, 2026'
        },
        venue: 'Santa Clara Convention Center, Silicon Valley, California, USA + Virtual'
    },
    'optics': {
        category: 'Technology',
        title: 'Optics World Summit 2026',
        subtitle: 'Global Conference on Optics & Photonics',
        date: 'May 5-7, 2026',
        location: 'Munich, Germany',
        mode: 'In-Person',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1920',
        description: 'The Optics World Summit 2026 focuses on photonics, laser technology, optical systems, and imaging innovations. Join leading experts in optics and photonics research.',
        objectives: [
            'Advance optical science and technology',
            'Share breakthroughs in photonics',
            'Discuss laser technology applications',
            'Promote optical innovation'
        ],
        topics: [
            'Photonics & Laser Technology',
            'Optical Systems & Design',
            'Imaging & Microscopy',
            'Fiber Optics & Communications',
            'Quantum Optics',
            'Biophotonics & Medical Optics',
            'Optical Materials',
            'Holography & 3D Imaging'
        ],
        audience: [
            'Optical Engineers',
            'Photonics Researchers',
            'Laser Scientists',
            'Imaging Specialists',
            'Industry Professionals',
            'Academic Researchers',
            'Optical System Designers',
            'PhD Students'
        ],
        deadlines: {
            abstract: 'March 15, 2026',
            notification: 'April 5, 2026',
            early: 'April 20, 2026',
            conference: 'May 5-7, 2026'
        },
        venue: 'Munich International Congress Center (ICM), Munich, Germany'
    },
    'medicine': {
        category: 'Healthcare',
        title: 'World General Medicine Congress 2026',
        subtitle: 'International Medical Research & Clinical Practice',
        date: 'October 15-17, 2026',
        location: 'Paris, France',
        mode: 'Hybrid Event',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920',
        description: 'The World General Medicine Congress brings together medical professionals to discuss clinical medicine, preventive care, regenerative medicine, and medical innovations.',
        objectives: [
            'Share clinical research findings',
            'Discuss preventive medicine strategies',
            'Explore regenerative medicine advances',
            'Foster medical collaboration globally'
        ],
        topics: [
            'Clinical Medicine & Practice',
            'Preventive Medicine',
            'Regenerative Medicine',
            'Medical Diagnostics',
            'Pharmacology & Drug Development',
            'Internal Medicine',
            'Emergency Medicine',
            'Medical Education & Training'
        ],
        audience: [
            'General Practitioners',
            'Medical Researchers',
            'Clinical Scientists',
            'Hospital Physicians',
            'Medical Educators',
            'Healthcare Administrators',
            'Medical Students',
            'Pharmaceutical Researchers'
        ],
        deadlines: {
            abstract: 'August 15, 2026',
            notification: 'September 5, 2026',
            early: 'September 25, 2026',
            conference: 'October 15-17, 2026'
        },
        venue: 'Paris Convention Center, Paris, France + Virtual via Zoom'
    },
    'traditional-energy': {
        category: 'Energy',
        title: 'Traditional Energy Summit 2026',
        subtitle: 'Oil, Gas & Energy Transition Conference',
        date: 'April 12-14, 2026',
        location: 'Virtual Event',
        mode: 'Virtual',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920',
        description: 'The Traditional Energy Summit focuses on energy transition, fossil fuels, carbon capture, and sustainable practices in the traditional energy sector.',
        objectives: [
            'Discuss energy transition strategies',
            'Explore carbon capture technologies',
            'Address fossil fuel sustainability',
            'Plan for future energy mix'
        ],
        topics: [
            'Oil & Gas Industry',
            'Energy Transition',
            'Carbon Capture & Storage',
            'Fossil Fuel Efficiency',
            'Natural Gas Technologies',
            'Petroleum Engineering',
            'Energy Security',
            'Sustainable Practices in Traditional Energy'
        ],
        audience: [
            'Energy Industry Professionals',
            'Petroleum Engineers',
            'Energy Policy Makers',
            'Oil & Gas Executives',
            'Environmental Consultants',
            'Energy Economists',
            'Research Scientists',
            'Government Officials'
        ],
        deadlines: {
            abstract: 'February 28, 2026',
            notification: 'March 15, 2026',
            early: 'March 30, 2026',
            conference: 'April 12-14, 2026'
        },
        venue: 'Virtual Event via Zoom Platform'
    }
};

// Get conference type from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const confType = urlParams.get('conf') || 'healthcare';
const conf = conferences[confType] || conferences['healthcare'];

// Update page content
document.getElementById('confCategory').textContent = conf.category;
document.getElementById('confTitle').textContent = conf.title;
document.getElementById('confSubtitle').textContent = conf.subtitle;
document.getElementById('confDate').textContent = '📅 ' + conf.date;
document.getElementById('confLocation').textContent = '📍 ' + conf.location;
document.getElementById('confMode').textContent = '🌐 ' + conf.mode;
document.getElementById('confDescription').textContent = conf.description;

// Update objectives
const objectivesList = document.getElementById('confObjectives');
objectivesList.innerHTML = '';
conf.objectives.forEach(obj => {
    const li = document.createElement('li');
    li.textContent = obj;
    objectivesList.appendChild(li);
});

// Update topics
const topicsList = document.getElementById('confTopics');
topicsList.innerHTML = '';
conf.topics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = topic;
    topicsList.appendChild(li);
});

// Update audience
const audienceList = document.getElementById('confAudience');
audienceList.innerHTML = '';
conf.audience.forEach(aud => {
    const li = document.createElement('li');
    li.textContent = aud;
    audienceList.appendChild(li);
});

// Update deadlines
document.getElementById('deadlineAbstract').textContent = conf.deadlines.abstract;
document.getElementById('deadlineNotification').textContent = conf.deadlines.notification;
document.getElementById('deadlineEarly').textContent = conf.deadlines.early;
document.getElementById('deadlineConf').textContent = conf.deadlines.conference;

// Update venue
document.getElementById('venueDetails').innerHTML = '<strong>' + conf.venue + '</strong>';

// Update page title
document.title = conf.title + ' - SCIENGA SUMMITS';

console.log('%cSCIENGA SUMMITS', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cConference Details', 'color: #8b5cf6; font-size: 12px;');

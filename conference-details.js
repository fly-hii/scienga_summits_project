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
            'Digital Health & Telemedicine'
        ],
        audience: [
            'Healthcare Professionals & Physicians',
            'Medical Researchers & Scientists',
            'Clinicians & Practitioners',
            'Nurses & Healthcare Workers',
            'Hospital Administrators',
            'Medical Students & Residents'
        ],
        deadlines: {
            abstract: 'July 15, 2026',
            notification: 'August 20, 2026',
            early: 'September 30, 2026',
            conference: 'November 9-11, 2026'
        },
        venue: 'Hong Kong Convention Center, 1 Expo Drive, Wan Chai, Hong Kong SAR + Virtual via Zoom'
    },
    'energy': {
        category: 'Energy',
        title: 'Renewable Energy 2026',
        subtitle: '4th International Conference on Renewable & Non-Renewable Energy',
        date: 'March 9, 2026',
        location: 'Virtual Event',
        mode: 'Virtual',
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
            'Energy Policy & Economics'
        ],
        audience: [
            'Energy Researchers',
            'Industry Professionals',
            'Policy Makers',
            'Environmental Scientists',
            'Engineers & Technologists',
            'Students & Academics'
        ],
        deadlines: {
            abstract: 'January 20, 2026',
            notification: 'February 10, 2026',
            early: 'February 25, 2026',
            conference: 'March 9, 2026'
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

// ============================================
// BADGESWALLET - Main JavaScript Logic
// ============================================

// === STATE MANAGEMENT ===
let currentFilter = 'all';
let currentView = 'grid';
let currentSearch = '';

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    animateStats();
    renderBadges(badgesData);
    setupEventListeners();
    populateDashboard();
}

// === STATS ANIMATION ===
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        animateValue(stat, 0, target, 1500);
    });
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
    
    // Category filters
    const filterButtons = document.querySelectorAll('.chip');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', handleViewToggle);
    });
}

function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    filterAndRenderBadges();
}

function handleFilterClick(e) {
    const button = e.currentTarget;
    const category = button.getAttribute('data-category');
    
    // Update active state
    document.querySelectorAll('.chip').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    currentFilter = category;
    filterAndRenderBadges();
}

function handleViewToggle(e) {
    const button = e.currentTarget;
    const view = button.getAttribute('data-view');
    
    // Update active state
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    currentView = view;
    updateViewClass();
}

function updateViewClass() {
    const container = document.getElementById('badges-container');
    if (currentView === 'list') {
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
    }
}

// === FILTERING ===
function filterAndRenderBadges() {
    let filtered = badgesData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(badge => 
            badge.category === currentFilter || 
            badge.categories.some(cat => cat.toLowerCase().includes(currentFilter))
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(badge => 
            badge.title.toLowerCase().includes(currentSearch) ||
            badge.provider.toLowerCase().includes(currentSearch) ||
            badge.skills.some(skill => skill.toLowerCase().includes(currentSearch)) ||
            badge.categories.some(cat => cat.toLowerCase().includes(currentSearch))
        );
    }
    
    renderBadges(filtered);
}

// === RENDERING ===
function renderBadges(badges) {
    const container = document.getElementById('badges-container');
    const noResults = document.getElementById('no-results');
    
    if (badges.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = badges.map(badge => createBadgeCard(badge)).join('');
}

function createBadgeCard(badge) {
    const logoUrl = providerLogos[badge.logo] || providerLogos['python'];
    
    return `
        <div class="badge-card">
            <div class="card-inner">
                <!-- FRONT -->
                <div class="card-front">
                    <div class="card-provider">
                        <img src="${logoUrl}" alt="${badge.provider}" />
                    </div>
                    <h3 class="card-title">${badge.title}</h3>
                    <span class="card-type">${badge.type}</span>
                    <div class="card-category">
                        ${badge.categories.slice(0, 2).map(cat => 
                            `<span class="category-tag">${cat}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <!-- BACK -->
                <div class="card-back">
                    <div class="card-skills">
                        <h4>Skills Covered</h4>
                        <div class="skills-list">
                            ${badge.skills.slice(0, 4).map(skill => 
                                `<span class="skill-tag">${skill}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="card-meta">
                        <div class="meta-row">
                            <span class="meta-label">Provider</span>
                            <span class="meta-value">${badge.provider}</span>
                        </div>
                        <div class="meta-row">
                            <span class="meta-label">Issued</span>
                            <span class="meta-value">${formatDate(badge.issued)}</span>
                        </div>
                        <a href="${badge.credentialUrl}" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="verify-btn"
                           onclick="event.stopPropagation()">
                            Verify Credential
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const [year, month] = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
}

// === DASHBOARD POPULATION ===
function populateDashboard() {
    populateProviderStats();
    populateTimeline();
    populateSkillsChart();
}

function populateProviderStats() {
    const providers = {};
    
    badgesData.forEach(badge => {
        providers[badge.provider] = (providers[badge.provider] || 0) + 1;
    });
    
    const sortedProviders = Object.entries(providers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    const html = sortedProviders.map(([provider, count]) => `
        <div class="provider-item">
            <span class="provider-name">${provider}</span>
            <span class="provider-count">${count}</span>
        </div>
    `).join('');
    
    document.getElementById('provider-stats').innerHTML = html;
}

function populateTimeline() {
    const recent = [...badgesData]
        .sort((a, b) => b.issued.localeCompare(a.issued))
        .slice(0, 5);
    
    const html = recent.map(badge => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(badge.issued)}</div>
            <div class="timeline-content">
                <div class="timeline-title">${badge.title}</div>
                <div class="timeline-provider">${badge.provider}</div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('recent-timeline').innerHTML = html;
}

function populateSkillsChart() {
    const skillCategories = {
        'Cybersecurity': 0,
        'Cloud Computing': 0,
        'Software Development': 0,
        'Data & Analytics': 0,
        'Linux & Systems': 0
    };
    
    badgesData.forEach(badge => {
        if (badge.category === 'cybersecurity') skillCategories['Cybersecurity']++;
        if (badge.category === 'cloud') skillCategories['Cloud Computing']++;
        if (badge.category === 'development') skillCategories['Software Development']++;
        if (badge.category === 'data') skillCategories['Data & Analytics']++;
        if (badge.category === 'linux') skillCategories['Linux & Systems']++;
    });
    
    const maxValue = Math.max(...Object.values(skillCategories));
    
    const html = Object.entries(skillCategories).map(([skill, count]) => {
        const percentage = (count / maxValue) * 100;
        return `
            <div class="skill-bar">
                <div class="skill-bar-header">
                    <span>${skill}</span>
                    <span>${count}</span>
                </div>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('skills-chart').innerHTML = html;
}

// === UTILITY FUNCTIONS ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🎓 BadgesWallet loaded successfully!');
console.log(`📊 Total certifications: ${badgesData.length}`);

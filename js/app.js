        // Data Models and Storage
        class DataManager {
            constructor() {
                this.users = JSON.parse(localStorage.getItem('roombooker_users')) || [];
                this.rooms = JSON.parse(localStorage.getItem('roombooker_rooms')) || [];
                this.bookings = JSON.parse(localStorage.getItem('roombooker_bookings')) || [];
                this.currentUser = JSON.parse(localStorage.getItem('roombooker_currentUser')) || null;
                
                this.initializeSampleData();
            }
            
            initializeSampleData() {
                if (this.rooms.length === 0) {
                    this.rooms = [
                        {
                            id: 1,
                            name: "Conference Room A",
                            location: "Floor 1, West Wing",
                            capacity: 10,
                            features: ["Projector", "Whiteboard", "Video Conferencing"],
                            image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                        },
                        {
                            id: 2,
                            name: "Conference Room B",
                            location: "Floor 2, East Wing",
                            capacity: 6,
                            features: ["Monitor", "Whiteboard"],
                            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 3,
                            name: "Executive Boardroom",
                            location: "Floor 3, Executive Suite",
                            capacity: 20,
                            features: ["Projector", "Video Conferencing", "Monitor", "Sound System"],
                            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 4,
                            name: "Team Collaboration Room",
                            location: "Floor 1, Collaboration Zone",
                            capacity: 8,
                            features: ["Whiteboard", "Monitor"],
                            image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 5,
                            name: "Innovation Lab",
                            location: "Floor 2, R&D Wing",
                            capacity: 15,
                            features: ["Projector", "Whiteboard", "Video Conferencing", "Sound System"],
                            image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 6,
                            name: "Focus Room",
                            location: "Floor 1, Quiet Zone",
                            capacity: 4,
                            features: ["Monitor"],
                            image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 7,
                            name: "Training Room",
                            location: "Floor 2, Learning Center",
                            capacity: 25,
                            features: ["Projector", "Whiteboard", "Sound System", "Teleconference"],
                            image: "https://images.unsplash.com/photo-1531498860502-7c67cf02c45f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            id: 8,
                            name: "Huddle Room",
                            location: "Floor 1, Collaboration Zone",
                            capacity: 6,
                            features: ["Monitor", "Whiteboard"],
                            image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        }
                    ];
                    this.saveRooms();
                }
                
                if (this.users.length === 0) {
                    this.users = [
                        {
                            id: 1,
                            name: "John Doe",
                            email: "john@example.com",
                            password: "password123",
                            department: "Engineering",
                            avatar: "JD"
                        },
                        {
                            id: 2,
                            name: "Jane Smith",
                            email: "jane@example.com",
                            password: "password123",
                            department: "Marketing",
                            avatar: "JS"
                        }
                    ];
                    this.saveUsers();
                }
                
                if (this.bookings.length === 0) {
                    const today = new Date();
                    const tomorrow = new Date(today);
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    
                    const nextWeek = new Date(today);
                    nextWeek.setDate(nextWeek.getDate() + 7);
                    
                    this.bookings = [
                        {
                            id: 1,
                            userId: 1,
                            roomId: 1,
                            title: "Weekly Team Meeting",
                            date: this.formatDate(today),
                            startTime: "10:00",
                            endTime: "11:00",
                            attendees: 8,
                            notes: "Bring project updates",
                            status: "confirmed",
                            createdAt: new Date().toISOString()
                        },
                        {
                            id: 2,
                            userId: 1,
                            roomId: 3,
                            title: "Client Presentation",
                            date: this.formatDate(tomorrow),
                            startTime: "14:00",
                            endTime: "15:30",
                            attendees: 12,
                            notes: "Important client demo",
                            status: "confirmed",
                            createdAt: new Date().toISOString()
                        },
                        {
                            id: 3,
                            userId: 1,
                            roomId: 4,
                            title: "Project Planning",
                            date: this.formatDate(nextWeek),
                            startTime: "13:00",
                            endTime: "14:30",
                            attendees: 6,
                            notes: "Q2 planning session",
                            status: "confirmed",
                            createdAt: new Date().toISOString()
                        }
                    ];
                    this.saveBookings();
                }
            }
            
            // User management
            registerUser(userData) {
                const newUser = {
                    id: this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1,
                    ...userData,
                    avatar: userData.name.split(' ').map(n => n[0]).join('')
                };
                
                this.users.push(newUser);
                this.saveUsers();
                return newUser;
            }
            
            loginUser(email, password) {
                return this.users.find(user => user.email === email && user.password === password);
            }
            
            setCurrentUser(user) {
                this.currentUser = user;
                localStorage.setItem('roombooker_currentUser', JSON.stringify(user));
            }
            
            logoutUser() {
                this.currentUser = null;
                localStorage.removeItem('roombooker_currentUser');
            }
            
            // Room management
            getRooms() {
                return this.rooms;
            }
            
            getRoomById(id) {
                return this.rooms.find(room => room.id === id);
            }
            
            // Booking management
            createBooking(bookingData) {
                const newBooking = {
                    id: this.bookings.length > 0 ? Math.max(...this.bookings.map(b => b.id)) + 1 : 1,
                    ...bookingData,
                    status: "confirmed",
                    createdAt: new Date().toISOString()
                };
                
                this.bookings.push(newBooking);
                this.saveBookings();
                return newBooking;
            }
            
            getUserBookings(userId) {
                return this.bookings.filter(booking => booking.userId === userId);
            }
            
            getBookingsForRoom(roomId, date) {
                return this.bookings.filter(booking => 
                    booking.roomId === roomId && 
                    booking.date === date &&
                    booking.status === "confirmed"
                );
            }
            
            cancelBooking(bookingId) {
                const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
                if (bookingIndex !== -1) {
                    this.bookings[bookingIndex].status = "cancelled";
                    this.saveBookings();
                    return true;
                }
                return false;
            }
            
            updateBooking(bookingId, updates) {
                const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
                if (bookingIndex !== -1) {
                    this.bookings[bookingIndex] = { ...this.bookings[bookingIndex], ...updates };
                    this.saveBookings();
                    return this.bookings[bookingIndex];
                }
                return null;
            }
            
            // Check room availability
            isRoomAvailable(roomId, date, startTime, endTime, excludeBookingId = null) {
                const bookings = this.getBookingsForRoom(roomId, date);
                
                for (const booking of bookings) {
                    if (excludeBookingId && booking.id === excludeBookingId) continue;
                    
                    if (this.timeOverlaps(startTime, endTime, booking.startTime, booking.endTime)) {
                        return false;
                    }
                }
                
                return true;
            }
            
            timeOverlaps(start1, end1, start2, end2) {
                return (start1 < end2 && end1 > start2);
            }
            
            // Find available rooms
            findAvailableRooms(date, startTime, endTime, capacity = 1, features = []) {
                return this.rooms.filter(room => {
                    // Check capacity
                    if (room.capacity < capacity) return false;
                    
                    // Check features
                    if (features.length > 0) {
                        const hasAllFeatures = features.every(feature => 
                            room.features.includes(feature)
                        );
                        if (!hasAllFeatures) return false;
                    }
                    
                    // Check availability
                    return this.isRoomAvailable(room.id, date, startTime, endTime);
                });
            }
            
            // Utility methods
            formatDate(date) {
                return date.toISOString().split('T')[0];
            }
            
            // Save methods
            saveUsers() {
                localStorage.setItem('roombooker_users', JSON.stringify(this.users));
            }
            
            saveRooms() {
                localStorage.setItem('roombooker_rooms', JSON.stringify(this.rooms));
            }
            
            saveBookings() {
                localStorage.setItem('roombooker_bookings', JSON.stringify(this.bookings));
            }
        }

        // UI Manager
        class UIManager {
            constructor(dataManager) {
                this.dataManager = dataManager;
                this.setupEventListeners();
                this.init();
            }
            
            init() {
                this.updateUI();
                this.renderDashboard();
                this.renderRooms();
                this.renderBookings();
                
                // Set minimum date for date inputs to today
                const today = new Date().toISOString().split('T')[0];
                document.getElementById('booking-date').min = today;
                document.getElementById('search-date').min = today;
                document.getElementById('quick-date').min = today;
                document.getElementById('date-filter').min = today;
                
                // Set default time to next hour
                const nextHour = new Date();
                nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
                const timeString = nextHour.toTimeString().substring(0, 5);
                
                document.getElementById('start-time').value = timeString;
                document.getElementById('search-start-time').value = timeString;
                document.getElementById('quick-start-time').value = timeString;
                
                // Set end time to next hour + 1
                nextHour.setHours(nextHour.getHours() + 1);
                const endTimeString = nextHour.toTimeString().substring(0, 5);
                document.getElementById('end-time').value = endTimeString;
                document.getElementById('search-end-time').value = endTimeString;
            }
            
            setupEventListeners() {
                // Menu toggle
                document.getElementById('menu-toggle').addEventListener('click', () => {
                    document.getElementById('sidebar').classList.toggle('active');
                });
                
                // Navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const sectionId = link.getAttribute('data-section');
                        this.showSection(sectionId);
                        
                        // Update active nav link
                        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
                        link.classList.add('active');
                        
                        // Close sidebar on mobile after navigation
                        if (window.innerWidth <= 768) {
                            document.getElementById('sidebar').classList.remove('active');
                        }
                    });
                });
                
                // Quick actions
                document.querySelectorAll('[data-section]').forEach(btn => {
                    if (btn.getAttribute('data-section')) {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            this.showSection(btn.getAttribute('data-section'));
                        });
                    }
                });
                
                // Authentication
                document.getElementById('login-btn').addEventListener('click', () => {
                    this.showModal('login-modal');
                });
                
                document.getElementById('register-btn').addEventListener('click', () => {
                    this.showModal('register-modal');
                });
                
                document.getElementById('sidebar-logout').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
                
                document.getElementById('quick-book-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showModal('quick-book-modal');
                });
                
                document.getElementById('quick-book-action').addEventListener('click', () => {
                    this.showModal('quick-book-modal');
                });
                
                // Modal controls
                document.querySelectorAll('.close-modal').forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.hideAllModals();
                    });
                });
                
                document.getElementById('switch-to-register').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.hideAllModals();
                    this.showModal('register-modal');
                });
                
                document.getElementById('switch-to-login').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.hideAllModals();
                    this.showModal('login-modal');
                });
                
                // Form submissions
                document.getElementById('login-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleLogin();
                });
                
                document.getElementById('register-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleRegister();
                });
                
                document.getElementById('booking-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleBooking();
                });
                
                document.getElementById('quick-book-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleQuickBook();
                });
                
                // Cancel booking
                document.getElementById('cancel-booking').addEventListener('click', () => {
                    this.showSection('rooms');
                });
                
                // Tabs
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        const tabId = tab.getAttribute('data-tab');
                        
                        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                        
                        tab.classList.add('active');
                        document.getElementById(`${tabId}-bookings`).classList.add('active');
                    });
                });
                
                // Filters
                document.getElementById('apply-filters').addEventListener('click', () => {
                    this.renderRooms();
                });
                
                document.getElementById('clear-filters').addEventListener('click', () => {
                    document.getElementById('capacity-filter').value = '0';
                    document.getElementById('feature-filter').value = 'all';
                    document.getElementById('date-filter').value = '';
                    document.getElementById('time-filter').value = '';
                    this.renderRooms();
                });
                
                // Find room
                document.getElementById('search-rooms').addEventListener('click', () => {
                    this.handleRoomSearch();
                });
            }
            
            // UI Update Methods
            updateUI() {
                const userInfo = document.getElementById('user-info');
                const authButtons = document.getElementById('auth-buttons');
                
                if (this.dataManager.currentUser) {
                    userInfo.style.display = 'flex';
                    authButtons.style.display = 'none';
                    document.getElementById('user-name').textContent = this.dataManager.currentUser.name;
                    document.getElementById('user-avatar').textContent = this.dataManager.currentUser.avatar;
                } else {
                    userInfo.style.display = 'none';
                    authButtons.style.display = 'flex';
                }
            }
            
            showSection(sectionId) {
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(sectionId).classList.add('active');
            }
            
            showModal(modalId) {
                this.hideAllModals();
                document.getElementById(modalId).classList.add('active');
            }
            
            hideAllModals() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
            
            showToast(message, type = 'success') {
                const toast = document.getElementById('toast');
                const toastTitle = document.getElementById('toast-title');
                const toastMessage = document.getElementById('toast-message');
                
                toast.className = `toast ${type}`;
                toastTitle.textContent = type === 'success' ? 'Success!' : 'Error!';
                toastMessage.textContent = message;
                
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
            
            // Render Methods
            renderDashboard() {
                this.renderStats();
                this.renderRecentBookings();
                this.renderFeaturedRooms();
            }
            
            renderStats() {
                const statsGrid = document.getElementById('stats-grid');
                if (!statsGrid) return;
                
                const userBookings = this.dataManager.currentUser ? 
                    this.dataManager.getUserBookings(this.dataManager.currentUser.id) : [];
                
                const upcomingBookings = userBookings.filter(booking => {
                    const bookingDate = new Date(booking.date);
                    const today = new Date();
                    return bookingDate >= today && booking.status === 'confirmed';
                });
                
                const availableRooms = this.dataManager.getRooms().length;
                
                statsGrid.innerHTML = `
                    <div class="stat-card stat-1">
                        <div class="stat-icon">
                            <i class="fas fa-door-open"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${availableRooms}</h3>
                            <p>Available Rooms</p>
                        </div>
                    </div>
                    <div class="stat-card stat-2">
                        <div class="stat-icon">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${upcomingBookings.length}</h3>
                            <p>Upcoming Bookings</p>
                        </div>
                    </div>
                    <div class="stat-card stat-3">
                        <div class="stat-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${this.dataManager.users.length}</h3>
                            <p>Registered Users</p>
                        </div>
                    </div>
                    <div class="stat-card stat-4">
                        <div class="stat-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="stat-info">
                            <h3>72%</h3>
                            <p>Room Utilization</p>
                        </div>
                    </div>
                `;
            }
            
            renderRecentBookings() {
                const recentBookings = document.getElementById('recent-bookings');
                if (!recentBookings) return;
                
                if (!this.dataManager.currentUser) {
                    recentBookings.innerHTML = '<p class="text-center">Please log in to view your bookings.</p>';
                    return;
                }
                
                const userBookings = this.dataManager.getUserBookings(this.dataManager.currentUser.id);
                const recent = userBookings
                    .filter(booking => booking.status === 'confirmed')
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 3);
                
                if (recent.length === 0) {
                    recentBookings.innerHTML = '<p class="text-center">You have no recent bookings.</p>';
                    return;
                }
                
                recentBookings.innerHTML = recent.map(booking => {
                    const room = this.dataManager.getRoomById(booking.roomId);
                    return `
                        <div class="booking-item">
                            <div class="booking-info">
                                <h3>${booking.title}</h3>
                                <div class="booking-meta">
                                    <span><i class="fas fa-door-open"></i> ${room ? room.name : 'Unknown Room'}</span>
                                    <span><i class="fas fa-calendar"></i> ${booking.date}</span>
                                    <span><i class="fas fa-clock"></i> ${booking.startTime} - ${booking.endTime}</span>
                                </div>
                            </div>
                            <div class="booking-actions">
                                <button class="btn btn-outline btn-sm view-booking" data-booking-id="${booking.id}">
                                    <i class="fas fa-eye"></i> View
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');
                
                // Add event listeners to view buttons
                recentBookings.querySelectorAll('.view-booking').forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.showSection('my-bookings');
                    });
                });
            }
            
            renderFeaturedRooms() {
                const featuredRooms = document.getElementById('featured-rooms');
                if (!featuredRooms) return;
                
                const rooms = this.dataManager.getRooms().slice(0, 3);
                featuredRooms.innerHTML = rooms.map(room => this.createRoomCard(room)).join('');
                
                // Add event listeners to book buttons
                featuredRooms.querySelectorAll('.book-room').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const roomId = parseInt(btn.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
                
                // Add event listeners to room cards
                featuredRooms.querySelectorAll('.room-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const roomId = parseInt(card.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
            }
            
            renderRooms() {
                const allRooms = document.getElementById('all-rooms');
                if (!allRooms) return;
                
                // Get filter values
                const capacityValue = parseInt(document.getElementById('capacity-filter').value);
                const featureValue = document.getElementById('feature-filter').value;
                const dateValue = document.getElementById('date-filter').value;
                const timeValue = document.getElementById('time-filter').value;
                
                let rooms = this.dataManager.getRooms();
                
                // Apply filters
                if (capacityValue > 0) {
                    rooms = rooms.filter(room => room.capacity >= capacityValue);
                }
                
                if (featureValue !== 'all') {
                    rooms = rooms.filter(room => room.features.includes(featureValue));
                }
                
                if (dateValue && timeValue) {
                    // For demo purposes, we'll just mark some rooms as unavailable
                    rooms = rooms.map(room => {
                        // Simulate availability check - in real app, this would check against actual bookings
                        const isAvailable = Math.random() > 0.3;
                        return { ...room, available: isAvailable };
                    });
                }
                
                if (rooms.length === 0) {
                    allRooms.innerHTML = '<div class="card text-center"><p>No rooms match your filters. Try adjusting your criteria.</p></div>';
                    return;
                }
                
                allRooms.innerHTML = rooms.map(room => this.createRoomCard(room)).join('');
                
                // Add event listeners to book buttons
                allRooms.querySelectorAll('.book-room').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const roomId = parseInt(btn.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
                
                // Add event listeners to room cards
                allRooms.querySelectorAll('.room-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const roomId = parseInt(card.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
            }
            
            createRoomCard(room) {
                const isAvailable = room.available !== false; // Default to available if not set
                
                return `
                    <div class="room-card" data-room-id="${room.id}">
                        <div class="room-image">
                            ${room.image ? 
                                `<img src="${room.image}" alt="${room.name}" loading="lazy">` : 
                                `<div class="room-image-placeholder">
                                    <i class="fas fa-door-closed"></i>
                                </div>`
                            }
                        </div>
                        <div class="room-content">
                            <h3 class="room-title">${room.name}</h3>
                            <div class="room-meta">
                                <span><i class="fas fa-map-marker-alt"></i> ${room.location}</span>
                                <span><i class="fas fa-users"></i> ${room.capacity} people</span>
                            </div>
                            <div class="room-features">
                                ${room.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                            </div>
                            <div class="room-footer">
                                <div class="availability ${isAvailable ? 'available' : 'unavailable'}">
                                    <span class="availability-dot"></span>
                                    ${isAvailable ? 'Available' : 'Unavailable'}
                                </div>
                                <button class="btn btn-primary btn-sm book-room" data-room-id="${room.id}" ${!isAvailable || !this.dataManager.currentUser ? 'disabled' : ''}>
                                    ${!this.dataManager.currentUser ? 'Login to Book' : (isAvailable ? 'Book Now' : 'Unavailable')}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            showRoomDetails(roomId) {
                const room = this.dataManager.getRoomById(roomId);
                if (!room) return;
                
                document.getElementById('room-details-title').textContent = room.name;
                document.getElementById('room-details-subtitle').textContent = `Book ${room.name} for your meeting`;
                document.getElementById('selected-room-name').textContent = room.name;
                document.getElementById('selected-room-location').textContent = room.location;
                document.getElementById('selected-room-capacity').textContent = room.capacity;
                
                const featuresContainer = document.getElementById('selected-room-features');
                featuresContainer.innerHTML = room.features.map(feature => 
                    `<span class="feature-tag">${feature}</span>`
                ).join('');
                
                // Set room image
                const roomImage = document.getElementById('room-details-img');
                const placeholder = document.getElementById('room-details-placeholder');
                
                if (room.image) {
                    roomImage.src = room.image;
                    roomImage.alt = room.name;
                    roomImage.style.display = 'block';
                    placeholder.style.display = 'none';
                } else {
                    roomImage.style.display = 'none';
                    placeholder.style.display = 'flex';
                }
                
                // Set the room ID in the form for reference
                document.getElementById('booking-form').setAttribute('data-room-id', room.id);
                
                // Check availability
                const dateInput = document.getElementById('booking-date');
                const startTimeInput = document.getElementById('start-time');
                
                if (dateInput.value && startTimeInput.value) {
                    this.checkRoomAvailability(room.id, dateInput.value, startTimeInput.value, document.getElementById('end-time').value);
                }
                
                this.showSection('room-details');
            }
            
            checkRoomAvailability(roomId, date, startTime, endTime) {
                const isAvailable = this.dataManager.isRoomAvailable(roomId, date, startTime, endTime);
                const availabilityElement = document.getElementById('room-availability-text');
                const availabilityDot = document.querySelector('.availability .availability-dot');
                const availabilityContainer = document.querySelector('.availability');
                
                if (isAvailable) {
                    availabilityElement.textContent = 'Available for booking';
                    availabilityContainer.className = 'availability available';
                } else {
                    availabilityElement.textContent = 'Not available at selected time';
                    availabilityContainer.className = 'availability unavailable';
                }
                
                return isAvailable;
            }
            
            renderBookings() {
                this.renderUpcomingBookings();
                this.renderPastBookings();
            }
            
            renderUpcomingBookings() {
                const upcomingBookings = document.getElementById('upcoming-bookings');
                if (!upcomingBookings) return;
                
                if (!this.dataManager.currentUser) {
                    upcomingBookings.innerHTML = '<div class="card text-center"><p>Please log in to view your bookings.</p></div>';
                    return;
                }
                
                const userBookings = this.dataManager.getUserBookings(this.dataManager.currentUser.id);
                const upcoming = userBookings.filter(booking => {
                    const bookingDate = new Date(booking.date);
                    const today = new Date();
                    return bookingDate >= today && booking.status === 'confirmed';
                }).sort((a, b) => new Date(a.date) - new Date(b.date));
                
                if (upcoming.length === 0) {
                    upcomingBookings.innerHTML = '<div class="card text-center"><p>You have no upcoming bookings.</p></div>';
                    return;
                }
                
                upcomingBookings.innerHTML = upcoming.map(booking => {
                    const room = this.dataManager.getRoomById(booking.roomId);
                    return `
                        <div class="booking-item">
                            <div class="booking-info">
                                <h3>${booking.title}</h3>
                                <div class="booking-meta">
                                    <span><i class="fas fa-door-open"></i> ${room ? room.name : 'Unknown Room'}</span>
                                    <span><i class="fas fa-calendar"></i> ${booking.date}</span>
                                    <span><i class="fas fa-clock"></i> ${booking.startTime} - ${booking.endTime}</span>
                                    <span><i class="fas fa-users"></i> ${booking.attendees} attendees</span>
                                </div>
                                ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
                            </div>
                            <div class="booking-actions">
                                <button class="btn btn-outline btn-sm edit-booking" data-booking-id="${booking.id}">
                                    <i class="fas fa-edit"></i> Edit
                                </button>
                                <button class="btn btn-danger btn-sm cancel-booking" data-booking-id="${booking.id}">
                                    <i class="fas fa-times"></i> Cancel
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');
                
                // Add event listeners
                upcomingBookings.querySelectorAll('.edit-booking').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const bookingId = parseInt(btn.getAttribute('data-booking-id'));
                        this.editBooking(bookingId);
                    });
                });
                
                upcomingBookings.querySelectorAll('.cancel-booking').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const bookingId = parseInt(btn.getAttribute('data-booking-id'));
                        this.cancelBooking(bookingId);
                    });
                });
            }
            
            renderPastBookings() {
                const pastBookings = document.getElementById('past-bookings');
                if (!pastBookings) return;
                
                if (!this.dataManager.currentUser) {
                    pastBookings.innerHTML = '<div class="card text-center"><p>Please log in to view your bookings.</p></div>';
                    return;
                }
                
                const userBookings = this.dataManager.getUserBookings(this.dataManager.currentUser.id);
                const past = userBookings.filter(booking => {
                    const bookingDate = new Date(booking.date);
                    const today = new Date();
                    return bookingDate < today || booking.status === 'cancelled';
                }).sort((a, b) => new Date(b.date) - new Date(a.date));
                
                if (past.length === 0) {
                    pastBookings.innerHTML = '<div class="card text-center"><p>You have no past bookings.</p></div>';
                    return;
                }
                
                pastBookings.innerHTML = past.map(booking => {
                    const room = this.dataManager.getRoomById(booking.roomId);
                    const isCancelled = booking.status === 'cancelled';
                    
                    return `
                        <div class="booking-item">
                            <div class="booking-info">
                                <h3>${booking.title} ${isCancelled ? '<span class="text-danger">(Cancelled)</span>' : ''}</h3>
                                <div class="booking-meta">
                                    <span><i class="fas fa-door-open"></i> ${room ? room.name : 'Unknown Room'}</span>
                                    <span><i class="fas fa-calendar"></i> ${booking.date}</span>
                                    <span><i class="fas fa-clock"></i> ${booking.startTime} - ${booking.endTime}</span>
                                    <span><i class="fas fa-users"></i> ${booking.attendees} attendees</span>
                                </div>
                                ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
                            </div>
                            <div class="booking-actions">
                                ${!isCancelled ? `<button class="btn btn-outline btn-sm rebook-booking" data-room-id="${booking.roomId}">
                                    <i class="fas fa-redo"></i> Rebook
                                </button>` : ''}
                            </div>
                        </div>
                    `;
                }).join('');
                
                // Add event listeners
                pastBookings.querySelectorAll('.rebook-booking').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const roomId = parseInt(btn.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
            }
            
            // Form Handlers
            handleLogin() {
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                // Reset errors
                this.hideErrors('login-form');
                
                let isValid = true;
                
                if (!email) {
                    this.showError('login-email-error', 'Email is required');
                    isValid = false;
                } else if (!this.isValidEmail(email)) {
                    this.showError('login-email-error', 'Please enter a valid email address');
                    isValid = false;
                }
                
                if (!password) {
                    this.showError('login-password-error', 'Password is required');
                    isValid = false;
                }
                
                if (!isValid) return;
                
                const user = this.dataManager.loginUser(email, password);
                if (user) {
                    this.dataManager.setCurrentUser(user);
                    this.updateUI();
                    this.hideAllModals();
                    this.renderDashboard();
                    this.renderBookings();
                    this.showToast('Login successful!');
                } else {
                    this.showError('login-password-error', 'Invalid email or password');
                }
            }
            
            handleRegister() {
                const name = document.getElementById('register-name').value.trim();
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('register-confirm-password').value;
                
                // Reset errors
                this.hideErrors('register-form');
                
                let isValid = true;
                
                if (!name) {
                    this.showError('register-name-error', 'Full name is required');
                    isValid = false;
                }
                
                if (!email) {
                    this.showError('register-email-error', 'Email is required');
                    isValid = false;
                } else if (!this.isValidEmail(email)) {
                    this.showError('register-email-error', 'Please enter a valid email address');
                    isValid = false;
                } else if (this.dataManager.users.find(u => u.email === email)) {
                    this.showError('register-email-error', 'Email is already registered');
                    isValid = false;
                }
                
                if (!password) {
                    this.showError('register-password-error', 'Password is required');
                    isValid = false;
                } else if (password.length < 8) {
                    this.showError('register-password-error', 'Password must be at least 8 characters');
                    isValid = false;
                }
                
                if (!confirmPassword) {
                    this.showError('register-confirm-password-error', 'Please confirm your password');
                    isValid = false;
                } else if (password !== confirmPassword) {
                    this.showError('register-confirm-password-error', 'Passwords do not match');
                    isValid = false;
                }
                
                if (!isValid) return;
                
                const newUser = this.dataManager.registerUser({
                    name: name,
                    email: email,
                    password: password,
                    department: 'General'
                });
                
                this.dataManager.setCurrentUser(newUser);
                this.updateUI();
                this.hideAllModals();
                this.renderDashboard();
                this.renderBookings();
                this.showToast('Registration successful!');
            }
            
            handleBooking() {
                if (!this.dataManager.currentUser) {
                    this.showToast('Please log in to book a room', 'error');
                    return;
                }
                
                const roomId = parseInt(document.getElementById('booking-form').getAttribute('data-room-id'));
                const title = document.getElementById('meeting-title').value.trim();
                const date = document.getElementById('booking-date').value;
                const startTime = document.getElementById('start-time').value;
                const endTime = document.getElementById('end-time').value;
                const attendees = parseInt(document.getElementById('attendees').value);
                const notes = document.getElementById('meeting-notes').value.trim();
                
                // Reset errors
                this.hideErrors('booking-form');
                
                let isValid = true;
                
                if (!title) {
                    this.showError('meeting-title-error', 'Meeting title is required');
                    isValid = false;
                }
                
                if (!date) {
                    this.showError('booking-date-error', 'Please select a date');
                    isValid = false;
                }
                
                if (!startTime) {
                    this.showError('start-time-error', 'Please select a start time');
                    isValid = false;
                }
                
                if (!endTime) {
                    this.showError('end-time-error', 'Please select an end time');
                    isValid = false;
                } else if (startTime && endTime && startTime >= endTime) {
                    this.showError('end-time-error', 'End time must be after start time');
                    isValid = false;
                }
                
                if (!attendees || attendees < 1) {
                    this.showError('attendees-error', 'Please enter a valid number of attendees');
                    isValid = false;
                } else {
                    const room = this.dataManager.getRoomById(roomId);
                    if (room && attendees > room.capacity) {
                        this.showError('attendees-error', `Number of attendees exceeds room capacity (${room.capacity})`);
                        isValid = false;
                    }
                }
                
                if (!isValid) return;
                
                // Check availability
                if (!this.dataManager.isRoomAvailable(roomId, date, startTime, endTime)) {
                    this.showToast('This room is not available at the selected time', 'error');
                    return;
                }
                
                const newBooking = this.dataManager.createBooking({
                    userId: this.dataManager.currentUser.id,
                    roomId: roomId,
                    title: title,
                    date: date,
                    startTime: startTime,
                    endTime: endTime,
                    attendees: attendees,
                    notes: notes
                });
                
                // Reset form
                document.getElementById('booking-form').reset();
                
                // Show success message and redirect
                this.showToast('Room booked successfully!');
                this.showSection('my-bookings');
                this.renderBookings();
                this.renderDashboard();
            }
            
            handleQuickBook() {
                const title = document.getElementById('quick-meeting-title').value.trim();
                const date = document.getElementById('quick-date').value;
                const startTime = document.getElementById('quick-start-time').value;
                const duration = parseInt(document.getElementById('quick-duration').value);
                const attendees = parseInt(document.getElementById('quick-attendees').value);
                
                // Calculate end time
                const start = new Date(`2000-01-01T${startTime}`);
                const end = new Date(start.getTime() + duration * 60000);
                const endTime = end.toTimeString().substring(0, 5);
                
                // Find available rooms
                const availableRooms = this.dataManager.findAvailableRooms(
                    date, startTime, endTime, attendees
                );
                
                if (availableRooms.length === 0) {
                    this.showToast('No rooms available for your criteria', 'error');
                    return;
                }
                
                // For demo purposes, just book the first available room
                const room = availableRooms[0];
                
                const newBooking = this.dataManager.createBooking({
                    userId: this.dataManager.currentUser.id,
                    roomId: room.id,
                    title: title,
                    date: date,
                    startTime: startTime,
                    endTime: endTime,
                    attendees: attendees,
                    notes: 'Quick booked'
                });
                
                this.hideAllModals();
                this.showToast(`Room "${room.name}" booked successfully!`);
                this.showSection('my-bookings');
                this.renderBookings();
                this.renderDashboard();
            }
            
            handleRoomSearch() {
                const date = document.getElementById('search-date').value;
                const startTime = document.getElementById('search-start-time').value;
                const endTime = document.getElementById('search-end-time').value;
                const capacity = parseInt(document.getElementById('search-capacity').value) || 1;
                const features = Array.from(document.getElementById('search-features').selectedOptions).map(opt => opt.value);
                
                if (!date || !startTime || !endTime) {
                    this.showToast('Please fill in date, start time, and end time', 'error');
                    return;
                }
                
                const availableRooms = this.dataManager.findAvailableRooms(
                    date, startTime, endTime, capacity, features
                );
                
                const searchResults = document.getElementById('search-results');
                
                if (availableRooms.length === 0) {
                    searchResults.innerHTML = '<div class="card text-center"><p>No rooms available for your criteria. Try adjusting your search.</p></div>';
                    return;
                }
                
                searchResults.innerHTML = availableRooms.map(room => this.createRoomCard(room)).join('');
                
                // Add event listeners to book buttons
                searchResults.querySelectorAll('.book-room').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const roomId = parseInt(btn.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
                
                // Add event listeners to room cards
                searchResults.querySelectorAll('.room-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const roomId = parseInt(card.getAttribute('data-room-id'));
                        this.showRoomDetails(roomId);
                    });
                });
            }
            
            editBooking(bookingId) {
                // For simplicity, we'll just cancel and let user rebook
                // In a real app, you would have a proper edit form
                if (confirm('To edit this booking, you need to cancel it and create a new one. Would you like to cancel this booking?')) {
                    this.cancelBooking(bookingId);
                }
            }
            
            cancelBooking(bookingId) {
                if (confirm('Are you sure you want to cancel this booking?')) {
                    if (this.dataManager.cancelBooking(bookingId)) {
                        this.showToast('Booking cancelled successfully');
                        this.renderBookings();
                        this.renderDashboard();
                    } else {
                        this.showToast('Failed to cancel booking', 'error');
                    }
                }
            }
            
            logout() {
                this.dataManager.logoutUser();
                this.updateUI();
                this.showSection('dashboard');
                this.showToast('You have been logged out');
            }
            
            // Utility Methods
            isValidEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            showError(errorId, message) {
                const errorElement = document.getElementById(errorId);
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
            
            hideErrors(formId) {
                const form = document.getElementById(formId);
                form.querySelectorAll('.error-message').forEach(error => {
                    error.style.display = 'none';
                });
            }
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', () => {
            const dataManager = new DataManager();
            const uiManager = new UIManager(dataManager);
            
            // Make managers globally available for debugging
            window.dataManager = dataManager;
            window.uiManager = uiManager;
        });

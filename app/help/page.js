"use client";

import React, { useState, useEffect } from 'react';
import './geth.css'; // custom CSS

// Helper component for SVG icons
const Icon = ({ d, children }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
        {children}
    </svg>
);


export default function App() {
    const [step, setStep] = useState(1);

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState('');

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');

    const [therapyDate, setTherapyDate] = useState('');
    const [therapyTime, setTherapyTime] = useState('');
    const [therapyMode, setTherapyMode] = useState('');

    const [counselors, setCounselors] = useState([]);
    const [selectedCounselor, setSelectedCounselor] = useState(null);
    
    // Helper function to generate time slots
    const generateTimeSlots = () => {
        const slots = [];
        for (let i = 6; i <= 22; i++) { // From 6:00 AM to 10:00 PM
            const hour = i.toString().padStart(2, '0');
            slots.push(`${hour}:00`);
            slots.push(`${hour}:30`);
        }
        slots.push("23:00"); // Add 11:00 PM
        return slots;
    };
    const timeSlots = generateTimeSlots();

    useEffect(() => {
        localStorage.clear();
    }, []);

    // College search
    useEffect(() => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }
        const timeout = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/colleges', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query }),
                });
                const data = await res.json();
                setSuggestions(data.length ? data.slice(0, 10) : ['No college found']);
            } catch {
                setSuggestions(['No college found']);
            } finally {
                setLoading(false);
            }
        }, 300);
        return () => clearTimeout(timeout);
    }, [query]);

    const handleSelectCollege = (name) => {
        if (name === 'No college found') return;
        setQuery(name);
        setSelectedCollege(name);
        setSuggestions([]);
    };

    const proceedToLogin = () => {
        if (!selectedCollege) return alert('Please select a college first!');
        localStorage.setItem('selectedCollege', selectedCollege);
        setStep(2);
    };

    const saveUserData = () => {
        if (!name || !year || !branch) return alert('All fields are mandatory!');
        const userData = { college: selectedCollege, name, year, branch };
        localStorage.setItem('userData', JSON.stringify(userData));
        setStep(3);
    };

    const saveTherapySession = () => {
        if (!therapyDate || !therapyTime || !therapyMode) return alert('All fields are mandatory!');
        const today = new Date();
        const selected = new Date(therapyDate);
        selected.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        if (selected < today) return alert('Please select today or a future date!');

        const therapyData = { therapyDate, therapyTime, therapyMode };
        localStorage.setItem('therapySession', JSON.stringify(therapyData));

        if (therapyMode === 'Online') {
            const fetchedCounselors = [
                { id: 1, name: 'Dr. Asha Sharma', specialization: 'Anxiety & Stress Management', avatar: '👩‍⚕️' },
                { id: 2, name: 'Dr. Rajesh Kumar', specialization: 'Depression & Grief Counseling', avatar: '👨‍⚕️' },
                { id: 3, name: 'Dr. Priya Verma', specialization: 'Relationship & Family Issues', avatar: '👩‍⚕️' },
            ];
            setCounselors(fetchedCounselors);
            setStep(4);
        } else {
            handleSendEmail('Offline');
            setStep(5);
        }
    };

    const handleSendEmail = (mode, counselor = null) => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const therapySession = JSON.parse(localStorage.getItem('therapySession'));
        if (!userData || !therapySession) return alert('User details not found!');

        const subject = encodeURIComponent(`Student ${mode} Therapy Request`);
        const body = encodeURIComponent(
            `Dear Faculty,\n\n` +
            `This is a confidential request for a ${mode.toLowerCase()} therapy session.\n\n` +
            `Student Details:\n` +
            `Name: ${userData.name}\nCollege: ${userData.college}\nYear: ${userData.year}\nBranch: ${userData.branch}\n\n` +
            `Session Details:\n` +
            `Date: ${therapySession.therapyDate}\nTime: ${therapySession.therapyTime}\n` +
            `${mode === 'Online' && counselor ? `Counselor Requested: ${counselor.name}\n` : ''}\n` +
            `Please respond at the earliest.`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Collegename@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    };

    const handleCounselorSelect = (counselor) => {
        setSelectedCounselor(counselor);
        handleSendEmail('Online', counselor);
        setStep(5);
    };
    
    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }

    const steps = ["College", "Details", "Booking", "Counselor", "Done"];

    return (
        <div className="app-container">
            <div className="form-wrapper">
                {/* Progress Bar */}
                <div className="progress-bar">
                    {steps.slice(0, 4).map((s, i) => (
                         <div key={i} className={`progress-step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
                            <div className="progress-step-circle">{step > i + 1 ? '✔' : i + 1}</div>
                            <p>{s}</p>
                        </div>
                    ))}
                </div>

                {/* Step 1: College */}
                {step === 1 && (
                    <div className="card step-1">
                        <h1 className="title">Select Your College</h1>
                        <p className="subtitle">Start by finding your institution to see available support.</p>
                        <div className="input-group">
                             <input
                                type="text"
                                placeholder="Type college name..."
                                value={query}
                                onChange={(e) => { setQuery(e.target.value.replace(/[^a-zA-Z\s]/g, '')); setSelectedCollege(''); }}
                                className="input"
                            />
                            {loading && <p className="loading">Loading</p>}
                            {suggestions.length > 0 && (
                                <ul className="suggestion-list">
                                    {suggestions.map((name, idx) => (
                                        <li key={idx} onClick={() => handleSelectCollege(name)}
                                            className={`suggestion-item ${name === 'No college found' ? 'disabled' : 'hover-item'}`}>
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button onClick={proceedToLogin} className="button" disabled={!selectedCollege}>
                            Continue
                        </button>
                        <div className="helpline-info">
                            <p className="helpline-title"><strong>Immediate Support Available 24/7</strong></p>
                            <p>📞 <strong>KIRAN:</strong> 1800-599-0019 (National Helpline)</p>
                            <p>📞 <strong>AASRA:</strong> +91-9820466726 (Suicide Prevention)</p>
                            <p>📞 <strong>Vandrevala Foundation:</strong> +91 9999 666 555 (Mental Health)</p>
                            <p>📞 <strong>iCall (TISS):</strong> 022-25521111 (Mon-Sat, 10 AM-8 PM)</p>
                        </div>
                    </div>
                )}

                {/* Step 2: Student Details */}
                {step === 2 && (
                    <div className="card step-2">
                         <h1 className="title">
                            <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                                <circle cx="12" cy="7" r="4" />
                            </Icon> 
                            Student Details
                        </h1>
                         <p className="subtitle">Your information is confidential and used only for booking.</p>
                        <input type="text" placeholder="Enter Your Full Name" value={name} onChange={(e)=>setName(e.target.value.replace(/[^a-zA-Z\s]/g,''))} className="input" />
                        <select value={year} onChange={(e) => setYear(e.target.value)} className="input">
                            <option value="">Select Year</option>
                            <option value="I">I</option> <option value="II">II</option> <option value="III">III</option> <option value="IV">IV</option>
                        </select>
                        <select value={branch} onChange={(e) => setBranch(e.target.value)} className="input">
                            <option value="">Select Branch</option>
                            <option value="CSE">CSE</option> <option value="ECE">ECE</option> <option value="AIML">AIML</option> <option value="DS">DS</option> <option value="BBA">BBA</option> <option value="Other">Other</option>
                        </select>
                        <button onClick={saveUserData} className="button">Next: Book Session</button>
                    </div>
                )}

                {/* Step 3: Therapy Session */}
                {step === 3 && (
                    <div className="card step-3">
                         <h1 className="title">
                            <Icon d="M8 2v4">
                                <path d="M16 2v4" />
                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                <path d="M3 10h18" />
                            </Icon>
                             Book Your Session
                        </h1>
                        <div className="date-time-group">
                             <input type="date" value={therapyDate} onChange={(e) => setTherapyDate(e.target.value)} className="input" min={getMinDate()}/>
                            <select value={therapyTime} onChange={(e) => setTherapyTime(e.target.value)} className="input">
                                <option value="">Select Time</option>
                                {timeSlots.map(time => <option key={time} value={time}>{time}</option>)}
                            </select>
                        </div>
                        <div className="therapy-info">
                            <p><strong>Offline:</strong> Meet a faculty member in person.</p>
                            <p><strong>Online:</strong> Connect with a professional counselor via video call.</p>
                        </div>
                        <div className="radio-group">
                            <label className={therapyMode === 'Offline' ? 'active' : ''}><input type="radio" name="mode" value="Offline" checked={therapyMode==='Offline'} onChange={(e)=>setTherapyMode(e.target.value)} /> Offline</label>
                            <label className={therapyMode === 'Online' ? 'active' : ''}><input type="radio" name="mode" value="Online" checked={therapyMode==='Online'} onChange={(e)=>setTherapyMode(e.target.value)} /> Online</label>
                        </div>
                        <button onClick={saveTherapySession} className="button">Continue</button>
                    </div>
                )}

                 {/* Step 4: Online Counselors */}
                {step === 4 && (
                    <div className="card step-4">
                        <h1 className="title">Select Your Counselor</h1>
                         <p className="subtitle">Choose a professional who feels right for you.</p>
                        <div className="counselor-list">
                            {counselors.map(c => (
                                <div key={c.id} className="counselor-card hover-item" onClick={() => handleCounselorSelect(c)}>
                                    <div className="counselor-avatar">{c.avatar}</div>
                                    <div className="counselor-details">
                                        <h2>{c.name}</h2>
                                        <p>{c.specialization}</p>
                                    </div>
                                    <div className="counselor-arrow">›</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Thank You Page */}
                {step === 5 && (
                    <div className="card step-5">
                         <div className="thank-you-icon">
                            <Icon d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </Icon>
                        </div>
                        <h1 className="title">Thank You!</h1>
                        <p className="subtitle">Your confidential request has been sent. Please check your Gmail for confirmation from the faculty.</p>
                        <a href="/inspired" className="button">Explore Inspirational Resources</a>
                    </div>
                )}
            </div>
        </div>
    );
}

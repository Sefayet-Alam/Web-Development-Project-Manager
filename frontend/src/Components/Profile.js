import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import { useAuth } from '../AuthContext';
import Navbar from './NavBar';
import './Profile.css';
import dummyProfilePic from './pics/ConnorDBH.jpeg'; // Ensure this image is correctly placed in your project directory.
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Profile = () => {
    const { isAuthenticated, loading } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            AxiosInstance.get('accounts/profile/', {
                headers: { Authorization: `Token ${localStorage.getItem('token')}` },
            })
                .then((response) => {
                    setUser(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching profile data:', error);
                    setUser(null);
                });
        }
    }, [isAuthenticated]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!user) {
        return <div className="error">No profile data found</div>;
    }

    return (
        <div>
            <Navbar
                drawerWidth={220}
                content={
                    <div className="profile-container">
                        <div className="profile-header">
                            <img
                                src={dummyProfilePic}
                                alt="Profile"
                                className="profile-picture"
                            />
                            <div className="profile-basic-info">
                                <h1>{user.first_name} {user.last_name}</h1>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="profile-content">
                            <div className="profile-left">
                                <h2>Personal Information</h2>
                                <div className="profile-attribute">
                                    <span className="attribute-label">Name:</span>
                                    <span className="attribute-value">{user.first_name} {user.last_name}</span>
                                </div>
                                <div className="profile-attribute">
                                    <span className="attribute-label">First Name:</span>
                                    <span className="attribute-value">{user.first_name}</span>
                                </div>
                                <div className="profile-attribute">
                                    <span className="attribute-label">Last Name:</span>
                                    <span className="attribute-value">{user.last_name}</span>
                                </div>
                                <div className="profile-attribute">
                                    <span className="attribute-label">Date of Birth:</span>
                                    <span className="attribute-value">{user.date_of_birth}</span>
                                </div>
                                <div className="profile-attribute">
                                    <span className="attribute-label">Gender:</span>
                                    <span className="attribute-value">{user.gender}</span>
                                </div>
                                <div className="profile-attribute">
                                    <span className="attribute-label">Phone Number:</span>
                                    <span className="attribute-value">{user.phone_number}</span>
                                </div>
                                <h2>Activity</h2>
                                <div className="profile-activity">
                                    {/* Add recent activities, achievements, or statistics here */}
                                    <p>No recent activities</p>
                                </div>
                                <button className="edit-profile-btn">Edit Profile</button>
                            </div>
                            <div className="profile-right">
                                <div className="meter-card">
                                    <h3>Profile Completeness</h3>
                                    <CircularProgressbar
                                        value={80}
                                        text={`${80}%`}
                                        styles={buildStyles({
                                            pathColor: `rgba(62, 152, 199, ${80 / 100})`,
                                            textColor: '#3e98c7',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>
                                <div className="meter-card">
                                    <h3>Project Progression</h3>
                                    <CircularProgressbar
                                        value={85}
                                        text={`${85}%`}
                                        styles={buildStyles({
                                            pathColor: `rgba(255, 99, 132, ${45 / 100})`,
                                            textColor: '#ff6384',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#ff6384',
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Profile;

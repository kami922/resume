import React from 'react';
import Style from './CaseStudy.module.scss';
import {Box, Grid} from "@mui/material";

export default function Nutz() {
    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                <Grid item>
                    <Box component={'h1'} className={Style.title}>
                        Enterprise Social Media Management Platform
                    </Box>
                    <Box component={'p'} className={Style.text} style={{fontStyle: 'italic', color: '#8D53FF', marginTop: '1rem'}}>
                        Company project (under NDA) - Currently in active development
                    </Box>
                </Grid>

                {/* Overview Section */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Overview</Box>
                    <Box component={'p'} className={Style.text}>
                        An enterprise-grade multi-tenant SaaS platform for social media management and marketing automation.
                        I contributed to building a scalable Python microservices architecture that enables businesses to manage multiple
                        social media platforms, automate marketing campaigns, and integrate with third-party services like Google Calendar,
                        Zoom, and document signing platforms.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        This is a company project currently in active development. I worked exclusively on backend services, focusing on the
                        OAuth2 service and Social Media Management microservice, implementing core features for authentication, social platform
                        integrations, and scheduled content publishing.
                    </Box>
                </Grid>

                {/* Key Highlights */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Highlights</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Multi-Tenant Architecture:</strong> Database-per-tenant isolation with centralized orchestration</li>
                        <li><strong>15+ Platform Integrations:</strong> Facebook, Instagram, LinkedIn, TikTok, YouTube, Google Ads, email marketing tools</li>
                        <li><strong>Microservices Pattern:</strong> 5 independent Python services with FastAPI</li>
                        <li><strong>OAuth2 Implementation:</strong> Centralized authentication for Google, Apple, and social platforms</li>
                        <li><strong>Scheduled Publishing:</strong> APScheduler-based content scheduling across multiple platforms</li>
                        <li><strong>Production Ready:</strong> Docker containerization, Alembic migrations, comprehensive health checks</li>
                    </Box>
                </Grid>

                {/* Role and Contributions */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>My Role & Contributions</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Backend Developer (Python Microservices)</strong>
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li>Designed and implemented OAuth2 microservice for multi-platform authentication (Google, Apple, Facebook, LinkedIn)</li>
                        <li>Built Social Media Management service with REST APIs for content publishing across 7+ platforms</li>
                        <li>Implemented scheduled post publishing system using APScheduler with database persistence</li>
                        <li>Developed token refresh mechanisms and credential management for third-party APIs</li>
                        <li>Created database schemas and Alembic migrations for multi-tenant data isolation</li>
                        <li>Integrated platform-specific APIs (Meta Graph API, LinkedIn API, YouTube Data API, TikTok API)</li>
                        <li>Implemented health check endpoints and monitoring for service reliability</li>
                        <li>Containerized services with Docker for consistent deployment</li>
                    </Box>
                </Grid>

                {/* System Architecture */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>System Architecture</Box>
                    <Box component={'p'} className={Style.text}>
                        The platform follows a microservices architecture with clear separation of concerns. Each service is independently
                        deployable, has its own database, and communicates via HTTP REST APIs. The orchestrator service coordinates
                        multi-service operations.
                    </Box>
                    <Box className={Style.diagram} mt={3}>
                        <svg viewBox="0 0 900 600" style={{width: '100%', height: 'auto'}}>
                            {/* Title */}
                            <text x="450" y="25" fill="#8D53FF" fontSize="20" fontWeight="bold" textAnchor="middle">
                                Nutz Microservices Architecture
                            </text>

                            {/* Frontend Layer */}
                            <rect x="50" y="60" width="150" height="80" fill="#CA6BE6" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="125" y="90" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Angular</text>
                            <text x="125" y="110" fill="white" fontSize="12" textAnchor="middle">Customer Area</text>

                            {/* Laravel Backend */}
                            <rect x="250" y="60" width="150" height="80" fill="#CA6BE6" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="325" y="90" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Laravel</text>
                            <text x="325" y="110" fill="white" fontSize="12" textAnchor="middle">Main Backend</text>

                            {/* OAuth Login */}
                            <rect x="450" y="60" width="150" height="80" fill="#FFA500" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="525" y="85" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">OAuth Login</text>
                            <text x="525" y="105" fill="white" fontSize="11" textAnchor="middle">Google</text>
                            <text x="525" y="123" fill="white" fontSize="11" textAnchor="middle">Apple</text>

                            {/* Multitenant System */}
                            <rect x="700" y="60" width="150" height="80" fill="#FF6B6B" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="775" y="90" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Multitenant</text>
                            <text x="775" y="110" fill="white" fontSize="12" textAnchor="middle">System</text>

                            {/* Databases */}
                            <ellipse cx="775" cy="520" rx="80" ry="40" fill="#FFD700" stroke="#8D53FF" strokeWidth="2"/>
                            <text x="775" y="515" fill="#1f1f1f" fontSize="12" fontWeight="bold" textAnchor="middle">MySQL</text>
                            <text x="775" y="532" fill="#1f1f1f" fontSize="11" textAnchor="middle">DB1, DB2...DBn</text>

                            {/* Python Microservices */}
                            {/* OAuth2 Service */}
                            <rect x="50" y="200" width="180" height="100" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="140" y="225" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">OAuth2</text>
                            <text x="140" y="245" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Microservice</text>
                            <text x="140" y="265" fill="white" fontSize="11" textAnchor="middle">FastAPI + SQLModel</text>
                            <text x="140" y="283" fill="white" fontSize="11" textAnchor="middle">Token Management</text>

                            {/* Social Management Service */}
                            <rect x="270" y="200" width="180" height="100" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="360" y="225" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Social Media</text>
                            <text x="360" y="245" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Management</text>
                            <text x="360" y="265" fill="white" fontSize="11" textAnchor="middle">FastAPI + APScheduler</text>
                            <text x="360" y="283" fill="white" fontSize="11" textAnchor="middle">Content Publishing</text>

                            {/* Calendar Service */}
                            <rect x="490" y="200" width="180" height="100" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="580" y="225" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Calendar</text>
                            <text x="580" y="245" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Microservice</text>
                            <text x="580" y="265" fill="white" fontSize="11" textAnchor="middle">Google Calendar</text>
                            <text x="580" y="283" fill="white" fontSize="11" textAnchor="middle">MS Teams, Zoom</text>

                            {/* Marketing Automation Service */}
                            <rect x="160" y="350" width="180" height="100" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="250" y="375" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Marketing</text>
                            <text x="250" y="395" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Automation</text>
                            <text x="250" y="415" fill="white" fontSize="11" textAnchor="middle">Brevo, Mailchimp</text>
                            <text x="250" y="433" fill="white" fontSize="11" textAnchor="middle">ActiveCampaign</text>

                            {/* Documents Service */}
                            <rect x="490" y="350" width="180" height="100" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="580" y="375" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Documents</text>
                            <text x="580" y="395" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Microservice</text>
                            <text x="580" y="415" fill="white" fontSize="11" textAnchor="middle">DocuSign</text>
                            <text x="580" y="433" fill="white" fontSize="11" textAnchor="middle">Yousign, Confirmo</text>

                            {/* Connections */}
                            {/* Frontend to Laravel */}
                            <line x1="200" y1="100" x2="250" y2="100" stroke="#8D53FF" strokeWidth="2"/>
                            <polygon points="250,100 242,96 242,104" fill="#8D53FF"/>

                            {/* Laravel to OAuth */}
                            <line x1="400" y1="100" x2="450" y2="100" stroke="#8D53FF" strokeWidth="2"/>
                            <polygon points="450,100 442,96 442,104" fill="#8D53FF"/>

                            {/* Laravel to Multitenant */}
                            <line x1="325" y1="140" x2="775" y2="480" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>

                            {/* Laravel to Services */}
                            <line x1="325" y1="140" x2="140" y2="200" stroke="#8D53FF" strokeWidth="2"/>
                            <line x1="325" y1="140" x2="360" y2="200" stroke="#8D53FF" strokeWidth="2"/>
                            <line x1="325" y1="140" x2="580" y2="200" stroke="#8D53FF" strokeWidth="2"/>

                            {/* Services to DB */}
                            <line x1="140" y1="300" x2="720" y2="500" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>
                            <line x1="360" y1="300" x2="740" y2="500" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>
                            <line x1="580" y1="300" x2="760" y2="500" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>
                            <line x1="250" y1="450" x2="730" y2="510" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>
                            <line x1="580" y1="450" x2="750" y2="510" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>

                            {/* Legend */}
                            <rect x="50" y="560" width="15" height="15" fill="#CA6BE6"/>
                            <text x="75" y="572" fontSize="11">Frontend/Backend</text>
                            <rect x="200" y="560" width="15" height="15" fill="#4ECDC4"/>
                            <text x="225" y="572" fontSize="11">Python Microservices</text>
                            <rect x="380" y="560" width="15" height="15" fill="#FFD700"/>
                            <text x="405" y="572" fontSize="11">Databases</text>
                        </svg>
                    </Box>
                </Grid>

                {/* Tech Stack */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Tech Stack</Box>
                    <table className={Style.table}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Technologies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Backend Framework</strong></td>
                                <td>FastAPI (Python 3.13+)</td>
                            </tr>
                            <tr>
                                <td><strong>ORM & Database</strong></td>
                                <td>SQLModel, SQLAlchemy 2.0, MySQL, PyMySQL</td>
                            </tr>
                            <tr>
                                <td><strong>Schema Migration</strong></td>
                                <td>Alembic</td>
                            </tr>
                            <tr>
                                <td><strong>Validation</strong></td>
                                <td>Pydantic v2</td>
                            </tr>
                            <tr>
                                <td><strong>Task Scheduling</strong></td>
                                <td>APScheduler 3.10+</td>
                            </tr>
                            <tr>
                                <td><strong>HTTP Client</strong></td>
                                <td>HTTPX (async)</td>
                            </tr>
                            <tr>
                                <td><strong>Package Manager</strong></td>
                                <td>uv (Astral)</td>
                            </tr>
                            <tr>
                                <td><strong>Code Quality</strong></td>
                                <td>Ruff (linting & formatting)</td>
                            </tr>
                            <tr>
                                <td><strong>Server</strong></td>
                                <td>Uvicorn (ASGI)</td>
                            </tr>
                            <tr>
                                <td><strong>Containerization</strong></td>
                                <td>Docker</td>
                            </tr>
                            <tr>
                                <td><strong>Testing</strong></td>
                                <td>Pytest, pytest-asyncio</td>
                            </tr>
                            <tr>
                                <td><strong>API Integrations</strong></td>
                                <td>Meta Graph API, LinkedIn API, YouTube Data API, TikTok API, Google Calendar API, Google Ads API</td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>

                {/* Microservices Overview */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Microservices I Developed</Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>1. OAuth2 & Calendar Service (svc-oauth2)</Box>
                    <Box component={'p'} className={Style.text}>
                        This service contains two FastAPI applications running together: OAuth2 authentication and Calendar management.
                        Initially built as separate services, they were later combined into a single deployment due to their tight coupling
                        with OAuth tokens.
                    </Box>

                    <Box component={'h4'} className={Style.subsectionTitle} mt={2} style={{fontSize: '1.1rem'}}>OAuth2 App</Box>
                    <Box component={'p'} className={Style.text}>
                        Centralized authentication service managing OAuth2 flows for multiple third-party platforms. Handles token acquisition,
                        refresh, and storage with automatic renewal before expiration.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>OAuth2 Flow Implementation:</strong> Authorization code grant for Google, Apple, Facebook, LinkedIn</li>
                        <li><strong>Token Management:</strong> Secure storage, automatic refresh, expiration tracking</li>
                        <li><strong>Scheduler Integration:</strong> Background job to refresh tokens before expiration</li>
                        <li><strong>Multi-Tenant Support:</strong> Isolated credentials per customer/tenant</li>
                        <li><strong>Platform Support:</strong> Google (Calendar, Ads), Apple, Meta (Facebook, Instagram), LinkedIn</li>
                    </Box>

                    <Box component={'h4'} className={Style.subsectionTitle} mt={2} style={{fontSize: '1.1rem'}}>Calendar App</Box>
                    <Box component={'p'} className={Style.text}>
                        Integrated calendar management supporting Google Calendar, Microsoft Teams, and Zoom meetings. Handles appointment
                        scheduling, reminders, and webhook notifications.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Multi-Platform Calendars:</strong> Google Calendar API, Microsoft Graph API, Zoom API integration</li>
                        <li><strong>Appointment Management:</strong> Create, update, delete calendar events across platforms</li>
                        <li><strong>Booking System:</strong> Customer appointment scheduling with availability management</li>
                        <li><strong>Reminders:</strong> Automated email/SMS reminders for upcoming appointments</li>
                        <li><strong>Webhook Handlers:</strong> Real-time event updates from Google Calendar and Zoom</li>
                        <li><strong>Participants Management:</strong> Handle meeting attendees and invitations</li>
                        <li><strong>Observability:</strong> Request context middleware with request_id tracking and JSON logging</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>2. Social Media Management Microservice</Box>
                    <Box component={'p'} className={Style.text}>
                        Core service for managing social media content across multiple platforms. Implements scheduled publishing, campaign management,
                        and platform-specific API integrations.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Content Publishing API:</strong> REST endpoints for creating and scheduling posts</li>
                        <li><strong>Multi-Platform Support:</strong> Facebook, Instagram, LinkedIn, YouTube, TikTok, Twitter/X, Pinterest</li>
                        <li><strong>Scheduled Publishing:</strong> APScheduler-based job queue with database persistence</li>
                        <li><strong>Campaign Management:</strong> Group posts into campaigns with analytics tracking</li>
                        <li><strong>Lead Generation:</strong> Integration with Meta Lead Ads and LinkedIn Lead Gen Forms</li>
                        <li><strong>Media Upload:</strong> Handle images, videos, and carousel posts with platform-specific formatting</li>
                        <li><strong>Health Monitoring:</strong> Database connectivity checks and service health endpoints</li>
                    </Box>
                </Grid>

                {/* API Design */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>API Design</Box>
                    <Box component={'h3'} className={Style.subsectionTitle}>OAuth2 Service Endpoints</Box>
                    <table className={Style.table}>
                        <thead>
                            <tr>
                                <th>Endpoint</th>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/oauth/authorize</code></td>
                                <td>GET</td>
                                <td>Redirect to OAuth provider authorization URL</td>
                            </tr>
                            <tr>
                                <td><code>/oauth/callback</code></td>
                                <td>GET</td>
                                <td>Handle OAuth callback and exchange code for tokens</td>
                            </tr>
                            <tr>
                                <td><code>/oauth/refresh</code></td>
                                <td>POST</td>
                                <td>Manually refresh access token</td>
                            </tr>
                            <tr>
                                <td><code>/oauth/tokens</code></td>
                                <td>GET</td>
                                <td>Get stored tokens for a specific platform</td>
                            </tr>
                            <tr>
                                <td><code>/health</code></td>
                                <td>GET</td>
                                <td>Service health check with database status</td>
                            </tr>
                        </tbody>
                    </table>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Calendar Service Endpoints</Box>
                    <table className={Style.table}>
                        <thead>
                            <tr>
                                <th>Endpoint</th>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/calendar/appointments</code></td>
                                <td>POST</td>
                                <td>Create calendar appointment (Google/MS/Zoom)</td>
                            </tr>
                            <tr>
                                <td><code>/calendar/appointments/id</code></td>
                                <td>PUT</td>
                                <td>Update existing appointment</td>
                            </tr>
                            <tr>
                                <td><code>/calendar/appointments/id</code></td>
                                <td>DELETE</td>
                                <td>Delete appointment</td>
                            </tr>
                            <tr>
                                <td><code>/bookings</code></td>
                                <td>POST</td>
                                <td>Create booking with availability check</td>
                            </tr>
                            <tr>
                                <td><code>/reminders</code></td>
                                <td>POST</td>
                                <td>Schedule appointment reminders</td>
                            </tr>
                            <tr>
                                <td><code>/webhooks/google</code></td>
                                <td>POST</td>
                                <td>Handle Google Calendar webhook events</td>
                            </tr>
                            <tr>
                                <td><code>/webhooks/zoom</code></td>
                                <td>POST</td>
                                <td>Handle Zoom webhook events</td>
                            </tr>
                            <tr>
                                <td><code>/participants</code></td>
                                <td>POST</td>
                                <td>Manage meeting participants</td>
                            </tr>
                        </tbody>
                    </table>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Social Media Service Endpoints</Box>
                    <table className={Style.table}>
                        <thead>
                            <tr>
                                <th>Endpoint</th>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/posts</code></td>
                                <td>POST</td>
                                <td>Create a new post (immediate or scheduled)</td>
                            </tr>
                            <tr>
                                <td><code>/posts/scheduled</code></td>
                                <td>GET</td>
                                <td>List all scheduled posts</td>
                            </tr>
                            <tr>
                                <td><code>/posts/id</code></td>
                                <td>DELETE</td>
                                <td>Cancel scheduled post</td>
                            </tr>
                            <tr>
                                <td><code>/meta/publish</code></td>
                                <td>POST</td>
                                <td>Publish to Facebook/Instagram via Graph API</td>
                            </tr>
                            <tr>
                                <td><code>/linkedin/publish</code></td>
                                <td>POST</td>
                                <td>Publish to LinkedIn with media support</td>
                            </tr>
                            <tr>
                                <td><code>/youtube/publish</code></td>
                                <td>POST</td>
                                <td>Upload video to YouTube</td>
                            </tr>
                            <tr>
                                <td><code>/campaigns</code></td>
                                <td>POST</td>
                                <td>Create marketing campaign</td>
                            </tr>
                            <tr>
                                <td><code>/leads</code></td>
                                <td>GET</td>
                                <td>Fetch leads from Meta/LinkedIn</td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>

                {/* Database Design */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Database Schema</Box>
                    <Box component={'p'} className={Style.text}>
                        Multi-tenant architecture with database-per-tenant isolation. Each microservice has its own schema with Alembic migrations.
                    </Box>
                    <Box className={Style.diagram} mt={3}>
                        <svg viewBox="0 0 800 500" style={{width: '100%', height: 'auto'}}>
                            <text x="400" y="25" fill="#8D53FF" fontSize="18" fontWeight="bold" textAnchor="middle">
                                Social Media Service - Database Schema
                            </text>

                            {/* Posts Table */}
                            <g>
                                <rect x="50" y="60" width="200" height="160" fill="#f8f8f8" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="50" y="60" width="200" height="30" fill="#8D53FF" rx="5"/>
                                <text x="150" y="80" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">posts</text>
                                <text x="60" y="105" fontSize="11">id (PK)</text>
                                <text x="60" y="125" fontSize="11">tenant_id (FK)</text>
                                <text x="60" y="145" fontSize="11">content</text>
                                <text x="60" y="165" fontSize="11">platform</text>
                                <text x="60" y="185" fontSize="11">scheduled_time</text>
                                <text x="60" y="205" fontSize="11">status</text>
                            </g>

                            {/* Campaigns Table */}
                            <g>
                                <rect x="300" y="60" width="200" height="140" fill="#f8f8f8" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="300" y="60" width="200" height="30" fill="#8D53FF" rx="5"/>
                                <text x="400" y="80" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">campaigns</text>
                                <text x="310" y="105" fontSize="11">id (PK)</text>
                                <text x="310" y="125" fontSize="11">tenant_id (FK)</text>
                                <text x="310" y="145" fontSize="11">name</text>
                                <text x="310" y="165" fontSize="11">start_date</text>
                                <text x="310" y="185" fontSize="11">end_date</text>
                            </g>

                            {/* OAuth Tokens Table */}
                            <g>
                                <rect x="550" y="60" width="200" height="180" fill="#f8f8f8" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="550" y="60" width="200" height="30" fill="#8D53FF" rx="5"/>
                                <text x="650" y="80" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">oauth_tokens</text>
                                <text x="560" y="105" fontSize="11">id (PK)</text>
                                <text x="560" y="125" fontSize="11">tenant_id (FK)</text>
                                <text x="560" y="145" fontSize="11">platform</text>
                                <text x="560" y="165" fontSize="11">access_token</text>
                                <text x="560" y="185" fontSize="11">refresh_token</text>
                                <text x="560" y="205" fontSize="11">expires_at</text>
                                <text x="560" y="225" fontSize="11">scope</text>
                            </g>

                            {/* Leads Table */}
                            <g>
                                <rect x="50" y="260" width="200" height="160" fill="#f8f8f8" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="50" y="260" width="200" height="30" fill="#8D53FF" rx="5"/>
                                <text x="150" y="280" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">leads</text>
                                <text x="60" y="305" fontSize="11">id (PK)</text>
                                <text x="60" y="325" fontSize="11">campaign_id (FK)</text>
                                <text x="60" y="345" fontSize="11">platform</text>
                                <text x="60" y="365" fontSize="11">email</text>
                                <text x="60" y="385" fontSize="11">name</text>
                                <text x="60" y="405" fontSize="11">created_at</text>
                            </g>

                            {/* Scheduled Jobs Table */}
                            <g>
                                <rect x="300" y="260" width="200" height="160" fill="#f8f8f8" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="300" y="260" width="200" height="30" fill="#8D53FF" rx="5"/>
                                <text x="400" y="280" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">scheduled_jobs</text>
                                <text x="310" y="305" fontSize="11">id (PK)</text>
                                <text x="310" y="325" fontSize="11">post_id (FK)</text>
                                <text x="310" y="345" fontSize="11">job_id</text>
                                <text x="310" y="365" fontSize="11">run_time</text>
                                <text x="310" y="385" fontSize="11">status</text>
                                <text x="310" y="405" fontSize="11">error_message</text>
                            </g>

                            {/* Tenants Table */}
                            <g>
                                <rect x="550" y="300" width="200" height="120" fill="#FFD700" stroke="#8D53FF" strokeWidth="2" rx="5"/>
                                <rect x="550" y="300" width="200" height="30" fill="#FFA500" rx="5"/>
                                <text x="650" y="320" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">tenants</text>
                                <text x="560" y="345" fontSize="11">id (PK)</text>
                                <text x="560" y="365" fontSize="11">company_name</text>
                                <text x="560" y="385" fontSize="11">db_name</text>
                                <text x="560" y="405" fontSize="11">created_at</text>
                            </g>

                            {/* Relationships */}
                            <line x1="250" y1="340" x2="300" y2="340" stroke="#CA6BE6" strokeWidth="2"/>
                            <polygon points="300,340 292,336 292,344" fill="#CA6BE6"/>
                            <text x="260" y="330" fontSize="10" fill="#CA6BE6">1:N</text>

                            <line x1="250" y1="140" x2="300" y2="140" stroke="#CA6BE6" strokeWidth="2"/>
                            <polygon points="300,140 292,136 292,144" fill="#CA6BE6"/>

                            <line x1="150" y1="220" x2="150" y2="260" stroke="#CA6BE6" strokeWidth="2"/>
                            <polygon points="150,260 146,252 154,252" fill="#CA6BE6"/>

                            <line x1="400" y1="200" x2="400" y2="260" stroke="#CA6BE6" strokeWidth="2"/>
                            <polygon points="400,260 396,252 404,252" fill="#CA6BE6"/>

                            {/* Legend */}
                            <text x="50" y="470" fontSize="12" fontWeight="bold">Key:</text>
                            <text x="50" y="490" fontSize="11">PK = Primary Key, FK = Foreign Key</text>
                            <text x="300" y="490" fontSize="11" fill="#FFA500">Yellow = Shared across services</text>
                        </svg>
                    </Box>
                </Grid>

                {/* Key Features Implementation */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Features Implementation</Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>Calendar Integration & Appointment Management</Box>
                    <Box component={'p'} className={Style.text}>
                        Built a unified calendar system that integrates with Google Calendar, Microsoft Teams, and Zoom, allowing users to
                        manage appointments across all platforms from a single interface.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li>Unified API for creating appointments across Google Calendar, MS Teams, and Zoom</li>
                        <li>Real-time webhook handlers to sync external calendar changes</li>
                        <li>Booking system with availability checking and conflict prevention</li>
                        <li>Automated reminder scheduling for upcoming appointments</li>
                        <li>Request context middleware for distributed tracing with request_id</li>
                        <li>JSON structured logging for better observability in production</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Scheduled Post Publishing</Box>
                    <Box component={'p'} className={Style.text}>
                        Implemented a robust scheduling system using APScheduler with database-backed job persistence. Posts can be scheduled
                        for future publishing with automatic retry logic on failure.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li>Persistent job storage in MySQL to survive service restarts</li>
                        <li>Cron-based and date-based scheduling support</li>
                        <li>Automatic job cleanup after execution</li>
                        <li>Error handling with detailed logging</li>
                        <li>Platform-specific publishing logic for each social network</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>OAuth2 Token Refresh Automation</Box>
                    <Box component={'p'} className={Style.text}>
                        Built an automated token refresh system that proactively renews access tokens before expiration, ensuring
                        uninterrupted API access.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li>Background scheduler checks token expiry every hour</li>
                        <li>Automatic refresh 24 hours before expiration</li>
                        <li>Secure token storage with encryption</li>
                        <li>Support for multiple OAuth providers with different refresh flows</li>
                        <li>Notification system for failed refreshes</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Multi-Platform Content Publishing</Box>
                    <Box component={'p'} className={Style.text}>
                        Created unified publishing interface that abstracts platform-specific API differences while respecting each
                        platform's unique features and constraints.
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Meta (Facebook/Instagram):</strong> Graph API integration with media upload, carousel posts, stories</li>
                        <li><strong>LinkedIn:</strong> Share API with article publishing and company page support</li>
                        <li><strong>YouTube:</strong> Video upload with metadata, thumbnails, and visibility settings</li>
                        <li><strong>TikTok:</strong> Video publishing with hashtags and music integration</li>
                        <li><strong>Twitter/X:</strong> Tweet posting with media and thread support</li>
                        <li>Platform-specific validation and error handling</li>
                        <li>Media format conversion and optimization</li>
                    </Box>
                </Grid>

                {/* Challenges & Solutions */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Challenges & Solutions</Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>Challenge 1: Multi-Tenant Data Isolation</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Each customer needed complete data isolation while sharing the same codebase and infrastructure.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Implemented database-per-tenant architecture with centralized tenant routing. Each tenant gets
                        their own MySQL database, referenced by tenant_id in all queries. Created middleware to inject tenant context into
                        all database operations automatically.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 2: OAuth Token Lifecycle Management</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Different platforms have different token expiration times and refresh mechanisms. Manual refresh
                        would cause service interruptions.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Built a unified token management system with APScheduler running background jobs to check and
                        refresh tokens before expiration. Implemented platform-specific refresh adapters while maintaining a common interface.
                        Added logging and alerting for failed refreshes.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 3: Scheduled Job Persistence</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> In-memory job scheduling would lose all scheduled posts on service restart or deployment.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Integrated APScheduler with MySQL job store. Jobs are persisted to database and automatically
                        recovered on startup. Implemented idempotency checks to prevent duplicate publishing.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 4: Platform API Rate Limits</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Each social platform has different rate limits. Bulk operations could trigger rate limiting.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Implemented exponential backoff retry logic with platform-specific rate limit handling. Added
                        request throttling and queue management to respect platform limits. Created monitoring for API quota usage.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 5: Platform-Specific Media Requirements</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Each platform has different media format, size, and aspect ratio requirements (e.g., Instagram
                        requires 1:1 for posts, TikTok needs vertical video 9:16).
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Created validation layer that checks media against platform requirements before upload. Implemented
                        clear error messages with platform-specific guidelines. Added support for multiple media formats per post to allow
                        platform-specific optimization.
                    </Box>
                </Grid>

                {/* Best Practices */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Best Practices Implemented</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Dependency Injection:</strong> Used FastAPI's dependency injection for database sessions and configuration</li>
                        <li><strong>Type Safety:</strong> Leveraged Pydantic v2 for request/response validation and SQLModel for type-safe ORM</li>
                        <li><strong>Async/Await:</strong> Implemented async database operations and HTTP calls for better performance</li>
                        <li><strong>Environment-Based Config:</strong> Used python-dotenv for environment variable management</li>
                        <li><strong>Database Migrations:</strong> Alembic for version-controlled schema changes</li>
                        <li><strong>Health Checks:</strong> Comprehensive endpoints for monitoring service and database status</li>
                        <li><strong>Error Handling:</strong> Structured exception handling with proper HTTP status codes</li>
                        <li><strong>Logging:</strong> Structured logging with different levels for debugging and monitoring</li>
                        <li><strong>Docker Multi-Stage Builds:</strong> Optimized container images for production deployment</li>
                        <li><strong>Code Quality Tools:</strong> Ruff for consistent code formatting and linting</li>
                        <li><strong>API Documentation:</strong> Auto-generated Swagger/OpenAPI docs via FastAPI</li>
                        <li><strong>Modern Package Management:</strong> Used uv for fast, reliable dependency resolution</li>
                    </Box>
                </Grid>

                {/* Results */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Results & Impact</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Production-Ready Services:</strong> Both OAuth2 and Social Media services deployed to production environment</li>
                        <li><strong>Multi-Platform Support:</strong> Successfully integrated 15+ third-party platforms (social, email, calendar, documents)</li>
                        <li><strong>Scalable Architecture:</strong> Database-per-tenant design supports unlimited customer growth</li>
                        <li><strong>Automated Workflows:</strong> Eliminated manual token management and enabled scheduled publishing</li>
                        <li><strong>Reliability:</strong> Zero-downtime deployments with Docker and persistent job scheduling</li>
                        <li><strong>Developer Experience:</strong> Comprehensive API documentation and health monitoring</li>
                        <li><strong>Performance:</strong> Async operations enable handling multiple concurrent requests efficiently</li>
                        <li><strong>Maintainability:</strong> Type-safe code with Pydantic/SQLModel reduces runtime errors</li>
                    </Box>
                </Grid>

                {/* Key Learnings */}
                <Grid item mt={4} mb={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Learnings</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Microservices Communication:</strong> Learned to design clear service boundaries and HTTP-based inter-service communication patterns</li>
                        <li><strong>OAuth2 Deep Dive:</strong> Gained hands-on experience implementing OAuth2 flows for multiple providers with different specifications</li>
                        <li><strong>Multi-Tenancy Patterns:</strong> Understood database-per-tenant vs schema-per-tenant tradeoffs and implementation challenges</li>
                        <li><strong>Background Job Processing:</strong> Learned APScheduler internals, job persistence, and handling distributed scheduling challenges</li>
                        <li><strong>API Integration Best Practices:</strong> Developed skills in handling rate limits, retries, pagination, and platform-specific quirks</li>
                        <li><strong>FastAPI Advanced Features:</strong> Mastered dependency injection, lifespan events, background tasks, and automatic API documentation</li>
                        <li><strong>Database Migration Strategies:</strong> Learned Alembic for managing schema evolution in production environments</li>
                        <li><strong>Container Optimization:</strong> Understood Docker multi-stage builds and optimization for Python applications</li>
                        <li><strong>Modern Python Tooling:</strong> Experienced the benefits of uv for package management and Ruff for code quality</li>
                        <li><strong>Production Readiness:</strong> Learned importance of health checks, logging, monitoring, and graceful shutdowns</li>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

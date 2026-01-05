import React from 'react';
import Style from './CaseStudy.module.scss';
import {Box, Grid} from "@mui/material";

export default function MultiVendorEcommerce() {
    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                {/* Header Section */}
                <Grid item>
                    <Box component={'h1'} className={Style.title}>
                        Multi-Vendor E-commerce Platform
                    </Box>
                    <Box component={'p'} className={Style.subtitle}>
                        A full-stack MERN marketplace enabling multiple vendors to sell products with real-time messaging, payments, and comprehensive admin controls
                    </Box>
                </Grid>

                {/* Project Overview */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        📋 Project Overview
                    </Box>
                    <Box className={Style.overviewGrid}>
                        <Box className={Style.overviewItem}>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/kami922/multivendor-ecommerce-mern-app" target="_blank" rel="noopener noreferrer">
                                Repository
                            </a>
                        </Box>
                        <Box className={Style.overviewItem}>
                            <strong>Team Size:</strong> Solo Developer
                        </Box>
                        <Box className={Style.overviewItem}>
                            <strong>Role:</strong> Full-Stack Developer
                        </Box>
                        <Box className={Style.overviewItem}>
                            <strong>Timeline:</strong> 3 months (part-time)
                        </Box>
                    </Box>
                </Grid>

                {/* Goals Section */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🎯 Goals
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        What We Built
                    </Box>
                    <ul className={Style.list}>
                        <li>Enable multiple vendors to create shops and manage inventory independently</li>
                        <li>Provide seamless shopping experience for buyers with cart, wishlist, and order tracking</li>
                        <li>Facilitate real-time communication between buyers and sellers</li>
                        <li>Process secure payments with industry-standard integration (Stripe & PayPal)</li>
                        <li>Support vendor revenue management with 10% platform commission</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Technical Goals
                    </Box>
                    <ul className={Style.list}>
                        <li>Handle real-time messaging with low latency using WebSockets</li>
                        <li>Implement role-based authentication (Buyer, Seller, Admin)</li>
                        <li>Ensure secure payment processing with PCI compliance</li>
                        <li>Deploy scalable architecture with Docker containerization</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Non-Goals (Scope Boundaries)
                    </Box>
                    <ul className={Style.list}>
                        <li>International shipping (focused on single-region for MVP)</li>
                        <li>Native mobile apps (web-responsive design sufficient for v1)</li>
                        <li>Advanced analytics/reporting (basic dashboards for MVP)</li>
                    </ul>
                </Grid>

                {/* System Architecture */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🏗️ System Architecture
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        Tech Stack
                    </Box>
                    <Box className={Style.techStack}>
                        <table className={Style.table}>
                            <thead>
                                <tr>
                                    <th>Layer</th>
                                    <th>Technology</th>
                                    <th>Why We Chose It</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frontend</td>
                                    <td>React 19.1</td>
                                    <td>Component reusability, large ecosystem, modern hooks architecture</td>
                                </tr>
                                <tr>
                                    <td>Backend</td>
                                    <td>Node.js + Express 5.1</td>
                                    <td>JavaScript full-stack consistency, excellent async I/O for real-time features</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>MongoDB</td>
                                    <td>Flexible schema for evolving product catalogs, JSONB-like document storage</td>
                                </tr>
                                <tr>
                                    <td>State Management</td>
                                    <td>Redux Toolkit 2.6</td>
                                    <td>Predictable state updates, dev tools, handles complex multi-entity state</td>
                                </tr>
                                <tr>
                                    <td>Real-time</td>
                                    <td>Socket.io 4.8</td>
                                    <td>Bi-directional communication for messaging, automatic fallback handling</td>
                                </tr>
                                <tr>
                                    <td>Payments</td>
                                    <td>Stripe + PayPal</td>
                                    <td>Industry-standard security, excellent documentation, webhook support</td>
                                </tr>
                                <tr>
                                    <td>Media Storage</td>
                                    <td>Cloudinary</td>
                                    <td>CDN delivery, automatic optimization, transforms on-the-fly</td>
                                </tr>
                                <tr>
                                    <td>Authentication</td>
                                    <td>JWT + bcrypt</td>
                                    <td>Stateless auth, secure password hashing with salt rounds</td>
                                </tr>
                                <tr>
                                    <td>Styling</td>
                                    <td>Tailwind CSS + MUI 7</td>
                                    <td>Utility-first CSS for custom styles, MUI components for complex UI</td>
                                </tr>
                                <tr>
                                    <td>Deployment</td>
                                    <td>Docker + docker-compose</td>
                                    <td>Microservices isolation, environment consistency, easy scaling</td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={4}>
                        Architecture Diagram
                    </Box>
                    <Box className={Style.diagram}>
                        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', maxWidth: '800px', margin: '0 auto', display: 'block'}}>
                            {/* Client */}
                            <rect x="50" y="180" width="120" height="60" fill="#61dafb" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="110" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#000">React Client</text>

                            {/* API Server */}
                            <rect x="250" y="180" width="140" height="60" fill="#68a063" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="320" y="205" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Express API</text>
                            <text x="320" y="225" textAnchor="middle" fontSize="12" fill="#fff">:4000</text>

                            {/* Socket Server */}
                            <rect x="250" y="280" width="140" height="60" fill="#010101" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="320" y="305" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Socket.io</text>
                            <text x="320" y="325" textAnchor="middle" fontSize="12" fill="#fff">:8000</text>

                            {/* MongoDB */}
                            <ellipse cx="520" cy="210" rx="70" ry="40" fill="#4db33d" stroke="#000" strokeWidth="2"/>
                            <text x="520" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">MongoDB</text>

                            {/* Cloudinary */}
                            <rect x="460" y="40" width="120" height="50" fill="#3448c5" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="520" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Cloudinary</text>

                            {/* Stripe */}
                            <rect x="460" y="320" width="120" height="50" fill="#635bff" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="520" y="350" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Stripe</text>

                            {/* PayPal */}
                            <rect x="460" y="390" width="120" height="50" fill="#003087" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="520" y="420" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">PayPal</text>

                            {/* Arrows */}
                            {/* Client to API */}
                            <path d="M 170 210 L 250 210" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                            <text x="210" y="205" fontSize="11" fill="#8D53FF">HTTP</text>

                            {/* Client to Socket */}
                            <path d="M 130 240 L 280 280" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                            <text x="190" y="260" fontSize="11" fill="#8D53FF">WebSocket</text>

                            {/* API to MongoDB */}
                            <path d="M 390 210 L 450 210" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                            {/* Socket to MongoDB */}
                            <path d="M 390 310 L 460 240" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                            {/* API to Cloudinary */}
                            <path d="M 350 180 L 490 90" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                            {/* API to Stripe */}
                            <path d="M 380 240 L 460 340" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                            {/* API to PayPal */}
                            <path d="M 370 240 L 460 400" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                            {/* Arrow marker definition */}
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#8D53FF"/>
                                </marker>
                            </defs>
                        </svg>
                        <p className={Style.caption}>Three-service architecture: React frontend, Express REST API, and Socket.io messaging service</p>
                    </Box>
                </Grid>

                {/* Key Features */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        ⭐ Key Features
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        Authentication & Authorization
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Dual authentication system:</strong> Separate JWT tokens for users and sellers (different cookie names)</li>
                        <li><strong>Email verification:</strong> 10-minute expiring activation tokens sent via Nodemailer</li>
                        <li><strong>Role-based middleware:</strong> `isAuthenticated` and `isSeller` protect routes</li>
                        <li><strong>Secure password storage:</strong> bcryptjs hashing with salt rounds</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Multi-Vendor Marketplace
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Shop management:</strong> Sellers create shops with custom branding and product catalogs</li>
                        <li><strong>Product CRUD:</strong> Full create, read, update, delete with multi-image upload to Cloudinary</li>
                        <li><strong>Inventory tracking:</strong> Stock management with automatic updates on purchases</li>
                        <li><strong>Reviews & ratings:</strong> Customer feedback system with star ratings on products</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Shopping Experience
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Shopping cart:</strong> Add/remove items with Redux state persistence</li>
                        <li><strong>Wishlist:</strong> Save favorite products for later</li>
                        <li><strong>Order processing:</strong> Smart cart separation by shop - creates multiple orders automatically</li>
                        <li><strong>Order tracking:</strong> Status updates from "Processing" → "Shipped" → "Delivered"</li>
                        <li><strong>Refund system:</strong> User-initiated refunds with seller approval workflow</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Payments
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Stripe integration:</strong> Client-side Stripe Elements with secure payment intents</li>
                        <li><strong>PayPal support:</strong> Alternative payment method with React SDK</li>
                        <li><strong>Platform commission:</strong> Automatic 10% fee calculation on completed orders</li>
                        <li><strong>Withdrawal system:</strong> Sellers can withdraw earnings with transaction history</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Real-Time Messaging
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Socket.io implementation:</strong> Dedicated messaging service on port 8000</li>
                        <li><strong>Conversation-based:</strong> Group titles prevent duplicate chats between buyer-seller pairs</li>
                        <li><strong>Message status:</strong> "Seen" indicators and last message tracking</li>
                        <li><strong>Image support:</strong> Send images up to 5MB buffer size</li>
                        <li><strong>User presence:</strong> In-memory user list with socket ID mappings</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Seller Dashboard
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Order management:</strong> View all orders, update status, handle refunds</li>
                        <li><strong>Product dashboard:</strong> Complete product catalog with analytics</li>
                        <li><strong>Event/Sale creation:</strong> Time-limited promotional events with images</li>
                        <li><strong>Coupon management:</strong> Create and manage discount codes</li>
                        <li><strong>Revenue tracking:</strong> Available balance, transaction history, withdrawal management</li>
                    </ul>
                </Grid>

                {/* API Design */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🔌 API Design
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        Endpoint Groups
                    </Box>
                    <Box className={Style.apiEndpoints}>
                        <Box className={Style.apiGroup}>
                            <h4>User Management</h4>
                            <ul>
                                <li><code>POST /user/create-user</code> - Register new user</li>
                                <li><code>POST /user/activation</code> - Activate account with token</li>
                                <li><code>POST /user/login-user</code> - Authenticate user</li>
                                <li><code>GET /user/get-user</code> - Get current user (protected)</li>
                                <li><code>PUT /user/update-user-info</code> - Update profile</li>
                                <li><code>PUT /user/update-avatar</code> - Upload profile picture</li>
                            </ul>
                        </Box>

                        <Box className={Style.apiGroup}>
                            <h4>Shop Management</h4>
                            <ul>
                                <li><code>POST /shop/create-shop</code> - Register new shop</li>
                                <li><code>POST /shop/activation</code> - Activate shop</li>
                                <li><code>POST /shop/login-shop</code> - Seller authentication</li>
                                <li><code>GET /shop/get-shop-info/:id</code> - Get shop details</li>
                            </ul>
                        </Box>

                        <Box className={Style.apiGroup}>
                            <h4>Product Operations</h4>
                            <ul>
                                <li><code>POST /product/create-product</code> - Create product (seller only)</li>
                                <li><code>GET /product/get-all-products-shop/:id</code> - Get shop products</li>
                                <li><code>GET /product/get-product/:id</code> - Get single product</li>
                                <li><code>DELETE /product/delete-shop-product/:id</code> - Delete product</li>
                                <li><code>PUT /product/create-review</code> - Add product review</li>
                            </ul>
                        </Box>

                        <Box className={Style.apiGroup}>
                            <h4>Order Processing</h4>
                            <ul>
                                <li><code>POST /order/create-order</code> - Create order from cart</li>
                                <li><code>GET /order/get-user-orders/:userId</code> - User order history</li>
                                <li><code>GET /order/get-seller-orders/:shopId</code> - Seller orders</li>
                                <li><code>PUT /order/update-order-status/:id</code> - Update order status</li>
                                <li><code>PUT /order/order-refund/:id</code> - Request refund</li>
                            </ul>
                        </Box>

                        <Box className={Style.apiGroup}>
                            <h4>Payment & Financial</h4>
                            <ul>
                                <li><code>POST /payment/process</code> - Create Stripe payment intent</li>
                                <li><code>POST /withdraw/create-withdraw-request</code> - Seller withdrawal</li>
                                <li><code>GET /withdraw/get-all-withdraw-request/:shopId</code> - Withdrawal history</li>
                            </ul>
                        </Box>

                        <Box className={Style.apiGroup}>
                            <h4>Messaging</h4>
                            <ul>
                                <li><code>POST /conversation/create-new-conversation</code> - Start conversation</li>
                                <li><code>GET /conversation/get-all-conversation-seller/:id</code> - Seller chats</li>
                                <li><code>POST /message/create-new-message</code> - Send message</li>
                                <li><code>GET /message/get-all-messages/:id</code> - Get conversation messages</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>

                {/* Key Flows */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🔄 Key Flows
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        User Checkout Flow
                    </Box>
                    <Box className={Style.diagram}>
                        <svg viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', maxWidth: '1000px', margin: '0 auto', display: 'block'}}>
                            {/* User */}
                            <rect x="50" y="140" width="100" height="60" fill="#8D53FF" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="100" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">User</text>

                            {/* Frontend */}
                            <rect x="220" y="140" width="110" height="60" fill="#61dafb" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="275" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#000">Frontend</text>

                            {/* API */}
                            <rect x="400" y="140" width="100" height="60" fill="#68a063" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="450" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">API</text>

                            {/* Stripe */}
                            <rect x="570" y="140" width="100" height="60" fill="#635bff" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="620" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Stripe</text>

                            {/* Database */}
                            <rect x="740" y="140" width="100" height="60" fill="#4db33d" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="790" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">MongoDB</text>

                            {/* Flow arrows */}
                            {/* 1. Click Pay */}
                            <path d="M 150 170 L 220 170" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="180" y="165" fontSize="10" fill="#CA6BE6">1. Click Pay</text>

                            {/* 2. POST /checkout */}
                            <path d="M 330 160 L 400 160" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="340" y="155" fontSize="10" fill="#CA6BE6">2. POST /checkout</text>

                            {/* 3. Create PaymentIntent */}
                            <path d="M 500 160 L 570 160" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="505" y="155" fontSize="10" fill="#CA6BE6">3. Create Intent</text>

                            {/* 4. client_secret */}
                            <path d="M 570 180 L 500 180" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="510" y="195" fontSize="10" fill="#CA6BE6">4. client_secret</text>

                            {/* 5. clientSecret */}
                            <path d="M 400 180 L 330 180" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="340" y="195" fontSize="10" fill="#CA6BE6">5. clientSecret</text>

                            {/* 6. confirmPayment() */}
                            <path d="M 275 200 L 275 240 L 620 240 L 620 200" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
                            <text x="420" y="255" fontSize="10" fill="#CA6BE6">6. confirmPayment()</text>

                            {/* 7. Success */}
                            <path d="M 620 200 L 620 270 L 275 270 L 275 200" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess)"/>
                            <text x="420" y="285" fontSize="10" fill="#27C93F">7. Success</text>

                            {/* 8. POST /orders/confirm */}
                            <path d="M 275 80 L 275 40 L 450 40 L 450 140" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess)"/>
                            <text x="330" y="35" fontSize="10" fill="#27C93F">8. POST /orders/confirm</text>

                            {/* 9. Update order status */}
                            <path d="M 500 150 L 740 150" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess)"/>
                            <text x="570" y="145" fontSize="10" fill="#27C93F">9. Update status</text>

                            {/* 10. Order confirmed */}
                            <path d="M 740 190 L 500 190" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess)"/>

                            {/* 11. Return to user */}
                            <path d="M 400 190 L 220 190" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess)"/>

                            {/* Arrow markers */}
                            <defs>
                                <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#CA6BE6"/>
                                </marker>
                                <marker id="arrowSuccess" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#27C93F"/>
                                </marker>
                            </defs>
                        </svg>
                        <p className={Style.caption}>Happy path: User checkout with Stripe payment confirmation</p>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={4}>
                        Background Message Processing Flow
                    </Box>
                    <Box className={Style.diagram}>
                        <svg viewBox="0 0 730 380" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', maxWidth: '900px', margin: '0 auto', display: 'block'}}>
                            {/* User 1 */}
                            <rect x="30" y="60" width="120" height="60" fill="#8D53FF" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="90" y="80" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">User</text>
                            <text x="90" y="100" textAnchor="middle" fontSize="12" fill="#fff">(Buyer)</text>

                            {/* Frontend 1 */}
                            <rect x="200" y="60" width="120" height="60" fill="#61dafb" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="260" y="95" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#000">React Client</text>

                            {/* Socket.io Server */}
                            <rect x="370" y="60" width="120" height="60" fill="#010101" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="430" y="80" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Socket.io</text>
                            <text x="430" y="100" textAnchor="middle" fontSize="12" fill="#fff">:8000</text>

                            {/* MongoDB */}
                            <rect x="540" y="60" width="120" height="60" fill="#4db33d" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="600" y="95" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">MongoDB</text>

                            {/* Frontend 2 (Seller) */}
                            <rect x="370" y="260" width="120" height="60" fill="#CA6BE6" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="430" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Seller Client</text>
                            <text x="430" y="300" textAnchor="middle" fontSize="12" fill="#fff">(WebSocket)</text>

                            {/* User 2 (Seller) */}
                            <rect x="540" y="260" width="120" height="60" fill="#FF6057" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="600" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Seller</text>
                            <text x="600" y="300" textAnchor="middle" fontSize="12" fill="#fff">(Receives)</text>

                            {/* Flow */}
                            {/* 1. Send message */}
                            <path d="M 150 90 L 200 90" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)"/>
                            <text x="155" y="85" fontSize="10" fill="#8D53FF">1. Type msg</text>

                            {/* 2. emit('send-message') */}
                            <path d="M 320 90 L 370 90" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)"/>
                            <text x="325" y="85" fontSize="10" fill="#8D53FF">2. emit</text>

                            {/* 3. Save to DB */}
                            <path d="M 490 90 L 540 90" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)"/>
                            <text x="495" y="85" fontSize="10" fill="#8D53FF">3. Save</text>

                            {/* 4. Confirm */}
                            <path d="M 540 105 L 490 105" stroke="#27C93F" strokeWidth="2" fill="none" markerEnd="url(#arrowSuccess2)"/>
                            <text x="500" y="120" fontSize="10" fill="#27C93F">4. Saved</text>

                            {/* 5. Broadcast to seller */}
                            <path d="M 430 120 L 430 260" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)"/>
                            <text x="435" y="190" fontSize="10" fill="#CA6BE6">5. Broadcast</text>

                            {/* 6. Display message */}
                            <path d="M 490 290 L 540 290" stroke="#CA6BE6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)"/>
                            <text x="495" y="285" fontSize="10" fill="#CA6BE6">6. Display</text>

                            {/* 7. Read receipt */}
                            <path d="M 370 305 L 260 180" stroke="#FF6057" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" strokeDasharray="5,5"/>
                            <text x="280" y="245" fontSize="10" fill="#FF6057">7. seen status</text>

                            {/* Arrow markers */}
                            <defs>
                                <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#8D53FF"/>
                                </marker>
                                <marker id="arrowSuccess2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#27C93F"/>
                                </marker>
                            </defs>
                        </svg>
                        <p className={Style.caption}>Real-time messaging: User sends message → Socket.io broadcasts → Seller receives instantly</p>
                    </Box>
                </Grid>

                {/* Database Design */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🗄️ Database Design
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        Key Collections & Relationships
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Users:</strong> Authentication, profile info, multiple addresses array, avatar URL</li>
                        <li><strong>Shops:</strong> Seller info, withdrawal methods, available balance, transactions array</li>
                        <li><strong>Products:</strong> Shop reference, images array, reviews array with ratings, stock tracking</li>
                        <li><strong>Orders:</strong> Cart items, shop ID, payment info, shipping address, status enum</li>
                        <li><strong>Events:</strong> Shop reference, images array, start/finish dates</li>
                        <li><strong>Coupons:</strong> Shop-specific discount codes with usage tracking</li>
                        <li><strong>Conversations:</strong> Group ID (prevents duplicates), members array, last message</li>
                        <li><strong>Messages:</strong> Conversation reference, sender/receiver, text, images, seen status</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Database ERD (Entity Relationship Diagram)
                    </Box>
                    <Box className={Style.diagram}>
                        <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', maxWidth: '900px', margin: '0 auto', display: 'block'}}>
                            {/* User Entity */}
                            <rect x="50" y="50" width="150" height="120" fill="#8D53FF" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="125" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">User</text>
                            <line x1="50" y1="85" x2="200" y2="85" stroke="#fff" strokeWidth="2"/>
                            <text x="60" y="105" fontSize="12" fill="#fff">• _id</text>
                            <text x="60" y="125" fontSize="12" fill="#fff">• email</text>
                            <text x="60" y="145" fontSize="12" fill="#fff">• password</text>
                            <text x="60" y="165" fontSize="12" fill="#fff">• addresses[]</text>

                            {/* Shop Entity */}
                            <rect x="350" y="50" width="150" height="140" fill="#CA6BE6" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="425" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Shop</text>
                            <line x1="350" y1="85" x2="500" y2="85" stroke="#fff" strokeWidth="2"/>
                            <text x="360" y="105" fontSize="12" fill="#fff">• _id</text>
                            <text x="360" y="125" fontSize="12" fill="#fff">• name</text>
                            <text x="360" y="145" fontSize="12" fill="#fff">• availableBalance</text>
                            <text x="360" y="165" fontSize="12" fill="#fff">• transactions[]</text>
                            <text x="360" y="185" fontSize="12" fill="#fff">• owner_id (User)</text>

                            {/* Product Entity */}
                            <rect x="650" y="50" width="150" height="140" fill="#27C93F" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="725" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Product</text>
                            <line x1="650" y1="85" x2="800" y2="85" stroke="#fff" strokeWidth="2"/>
                            <text x="660" y="105" fontSize="12" fill="#fff">• _id</text>
                            <text x="660" y="125" fontSize="12" fill="#fff">• name</text>
                            <text x="660" y="145" fontSize="12" fill="#fff">• price</text>
                            <text x="660" y="165" fontSize="12" fill="#fff">• shop_id (Shop)</text>
                            <text x="660" y="185" fontSize="12" fill="#fff">• reviews[]</text>

                            {/* Order Entity */}
                            <rect x="50" y="250" width="150" height="140" fill="#FFBD2E" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="125" y="275" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">Order</text>
                            <line x1="50" y1="285" x2="200" y2="285" stroke="#000" strokeWidth="2"/>
                            <text x="60" y="305" fontSize="12" fill="#000">• _id</text>
                            <text x="60" y="325" fontSize="12" fill="#000">• user_id (User)</text>
                            <text x="60" y="345" fontSize="12" fill="#000">• shop_id (Shop)</text>
                            <text x="60" y="365" fontSize="12" fill="#000">• cart[]</text>
                            <text x="60" y="385" fontSize="12" fill="#000">• status</text>

                            {/* Conversation Entity */}
                            <rect x="350" y="280" width="150" height="120" fill="#FF6057" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="425" y="305" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Conversation</text>
                            <line x1="350" y1="315" x2="500" y2="315" stroke="#fff" strokeWidth="2"/>
                            <text x="360" y="335" fontSize="12" fill="#fff">• _id</text>
                            <text x="360" y="355" fontSize="12" fill="#fff">• groupId</text>
                            <text x="360" y="375" fontSize="12" fill="#fff">• members[]</text>
                            <text x="360" y="395" fontSize="12" fill="#fff">• lastMessage</text>

                            {/* Message Entity */}
                            <rect x="650" y="280" width="150" height="120" fill="#3448c5" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="725" y="305" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Message</text>
                            <line x1="650" y1="315" x2="800" y2="315" stroke="#fff" strokeWidth="2"/>
                            <text x="660" y="335" fontSize="12" fill="#fff">• _id</text>
                            <text x="660" y="355" fontSize="12" fill="#fff">• conversation_id</text>
                            <text x="660" y="375" fontSize="12" fill="#fff">• sender/receiver</text>
                            <text x="660" y="395" fontSize="12" fill="#fff">• text, images</text>

                            {/* Event Entity */}
                            <rect x="50" y="450" width="150" height="120" fill="#635bff" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="125" y="475" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Event</text>
                            <line x1="50" y1="485" x2="200" y2="485" stroke="#fff" strokeWidth="2"/>
                            <text x="60" y="505" fontSize="12" fill="#fff">• _id</text>
                            <text x="60" y="525" fontSize="12" fill="#fff">• shop_id (Shop)</text>
                            <text x="60" y="545" fontSize="12" fill="#fff">• start/finish dates</text>
                            <text x="60" y="565" fontSize="12" fill="#fff">• images[]</text>

                            {/* Coupon Entity */}
                            <rect x="350" y="450" width="150" height="100" fill="#003087" stroke="#000" strokeWidth="2" rx="5"/>
                            <text x="425" y="475" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Coupon</text>
                            <line x1="350" y1="485" x2="500" y2="485" stroke="#fff" strokeWidth="2"/>
                            <text x="360" y="505" fontSize="12" fill="#fff">• _id</text>
                            <text x="360" y="525" fontSize="12" fill="#fff">• shop_id (Shop)</text>
                            <text x="360" y="545" fontSize="12" fill="#fff">• code, value</text>

                            {/* Relationships */}
                            {/* User to Shop (1:N) */}
                            <path d="M 200 110 L 350 110" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
                            <text x="260" y="105" fontSize="11" fill="#8D53FF">creates</text>

                            {/* Shop to Product (1:N) */}
                            <path d="M 500 110 L 650 110" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
                            <text x="560" y="105" fontSize="11" fill="#8D53FF">has</text>

                            {/* User to Order (1:N) */}
                            <path d="M 125 170 L 125 250" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
                            <text x="130" y="210" fontSize="11" fill="#8D53FF">places</text>

                            {/* Shop to Order (1:N) */}
                            <path d="M 425 190 L 200 250" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
                            <text x="300" y="220" fontSize="11" fill="#8D53FF">receives</text>

                            {/* Shop to Event (1:N) */}
                            <path d="M 350 180 L 125 450" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>

                            {/* Shop to Coupon (1:N) */}
                            <path d="M 425 190 L 425 450" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>

                            {/* Conversation to Message (1:N) */}
                            <path d="M 500 340 L 650 340" stroke="#8D53FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
                            <text x="560" y="335" fontSize="11" fill="#8D53FF">contains</text>

                            {/* Arrow marker */}
                            <defs>
                                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#8D53FF"/>
                                </marker>
                            </defs>
                        </svg>
                        <p className={Style.caption}>Database schema showing relationships between entities</p>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Design Decisions
                    </Box>
                    <ul className={Style.list}>
                        <li><strong>Embedded arrays for reviews:</strong> Kept reviews within Product documents for faster reads (denormalization trade-off)</li>
                        <li><strong>Shop reference in Orders:</strong> Enables automatic order splitting by shop during checkout</li>
                        <li><strong>Conversation groupId:</strong> Concatenated user+shop IDs prevent duplicate conversations</li>
                        <li><strong>Transaction history in Shop model:</strong> Maintains audit trail for financial operations</li>
                    </ul>
                </Grid>

                {/* Challenges & Solutions */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🔧 Challenges & Solutions
                    </Box>

                    <Box className={Style.challengeTable}>
                        <table className={Style.table}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Challenge</th>
                                    <th>Difficulty</th>
                                    <th>Solution</th>
                                    <th>Trade-off</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Multi-shop cart splitting</td>
                                    <td>Cart items from different shops need separate orders with individual shipping/commission calculations</td>
                                    <td>Implemented order creation logic that groups cart items by shop_id, calculates per-shop totals with 10% commission, creates separate Order documents</td>
                                    <td>Slightly more complex checkout flow, but maintains clean separation of vendor finances</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Real-time message delivery reliability</td>
                                    <td>Socket disconnections causing missed messages, handling offline users</td>
                                    <td>Persist all messages to MongoDB immediately, use Socket.io acknowledgments, display "seen" only after DB confirmation</td>
                                    <td>Additional DB writes, but ensures message durability and delivery confirmation</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Dual authentication (User vs Seller)</td>
                                    <td>Need separate auth flows but shared user might be both buyer and seller</td>
                                    <td>Created separate JWT tokens (user_token vs seller_token in cookies), separate middleware checks, allows one person to have both roles</td>
                                    <td>More complex auth logic, but provides clear role separation</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Image upload performance</td>
                                    <td>Large product images slowing down product creation, exceeding request size limits</td>
                                    <td>Integrated Cloudinary for image hosting, resize/compress on upload (150px width thumbnail), return URLs to store in MongoDB</td>
                                    <td>External dependency on Cloudinary, but dramatically improved performance and scalability</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Payment webhook security</td>
                                    <td>Ensuring Stripe webhooks are authentic and handling async payment confirmations</td>
                                    <td>Implemented Stripe signature verification, idempotent order update logic using order ID, created separate webhook endpoint</td>
                                    <td>Additional security checks add latency, but prevent fraudulent payment confirmations</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Preventing duplicate conversations</td>
                                    <td>Users could create multiple chat threads with same seller</td>
                                    <td>Created unique groupId by concatenating sorted user+shop IDs, check for existing conversation before creating new one</td>
                                    <td>Requires group ID lookup on every message, but ensures clean conversation history</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Order refund workflow complexity</td>
                                    <td>Coordinating refund approval, payment reversal, stock restoration, and balance updates</td>
                                    <td>Created multi-step refund state machine: user requests → seller approves → update product stock → adjust shop balance → record transaction</td>
                                    <td>More complex logic but provides transparency and allows seller control</td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={4}>
                        Deep Dive: Multi-Shop Order Processing
                    </Box>
                    <Box className={Style.deepDive}>
                        <p><strong>The Problem:</strong> When a user's cart contains items from 3 different shops, we can't create a single order - each shop needs independent order management, shipping, and commission tracking.</p>

                        <p><strong>Investigation:</strong> Initially considered creating one Order with nested shop arrays, but this caused issues with:
                            <ul>
                                <li>Shop-specific order status (Shop A shipped, Shop B processing)</li>
                                <li>Commission calculations (10% per shop, not total)</li>
                                <li>Refund handling (refund from one shop, not others)</li>
                            </ul>
                        </p>

                        <p><strong>Solution:</strong> Implemented cart grouping algorithm in <code>/server/controller/orderController.js</code>:
                            <ol>
                                <li>Group cart items by <code>shopId</code> using Array.reduce()</li>
                                <li>For each shop group, calculate: subtotal + 10% commission + $10 shipping</li>
                                <li>Create separate Order documents with shop reference</li>
                                <li>Return array of order IDs to client</li>
                            </ol>
                        </p>

                        <p><strong>Result:</strong> Clean separation of vendor orders, each shop can manage their orders independently. Users see unified order history. Slight increase in DB writes (3 orders vs 1), but proper data modeling for multi-vendor architecture.</p>
                    </Box>
                </Grid>

                {/* Best Practices */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        ✅ Best Practices Applied
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        Security
                    </Box>
                    <ul className={Style.list}>
                        <li>✓ Input validation and sanitization on all API endpoints</li>
                        <li>✓ Parameterized queries with Mongoose to prevent NoSQL injection</li>
                        <li>✓ bcryptjs password hashing with salt rounds (10 rounds)</li>
                        <li>✓ JWT tokens with 5-day expiration stored in httpOnly cookies</li>
                        <li>✓ CORS configuration restricting allowed origins</li>
                        <li>✓ Environment variables for all secrets (Stripe keys, JWT secrets, DB URIs)</li>
                        <li>✓ Stripe webhook signature verification</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Performance
                    </Box>
                    <ul className={Style.list}>
                        <li>✓ Cloudinary CDN for image delivery and automatic optimization</li>
                        <li>✓ Redux state management prevents unnecessary re-renders</li>
                        <li>✓ Lazy loading routes with React Router</li>
                        <li>✓ Image compression and resize before Cloudinary upload</li>
                        <li>✓ MongoDB indexes on frequently queried fields (userId, shopId)</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Developer Experience
                    </Box>
                    <ul className={Style.list}>
                        <li>✓ Centralized error handling middleware</li>
                        <li>✓ Async/await with catchAsyncError wrapper to eliminate try-catch boilerplate</li>
                        <li>✓ Custom ErrorHandler class for consistent error responses</li>
                        <li>✓ Nodemon for auto-reload during development</li>
                        <li>✓ Comprehensive README with setup instructions</li>
                        <li>✓ Modular code organization (MVC pattern)</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Observability & Maintainability
                    </Box>
                    <ul className={Style.list}>
                        <li>✓ Structured error messages with status codes</li>
                        <li>✓ Email notifications for account activation</li>
                        <li>✓ Transaction logging in shop balance operations</li>
                        <li>✓ Docker containerization for consistent deployment</li>
                        <li>✓ Environment-based configuration (.env files)</li>
                    </ul>
                </Grid>

                {/* Results & Metrics */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        📊 Results & Metrics
                    </Box>

                    <Box className={Style.metricsGrid}>
                        <Box className={Style.metricCard}>
                            <h4>3 Microservices</h4>
                            <p>Client, Server, Socket services with Docker orchestration</p>
                        </Box>
                        <Box className={Style.metricCard}>
                            <h4>8 Data Models</h4>
                            <p>User, Shop, Product, Order, Event, Coupon, Conversation, Message</p>
                        </Box>
                        <Box className={Style.metricCard}>
                            <h4>40+ API Endpoints</h4>
                            <p>RESTful API covering all business domains</p>
                        </Box>
                        <Box className={Style.metricCard}>
                            <h4>Dual Payment Gateways</h4>
                            <p>Stripe and PayPal integration with webhook handling</p>
                        </Box>
                        <Box className={Style.metricCard}>
                            <h4>Real-time Messaging</h4>
                            <p>Socket.io with message persistence and seen status</p>
                        </Box>
                        <Box className={Style.metricCard}>
                            <h4>Multi-Role System</h4>
                            <p>Buyers, Sellers, and Admins with role-based access</p>
                        </Box>
                    </Box>
                </Grid>

                {/* Learnings & Next Steps */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🎓 Learnings & Next Steps
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>
                        What Went Well
                    </Box>
                    <ul className={Style.list}>
                        <li>Socket.io architecture proved reliable for real-time features with minimal configuration</li>
                        <li>MongoDB's flexible schema allowed rapid iteration on product catalog structure</li>
                        <li>Redux Toolkit significantly reduced boilerplate compared to vanilla Redux</li>
                        <li>Cloudinary integration solved image management elegantly</li>
                        <li>Docker compose made multi-service local development seamless</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        What I'd Do Differently
                    </Box>
                    <ul className={Style.list}>
                        <li>Implement TypeScript from the start for better type safety across large codebase</li>
                        <li>Add comprehensive test coverage (Jest for backend, React Testing Library for frontend)</li>
                        <li>Use Redis for session storage and caching instead of in-memory Socket.io user tracking</li>
                        <li>Implement proper logging infrastructure (Winston + ELK stack) instead of console.log</li>
                        <li>Add API rate limiting to prevent abuse</li>
                        <li>Consider GraphQL for frontend data fetching to reduce over-fetching</li>
                    </ul>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>
                        Future Roadmap
                    </Box>
                    <ul className={Style.list}>
                        <li>📱 Progressive Web App (PWA) support for mobile experience</li>
                        <li>🔍 Elasticsearch integration for advanced product search with filters</li>
                        <li>📈 Seller analytics dashboard with revenue charts and insights</li>
                        <li>🌍 Multi-region support with internationalization (i18n)</li>
                        <li>🤖 AI-powered product recommendations based on user behavior</li>
                        <li>📧 Email marketing campaigns for sellers</li>
                        <li>⚡ Performance optimization: implement caching layer, lazy load images</li>
                    </ul>
                </Grid>

                {/* Links */}
                <Grid item mt={4} mb={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>
                        🔗 Links
                    </Box>
                    <ul className={Style.linkList}>
                        <li>
                            <strong>GitHub Repository:</strong>{' '}
                            <a href="https://github.com/kami922/multivendor-ecommerce-mern-app" target="_blank" rel="noopener noreferrer">
                                github.com/kami922/multivendor-ecommerce-mern-app
                            </a>
                        </li>
                        <li>
                            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Socket.io, Stripe, Cloudinary, Docker
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    );
}
